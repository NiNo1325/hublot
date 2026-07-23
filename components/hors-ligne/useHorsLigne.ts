'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

const CACHE_AUDIO = 'hublot-audio';
const CATALOGUE = '/audio/catalogue.json';

/**
 * Sentinelle : les empreintes de ce qui a été délibérément téléchargé, plus un
 * drapeau « installation complète ». Elle vit DANS le cache audio, sous cette
 * clé, et non dans localStorage : un vidage du cache par le système l'emporte
 * avec les fichiers, et l'app retombe honnêtement sur « à télécharger » au lieu
 * d'annoncer un hors-ligne fantôme.
 */
const SENTINELLE = '/audio/.installe.json';

/** Requêtes menées de front. Six est le plafond usuel par domaine en HTTP/1.1. */
const CONCURRENCE = 6;

export interface FichierAudio {
  chemin: string;
  octets: number;
  empreinte: string | null;
}

interface Sentinelle {
  /** chemin → empreinte de ce qui est installé. */
  empreintes: Record<string, string | null>;
  /** Le dernier téléchargement a-t-il couvert tout le catalogue ? */
  complet: boolean;
}

export type EtatHorsLigne =
  | 'inconnu'
  | 'indisponible'
  | 'rien'
  | 'partiel'
  | 'complet'
  /** Installation complète, mais du contenu a changé depuis. */
  | 'maj'
  | 'telechargement';

export interface ResumeHorsLigne {
  etat: EtatHorsLigne;
  /** Octets installés et à jour. */
  octetsPresents: number;
  /** Octets du catalogue complet. */
  octetsTotal: number;
  /** Octets à récupérer : nouveaux fichiers plus fichiers modifiés. */
  octetsDelta: number;
  /**
   * Le navigateur garantit-il de ne pas évincer ce cache ?
   *
   * Chrome ne l'accorde qu'aux applications installées ou très fréquentées.
   * Sans cette garantie, le téléchargement peut disparaître sous pression
   * disque — précisément la veille du départ. L'écran le signale alors, et
   * invite à installer l'application.
   */
  persistant: boolean | null;
  erreur: string | null;
}

/** Les écrans que l'enfant peut atteindre hors ligne. */
const ROUTES = ['/', '/decouvrir', '/quizz', '/hors-ligne'];

/**
 * Charge le code des écrans pour qu'il soit en cache.
 *
 * Sans cela, le mode voiture tombe dans un piège vicieux : le parent va du
 * menu à l'écran de téléchargement sans jamais ouvrir « Découvrir », si bien
 * que les fragments JavaScript de cette page ne sont jamais demandés — donc
 * jamais mis en cache. Hors ligne, le HTML sort du cache mais la page reste
 * blanche, faute de code pour la peupler.
 *
 * On récupère donc chaque écran, on relève les ressources qu'il déclare, et on
 * les demande : le service worker les range au passage. Les polices sont
 * citées dans les feuilles de style et non dans le HTML, d'où le second
 * niveau — sinon la voiture s'afficherait dans la police par défaut du
 * système.
 */
