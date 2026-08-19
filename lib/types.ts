/**
 * Types partagés de l'application.
 *
 * Le français est la langue source (toujours présente) ; l'anglais s'ajoute au
 * fil de la traduction. Le contenu est indexé par locale via `Localise<T>` :
 * la clé `fr` est requise, les autres sont optionnelles, si bien qu'un contenu
 * pas encore traduit compile et retombe simplement sur le français à l'écran.
 */
export type Locale = 'fr' | 'en';
export const LOCALES = ['fr', 'en'] as const;

/**
 * Valeur déclinée par langue. `fr` (source) est garanti ; les autres langues
 * arrivent progressivement — d'où leur optionalité. À la lecture, on fait
 * `valeur[locale] ?? valeur.fr` pour retomber sur le français si besoin.
 */
export type Localise<T> = { fr: T } & Partial<Record<Locale, T>>;

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
  | 'mathematiques'
  | 'animaux'
  | 'meteo'
  | 'le-son'
  | 'les-dinosaures'
  | 'le-corps'
  | 'les-oceans'
  | 'la-cuisine';

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
  labels: Localise<string>;
  /** Phrase courte qui intrigue, affichée sur la grille des mondes. */
  accroche: Localise<string>;
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

/**
 * Questions d'une carte, déclinées par langue puis par tranche d'âge — comme
 * les explications, et pour la même raison : une langue traduite en partie doit
 * pouvoir compiler et retomber sur le français.
 */
export interface QuizCarte {
  cardId: string;
  questions: Localise<Record<AgeRange, QuizQuestion[]>>;
}

export interface ScienceCard {
  /** Slug unique, sert aussi de clé React. */
  id: string;
  domainId: DomainId;
  /** Clé de lookup dans `animationRegistry`. */
  animationId: string;
  /** Emoji affiché sur la tuile, avant ouverture de la carte. */
  thumbnail: string;
  content: Localise<CardContent>;
}

/**
 * Une phrase que Lumi affirme, et que l'enfant doit croire ou contredire.
 *
 * Une affirmation fausse reprend l'idée reçue que la carte corrige, jamais un
 * piège inventé — même règle que les mauvaises réponses du quizz. Contredire
 * quelqu'un qui affirme demande plus que cocher la bonne case dans une liste :
 * c'est ce que ce format apporte, et rien d'autre ne le fait.
 */
export interface Affirmation {
  /** La carte dont l'affirmation parle : elle n'est tirée qu'une fois écoutée. */
  cardId: string;
  vrai: boolean;
  texte: Localise<string>;
  /** Ce que Lumi répond ensuite, quelle qu'ait été la réponse de l'enfant. */
  reponse: Localise<string>;
}
