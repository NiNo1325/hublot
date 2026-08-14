import type { QuizCarte } from '@/lib/types';

/**
 * Questions du domaine « Les océans ».
 *
 * Idées reçues visées : la vague qui transporterait l'eau jusqu'à la plage,
 * la mer immobile hors des vagues, le fond éclairé dès lors que le Soleil
 * brille, l'air en réserve qui suffirait à plonger sans limite, le corail pris
 * pour une plante ou un rocher, la lumière qui viendrait forcément de
 * l'électricité ou du feu, la vie qui dépendrait toujours du Soleil, l'oxygène
 * qui viendrait uniquement des arbres, la flottaison identique dans toute eau,
 * et le tsunami confondu avec une marée ou une vague de vent.
 */
export const quiz: QuizCarte[] = [
  {
    cardId: 'dou-viennent-les-vagues',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'vague-transporte-eau',
            question: 'La vague pousse-t-elle l’eau jusqu’à la plage ?',
            reponses: [
              { texte: 'Non, l’eau reste sur place', icone: '🌊', correcte: true },
              { texte: 'Oui, elle l’amène jusqu’au sable', icone: '🏖️' },
            ],
            explication:
              'Ce n’est pas l’eau qui avance mais le mouvement, comme une ola dans un stade.',
          },
        ],
        '6-8': [
          {
            id: 'vague-mouvement-voyage',
            question: 'Quand une vague arrive à la plage, qu’est-ce qui a vraiment parcouru le chemin ?',
            reponses: [
              { texte: 'Le mouvement, pas l’eau elle-même', icone: '🔄', correcte: true },
              { texte: 'L’eau elle-même, depuis le large', icone: '💧' },
              { texte: 'Le vent qui pousse l’eau devant lui', icone: '🌬️' },
            ],
            explication:
              'Chaque goutte tourne sur elle-même : c’est l’énergie qui voyage, pas la masse d’eau depuis le large.',
          },
        ],
        '9-12': [
          {
            id: 'vague-trajectoire-orbitale',
            question: 'Une vague traverse l’océan sur des centaines de kilomètres. Que fait l’eau ?',
            reponses: [
              { texte: 'Elle décrit un cercle presque sur place', icone: '🔄', correcte: true },
              { texte: 'Elle est transportée jusqu’au rivage', icone: '🌊' },
              { texte: 'Elle s’évapore en cours de route', icone: '💨' },
            ],
            explication:
              'Seule l’énergie se propage : chaque particule d’eau reste, en moyenne, au même endroit, suivant une trajectoire orbitale.',
          },
        ],
      },
    },
  },
  {
    cardId: 'les-fleuves-dans-la-mer',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'mer-bouge-sans-vague',
            question: 'Entre les vagues, l’eau de la mer bouge-t-elle ?',
            reponses: [
              { texte: 'Oui, tout doucement', icone: '🔄', correcte: true },
              { texte: 'Non, elle est toujours immobile', icone: '🧊' },
            ],
            explication: 'De grands courants invisibles font voyager l’eau tout autour de la Terre.',
          },
        ],
        '6-8': [
          {
            id: 'courant-marin-definition',
            question: 'Qu’est-ce qu’un courant marin ?',
            reponses: [
              { texte: 'Un grand fleuve d’eau qui bouge dans l’océan', icone: '🔄', correcte: true },
              { texte: 'De l’eau complètement immobile', icone: '🧊' },
              { texte: 'Une vague qui ne s’arrête jamais', icone: '🌊' },
            ],
            explication:
              'Même loin des vagues, l’eau des océans circule sans cesse, entraînée par la chaleur et le froid.',
          },
        ],
        '9-12': [
          {
            id: 'eau-froide-plonge',
            question: 'Pourquoi l’eau froide plonge-t-elle vers le fond près des pôles ?',
            reponses: [
              { texte: 'Parce qu’elle devient plus dense en refroidissant', icone: '🌡️', correcte: true },
              { texte: 'Parce que les pôles aspirent l’eau', icone: '⬇️' },
              { texte: 'Parce que la mer y est immobile', icone: '🧊' },
            ],
            explication:
              'En refroidissant, l’eau devient plus lourde et plonge, entraînant une circulation à l’échelle du globe.',
          },
        ],
      },
    },
  },
  {
    cardId: 'pourquoi-il-fait-noir-au-fond',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'fond-clair-plein-jour',
            question: 'Tout en bas de la mer, en plein jour, fait-il clair ?',
            reponses: [
              { texte: 'Non, il fait tout noir', icone: '🌑', correcte: true },
              { texte: 'Oui, comme à la surface', icone: '☀️' },
            ],
            explication: 'La lumière du Soleil ne descend pas si loin : elle disparaît en chemin.',
          },
        ],
        '6-8': [
          {
            id: 'noir-au-fond-midi',
            question: 'Pourquoi fait-il noir tout au fond de l’océan, même en plein midi ?',
            reponses: [
              { texte: 'L’eau absorbe peu à peu toute la lumière', icone: '🔦', correcte: true },
              { texte: 'Le Soleil n’éclaire jamais la mer', icone: '⛔' },
              { texte: 'Il fait toujours clair, comme à la surface', icone: '☀️' },
            ],
            explication:
              'Chaque mètre d’eau filtre un peu plus la lumière, jusqu’à ce qu’il n’en reste plus du tout.',
          },
        ],
        '9-12': [
          {
            id: 'couleur-disparait-premiere',
            question: 'Quelle couleur de la lumière disparaît en premier sous l’eau ?',
            reponses: [
              { texte: 'Le rouge', icone: '🔴', correcte: true },
              { texte: 'Le bleu', icone: '🔵' },
              { texte: 'Toutes en même temps', icone: '🌈' },
            ],
            explication:
              'Le rouge est absorbé dès les premiers mètres ; le bleu pénètre bien plus profond, d’où la couleur des abysses.',
          },
        ],
      },
    },
  },
  {
    cardId: 'la-pression-qui-ecrase',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'eau-ecrase-fort',
            question: 'Tout en bas de la mer, l’eau écrase-t-elle fort ?',
            reponses: [
              { texte: 'Oui, très fort', icone: '🤏', correcte: true },
              { texte: 'Non, pas du tout', icone: '🙅' },
            ],
            explication: 'Il y a tellement d’eau au-dessus que ça pousse énormément.',
          },
        ],
        '6-8': [
          {
            id: 'sous-marin-solide',
            question: 'Pourquoi faut-il un sous-marin très solide pour aller très profond ?',
            reponses: [
              { texte: 'Parce que le poids de l’eau écrase', icone: '🤿', correcte: true },
              { texte: 'Parce qu’il fait trop froid', icone: '❄️' },
              { texte: 'Parce qu’il n’y a pas assez d’air', icone: '💨' },
            ],
            explication:
              'Ce n’est pas l’air qui manque, c’est le poids énorme de toute l’eau au-dessus qui écrase.',
          },
        ],
        '9-12': [
          {
            id: 'plongeur-air-suffisant',
            question: 'Un plongeur avec assez d’air pourrait-il descendre à mille mètres sans protection ?',
            reponses: [
              { texte: 'Non, la pression l’écraserait', icone: '🤿', correcte: true },
              { texte: 'Oui, s’il a assez d’air', icone: '💨' },
              { texte: 'Oui, s’il retient sa respiration', icone: '🫁' },
            ],
            explication:
              'La pression de l’eau écrase le corps quelle que soit la quantité d’air disponible : il faut une structure rigide, pas juste de l’air.',
          },
        ],
      },
    },
  },
  {
    cardId: 'le-corail-batisseur',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'corail-caillou',
            question: 'Le corail, est-ce un caillou ?',
            reponses: [
              { texte: 'Non, un petit animal', icone: '🪸', correcte: true },
              { texte: 'Oui, un caillou', icone: '🪨' },
            ],
            explication: 'Le corail est bien vivant : c’est un tout petit animal.',
          },
        ],
        '6-8': [
          {
            id: 'corail-nature',
            question: 'Qu’est-ce que le corail ?',
            reponses: [
              { texte: 'Un animal qui fabrique une coque dure', icone: '🪸', correcte: true },
              { texte: 'Une plante marine', icone: '🌿' },
              { texte: 'Un rocher qui pousse', icone: '🪨' },
            ],
            explication:
              'Le corail est un animal, cousin de la méduse, qui construit son propre squelette calcaire.',
          },
        ],
        '9-12': [
          {
            id: 'recif-composition',
            question: 'Un récif corallien est fait de quoi ?',
            reponses: [
              { texte: 'De squelettes calcaires accumulés par des animaux', icone: '🪸', correcte: true },
              { texte: 'De roche volcanique refroidie', icone: '🌋' },
              { texte: 'D’algues pétrifiées', icone: '🌿' },
            ],
            explication:
              'Les polypes coralliens sécrètent un squelette de calcaire qui s’accumule sur des siècles pour former le récif.',
          },
        ],
      },
    },
  },
  {
    cardId: 'les-animaux-qui-brillent',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'lampe-electrique',
            question: 'Ces animaux allument-ils une vraie lampe électrique ?',
            reponses: [
              { texte: 'Non, la lumière vient de leur corps', icone: '✨', correcte: true },
              { texte: 'Oui, une lampe électrique', icone: '🔦' },
            ],
            explication: 'Leur corps fabrique lui-même la lumière, grâce à une réaction chimique.',
          },
        ],
        '6-8': [
          {
            id: 'origine-lumiere-animale',
            question: 'D’où vient la lumière des animaux qui brillent au fond de la mer ?',
            reponses: [
              { texte: 'D’une réaction chimique dans leur corps', icone: '✨', correcte: true },
              { texte: 'D’une pile électrique', icone: '🔋' },
              { texte: 'Du reflet du Soleil', icone: '☀️' },
            ],
            explication:
              'C’est une lumière froide, produite chimiquement, sans électricité ni flamme.',
          },
        ],
        '9-12': [
          {
            id: 'bioluminescence-chaleur',
            question: 'La lumière produite par bioluminescence dégage-t-elle de la chaleur ?',
            reponses: [
              { texte: 'Non, presque pas, contrairement à une ampoule', icone: '💡', correcte: true },
              { texte: 'Oui, autant qu’une flamme', icone: '🔥' },
              { texte: 'Oui, mais seulement sous l’eau', icone: '🌊' },
            ],
            explication:
              'La réaction chimique convertit l’essentiel de son énergie en lumière plutôt qu’en chaleur : on parle de lumière froide.',
          },
        ],
      },
    },
  },
  {
    cardId: 'les-sources-chaudes-du-fond',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'vie-sans-soleil',
            question: 'Tout en bas de la mer, y a-t-il de la vie sans Soleil ?',
            reponses: [
              { texte: 'Oui, près des cheminées chaudes', icone: '♨️', correcte: true },
              { texte: 'Non, rien ne vit sans Soleil', icone: '🚫' },
            ],
            explication:
              'Près de ces sources chaudes, des bactéries et des animaux vivent très bien sans lumière.',
          },
        ],
        '6-8': [
          {
            id: 'bacteries-cheminee-nourriture',
            question: 'Comment les bactéries des cheminées chaudes se nourrissent-elles, sans lumière ?',
            reponses: [
              { texte: 'Grâce aux minéraux de l’eau chaude', icone: '♨️', correcte: true },
              { texte: 'Elles ne mangent pas du tout', icone: '⛔' },
              { texte: 'Elles attendent la lumière du Soleil', icone: '☀️' },
            ],
            explication:
              'Elles transforment l’énergie chimique des minéraux, sans avoir besoin de photosynthèse.',
          },
        ],
        '9-12': [
          {
            id: 'toute-vie-depend-soleil',
            question: 'Toute vie sur Terre dépend-elle du Soleil pour se nourrir ?',
            reponses: [
              { texte: 'Non, certains écosystèmes vivent de chimie pure', icone: '♨️', correcte: true },
              { texte: 'Oui, sans exception', icone: '☀️' },
              { texte: 'Non, mais seules les plantes échappent à la règle', icone: '🌿' },
            ],
            explication:
              'Autour des cheminées hydrothermales, des bactéries chimiosynthétiques tirent leur énergie des minéraux, indépendamment du Soleil.',
          },
        ],
      },
    },
  },
  {
    cardId: 'le-plancton-minuscule',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'air-vient-de',
            question: 'D’où vient une grande partie de l’air qu’on respire ?',
            reponses: [
              { texte: 'Du plancton dans la mer', icone: '🦠', correcte: true },
              { texte: 'Seulement des arbres', icone: '🌳' },
            ],
            explication: 'Le plancton fabrique lui aussi beaucoup de l’air que tu respires.',
          },
        ],
        '6-8': [
          {
            id: 'oxygene-plus-grande-partie',
            question: 'Qui fabrique la plus grande partie de l’oxygène de l’air ?',
            reponses: [
              { texte: 'Le plancton des océans', icone: '🦠', correcte: true },
              { texte: 'Seulement les arbres', icone: '🌳' },
              { texte: 'Seulement les poissons', icone: '🐟' },
            ],
            explication:
              'Le phytoplancton produit plus de la moitié de l’oxygène que nous respirons, autant ou plus que toutes les forêts.',
          },
        ],
        '9-12': [
          {
            id: 'oxygene-atmospherique-source',
            question: 'Quelle affirmation est correcte à propos de l’oxygène atmosphérique ?',
            reponses: [
              { texte: 'Le phytoplancton en produit la majeure partie', icone: '🦠', correcte: true },
              { texte: 'Il vient uniquement des forêts', icone: '🌳' },
              { texte: 'Il est produit uniquement par les océans profonds', icone: '🌊' },
            ],
            explication:
              'Le phytoplancton océanique produirait entre la moitié et les deux tiers de l’oxygène atmosphérique, davantage que l’ensemble des forêts terrestres.',
          },
        ],
      },
    },
  },
  {
    cardId: 'pourquoi-on-flotte-mieux-dans-la-mer',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'flotte-pareil-bain',
            question: 'Flotte-t-on pareil dans la mer et dans le bain ?',
            reponses: [
              { texte: 'Non, mieux dans la mer', icone: '🏊', correcte: true },
              { texte: 'Oui, exactement pareil', icone: '🟰' },
            ],
            explication: 'L’eau de mer, salée, porte un peu plus fort qu’une eau sans sel.',
          },
        ],
        '6-8': [
          {
            id: 'flotte-mieux-mer-piscine',
            question: 'Pourquoi flotte-t-on plus facilement dans la mer que dans une piscine ?',
            reponses: [
              { texte: 'Parce que l’eau salée est plus dense', icone: '🧂', correcte: true },
              { texte: 'Parce que la mer est plus froide', icone: '❄️' },
              { texte: 'Parce qu’on flotte pareil partout', icone: '🟰' },
            ],
            explication:
              'Le sel rend l’eau plus lourde à volume égal, ce qui pousse davantage le corps vers le haut.',
          },
        ],
        '9-12': [
          {
            id: 'mer-morte-flottaison',
            question: 'Pourquoi flotte-t-on presque sans effort dans la mer Morte ?',
            reponses: [
              { texte: 'Sa très forte salinité la rend extrêmement dense', icone: '🧂', correcte: true },
              { texte: 'L’eau y est plus chaude qu’ailleurs', icone: '🌡️' },
              { texte: 'On flotte pareil dans toute eau, salée ou non', icone: '🟰' },
            ],
            explication:
              'Plus l’eau est dense, plus la poussée d’Archimède est forte : à trente pour cent de sel, cette poussée devient presque suffisante à elle seule.',
          },
        ],
      },
    },
  },
  {
    cardId: 'la-vague-geante',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'tsunami-vague-vent',
            question: 'Un tsunami, est-ce une simple grosse vague de vent ?',
            reponses: [
              { texte: 'Non, ça vient d’un séisme', icone: '🌍', correcte: true },
              { texte: 'Oui, une vague de vent', icone: '🌬️' },
            ],
            explication: 'Un tsunami naît d’un tremblement de terre sous l’océan, pas du vent.',
          },
        ],
        '6-8': [
          {
            id: 'tsunami-declencheur',
            question: 'Qu’est-ce qui déclenche le plus souvent un tsunami ?',
            reponses: [
              { texte: 'Un séisme sous-marin', icone: '🌍', correcte: true },
              { texte: 'Une grosse tempête de vent', icone: '🌬️' },
              { texte: 'Une pluie très forte', icone: '🌧️' },
            ],
            explication:
              'Le sol qui bouge brutalement au fond de l’océan déplace une masse d’eau énorme, bien plus qu’un simple coup de vent.',
          },
        ],
        '9-12': [
          {
            id: 'tsunami-vs-vague-vent',
            question: 'En quoi un tsunami diffère-t-il d’une vague formée par le vent ?',
            reponses: [
              { texte: 'Il déplace toute la colonne d’eau, pas que la surface', icone: '🌍', correcte: true },
              { texte: 'Il est toujours plus lent', icone: '🐢' },
              { texte: 'Il ne se produit que pendant les tempêtes', icone: '🌬️' },
            ],
            explication:
              'Une vague de vent n’agite que la surface ; un tsunami, né d’un séisme, met en mouvement l’océan sur toute sa profondeur.',
          },
        ],
      },
    },
  },
];
