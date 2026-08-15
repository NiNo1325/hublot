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
      en: {
        '3-5': [
          {
            id: 'squelette-entier',
            question: 'Do we find a whole dinosaur in the ground?',
            reponses: [
              { texte: 'No, just bits of bone', icone: '🦴', correcte: true },
              { texte: 'Yes, all in one piece', icone: '🦕' },
            ],
            explication: 'Bones are nearly always missing: the rest has to be worked out.',
          },
        ],
        '6-8': [
          {
            id: 'squelette-complet',
            question: 'When a dinosaur is dug up, do we find its whole skeleton?',
            reponses: [
              { texte: 'No, bones are nearly always missing', icone: '🦴', correcte: true },
              { texte: 'Yes, almost always complete', icone: '🦕' },
              { texte: 'Yes, with the skin still on it', icone: '🦎' },
            ],
            explication:
              'Complete skeletons are extremely rare: most of the bones are missing and are worked out by comparison.',
          },
        ],
        '9-12': [
          {
            id: 'un-seul-individu',
            question: 'Is a dinosaur skeleton on display in a museum made from the bones of a single animal?',
            reponses: [
              { texte: 'Not always: casts fill in the gaps', icone: '🧩', correcte: true },
              { texte: 'Yes, always one complete individual', icone: '🦴' },
              { texte: 'No, they are invented sculptures', icone: '🎨' },
            ],
            explication:
              'Many skeletons on display mix real bones with casts, and even borrow pieces from other individuals of the same species.',
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
      en: {
        '3-5': [
          {
            id: 'pourquoi-disparu',
            question: 'Why did the dinosaurs disappear?',
            reponses: [
              { texte: 'A giant rock fell from the sky', icone: '☄️', correcte: true },
              { texte: 'They just wandered off', icone: '🚶' },
            ],
            explication: 'An asteroid changed everything on Earth, and the dinosaurs could not adapt.',
          },
        ],
        '6-8': [
          {
            id: 'disparition-seule',
            question: 'Did the dinosaurs die out on their own, for no particular reason?',
            reponses: [
              { texte: 'No, an asteroid turned the climate upside down', icone: '☄️', correcte: true },
              { texte: 'Yes, they faded away naturally', icone: '🦕' },
              { texte: 'Yes, they grew old and died', icone: '⏳' },
            ],
            explication:
              'This was not a slow, natural fading away: one sudden event, an asteroid impact, turned the climate upside down in very little time.',
          },
        ],
        '9-12': [
          {
            id: 'extinction-progressive',
            question: 'Did the extinction of the non-avian dinosaurs unfold over millions of years?',
            reponses: [
              { texte: 'No, it was set off in a very short time', icone: '☄️', correcte: true },
              { texte: 'Yes, a slow and natural decline', icone: '📉' },
              { texte: 'Yes, through a very gradual change of climate', icone: '🌡️' },
            ],
            explication:
              'The geological record shows a precise coincidence between the impact and the Cretaceous-Palaeogene boundary: the extinction was sudden on a geological timescale.',
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
      en: {
        '3-5': [
          {
            id: 'tous-disparu',
            question: 'Did all the dinosaurs disappear?',
            reponses: [
              { texte: 'No, birds are dinosaurs', icone: '🐦', correcte: true },
              { texte: 'Yes, there are none left', icone: '🚫' },
            ],
            explication: 'The birds of today are the children of the feathered dinosaurs.',
          },
        ],
        '6-8': [
          {
            id: 'dinosaures-vivants',
            question: 'Are there still any dinosaurs alive today?',
            reponses: [
              { texte: 'Yes, they are the birds', icone: '🐦', correcte: true },
              { texte: 'No, not one of them survived', icone: '🚫' },
              { texte: 'Yes, but only giant lizards', icone: '🦎' },
            ],
            explication:
              'Birds are the direct descendants of the small feathered dinosaurs that survived the extinction.',
          },
        ],
        '9-12': [
          {
            id: 'pigeon-tyrannosaure',
            question: 'Is the pigeon you pass in the street related to Tyrannosaurus?',
            reponses: [
              { texte: 'Yes, they are both dinosaurs', icone: '🐦', correcte: true },
              { texte: 'No, no family link at all', icone: '🚫' },
              { texte: 'Only by resemblance, not by ancestry', icone: '🎭' },
            ],
            explication:
              'Cladistically, birds form a group of theropod dinosaurs just as Tyrannosaurus does: they share a common ancestor.',
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
      en: {
        '3-5': [
          {
            id: 'hommes-cavernes',
            question: 'Did cave people ever see a dinosaur?',
            reponses: [
              { texte: 'No, never', icone: '🚫', correcte: true },
              { texte: 'Yes, they hunted them', icone: '🏹' },
            ],
            explication: 'The dinosaurs had disappeared long before the very first people.',
          },
        ],
        '6-8': [
          {
            id: 'chasse-dinosaure',
            question: 'Could a prehistoric human have hunted a dinosaur?',
            reponses: [
              { texte: 'No, they never met', icone: '🚫', correcte: true },
              { texte: 'Yes, with a spear', icone: '🏹' },
              { texte: 'Yes, but only the small ones', icone: '🦎' },
            ],
            explication:
              'Sixty-six million years separate the last non-bird dinosaur from the first human.',
          },
        ],
        '9-12': [
          {
            id: 'trex-stegosaure',
            question: 'Did Tyrannosaurus and Stegosaurus live at the same time?',
            reponses: [
              { texte: 'No, eighty million years lie between them', icone: '⏳', correcte: true },
              { texte: 'Yes, they lived side by side', icone: '🤝' },
              { texte: 'Yes, give or take a few million years', icone: '📆' },
            ],
            explication:
              'Stegosaurus died out about eighty million years before Tyrannosaurus appeared: the two could never have met.',
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
      en: {
        '3-5': [
          {
            id: 'trex-plus-grand',
            question: 'Was the tyrannosaur the biggest dinosaur of all?',
            reponses: [
              { texte: 'No, plant-eaters were far bigger', icone: '🦕', correcte: true },
              { texte: 'Yes, the biggest of them all', icone: '🦖' },
            ],
            explication: 'The long-necked plant-eaters were far bigger than the tyrannosaur.',
          },
        ],
        '6-8': [
          {
            id: 'type-plus-grand',
            question: 'Which kind of dinosaur included the largest species?',
            reponses: [
              { texte: 'The long-necked plant-eaters', icone: '🦕', correcte: true },
              { texte: 'The meat-eaters, like the tyrannosaur', icone: '🦖' },
              { texte: 'The feathered dinosaurs', icone: '🪶' },
            ],
            explication:
              'The plant-eating sauropods, such as Diplodocus or Argentinosaurus, were far bigger than the tyrannosaur.',
          },
        ],
        '9-12': [
          {
            id: 'argentinosaurus-trex',
            question: 'Was Argentinosaurus bigger than Tyrannosaurus rex?',
            reponses: [
              { texte: 'Yes, far longer and far heavier', icone: '🦕', correcte: true },
              { texte: 'No, the tyrannosaur was the biggest', icone: '🦖' },
              { texte: 'They were exactly the same size', icone: '🟰' },
            ],
            explication:
              'At thirty-five metres, Argentinosaurus dwarfed the twelve metres of the tyrannosaur: the largest dinosaurs were herbivores.',
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
      en: {
        '3-5': [
          {
            id: 'tous-viande',
            question: 'Did all the dinosaurs eat meat?',
            reponses: [
              { texte: 'No, lots of them ate plants', icone: '🌿', correcte: true },
              { texte: 'Yes, every one of them', icone: '🥩' },
            ],
            explication: 'Most dinosaurs were plant-eaters, not meat-eaters.',
          },
        ],
        '6-8': [
          {
            id: 'majorite-carnivore',
            question: 'Were most dinosaur species meat-eaters?',
            reponses: [
              { texte: 'No, the majority ate plants', icone: '🌿', correcte: true },
              { texte: 'Yes, nearly all of them hunted', icone: '🥩' },
              { texte: 'Yes, because of the tyrannosaur', icone: '🦖' },
            ],
            explication:
              'The tyrannosaur is famous, but the great majority of known dinosaur species were plant-eaters.',
          },
        ],
        '9-12': [
          {
            id: 'predateur-feroce',
            question: 'Can we treat “dinosaur” as another word for “fierce predator”?',
            reponses: [
              { texte: 'No, most of them grazed on plants', icone: '🌿', correcte: true },
              { texte: 'Yes, they all hunted in packs', icone: '🦖' },
              { texte: 'Yes, only the small ones ate plants', icone: '🦎' },
            ],
            explication:
              'Big predators like the tyrannosaur captured the imagination, but herbivores and omnivores made up the majority of species.',
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
      en: {
        '3-5': [
          {
            id: 'fossile-os',
            question: 'Is a fossil always a bone?',
            reponses: [
              { texte: 'No, it can be a footprint', icone: '👣', correcte: true },
              { texte: 'Yes, always a bone', icone: '🦴' },
            ],
            explication: 'A footprint left in the rock is a fossil too.',
          },
        ],
        '6-8': [
          {
            id: 'fossile-os-dent',
            question: 'Does a fossil have to be a bone or a tooth?',
            reponses: [
              { texte: 'No, a footprint can be a fossil', icone: '👣', correcte: true },
              { texte: 'Yes, bones only', icone: '🦴' },
              { texte: 'Yes, teeth only', icone: '🦷' },
            ],
            explication:
              'A trace of activity kept in the rock, such as a print or a trackway, is called a trace fossil.',
          },
        ],
        '9-12': [
          {
            id: 'empreintes-moins-utiles',
            question: 'Do fossilised footprints teach us less than bones do?',
            reponses: [
              { texte: 'No, they record how the animal behaved', icone: '👣', correcte: true },
              { texte: 'Yes, they only show the shape of the foot', icone: '🦶' },
              { texte: 'Yes, only bones are of scientific use', icone: '🦴' },
            ],
            explication:
              'Unlike bones, fossilised trackways record real behaviour: speed, gait, life in a group — things that bones on their own never tell us.',
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
      en: {
        '3-5': [
          {
            id: 'gris-sans-plumes',
            question: 'Were all the dinosaurs grey, with no feathers?',
            reponses: [
              { texte: 'No, some had colourful feathers', icone: '🪶', correcte: true },
              { texte: 'Yes, all grey and bare', icone: '🦎' },
            ],
            explication: 'Some dinosaurs had feathers in bright colours.',
          },
        ],
        '6-8': [
          {
            id: 'couleur-connue',
            question: 'Do we really know what colour some dinosaurs were?',
            reponses: [
              { texte: 'Yes, thanks to grains found in their feathers', icone: '🔬', correcte: true },
              { texte: 'No, it is always completely made up', icone: '🎨' },
              { texte: 'Yes, but only in black and white', icone: '⚫' },
            ],
            explication:
              'Fossilised melanosomes let us bring back some of the real colours: it is not pure invention.',
          },
        ],
        '9-12': [
          {
            id: 'apparence-imaginaire',
            question: 'Is the colourful look of dinosaurs in books purely imaginary?',
            reponses: [
              { texte: 'Not always: some colours are reconstructed scientifically', icone: '🔬', correcte: true },
              { texte: 'Yes, entirely invented by the artists', icone: '🎨' },
              { texte: 'Yes, since no trace of a feather ever survives', icone: '🚫' },
            ],
            explication:
              'For a few exceptionally fossilised species, analysing the melanosomes gives colours grounded in evidence, even if many species remain guesswork.',
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
      en: {
        '3-5': [
          {
            id: 'pterosaure-dinosaure',
            question: 'Is the flying pterosaur a dinosaur?',
            reponses: [
              { texte: 'No, it is a flying cousin', icone: '🦅', correcte: true },
              { texte: 'Yes, a flying dinosaur', icone: '🦕' },
            ],
            explication: 'The pterosaur is a flying reptile, a cousin of the dinosaurs, not a dinosaur.',
          },
        ],
        '6-8': [
          {
            id: 'plesiosaure-dinosaure',
            question: 'Was the plesiosaur that swam in the sea a dinosaur?',
            reponses: [
              { texte: 'No, it is a cousin, a sea reptile', icone: '🌊', correcte: true },
              { texte: 'Yes, a water dinosaur', icone: '🦕' },
              { texte: 'Yes, a giant fish', icone: '🐟' },
            ],
            explication:
              'The plesiosaur never set foot on land and its skeleton is clearly different from a dinosaur’s: it is not a dinosaur.',
          },
        ],
        '9-12': [
          {
            id: 'reptile-automatiquement',
            question: 'Is any large prehistoric reptile automatically a dinosaur?',
            reponses: [
              { texte: 'No, there were other groups of reptiles', icone: '🦎', correcte: true },
              { texte: 'Yes, by definition', icone: '✅' },
              { texte: 'Yes, if it lived in the Cretaceous', icone: '📅' },
            ],
            explication:
              'Flying pterosaurs and marine plesiosaurs lived at the same time, but their anatomy, and the hip in particular, places them outside the dinosaur group.',
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
      en: {
        '3-5': [
          {
            id: 'mammouths-dinosaures',
            question: 'Did mammoths live with the dinosaurs?',
            reponses: [
              { texte: 'No, long after them', icone: '🦣', correcte: true },
              { texte: 'Yes, all together', icone: '🦕' },
            ],
            explication: 'Mammoths turned up a very long time after the dinosaurs had disappeared.',
          },
        ],
        '6-8': [
          {
            id: 'mammouth-croise-dinosaure',
            question: 'Could a mammoth have come across a dinosaur?',
            reponses: [
              { texte: 'No, millions of years lie between them', icone: '⏳', correcte: true },
              { texte: 'Yes, they lived at the same time', icone: '🤝' },
              { texte: 'Yes, but only the small dinosaurs', icone: '🦎' },
            ],
            explication:
              'The non-bird dinosaurs had died out long before the very first mammoths appeared.',
          },
        ],
        '9-12': [
          {
            id: 'ecart-temps',
            question: 'How much time separates the end of the non-avian dinosaurs from the end of the mammoths?',
            reponses: [
              { texte: 'About sixty-five million years', icone: '⏳', correcte: true },
              { texte: 'Only a few thousand years', icone: '📅' },
              { texte: 'They died out at the same time', icone: '🟰' },
            ],
            explication:
              'The non-avian dinosaurs died out sixty-six million years ago, the mammoths only about ten thousand years ago.',
          },
        ],
      },
    },
  },
];