async function preparerShell(): Promise<void> {
  const ressources = new Set<string>();

  for (const route of ROUTES) {
    const reponse = await fetch(route, { cache: 'no-store' }).catch(() => null);
    if (!reponse?.ok) continue;
    const html = await reponse.text();
    for (const trouve of html.matchAll(/["'](\/_next\/static\/[^"']+)["']/g)) {
      ressources.add(trouve[1]);
    }
  }

  const feuilles = [...ressources].filter((url) => url.endsWith('.css'));
  for (const feuille of feuilles) {
    const reponse = await fetch(feuille).catch(() => null);
    if (!reponse?.ok) continue;
    const css = await reponse.text();
    for (const trouve of css.matchAll(/url\(\s*["']?(\/_next\/static\/[^"')]+)/g)) {
      ressources.add(trouve[1]);
    }
  }

  // Demander suffit : la règle du service worker range les réponses `/_next/`.
  await Promise.allSettled([...ressources].map((url) => fetch(url)));
}

async function chargerCatalogue(): Promise<FichierAudio[]> {
  const reponse = await fetch(CATALOGUE, { cache: 'no-store' });
  if (!reponse.ok) throw new Error(`catalogue introuvable (${reponse.status})`);
  const donnees = await reponse.json();
  return donnees.fichiers as FichierAudio[];
}

async function lireSentinelle(): Promise<Sentinelle> {
  const cache = await caches.open(CACHE_AUDIO);
  const reponse = await cache.match(SENTINELLE);
  if (!reponse) return { empreintes: {}, complet: false };
  try {
    const donnees = await reponse.json();
    return {
      empreintes: donnees.empreintes ?? {},
      complet: Boolean(donnees.complet),
    };
  } catch {
    return { empreintes: {}, complet: false };
  }
}

async function ecrireSentinelle(sentinelle: Sentinelle): Promise<void> {
  const cache = await caches.open(CACHE_AUDIO);
  await cache.put(
    SENTINELLE,
    new Response(JSON.stringify(sentinelle), {
      headers: { 'content-type': 'application/json' },
    }),
  );
}

/**
 * Ce qui reste à récupérer, par comparaison des empreintes.
 *
 * Un fichier est à (re)télécharger si la sentinelle ne connaît pas son
 * empreinte actuelle : soit il n'a jamais été installé, soit son texte a changé
 * et son mp3 aussi, à chemin identique. Comparer les chemins seuls, comme
 * autrefois, laissait passer toutes les corrections de contenu.
 *
 * On se fonde sur la sentinelle, pas sur la simple présence au cache : le
 * service worker met des fichiers en cache au fil de l'écoute, mais ce cache
 * opportuniste n'est pas un téléchargement délibéré et ne doit pas compter
 * comme tel.
 */
function aTelecharger(
  fichiers: FichierAudio[],
  sentinelle: Sentinelle,
): FichierAudio[] {
  return fichiers.filter((f) => sentinelle.empreintes[f.chemin] !== f.empreinte);
}

/**
 * Téléchargement hors ligne du catalogue audio.
 *
 * Le téléchargement vit ici, dans du code de page, plutôt que dans le
 * précache du service worker : mille quatre cent cinquante-huit fichiers
 * précachés donneraient une progression opaque et une installation qui échoue
 * en bloc. Ici, l'avancement se compte en octets et la reprise est gratuite —
 * ce qui est déjà en cache n'est simplement pas redemandé.
 */
export function useHorsLigne() {
  const [resume, setResume] = useState<ResumeHorsLigne>({
    etat: 'inconnu',
    octetsPresents: 0,
    octetsTotal: 0,
    octetsDelta: 0,
    persistant: null,
    erreur: null,
  });

  const catalogueRef = useRef<FichierAudio[] | null>(null);
  const enCoursRef = useRef(false);

  const rafraichir = useCallback(async () => {
    if (typeof caches === 'undefined') {
      setResume((r) => ({ ...r, etat: 'indisponible' }));
      return;
    }
    try {
      // Le catalogue est rechargé à chaque fois (le service worker le sert en
      // réseau d'abord) : c'est ce qui permet de voir une mise à jour publiée.
      const fichiers = await chargerCatalogue();
      catalogueRef.current = fichiers;

      const total = fichiers.reduce((n, f) => n + f.octets, 0);
      const sentinelle = await lireSentinelle();
      const aFaire = aTelecharger(fichiers, sentinelle);
      const octetsDelta = aFaire.reduce((n, f) => n + f.octets, 0);
      const octetsPresents = total - octetsDelta;
      const dejaInstalle = Object.keys(sentinelle.empreintes).length > 0;
      const persistant = navigator.storage?.persisted
        ? await navigator.storage.persisted()
        : null;

      /*
        Rien à faire → complet. Sinon, on distingue une mise à jour (une
        installation complète que du contenu a fait diverger) d'une première
        installation, interrompue ou jamais lancée.
      */
      let etat: EtatHorsLigne;
      if (aFaire.length === 0) etat = 'complet';
      else if (sentinelle.complet) etat = 'maj';
      else if (dejaInstalle) etat = 'partiel';
      else etat = 'rien';

      setResume({
        etat,
        octetsPresents,
        octetsTotal: total,
        octetsDelta,
        persistant,
        erreur: null,
      });
    } catch (erreur) {
      setResume((r) => ({
        ...r,
        etat: 'indisponible',
        erreur: erreur instanceof Error ? erreur.message : 'erreur inconnue',
      }));
    }
  }, []);

  useEffect(() => {
    rafraichir();
  }, [rafraichir]);

  const telecharger = useCallback(async () => {
    if (enCoursRef.current) return;
    enCoursRef.current = true;

    try {
      /*
        Le stockage persistant se demande avant de remplir : sans lui, Android
        peut évincer cent quarante et un mégaoctets sous pression disque, et la
        voiture serait silencieuse sans que personne ne comprenne pourquoi.
      */
      if (navigator.storage?.persist) await navigator.storage.persist();

      // Le code des écrans d'abord : cent quarante mégaoctets d'audio ne
      // servent à rien si la grille reste blanche faute de JavaScript.
      await preparerShell();

      const fichiers = await chargerCatalogue();
      catalogueRef.current = fichiers;
      const total = fichiers.reduce((n, f) => n + f.octets, 0);

      const sentinelle = await lireSentinelle();
      const aFaire = aTelecharger(fichiers, sentinelle);
      const octetsDelta = aFaire.reduce((n, f) => n + f.octets, 0);
      let acquis = total - octetsDelta;
      setResume((r) => ({
        ...r,
        etat: 'telechargement',
        octetsPresents: acquis,
        octetsTotal: total,
        octetsDelta,
        erreur: null,
      }));

      const cache = await caches.open(CACHE_AUDIO);
      const file = [...aFaire];
      const echecs: string[] = [];
      // On part des empreintes déjà installées et on enrichit au fil des succès.
      const installes = { ...sentinelle.empreintes };

      async function ouvrier() {
        for (;;) {
          const fichier = file.shift();
          if (!fichier) return;
          try {
            /*
              Le paramètre `?maj` force le service worker à passer par le réseau
              et à écraser la version en cache : sans lui, un fichier déjà en
              cache (ancienne version) serait resservi tel quel, et la mise à
              jour n'aurait aucun effet.

              On range aussi la réponse sous la clé propre : le service worker le
              fait déjà quand il contrôle la page, mais tant qu'il ne l'a pas
              encore prise en main, c'est ce `cache.put` qui garantit que le
              fichier est bien mis en cache.
            */
            const reponse = await fetch(`${fichier.chemin}?maj=1`);
            if (!reponse.ok) throw new Error(String(reponse.status));
            await cache.put(fichier.chemin, reponse);
            installes[fichier.chemin] = fichier.empreinte;
            acquis += fichier.octets;
            setResume((r) => ({ ...r, octetsPresents: acquis }));
          } catch {
            // Un fichier perdu n'arrête pas les mille autres : la carte
            // concernée basculera en lecture minutée, le reste fonctionnera.
            echecs.push(fichier.chemin);
          }
        }
      }

      await Promise.all(
        Array.from({ length: CONCURRENCE }, () => ouvrier()),
      );

      // La sentinelle enregistre exactement ce qui est installé, et si le
      // catalogue est désormais couvert en entier.
      const restant = aTelecharger(fichiers, { empreintes: installes, complet: false });
      await ecrireSentinelle({ empreintes: installes, complet: restant.length === 0 });

      await rafraichir();
      if (echecs.length > 0) {
        setResume((r) => ({
          ...r,
          erreur: `${echecs.length} fichier(s) n’ont pas pu être téléchargés.`,
        }));
      }
    } catch (erreur) {
      setResume((r) => ({
        ...r,
        etat: 'partiel',
        erreur:
          erreur instanceof Error
            ? erreur.message
            : 'le téléchargement s’est interrompu',
      }));
    } finally {
      enCoursRef.current = false;
    }
  }, [rafraichir]);

  const supprimer = useCallback(async () => {
    await caches.delete(CACHE_AUDIO);
    await rafraichir();
  }, [rafraichir]);

  return { resume, telecharger, supprimer, rafraichir };
}
