import type { Locale } from '@/lib/types';

/**
 * Chaînes de l'interface, hors contenu.
 *
 * Le contenu (cartes, quizz, accroches) vit dans `content/` et se décline par
 * `Localise<T>`. Les libellés de l'interface — onglets, boutons, messages —
 * n'ont pas de fichier à eux : ils sont ici, dans un simple objet TypeScript.
 * Pas de bibliothèque d'i18n : elles apportent le chargement paresseux et la
 * négociation de langue, dont une application entièrement statique de cette
 * taille n'a pas l'usage, au prix d'un format de fichier et d'un typage plus
 * lâche que le nôtre.
 *
 * Les clés sont plates et préfixées par zone (`nav.`, `quizz.`, …). C'est ce
 * qui permet de traduire l'interface zone par zone, en parallèle, sans que deux
 * traducteurs se marchent dessus.
 *
 * Une valeur est une chaîne, ou une fonction quand elle dépend d'une variable —
 * un pluriel, par exemple, dont la règle n'est pas la même d'une langue à
 * l'autre (« 0 carte » en français, « 0 cards » en anglais). La fonction est
 * traduite comme le reste : chaque langue apporte sa propre règle.
 */
const fr = {
  'nav.decouvrir': 'Découvrir',
  'nav.quizz': 'Quizz',
  'nav.parcours': 'Parcours',
  'nav.lumi': 'Lumi',
  'nav.reglages': 'Réglages',

  'decouvrir.titre': 'Qu’est-ce qui t’intéresse ?',
  'decouvrir.sous-titre':
    'Ta bibliothèque : explore et revois ce que tu veux, quand tu veux, sans ordre imposé.',
  'decouvrir.chemin-guide': 'Envie d’un chemin guidé ? → Parcours',

  'monde.maitrise': 'maîtrisé',
  'monde.ecouter': (accroche: string) => `Écouter : ${accroche}`,
  'monde.progression': (nom: string, vues: number, total: number) =>
    `${nom}, ${vues} carte${vues > 1 ? 's' : ''} sur ${total} écoutée${vues > 1 ? 's' : ''}`,
  'monde.termine': ', terminé',

  'carte.fermer': 'Fermer la carte',

  'narration.precedente': 'Étape précédente',
  'narration.pause': 'Pause',
  'narration.reprendre': 'Reprendre',
  'narration.ecouter': 'Écouter',
  'narration.reecouter': 'Réécouter',
  'narration.silencieux':
    'Le son n’a pas pu être chargé. L’explication défile à l’écrit.',
};

/** Toutes les clés traduisibles, dérivées de la source française. */
export type CleUI = keyof typeof fr;

/**
 * Traductions, langue par langue. Chaque entrée est partielle : une clé pas
 * encore traduite retombe sur le français, si bien qu'une traduction en cours
 * n'affiche jamais de trou ni de clé brute à l'écran.
 */
const traductions: Record<Locale, Partial<typeof fr>> = {
  fr,
  en: {
    'nav.decouvrir': 'Explore',
    'nav.quizz': 'Quiz',
    'nav.parcours': 'Journey',
    'nav.lumi': 'Lumi',
    'nav.reglages': 'Settings',

    'decouvrir.titre': 'What are you curious about?',
    'decouvrir.sous-titre':
      'Your library: explore and revisit whatever you like, whenever you like, in any order.',
    'decouvrir.chemin-guide': 'Fancy a guided path? → Journey',

    'monde.maitrise': 'mastered',
    'monde.ecouter': (accroche: string) => `Listen: ${accroche}`,
    // L'anglais met le singulier au seul 1, là où le français l'étend à 0.
    'monde.progression': (nom: string, vues: number, total: number) =>
      `${nom}, ${vues} card${vues === 1 ? '' : 's'} of ${total} listened to`,
    'monde.termine': ', complete',

    'carte.fermer': 'Close the card',

    'narration.precedente': 'Previous step',
    'narration.pause': 'Pause',
    'narration.reprendre': 'Resume',
    'narration.ecouter': 'Listen',
    'narration.reecouter': 'Listen again',
    'narration.silencieux':
      'The sound could not be loaded. The explanation scrolls as text.',
  },
};

/** Traduit une clé dans la langue demandée, avec repli sur le français. */
export function traduire<K extends CleUI>(locale: Locale, cle: K): (typeof fr)[K] {
  return (traductions[locale][cle] ?? fr[cle]) as (typeof fr)[K];
}
