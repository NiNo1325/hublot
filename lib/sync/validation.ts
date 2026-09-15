import { blocVide, type BlocProgression, type ProgressionProfil } from './fusion';

/*
  Bornes de sûreté.

  Le corps de `PUT /api/progression` vient d'un navigateur, donc de n'importe
  qui : une session valide n'empêche pas d'envoyer un bloc de dix mégaoctets
  pour saturer le stockage. Ces plafonds sont larges au regard de l'usage réel
  — un enfant très assidu écoute quelques centaines de cartes — et serrés au
  regard de ce qu'une requête peut tenter.
*/
const MAX_PROFILS = 12;
const MAX_ENTREES = 2000;
const MAX_LONGUEUR_ID = 120;
/*
  Les pierres tombales s'accumulent sans jamais être purgées : les oublier
  ferait revenir le profil au premier appareil resté en arrière. Le plafond est
  large — une famille qui supprimerait un profil par mois pendant huit ans.
*/
const MAX_SUPPRIMES = 100;

/**
 * Transforme une valeur inconnue en bloc de progression exploitable.
 *
 * Ne lève jamais et ne rejette jamais l'ensemble : ce qui est lisible est
 * gardé, ce qui ne l'est pas est écarté. Un octet abîmé dans le stockage d'un
 * compte ne doit pas rendre une famille incapable de se synchroniser.
 */
export function lireBloc(inconnu: unknown): BlocProgression {
  if (!estObjet(inconnu)) return blocVide();
  const profilsBruts = (inconnu as { profils?: unknown }).profils;
  if (!estObjet(profilsBruts)) return blocVide();

  const profils: Record<string, ProgressionProfil> = {};
  for (const [id, valeur] of Object.entries(profilsBruts).slice(0, MAX_PROFILS)) {
    if (!id || id.length > MAX_LONGUEUR_ID) continue;
    if (!estObjet(valeur)) continue;
    profils[id] = lireProfil(valeur as Record<string, unknown>);
  }

  return { v: 1, profils, supprimes: lireSupprimes((inconnu as { supprimes?: unknown }).supprimes) };
}

function lireSupprimes(v: unknown): Record<string, number> {
  if (!estObjet(v)) return {};
  const sortie: Record<string, number> = {};
  for (const [id, valeur] of Object.entries(v).slice(0, MAX_SUPPRIMES)) {
    if (!id || id.length > MAX_LONGUEUR_ID) continue;
    const quand = entierPositif(valeur);
    if (quand !== null) sortie[id] = quand;
  }
  return sortie;
}

function lireProfil(p: Record<string, unknown>): ProgressionProfil {
  return {
    avatar: chaine(p.avatar) ?? '',
    vues: listeDeChaines(p.vues),
    maitrisees: listeDeChaines(p.maitrisees),
    liberes: listeDeChaines(p.liberes),
    chrono: listeDeNombres(p.chrono),
    tutoVu: p.tutoVu === true,
    maj: entierPositif(p.maj) ?? 0,
    raz: entierPositif(p.raz) ?? 0,
  };
}

function estObjet(v: unknown): v is Record<string, unknown> {
  return typeof v === 'object' && v !== null && !Array.isArray(v);
}

function chaine(v: unknown): string | null {
  return typeof v === 'string' && v.length > 0 && v.length <= MAX_LONGUEUR_ID ? v : null;
}

function listeDeChaines(v: unknown): string[] {
  if (!Array.isArray(v)) return [];
  return v
    .filter((x): x is string => typeof x === 'string' && x.length > 0 && x.length <= MAX_LONGUEUR_ID)
    .slice(0, MAX_ENTREES);
}

function listeDeNombres(v: unknown): number[] {
  if (!Array.isArray(v)) return [];
  return v
    .filter((x): x is number => typeof x === 'number' && Number.isFinite(x) && x > 0)
    .slice(0, MAX_ENTREES);
}

function entierPositif(v: unknown): number | null {
  return typeof v === 'number' && Number.isFinite(v) && v >= 0 ? v : null;
}
