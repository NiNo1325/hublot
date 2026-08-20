import { PODIUM } from '@/lib/scores';

/** La progression d'un enfant, telle qu'elle voyage et telle qu'elle est stockée. */
export interface ProgressionProfil {
  avatar: string;
  vues: string[];
  maitrisees: string[];
  liberes: string[];
  chrono: number[];
  age: number | null;
  tranche: string | null;
  tutoVu: boolean;
  /** Horodatage du dernier changement local, seul arbitre des valeurs qui ne croissent pas. */
  maj: number;
}

/**
 * Tout ce qu'un compte sauvegarde.
 *
 * Le prénom des enfants n'y figure pas, et c'est délibéré : il ne quitte
 * jamais l'appareil. Le serveur ne voit que des identifiants opaques, des
 * avatars et des listes de cartes.
 */
export interface BlocProgression {
  v: 1;
  profils: Record<string, ProgressionProfil>;
}

export function blocVide(): BlocProgression {
  return { v: 1, profils: {} };
}

/**
 * Réunit deux versions de la même progression.
 *
 * Commutative, associative et idempotente : deux appareils qui se
 * synchronisent dans n'importe quel ordre, autant de fois qu'ils veulent,
 * aboutissent au même état. C'est ce qui permet au client et au serveur de
 * fusionner chacun de leur côté sans se coordonner, et c'est ce qui dispense
 * l'app d'un écran « quelle version garder ? » qu'aucun enfant ne saurait
 * remplir.
 */
export function fusionner(a: BlocProgression, b: BlocProgression): BlocProgression {
  const profils: Record<string, ProgressionProfil> = {};
  const ids = new Set([...Object.keys(a.profils), ...Object.keys(b.profils)]);

  for (const id of [...ids].sort()) {
    const gauche = a.profils[id];
    const droite = b.profils[id];
    if (gauche && droite) profils[id] = fusionnerProfil(gauche, droite);
    else profils[id] = normaliser(gauche ?? droite);
  }

  return { v: 1, profils };
}

function fusionnerProfil(a: ProgressionProfil, b: ProgressionProfil): ProgressionProfil {
  const recent = plusRecent(a, b);
  return {
    vues: ensemble(a.vues, b.vues),
    maitrisees: ensemble(a.maitrisees, b.maitrisees),
    liberes: ensemble(a.liberes, b.liberes),
    chrono: podium(a.chrono, b.chrono),
    // Un tutoriel vu quelque part est vu : le remontrer passerait pour un bug.
    tutoVu: a.tutoVu || b.tutoVu,
    avatar: recent.avatar,
    age: recent.age,
    tranche: recent.tranche,
    maj: Math.max(a.maj, b.maj),
  };
}

/** Un profil connu d'un seul côté doit sortir sous la même forme que s'il avait été fusionné. */
function normaliser(p: ProgressionProfil): ProgressionProfil {
  return {
    ...p,
    vues: ensemble(p.vues),
    maitrisees: ensemble(p.maitrisees),
    liberes: ensemble(p.liberes),
    chrono: podium(p.chrono),
  };
}

/**
 * L'arbitre des valeurs qui ne croissent pas : l'âge, la tranche, l'avatar.
 *
 * À horodatage égal — deux appareils réglés à la même seconde, ou un `maj`
 * absent — on départage sur le contenu lui-même. Le résultat est arbitraire
 * mais **déterministe**, ce qui suffit : sans cela, fusionner A puis B ne
 * donnerait pas le même résultat que B puis A, et les deux appareils
 * divergeraient sans jamais se rattraper.
 */
function plusRecent(a: ProgressionProfil, b: ProgressionProfil): ProgressionProfil {
  if (a.maj !== b.maj) return a.maj > b.maj ? a : b;
  return signature(a) >= signature(b) ? a : b;
}

function signature(p: ProgressionProfil): string {
  return JSON.stringify([p.avatar, p.age, p.tranche]);
}

function ensemble(...listes: readonly (readonly string[] | undefined)[]): string[] {
  return [...new Set(listes.flatMap((l) => l ?? []))].sort();
}

/**
 * Le podium commun aux deux appareils.
 *
 * Les scores identiques sont fondus en un seul. Deux parties à onze points
 * sont bien deux parties, mais garder le doublon rendrait la fusion non
 * idempotente : resynchroniser sans rien jouer allongerait le podium. Entre
 * un podium exact et un podium stable, on choisit stable.
 */
function podium(...listes: readonly (readonly number[] | undefined)[]): number[] {
  const scores = listes.flatMap((l) => l ?? []).filter((n) => Number.isFinite(n) && n > 0);
  return [...new Set(scores)].sort((x, y) => y - x).slice(0, PODIUM);
}
