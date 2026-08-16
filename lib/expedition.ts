import { expeditions, type Expedition } from '@/content/expeditions';

/**
 * Le choix de l'expédition du jour.
 *
 * Volontairement sans hasard : le même jour donne la même expédition, sur tous
 * les appareils et même hors ligne. Une expédition tirée au sort changerait au
 * moindre rechargement, et « celle d'aujourd'hui » ne voudrait plus rien dire —
 * or c'est précisément ce qui fait revenir demain.
 */

/**
 * Le numéro du jour local, en jours depuis l'époque.
 *
 * Calculé sur la date locale (et non sur l'heure UTC) : une expédition doit
 * changer à minuit chez l'enfant, pas à une heure qui dépend de son fuseau.
 */
export function indexDuJour(date: Date): number {
  return Math.floor(
    Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) / 86_400_000,
  );
}

/**
 * L'expédition du jour, en sautant celles dont tout est déjà écouté.
 *
 * Le parcours des candidates part du jour et avance d'une case : la première
 * qui contient au moins une carte neuve gagne. Sans cette règle, un enfant
 * avancé tomberait un jour sur trois sur une expédition entièrement connue —
 * une proposition qui ne propose rien.
 *
 * Quand tout le catalogue est écouté, on rend quand même celle du jour : à ce
 * stade, revoir trois cartes reliées par un fil garde du sens.
 */
export function expeditionDuJour(jour: number, cartesVues: Set<string>): Expedition {
  const n = expeditions.length;
  const depart = ((jour % n) + n) % n;
  for (let i = 0; i < n; i += 1) {
    const candidate = expeditions[(depart + i) % n];
    if (candidate.cartes.some((id) => !cartesVues.has(id))) return candidate;
  }
  return expeditions[depart];
}

/** La date du jour au format `AAAA-MM-JJ`, telle qu'on la stocke. */
export function jourStocke(date: Date): string {
  const mois = String(date.getMonth() + 1).padStart(2, '0');
  const jour = String(date.getDate()).padStart(2, '0');
  return `${date.getFullYear()}-${mois}-${jour}`;
}
