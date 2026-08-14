import type { QuizCarte } from '@/lib/types';

/**
 * Questions du domaine « Le son ».
 *
 * Idées reçues visées : quelqu'un répondrait à l'écho, aigu confondu avec
 * fort, la voix qui viendrait de la bouche, l'oreille qui entendrait « au
 * trou », l'ouïe qui se répare toujours, le son de la guitare sortant du
 * trou, le conducteur qui baisserait le son d'une sirène, le micro qui
 * déformerait la voix, l'absence de son sans oreille humaine pour l'entendre,
 * et l'harmonie musicale réduite à une question de goût.
 */
export const quiz: QuizCarte[] = [
  {
    cardId: 'pourquoi-lecho-repond',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'qui-repond',
            question: 'Qui te répond quand tu cries dans la montagne ?',
            reponses: [
              { texte: 'Personne, c’est ton cri qui revient', icone: '🔁', correcte: true },
              { texte: 'Quelqu’un caché', icone: '👤' },
            ],
            explication:
              'C’est ton propre cri qui rebondit sur la paroi et te revient aux oreilles.',
          },
        ],
        '6-8': [
          {
            id: 'echo-repond',
            question: 'Quand tu entends un écho, qui te répond vraiment ?',
            reponses: [
              { texte: 'Ton propre son qui a rebondi', icone: '🔁', correcte: true },
              { texte: 'La montagne qui parle', icone: '🏔️' },
              { texte: 'Un animal caché', icone: '🦊' },
            ],
            explication:
              'Il n’y a personne : ton cri a simplement rebondi sur un mur ou une paroi et t’est revenu.',
          },
        ],
        '9-12': [
          {
            id: 'delai-echo',
            question: 'Pourquoi l’écho arrive-t-il après un petit délai ?',
            reponses: [
              { texte: 'Le son met du temps à faire l’aller-retour', icone: '⏱️', correcte: true },
              { texte: 'La montagne réfléchit avant de répondre', icone: '🏔️' },
              { texte: 'Ta voix ralentit en s’éloignant', icone: '🐌' },
            ],
            explication:
              'Le son voyage à vitesse finie (environ 340 mètres par seconde) : plus l’obstacle est loin, plus le retour prend de temps.',
          },
        ],
      },
    },
  },
  {
    cardId: 'aigu-ou-grave',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'aigu-rapide',
            question: 'Un son aigu, qu’est-ce qui le rend aigu ?',
            reponses: [
              { texte: 'Il vibre très vite', icone: '🌀', correcte: true },
              { texte: 'Il est très fort', icone: '🔊' },
            ],
            explication:
              'Aigu ou grave dépend de la vitesse de vibration, pas du volume : un son aigu peut être tout doux.',
          },
        ],
        '6-8': [
          {
            id: 'aigu-fort',
            question: 'Un son aigu est-il forcément un son fort ?',
            reponses: [
              { texte: 'Non, il vibre juste plus vite', icone: '🌀', correcte: true },
              { texte: 'Oui, aigu veut dire fort', icone: '🔊' },
              { texte: 'Oui, plus c’est aigu, plus c’est fort', icone: '📢' },
            ],
            explication:
              'La hauteur (aigu/grave) vient de la vitesse de vibration ; le volume (fort/doux) vient de l’ampleur des vibrations. Ce sont deux choses différentes.',
          },
        ],
        '9-12': [
          {
            id: 'frequence-hauteur',
            question: 'Qu’est-ce qui distingue un son aigu d’un son grave ?',
            reponses: [
              { texte: 'La fréquence de vibration', icone: '📈', correcte: true },
              { texte: 'Le volume sonore', icone: '🔊' },
              { texte: 'La distance à la source', icone: '📏' },
            ],
            explication:
              'La hauteur d’un son est déterminée par sa fréquence en hertz, indépendamment de son intensité (le volume).',
          },
        ],
      },
    },
  },
  {
    cardId: 'pourquoi-les-voix-sont-differentes',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'voix-nait-ou',
            question: 'Où naît le son de ta voix ?',
            reponses: [
              { texte: 'Dans ta gorge', icone: '🗣️', correcte: true },
              { texte: 'Dans ta bouche', icone: '👄' },
            ],
            explication: 'Ce sont deux petites cordes au fond de ta gorge qui vibrent en premier.',
          },
        ],
        '6-8': [
          {
            id: 'origine-son-voix',
            question: 'D’où vient vraiment le son de ta voix ?',
            reponses: [
              { texte: 'Des cordes vocales, dans la gorge', icone: '🗣️', correcte: true },
              { texte: 'De la langue', icone: '👅' },
              { texte: 'Des lèvres', icone: '💋' },
            ],
            explication:
              'Le son naît dans la gorge, aux cordes vocales. La bouche et la langue ne font que le façonner ensuite.',
          },
        ],
        '9-12': [
          {
            id: 'role-bouche',
            question: 'Quel est le rôle principal de la bouche dans la voix ?',
            reponses: [
              { texte: 'Façonner le son déjà produit par les cordes vocales', icone: '👄', correcte: true },
              { texte: 'Produire directement le son de la voix', icone: '🗣️' },
              { texte: 'Amplifier l’air venu des poumons', icone: '💨' },
            ],
            explication:
              'Le son est généré par la vibration des cordes vocales dans le larynx ; la bouche agit comme résonateur et articulateur, pas comme source.',
          },
        ],
      },
    },
  },
  {
    cardId: 'comment-loreille-entend',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'travail-oreille',
            question: 'Où travaille vraiment ton oreille pour entendre ?',
            reponses: [
              { texte: 'Bien à l’intérieur', icone: '👂', correcte: true },
              { texte: 'Juste au trou', icone: '🕳️' },
            ],
            explication:
              'Tout se passe à l’intérieur : le tympan, les petits os, puis l’escargot.',
          },
        ],
        '6-8': [
          {
            id: 'trou-oreille',
            question: 'Le trou de l’oreille, est-ce que c’est là que tu entends ?',
            reponses: [
              { texte: 'Non, le travail se fait à l’intérieur', icone: '👂', correcte: true },
              { texte: 'Oui, c’est le trou qui entend', icone: '🕳️' },
              { texte: 'Oui, c’est la peau du trou', icone: '🩹' },
            ],
            explication:
              'Le trou n’est qu’un passage : le vrai travail commence au tympan, puis continue avec les osselets et la cochlée.',
          },
        ],
        '9-12': [
          {
            id: 'role-osselets',
            question: 'Quelle est la fonction des osselets de l’oreille moyenne ?',
            reponses: [
              { texte: 'Transmettre et amplifier les vibrations du tympan', icone: '🔗', correcte: true },
              { texte: 'Filtrer les sons désagréables', icone: '🚫' },
              { texte: 'Produire eux-mêmes le son perçu', icone: '🔊' },
            ],
            explication:
              'Marteau, enclume et étrier relaient et amplifient mécaniquement la vibration jusqu’à la cochlée, sans produire de son eux-mêmes.',
          },
        ],
      },
    },
  },
  {
    cardId: 'quand-le-bruit-fait-mal',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'poils-repoussent',
            question: 'Les petits poils cassés dans l’oreille, ça repousse ?',
            reponses: [
              { texte: 'Non, jamais', icone: '🚫', correcte: true },
              { texte: 'Oui, toujours', icone: '🔁' },
            ],
            explication:
              'Ils ne repoussent pas : mieux vaut protéger ses oreilles des bruits très forts.',
          },
        ],
        '6-8': [
          {
            id: 'oreille-repare',
            question: 'Après un concert trop fort, l’oreille se répare-t-elle toujours ?',
            reponses: [
              { texte: 'Non, certains dégâts restent', icone: '🚫', correcte: true },
              { texte: 'Oui, elle guérit toute seule', icone: '🔁' },
              { texte: 'Oui, en une nuit de sommeil', icone: '😴' },
            ],
            explication:
              'Les cellules ciliées abîmées par un bruit trop fort ne repoussent pas : la perte peut être définitive.',
          },
        ],
        '9-12': [
          {
            id: 'cellules-ciliees',
            question: 'Les cellules ciliées détruites par un bruit intense repoussent-elles ?',
            reponses: [
              { texte: 'Non, elles ne se régénèrent pas chez l’humain', icone: '🚫', correcte: true },
              { texte: 'Oui, en quelques semaines', icone: '🔁' },
              { texte: 'Oui, si on se repose assez', icone: '😴' },
            ],
            explication:
              'Contrairement à d’autres cellules du corps, les cellules ciliées de la cochlée ne se renouvellent pas : leur destruction est définitive.',
          },
        ],
      },
    },
  },
  {
    cardId: 'comment-chante-une-guitare',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'son-guitare-ou',
            question: 'D’où sort surtout le son de la guitare ?',
            reponses: [
              { texte: 'De tout le bois qui vibre', icone: '🎸', correcte: true },
              { texte: 'Juste du trou rond', icone: '⭕' },
            ],
            explication:
              'C’est toute la caisse en bois qui vibre et fait le son, pas seulement le trou.',
          },
        ],
        '6-8': [
          {
            id: 'trou-seul',
            question: 'Le son de la guitare sort-il seulement du trou rond ?',
            reponses: [
              { texte: 'Non, c’est la caisse entière qui vibre', icone: '🎸', correcte: true },
              { texte: 'Oui, tout vient du trou', icone: '⭕' },
              { texte: 'Oui, le trou fabrique le son', icone: '🔘' },
            ],
            explication:
              'Le trou laisse juste sortir l’air mis en mouvement par la caisse entière, qui vibre et amplifie le son de la corde.',
          },
        ],
        '9-12': [
          {
            id: 'role-rosace',
            question: 'Quel rôle joue le trou (la rosace) de la guitare ?',
            reponses: [
              { texte: 'Il laisse rayonner l’air mis en mouvement par la caisse', icone: '🎸', correcte: true },
              { texte: 'Il fabrique lui-même le son', icone: '⭕' },
              { texte: 'Il sert uniquement de décoration', icone: '🎨' },
            ],
            explication:
              'Le son naît de la vibration de la corde amplifiée par la table d’harmonie ; la rosace permet à l’air interne de communiquer avec l’extérieur, sans être la source du son.',
          },
        ],
      },
    },
  },
  {
    cardId: 'la-sirene-qui-change',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'qui-change-sirene',
            question: 'Qui fait chanter la sirène plus grave après ?',
            reponses: [
              { texte: 'Le mouvement de l’ambulance', icone: '🚑', correcte: true },
              { texte: 'Le chauffeur qui baisse le son', icone: '🔉' },
            ],
            explication:
              'C’est parce que l’ambulance s’éloigne que le son parait plus grave, personne ne touche à rien.',
          },
        ],
        '6-8': [
          {
            id: 'sirene-passage',
            question: 'Pourquoi la sirène semble-t-elle changer de son au passage ?',
            reponses: [
              { texte: 'À cause du mouvement de l’ambulance', icone: '🚑', correcte: true },
              { texte: 'Le conducteur baisse le volume', icone: '🔉' },
              { texte: 'La sirène change vraiment de fréquence', icone: '🔧' },
            ],
            explication:
              'La sirène émet toujours le même son : c’est le mouvement du véhicule qui fait paraître le son plus aigu à l’approche, plus grave après.',
          },
        ],
        '9-12': [
          {
            id: 'conducteur-sirene',
            question: 'Que fait exactement le conducteur quand l’ambulance te dépasse ?',
            reponses: [
              { texte: 'Rien : la sirène ne change pas', icone: '🚑', correcte: true },
              { texte: 'Il baisse le volume au moment de passer', icone: '🔉' },
              { texte: 'Il change la fréquence de la sirène', icone: '🔧' },
            ],
            explication:
              'L’effet Doppler est un phénomène de propagation des ondes, pas une action du conducteur : la fréquence émise par la sirène reste constante tout du long.',
          },
        ],
      },
    },
  },
  {
    cardId: 'ma-voix-enregistree',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'voix-bizarre',
            question: 'Pourquoi ta voix enregistrée sonne bizarre ?',
            reponses: [
              { texte: 'Tu t’entends d’habitude aussi par les os', icone: '🦴', correcte: true },
              { texte: 'Le micro casse ta voix', icone: '🎙️' },
            ],
            explication:
              'D’habitude, tes os ajoutent des graves à ta voix ; l’enregistrement n’a que l’air, donc elle sonne plus aiguë.',
          },
        ],
        '6-8': [
          {
            id: 'micro-deforme',
            question: 'Le micro déforme-t-il vraiment ta voix ?',
            reponses: [
              { texte: 'Non, c’est toi qui t’entends autrement', icone: '🦴', correcte: true },
              { texte: 'Oui, il l’abîme', icone: '🎙️' },
              { texte: 'Oui, il ajoute des aigus', icone: '📈' },
            ],
            explication:
              'Le micro capte fidèlement le son dans l’air. C’est toi qui t’entends d’habitude avec des graves en plus, grâce à tes os.',
          },
        ],
        '9-12': [
          {
            id: 'vraie-voix',
            question: 'Qui entend ta « vraie » voix, celle de l’enregistrement ou celle que tu entends dans ta tête ?',
            reponses: [
              { texte: 'Les autres, depuis toujours', icone: '👂', correcte: true },
              { texte: 'Toi, dans ta tête', icone: '🧠' },
              { texte: 'Aucune des deux n’est réelle', icone: '❓' },
            ],
            explication:
              'Les autres t’ont toujours entendu par voie aérienne, comme l’enregistrement. Ta perception interne, enrichie par la conduction osseuse, est celle qui est propre à toi seul.',
          },
        ],
      },
    },
  },
  {
    cardId: 'les-sons-quon-nentend-pas',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'sifflet-chien',
            question: 'Le sifflet à chien fait-il un son pour tout le monde ?',
            reponses: [
              { texte: 'Non, seulement pour le chien', icone: '🐶', correcte: true },
              { texte: 'Non, il ne fait aucun son', icone: '🔇' },
            ],
            explication:
              'Le son existe, mais il est trop aigu pour tes oreilles à toi ; le chien, lui, l’entend.',
          },
        ],
        '6-8': [
          {
            id: 'son-existe',
            question: 'Si tu n’entends rien avec un sifflet à chien, y a-t-il vraiment un son ?',
            reponses: [
              { texte: 'Oui, mais trop aigu pour toi', icone: '🐶', correcte: true },
              { texte: 'Non, il ne se passe rien', icone: '🔇' },
              { texte: 'Non, c’est un objet cassé', icone: '🔧' },
            ],
            explication:
              'Le sifflet émet bien un son, un ultrason. Il existe, simplement hors de la plage que ton oreille peut capter.',
          },
        ],
        '9-12': [
          {
            id: 'son-inaudible',
            question: 'Un son inaudible pour l’humain est-il forcément inexistant ?',
            reponses: [
              { texte: 'Non, il peut être capté par d’autres espèces', icone: '🐋', correcte: true },
              { texte: 'Oui, l’oreille humaine capte tous les sons', icone: '👂' },
              { texte: 'Oui, sans oreille humaine, pas de son', icone: '🔇' },
            ],
            explication:
              'Ultrasons et infrasons existent bel et bien physiquement ; seule notre plage auditive limitée nous empêche de les percevoir.',
          },
        ],
      },
    },
  },
  {
    cardId: 'les-notes-qui-vont-ensemble',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'notes-ensemble',
            question: 'Pourquoi deux notes sonnent-elles bien ensemble ?',
            reponses: [
              { texte: 'Leurs vibrations s’accordent', icone: '🎵', correcte: true },
              { texte: 'C’est juste une question de goût', icone: '👍' },
            ],
            explication:
              'C’est un vrai rapport entre les vibrations, pas seulement une préférence.',
          },
        ],
        '6-8': [
          {
            id: 'question-de-gout',
            question: 'Deux notes qui sonnent bien ensemble, est-ce juste une question de goût ?',
            reponses: [
              { texte: 'Non, leurs vibrations s’emboîtent bien', icone: '🎵', correcte: true },
              { texte: 'Oui, c’est totalement subjectif', icone: '👍' },
              { texte: 'Oui, ça dépend de l’habitude', icone: '🎧' },
            ],
            explication:
              'Il existe un vrai rapport mathématique simple entre les fréquences des deux notes, ce qui explique pourquoi l’accord sonne agréable, indépendamment du goût.',
          },
        ],
        '9-12': [
          {
            id: 'accord-agreable',
            question: 'Qu’est-ce qui rend un accord musical agréable à l’oreille ?',
            reponses: [
              { texte: 'Un rapport simple entre les fréquences des notes', icone: '🔢', correcte: true },
              { texte: 'Une préférence purement culturelle', icone: '👍' },
              { texte: 'Le volume auquel les notes sont jouées', icone: '🔊' },
            ],
            explication:
              'Des fréquences dans un rapport de nombres entiers simples, comme l’octave (2:1) ou la quinte (3:2), créent une superposition d’ondes régulière que l’oreille perçoit comme harmonieuse.',
          },
        ],
      },
    },
  },
];
