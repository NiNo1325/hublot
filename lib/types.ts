/**
 * Types partagés de l'application.
 *
 * `Locale` est volontairement une union à un seul membre : la V1 est en français
 * uniquement, mais les structures de contenu sont déjà indexées par locale pour
 * que l'ajout d'une langue ne demande pas de refonte du modèle de données.
 */
export type Locale = 'fr';

export const AGE_RANGES = ['3-5', '6-8', '9-12'] as const;
export type AgeRange = (typeof AGE_RANGES)[number];

export type DomainId =
  | 'physique'
  | 'chimie'
  | 'biologie'
  | 'astronomie'
  | 'sciences-de-la-terre'
  | 'informatique'
  | 'ingenierie'
  | 'mathematiques';

export interface DomainDefinition {
  id: DomainId;
  /** Emoji affiché sur la pastille de filtre. */
  icon: string;
  /**
   * Couleur du domaine. Les classes Tailwind correspondantes vivent dans
   * `lib/domain-styles.ts` : Tailwind ne peut pas détecter les classes
   * construites dynamiquement, elles doivent être écrites en toutes lettres.
   */
  color: string;
  labels: Record<Locale, string>;
}

/**
 * Un beat est l'unité de synchronisation entre la narration et l'animation :
 * une phrase lue à voix haute, et la phase d'animation qui l'illustre.
 */
export interface CardBeat {
  /** Identifiant stable, consommé par le composant d'animation. */
  id: string;
  text: string;
}

export interface CardExplanation {
  beats: CardBeat[];
}

export interface CardContent {
  title: Record<AgeRange, string>;
  explanation: Record<AgeRange, CardExplanation>;
}

/**
 * Une proposition de réponse.
 *
 * Les propositions fausses ne sont pas des pièges arbitraires : ce sont les
 * idées reçues que la carte corrige — le sang bleu, l'ombre de la Terre sur la
 * Lune, les objets lourds qui tombent plus vite. Se tromper devient alors
 * l'occasion de rectifier une croyance réelle, et non de perdre des points.
 */
export interface QuizReponse {
  texte: string;
  /** Emoji affiché à la place du texte pour les non-lecteurs. */
  icone: string;
  correcte?: boolean;
}

export interface QuizQuestion {
  /** Identifiant stable, utilisé pour le nom du fichier audio. */
  id: string;
  question: string;
  reponses: QuizReponse[];
  /** Rappelé après la réponse, juste ou fausse. */
  explication: string;
}

/** Questions d'une carte, déclinées par tranche d'âge comme les explications. */
export interface QuizCarte {
  cardId: string;
  questions: Record<AgeRange, QuizQuestion[]>;
}

export interface ScienceCard {
  /** Slug unique, sert aussi de clé React. */
  id: string;
  domainId: DomainId;
  /** Clé de lookup dans `animationRegistry`. */
  animationId: string;
  /** Emoji affiché sur la tuile, avant ouverture de la carte. */
  thumbnail: string;
  content: Record<Locale, CardContent>;
}
