'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

const CACHE_AUDIO = 'hublot-audio';
const CATALOGUE = '/audio/catalogue.json';

/** Requêtes menées de front. Six est le plafond usuel par domaine en HTTP/1.1. */
const CONCURRENCE = 6;

export interface FichierAudio {
  chemin: string;
  octets: number;
  empreinte: string | null;
}

export type EtatHorsLigne =
  | 'inconnu'
  | 'indisponible'
  | 'rien'
  | 'partiel'
  | 'complet'
  | 'telechargement';

export interface ResumeHorsLigne {
  etat: EtatHorsLigne;
  /** Octets déjà en cache. */
  octetsPresents: number;
  /** Octets du catalogue complet. */
  octetsTotal: number;
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

/**
 * Ce qui manque au cache.
 *
 * L'appartenance se teste par `cache.match`, jamais par un drapeau mémorisé à
 * côté : un drapeau survivrait à un vidage de cache par le système et
 * annoncerait « prêt hors connexion » devant une application muette.
 */
async function manquants(fichiers: FichierAudio[]): Promise<FichierAudio[]> {
  const cache = await caches.open(CACHE_AUDIO);
  const presents = new Set(
    (await cache.keys()).map((requete) => new URL(requete.url).pathname),
  );
  return fichiers.filter((f) => !presents.has(f.chemin));
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
      const fichiers = catalogueRef.current ?? (await chargerCatalogue());
      catalogueRef.current = fichiers;

      const total = fichiers.reduce((n, f) => n + f.octets, 0);
      const absents = await manquants(fichiers);
      const presents = total - absents.reduce((n, f) => n + f.octets, 0);
      const persistant = navigator.storage?.persisted
        ? await navigator.storage.persisted()
        : null;

      setResume({
        etat: absents.length === 0 ? 'complet' : presents === 0 ? 'rien' : 'partiel',
        octetsPresents: presents,
        octetsTotal: total,
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

      const fichiers = catalogueRef.current ?? (await chargerCatalogue());
      catalogueRef.current = fichiers;
      const total = fichiers.reduce((n, f) => n + f.octets, 0);

      const aFaire = await manquants(fichiers);
      let acquis = total - aFaire.reduce((n, f) => n + f.octets, 0);
      setResume((r) => ({
        ...r,
        etat: 'telechargement',
        octetsPresents: acquis,
        octetsTotal: total,
        erreur: null,
      }));

      const cache = await caches.open(CACHE_AUDIO);
      const file = [...aFaire];
      const echecs: string[] = [];

      async function ouvrier() {
        for (;;) {
          const fichier = file.shift();
          if (!fichier) return;
          try {
            const reponse = await fetch(fichier.chemin);
            if (!reponse.ok) throw new Error(String(reponse.status));
            await cache.put(fichier.chemin, reponse);
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
