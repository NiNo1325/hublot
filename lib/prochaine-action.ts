import type { ScienceCard } from './types';
import { savantsPrisonniers, type SavantPrisonnier } from '@/content/savants-cartes';
import { peutLiberer, prixSavant } from './cles';

/**
 * La seule chose à faire maintenant.
 *
 * Une action, jamais trois. C'est ce qui distingue un guide d'un menu — et un
 * menu, on en a déjà supprimé plusieurs ici, chaque fois pour la même raison :
 * proposer trois chemins à un enfant de cinq ans, c'est lui demander d'arbitrer
 * au lieu de l'emmener.
 *
 * L'ordre suit la boucle du jeu, et il est délibéré :
 *
 * 1. **délivrer**, dès qu'une cellule est à portée du trousseau. C'est le fil
 *    conducteur, et c'est la récompense — la faire attendre serait absurde ;
 * 2. **répondre**, s'il reste des cartes écoutées dont la question n'a pas été
 *    réussie. C'est ce qui fabrique des clés, donc le chemin le plus court vers
 *    la prochaine délivrance ;
 * 3. **écouter**, sinon : sans carte écoutée, le quizz n'a rien à demander ;
 * 4. **complet**, quand il ne reste rien — cas rare, mais il doit se dire.
 *
 * Le savant proposé est le **moins cher** parmi ceux qu'on peut ouvrir : c'est
 * la victoire la plus proche, et elle laisse les grands noms comme objectifs.
 */
export type ProchaineAction =
  | { type: 'delivrer'; savant: SavantPrisonnier }
  | { type: 'repondre'; combien: number }
  | { type: 'ecouter'; combien: number }
  | { type: 'complet' };

export function prochaineAction(
  cards: ScienceCard[],
  cartesVues: Set<string>,
  cartesMaitrisees: Set<string>,
  liberes: string[],
  gagnees: number,
  depensees: number,
): ProchaineAction {
  const ouvrables = savantsPrisonniers
    .filter((s) => peutLiberer(gagnees, depensees, liberes, s))
    .sort((a, b) => prixSavant(a) - prixSavant(b));
  if (ouvrables.length > 0) return { type: 'delivrer', savant: ouvrables[0] };

  const aRepondre = cards.filter((c) => cartesVues.has(c.id) && !cartesMaitrisees.has(c.id));
  if (aRepondre.length > 0) return { type: 'repondre', combien: aRepondre.length };

  const aEcouter = cards.filter((c) => !cartesVues.has(c.id));
  if (aEcouter.length > 0) return { type: 'ecouter', combien: aEcouter.length };

  return { type: 'complet' };
}
