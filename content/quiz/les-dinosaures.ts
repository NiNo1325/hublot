import type { QuizCarte } from '@/lib/types';

/**
 * Questions du domaine « Les dinosaures ».
 *
 * Règle de rédaction : la mauvaise réponse reprend l'idée reçue que la carte
 * corrige. Pour les 3-5 ans, deux propositions seulement, et des énoncés assez
 * courts pour tenir dans une phrase entendue.
 */
export const quiz: QuizCarte[] = [
  {
    cardId: 'le-puzzle-des-os',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'squelette-entier',
            question: 'Trouve-t-on un dinosaure entier dans la terre ?',
            reponses: [
              { texte: 'Non, juste des morceaux d’os', icone: '🦴', correcte: true },
              { texte: 'Oui, tout entier', icone: '🦕' },
            ],
            explication: 'Il manque presque toujours des os : il faut deviner le reste.',
          },
        ],
        '6-8': [
          {
            id: 'squelette-complet',
            question: 'Quand on déterre un dinosaure, retrouve-t-on tout son squelette ?',
            reponses: [
              { texte: 'Non, il manque presque toujours des os', icone: '🦴', correcte: true },
              { texte: 'Oui, presque toujours entier', icone: '🦕' },
              { texte: 'Oui, avec la peau encore dessus', icone: '🦎' },
            ],
            explication:
              'Les squelettes complets sont extrêmement rares : la plupart des os manquent et sont devinés par comparaison.',
          },
        ],
        '9-12': [
          {
            id: 'un-seul-individu',
            question: 'Un squelette de dinosaure exposé au musée est-il fait des os d’un seul animal ?',
            reponses: [
              { texte: 'Pas toujours : des moulages complètent les manques', icone: '🧩', correcte: true },
              { texte: 'Oui, toujours d’un seul individu complet', icone: '🦴' },
              { texte: 'Non, ce sont des sculptures inventées', icone: '🎨' },
            ],
            explication:
              'Beaucoup de squelettes exposés mélangent os réels et moulages, voire empruntent des pièces à d’autres individus de la même espèce.',
          },
        ],
      },
    },
  },
  {
    cardId: 'le-jour-de-lasteroide',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'pourquoi-disparu',
            question: 'Pourquoi les dinosaures ont-ils disparu ?',
            reponses: [
              { texte: 'Un caillou géant est tombé du ciel', icone: '☄️', correcte: true },
              { texte: 'Ils sont partis tout seuls', icone: '🚶' },
            ],
            explication: 'Un astéroïde a tout changé sur Terre, et les dinosaures n’ont pas pu s’adapter.',
          },
        ],
        '6-8': [
          {
            id: 'disparition-seule',
            question: 'Les dinosaures ont-ils disparu tout seuls, sans raison particulière ?',
            reponses: [
              { texte: 'Non, un astéroïde a bouleversé le climat', icone: '☄️', correcte: true },
              { texte: 'Oui, ils se sont éteints naturellement', icone: '🦕' },
              { texte: 'Oui, ils ont vieilli et sont morts', icone: '⏳' },
            ],
            explication:
              'Ce n’est pas une extinction naturelle et progressive : un événement brutal, la chute d’un astéroïde, a bouleversé le climat en très peu de temps.',
          },
        ],
        '9-12': [
          {
            id: 'extinction-progressive',
            question: 'L’extinction des dinosaures non aviens s’est-elle produite sur des millions d’années ?',
            reponses: [
              { texte: 'Non, elle a été déclenchée en un temps très court', icone: '☄️', correcte: true },
              { texte: 'Oui, un déclin lent et naturel', icone: '📉' },
              { texte: 'Oui, à cause d’un changement de climat très progressif', icone: '🌡️' },
            ],
            explication:
              'Les données géologiques montrent une coïncidence précise entre l’impact et la limite Crétacé-Paléogène : l’extinction a été soudaine à l’échelle des temps géologiques.',
          },
        ],
      },
    },
  },
  {
    cardId: 'les-oiseaux-sont-des-dinosaures',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'tous-disparu',
            question: 'Est-ce que tous les dinosaures ont disparu ?',
            reponses: [
              { texte: 'Non, les oiseaux sont des dinosaures', icone: '🐦', correcte: true },
              { texte: 'Oui, plus aucun n’existe', icone: '🚫' },
            ],
            explication: 'Les oiseaux d’aujourd’hui sont les descendants des dinosaures à plumes.',
          },
        ],
        '6-8': [
          {
            id: 'dinosaures-vivants',
            question: 'Reste-t-il des dinosaures vivants aujourd’hui ?',
            reponses: [
              { texte: 'Oui, ce sont les oiseaux', icone: '🐦', correcte: true },
              { texte: 'Non, plus aucun n’a survécu', icone: '🚫' },
              { texte: 'Oui, mais seulement des lézards géants', icone: '🦎' },
            ],
            explication:
              'Les oiseaux descendent directement des petits dinosaures à plumes qui ont survécu à l’extinction.',
          },
        ],
        '9-12': [
          {
            id: 'pigeon-tyrannosaure',
            question: 'Le pigeon que tu croises dans la rue est-il apparenté au Tyrannosaure ?',
            reponses: [
              { texte: 'Oui, ce sont tous les deux des dinosaures', icone: '🐦', correcte: true },
              { texte: 'Non, aucun lien de parenté', icone: '🚫' },
              { texte: 'Seulement par ressemblance, pas par ascendance', icone: '🎭' },
            ],
            explication:
              'Sur le plan cladistique, les oiseaux forment un groupe de dinosaures théropodes au même titre que le Tyrannosaure : ils partagent un ancêtre commun.',
          },
        ],
      },
    },
  },
  {
    cardId: 'il-y-a-tres-tres-longtemps',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'hommes-cavernes',
            question: 'Les hommes des cavernes ont-ils vu des dinosaures ?',
            reponses: [
              { texte: 'Non, jamais', icone: '🚫', correcte: true },
              { texte: 'Oui, ils les chassaient', icone: '🏹' },
            ],
            explication: 'Les dinosaures avaient disparu bien avant les premiers humains.',
          },
        ],
        '6-8': [
          {
            id: 'chasse-dinosaure',
            question: 'Un homme préhistorique a-t-il pu chasser un dinosaure ?',
            reponses: [
              { texte: 'Non, ils ne se sont jamais croisés', icone: '🚫', correcte: true },
              { texte: 'Oui, avec une lance', icone: '🏹' },
              { texte: 'Oui, mais seulement les petits', icone: '🦎' },
            ],
            explication:
              'Soixante-six millions d’années séparent le dernier dinosaure non avien du premier humain.',
          },
        ],
        '9-12': [
          {
            id: 'trex-stegosaure',
            question: 'Le Tyrannosaure et le Stégosaure ont-ils vécu à la même époque ?',
            reponses: [
              { texte: 'Non, quatre-vingts millions d’années les séparent', icone: '⏳', correcte: true },
              { texte: 'Oui, ils cohabitaient', icone: '🤝' },
              { texte: 'Oui, à quelques millions d’années près', icone: '📆' },
            ],
            explication:
              'Le Stégosaure a disparu environ quatre-vingts millions d’années avant l’apparition du Tyrannosaure : ils n’ont jamais pu se croiser.',
          },
        ],
      },
    },
  },
  {
    cardId: 'pourquoi-si-grands',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'trex-plus-grand',
            question: 'Le tyrannosaure était-il le plus grand dinosaure ?',
            reponses: [
              { texte: 'Non, des herbivores étaient bien plus grands', icone: '🦕', correcte: true },
              { texte: 'Oui, le plus grand de tous', icone: '🦖' },
            ],
            explication: 'Les herbivores à long cou dépassaient largement la taille du tyrannosaure.',
          },
        ],
        '6-8': [
          {
            id: 'type-plus-grand',
            question: 'Quel type de dinosaure comptait les plus grandes espèces ?',
            reponses: [
              { texte: 'Les herbivores à long cou', icone: '🦕', correcte: true },
              { texte: 'Les carnivores comme le tyrannosaure', icone: '🦖' },
              { texte: 'Les dinosaures à plumes', icone: '🪶' },
            ],
            explication:
              'Les sauropodes herbivores, comme le Diplodocus ou l’Argentinosaurus, dépassaient largement la taille du tyrannosaure.',
          },
        ],
        '9-12': [
          {
            id: 'argentinosaurus-trex',
            question: 'L’Argentinosaurus était-il plus grand que le Tyrannosaurus rex ?',
            reponses: [
              { texte: 'Oui, bien plus long et plus lourd', icone: '🦕', correcte: true },
              { texte: 'Non, le tyrannosaure était le plus grand', icone: '🦖' },
              { texte: 'Ils avaient exactement la même taille', icone: '🟰' },
            ],
            explication:
              'Avec ses trente-cinq mètres, l’Argentinosaurus dépassait largement les douze mètres du tyrannosaure : les plus grands dinosaures étaient herbivores.',
          },
        ],
      },
    },
  },
  {
    cardId: 'carnivore-ou-herbivore',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'tous-viande',
            question: 'Est-ce que tous les dinosaures mangeaient de la viande ?',
            reponses: [
              { texte: 'Non, beaucoup mangeaient des plantes', icone: '🌿', correcte: true },
              { texte: 'Oui, tous étaient carnivores', icone: '🥩' },
            ],
            explication: 'La plupart des dinosaures étaient herbivores, pas carnivores.',
          },
        ],
        '6-8': [
          {
            id: 'majorite-carnivore',
            question: 'La plupart des espèces de dinosaures étaient-elles carnivores ?',
            reponses: [
              { texte: 'Non, la majorité étaient herbivores', icone: '🌿', correcte: true },
              { texte: 'Oui, presque tous chassaient', icone: '🥩' },
              { texte: 'Oui, à cause du tyrannosaure', icone: '🦖' },
            ],
            explication:
              'Le tyrannosaure est célèbre, mais la grande majorité des espèces de dinosaures connues étaient herbivores.',
          },
        ],
        '9-12': [
          {
            id: 'predateur-feroce',
            question: 'Peut-on dire que « dinosaure » est synonyme de « prédateur féroce » ?',
            reponses: [
              { texte: 'Non, la plupart broutaient des plantes', icone: '🌿', correcte: true },
              { texte: 'Oui, tous chassaient en groupe', icone: '🦖' },
              { texte: 'Oui, seuls les petits mangeaient des plantes', icone: '🦎' },
            ],
            explication:
              'Les grands prédateurs comme le tyrannosaure ont marqué l’imaginaire, mais herbivores et omnivores composaient la majorité des espèces.',
          },
        ],
      },
    },
  },
  {
    cardId: 'les-traces-de-pas',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'fossile-os',
            question: 'Un fossile, c’est toujours un os ?',
            reponses: [
              { texte: 'Non, ça peut être une trace de pas', icone: '👣', correcte: true },
              { texte: 'Oui, toujours un os', icone: '🦴' },
            ],
            explication: 'Une trace de pas dans la roche est aussi un fossile.',
          },
        ],
        '6-8': [
          {
            id: 'fossile-os-dent',
            question: 'Est-ce qu’un fossile est forcément un os ou une dent ?',
            reponses: [
              { texte: 'Non, une trace de pas peut être un fossile', icone: '👣', correcte: true },
              { texte: 'Oui, uniquement des os', icone: '🦴' },
              { texte: 'Oui, seulement des dents', icone: '🦷' },
            ],
            explication:
              'On appelle ichnofossile une trace d’activité, comme une empreinte ou une piste, conservée dans la roche.',
          },
        ],
        '9-12': [
          {
            id: 'empreintes-moins-utiles',
            question: 'Les empreintes de pas fossilisées apprennent-elles moins de choses que les os ?',
            reponses: [
              { texte: 'Non, elles renseignent sur le comportement vivant', icone: '👣', correcte: true },
              { texte: 'Oui, elles ne montrent que la forme du pied', icone: '🦶' },
              { texte: 'Oui, seuls les os sont exploitables scientifiquement', icone: '🦴' },
            ],
            explication:
              'Contrairement aux os, les pistes fossilisées enregistrent un comportement réel : vitesse, démarche, vie en groupe — des informations que les ossements seuls ne donnent pas.',
          },
        ],
      },
    },
  },
  {
    cardId: 'des-dinosaures-a-plumes',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'gris-sans-plumes',
            question: 'Les dinosaures étaient-ils tous gris, sans plumes ?',
            reponses: [
              { texte: 'Non, certains avaient des plumes colorées', icone: '🪶', correcte: true },
              { texte: 'Oui, tous gris et sans plumes', icone: '🦎' },
            ],
            explication: 'Certains dinosaures avaient des plumes aux couleurs vives.',
          },
        ],
        '6-8': [
          {
            id: 'couleur-connue',
            question: 'Sait-on vraiment de quelle couleur étaient certains dinosaures ?',
            reponses: [
              { texte: 'Oui, grâce aux grains trouvés dans leurs plumes', icone: '🔬', correcte: true },
              { texte: 'Non, c’est toujours totalement inventé', icone: '🎨' },
              { texte: 'Oui, mais seulement en noir et blanc', icone: '⚫' },
            ],
            explication:
              'Les mélanosomes fossilisés permettent de reconstituer certaines couleurs réelles : ce n’est pas une pure invention.',
          },
        ],
        '9-12': [
          {
            id: 'apparence-imaginaire',
            question: 'L’apparence colorée des dinosaures dans les livres est-elle purement imaginaire ?',
            reponses: [
              { texte: 'Pas toujours : certaines couleurs sont reconstituées scientifiquement', icone: '🔬', correcte: true },
              { texte: 'Oui, entièrement inventée par les artistes', icone: '🎨' },
              { texte: 'Oui, car aucune trace de plume ne subsiste jamais', icone: '🚫' },
            ],
            explication:
              'Pour certaines espèces exceptionnellement fossilisées, l’analyse des mélanosomes donne des couleurs fondées sur des preuves, même si beaucoup d’espèces restent hypothétiques.',
          },
        ],
      },
    },
  },
  {
    cardId: 'pas-tous-des-dinosaures',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'pterosaure-dinosaure',
            question: 'Le ptérosaure qui vole est-il un dinosaure ?',
            reponses: [
              { texte: 'Non, c’est un cousin volant', icone: '🦅', correcte: true },
              { texte: 'Oui, un dinosaure volant', icone: '🦕' },
            ],
            explication: 'Le ptérosaure est un reptile volant cousin des dinosaures, pas un dinosaure.',
          },
        ],
        '6-8': [
          {
            id: 'plesiosaure-dinosaure',
            question: 'Le plésiosaure qui nageait dans la mer était-il un dinosaure ?',
            reponses: [
              { texte: 'Non, c’est un reptile marin cousin', icone: '🌊', correcte: true },
              { texte: 'Oui, un dinosaure aquatique', icone: '🦕' },
              { texte: 'Oui, un poisson géant', icone: '🐟' },
            ],
            explication:
              'Le plésiosaure n’a jamais mis une patte sur terre et son squelette diffère nettement de celui des dinosaures : ce n’est pas un dinosaure.',
          },
        ],
        '9-12': [
          {
            id: 'reptile-automatiquement',
            question: 'Un grand reptile préhistorique est-il automatiquement un dinosaure ?',
            reponses: [
              { texte: 'Non, il existait d’autres groupes de reptiles', icone: '🦎', correcte: true },
              { texte: 'Oui, par définition', icone: '✅' },
              { texte: 'Oui, s’il vivait au Crétacé', icone: '📅' },
            ],
            explication:
              'Ptérosaures volants et plésiosaures marins ont vécu à la même époque, mais leur anatomie, notamment celle de la hanche, les classe hors du groupe des dinosaures.',
          },
        ],
      },
    },
  },
  {
    cardId: 'apres-les-dinosaures',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'mammouths-dinosaures',
            question: 'Les mammouths ont-ils vécu avec les dinosaures ?',
            reponses: [
              { texte: 'Non, bien après eux', icone: '🦣', correcte: true },
              { texte: 'Oui, ensemble', icone: '🦕' },
            ],
            explication: 'Les mammouths sont arrivés très longtemps après la disparition des dinosaures.',
          },
        ],
        '6-8': [
          {
            id: 'mammouth-croise-dinosaure',
            question: 'Un mammouth a-t-il pu croiser un dinosaure ?',
            reponses: [
              { texte: 'Non, des millions d’années les séparent', icone: '⏳', correcte: true },
              { texte: 'Oui, à la même époque', icone: '🤝' },
              { texte: 'Oui, mais seulement les petits dinosaures', icone: '🦎' },
            ],
            explication:
              'Les dinosaures non aviens ont disparu bien avant même l’apparition des premiers mammouths.',
          },
        ],
        '9-12': [
          {
            id: 'ecart-temps',
            question: 'Combien de temps sépare la disparition des dinosaures non aviens de celle des mammouths ?',
            reponses: [
              { texte: 'Environ soixante-cinq millions d’années', icone: '⏳', correcte: true },
              { texte: 'Quelques milliers d’années seulement', icone: '📅' },
              { texte: 'Ils ont disparu en même temps', icone: '🟰' },
            ],
            explication:
              'Les dinosaures non aviens s’éteignent il y a soixante-six millions d’années, les mammouths seulement il y a environ dix mille ans.',
          },
        ],
      },
    },
  },
];
