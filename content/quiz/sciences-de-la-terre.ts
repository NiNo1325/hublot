import type { QuizCarte } from '@/lib/types';

/**
 * Questions du domaine « La Terre ».
 *
 * Règle de rédaction : la mauvaise réponse reprend l'idée reçue que la carte
 * corrige. Pour les 3-5 ans, deux propositions seulement, et des énoncés assez
 * courts pour tenir dans une phrase entendue.
 */
export const quiz: QuizCarte[] = [
  {
    cardId: 'cycle-de-leau',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'ou-va-leau',
            question: "Le soleil chauffe la mer. Où va l'eau ?",
            reponses: [
              { texte: 'Elle monte dans le ciel', icone: '☁️', correcte: true },
              { texte: 'Elle disparaît pour toujours', icone: '🕳️' },
            ],
            explication: "L'eau monte dans le ciel, puis elle retombe en pluie.",
          },
        ],
        '6-8': [
          {
            id: 'nuage-fait-de',
            question: 'De quoi un nuage est-il fait ?',
            reponses: [
              { texte: "De minuscules gouttes d'eau", icone: '💧', correcte: true },
              { texte: 'De fumée', icone: '💨' },
              { texte: 'De coton', icone: '☁️' },
            ],
            explication:
              "Un nuage est fait de gouttelettes si petites qu'elles flottent dans l'air.",
          },
        ],
        '9-12': [
          {
            id: 'quantite-eau',
            question: "La quantité d'eau sur Terre change-t-elle ?",
            reponses: [
              { texte: "Non, c'est toujours la même", icone: '♻️', correcte: true },
              { texte: 'Oui, elle diminue en s’évaporant', icone: '📉' },
              { texte: 'Oui, la pluie en fabrique', icone: '🌧️' },
            ],
            explication:
              "L'eau circule sans se perdre : celle que tu bois a peut-être déjà été bue par un dinosaure.",
          },
        ],
      },
      en: {
        '3-5': [
          {
            id: 'ou-va-leau',
            question: 'The sun warms the sea. Where does the water go?',
            reponses: [
              { texte: 'It rises into the sky', icone: '☁️', correcte: true },
              { texte: 'It disappears for ever', icone: '🕳️' },
            ],
            explication: 'The water rises into the sky, then it falls back down as rain.',
          },
        ],
        '6-8': [
          {
            id: 'nuage-fait-de',
            question: 'What is a cloud made of?',
            reponses: [
              { texte: 'Tiny drops of water', icone: '💧', correcte: true },
              { texte: 'Smoke', icone: '💨' },
              { texte: 'Cotton wool', icone: '☁️' },
            ],
            explication:
              'A cloud is made of droplets so small that they float in the air.',
          },
        ],
        '9-12': [
          {
            id: 'quantite-eau',
            question: 'Does the amount of water on Earth change?',
            reponses: [
              { texte: 'No, it is always the same', icone: '♻️', correcte: true },
              { texte: 'Yes, it goes down as it evaporates', icone: '📉' },
              { texte: 'Yes, rain makes more of it', icone: '🌧️' },
            ],
            explication:
              'Water goes round without being lost: the water you drink may already have been drunk by a dinosaur.',
          },
        ],
      },
    },
  },
  {
    cardId: 'les-volcans',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'lave-quoi',
            question: 'La lave qui sort du volcan, c’est quoi ?',
            reponses: [
              { texte: 'De la roche toute chaude', icone: '🪨', correcte: true },
              { texte: 'Du feu', icone: '🔥' },
            ],
            explication: "La lave est de la roche fondue, brûlante mais ce n'est pas du feu.",
          },
        ],
        '6-8': [
          {
            id: 'pourquoi-monte',
            question: 'Pourquoi le magma remonte-t-il vers la surface ?',
            reponses: [
              { texte: "Parce qu'il est moins lourd que la roche autour", icone: '🎈', correcte: true },
              { texte: 'Parce que la Terre le pousse avec du vent', icone: '🌬️' },
              { texte: "Parce qu'il est attiré par le soleil", icone: '☀️' },
            ],
            explication:
              'Moins dense que la roche solide, le magma remonte comme une bulle dans l’eau.',
          },
        ],
        '9-12': [
          {
            id: 'explosif',
            question: "Qu'est-ce qui rend une éruption explosive ?",
            reponses: [
              { texte: 'Les gaz dissous qui se détendent', icone: '🫧', correcte: true },
              { texte: 'La température de la lave', icone: '🌡️' },
              { texte: 'La hauteur du volcan', icone: '⛰️' },
            ],
            explication:
              "En remontant, la pression baisse et les gaz forment des bulles : c'est leur expansion qui projette le magma.",
          },
        ],
      },
      en: {
        '3-5': [
          {
            id: 'lave-quoi',
            question: 'The lava coming out of a volcano — what is it?',
            reponses: [
              { texte: 'Red-hot rock', icone: '🪨', correcte: true },
              { texte: 'Fire', icone: '🔥' },
            ],
            explication: 'Lava is melted rock, burning hot, but it is not fire.',
          },
        ],
        '6-8': [
          {
            id: 'pourquoi-monte',
            question: 'Why does magma rise towards the surface?',
            reponses: [
              { texte: 'Because it is lighter than the rock around it', icone: '🎈', correcte: true },
              { texte: 'Because the Earth pushes it up with wind', icone: '🌬️' },
              { texte: 'Because the sun pulls it upwards', icone: '☀️' },
            ],
            explication:
              'Less dense than the solid rock, magma rises like a bubble in water.',
          },
        ],
        '9-12': [
          {
            id: 'explosif',
            question: 'What makes an eruption explosive?',
            reponses: [
              { texte: 'The dissolved gases expanding', icone: '🫧', correcte: true },
              { texte: 'The temperature of the lava', icone: '🌡️' },
              { texte: 'The height of the volcano', icone: '⛰️' },
            ],
            explication:
              'As it rises, the pressure falls and the gases form bubbles: it is their expansion that throws the magma out.',
          },
        ],
      },
    },
  },
  {
    cardId: 'pourquoi-la-terre-tremble',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'sol-morceaux',
            question: 'Le sol de la Terre est fait comment ?',
            reponses: [
              { texte: 'De grands morceaux qui bougent', icone: '🧩', correcte: true },
              { texte: "D'un seul bloc qui ne bouge jamais", icone: '🟫' },
            ],
            explication: 'Le sol est fait de grandes plaques qui glissent très lentement.',
          },
        ],
        '6-8': [
          {
            id: 'sol-souvre',
            question: 'Pendant un tremblement de terre, le sol s’ouvre-t-il en gouffre ?',
            reponses: [
              { texte: 'Non, les plaques glissent l’une contre l’autre', icone: '↔️', correcte: true },
              { texte: 'Oui, un grand trou avale tout', icone: '🕳️' },
              { texte: 'Oui, mais seulement la nuit', icone: '🌙' },
            ],
            explication:
              'Le sol ne s’ouvre pas comme au cinéma : ce sont les bâtiments qui sont dangereux.',
          },
        ],
        '9-12': [
          {
            id: 'ondes-p-s',
            question: 'Quelles ondes arrivent en premier lors d’un séisme ?',
            reponses: [
              { texte: 'Les ondes P, de compression', icone: '⚡', correcte: true },
              { texte: 'Les ondes S, de cisaillement', icone: '🌊' },
              { texte: 'Les deux exactement en même temps', icone: '⏱️' },
            ],
            explication:
              'Les ondes P vont plus vite : cet écart permet de localiser le foyer et de donner l’alerte.',
          },
        ],
      },
      en: {
        '3-5': [
          {
            id: 'sol-morceaux',
            question: 'What is the ground of the Earth made of?',
            reponses: [
              { texte: 'Big pieces that move', icone: '🧩', correcte: true },
              { texte: 'One single block that never moves', icone: '🟫' },
            ],
            explication: 'The ground is made of big plates that slide along very slowly.',
          },
        ],
        '6-8': [
          {
            id: 'sol-souvre',
            question: 'During an earthquake, does the ground open up into a chasm?',
            reponses: [
              { texte: 'No, the plates slide against each other', icone: '↔️', correcte: true },
              { texte: 'Yes, a big hole swallows everything', icone: '🕳️' },
              { texte: 'Yes, but only at night', icone: '🌙' },
            ],
            explication:
              'The ground does not open up as it does in films: it is the buildings that are dangerous.',
          },
        ],
        '9-12': [
          {
            id: 'ondes-p-s',
            question: 'Which waves arrive first during an earthquake?',
            reponses: [
              { texte: 'P waves, compression waves', icone: '⚡', correcte: true },
              { texte: 'S waves, shear waves', icone: '🌊' },
              { texte: 'Both at exactly the same time', icone: '⏱️' },
            ],
            explication:
              'P waves travel faster: that gap makes it possible to locate the focus and raise the alarm.',
          },
        ],
      },
    },
  },
  {
    cardId: 'les-fossiles',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'fossile-rare',
            question: 'Trouve-t-on des fossiles partout, facilement ?',
            reponses: [
              { texte: 'Non, c’est très rare', icone: '💎', correcte: true },
              { texte: 'Oui, il y en a partout', icone: '🦴' },
            ],
            explication: 'Presque tous les animaux disparaissent sans laisser de trace.',
          },
        ],
        '6-8': [
          {
            id: 'os-ou-pierre',
            question: 'Un fossile, c’est l’os d’origine ?',
            reponses: [
              { texte: 'Non, c’est sa copie en pierre', icone: '🪨', correcte: true },
              { texte: 'Oui, l’os a juste séché', icone: '🦴' },
              { texte: 'Oui, il a été congelé', icone: '🧊' },
            ],
            explication:
              'Des minéraux ont peu à peu remplacé la matière de l’os, en gardant sa forme.',
          },
        ],
        '9-12': [
          {
            id: 'absence-preuve',
            question: 'Aucun fossile d’une espèce n’a été trouvé. Cela prouve-t-il qu’elle n’a pas existé ?',
            reponses: [
              { texte: 'Non, le registre est très incomplet', icone: '📖', correcte: true },
              { texte: 'Oui, sinon on en aurait trouvé', icone: '🔍' },
              { texte: 'Oui, la fossilisation est systématique', icone: '✅' },
            ],
            explication:
              'La fossilisation est si improbable que l’absence de fossile ne prouve jamais l’absence d’espèce.',
          },
        ],
      },
      en: {
        '3-5': [
          {
            id: 'fossile-rare',
            question: 'Are fossils easy to find everywhere?',
            reponses: [
              { texte: 'No, they are very rare', icone: '💎', correcte: true },
              { texte: 'Yes, they are everywhere', icone: '🦴' },
            ],
            explication: 'Almost every animal disappears without leaving a trace.',
          },
        ],
        '6-8': [
          {
            id: 'os-ou-pierre',
            question: 'Is a fossil the original bone?',
            reponses: [
              { texte: 'No, it is a copy of it in stone', icone: '🪨', correcte: true },
              { texte: 'Yes, the bone has just dried out', icone: '🦴' },
              { texte: 'Yes, it was frozen', icone: '🧊' },
            ],
            explication:
              'Minerals slowly replaced the material of the bone, keeping its shape.',
          },
        ],
        '9-12': [
          {
            id: 'absence-preuve',
            question: 'No fossil of a species has ever been found. Does that prove it never existed?',
            reponses: [
              { texte: 'No, the record is very incomplete', icone: '📖', correcte: true },
              { texte: 'Yes, otherwise we would have found one', icone: '🔍' },
              { texte: 'Yes, fossilisation always happens', icone: '✅' },
            ],
            explication:
              'Fossilisation is so unlikely that the absence of a fossil never proves the absence of a species.',
          },
        ],
      },
    },
  },
  {
    cardId: 'les-marees',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'qui-fait-marees',
            question: 'Qu’est-ce qui fait monter et descendre la mer ?',
            reponses: [
              { texte: 'La Lune, de très loin', icone: '🌙', correcte: true },
              { texte: 'Le vent qui souffle', icone: '🌬️' },
            ],
            explication: 'C’est la Lune qui tire sur l’eau des océans.',
          },
        ],
        '6-8': [
          {
            id: 'combien-marees',
            question: 'Combien de marées hautes y a-t-il par jour ?',
            reponses: [
              { texte: 'Deux', icone: '2️⃣', correcte: true },
              { texte: 'Une seule', icone: '1️⃣' },
              { texte: 'Aucune', icone: '🚫' },
            ],
            explication: 'La mer se soulève des deux côtés de la Terre : deux marées hautes par jour.',
          },
        ],
        '9-12': [
          {
            id: 'lune-aspire',
            question: 'La Lune aspire-t-elle l’eau vers le haut ?',
            reponses: [
              { texte: 'Non, elle l’étire des deux côtés', icone: '↔️', correcte: true },
              { texte: 'Oui, comme un aimant', icone: '🧲' },
              { texte: 'Oui, mais d’un seul côté', icone: '⬆️' },
            ],
            explication:
              'C’est la différence d’attraction entre les deux faces de la Terre qui compte : deux bourrelets, pas une aspiration.',
          },
        ],
      },
      en: {
        '3-5': [
          {
            id: 'qui-fait-marees',
            question: 'What makes the sea rise and fall?',
            reponses: [
              { texte: 'The Moon, from very far away', icone: '🌙', correcte: true },
              { texte: 'The wind blowing', icone: '🌬️' },
            ],
            explication: 'It is the Moon pulling on the water of the oceans.',
          },
        ],
        '6-8': [
          {
            id: 'combien-marees',
            question: 'How many high tides are there each day?',
            reponses: [
              { texte: 'Two', icone: '2️⃣', correcte: true },
              { texte: 'Only one', icone: '1️⃣' },
              { texte: 'None', icone: '🚫' },
            ],
            explication: 'The sea bulges up on both sides of the Earth: two high tides a day.',
          },
        ],
        '9-12': [
          {
            id: 'lune-aspire',
            question: 'Does the Moon suck the water upwards?',
            reponses: [
              { texte: 'No, it stretches it out on both sides', icone: '↔️', correcte: true },
              { texte: 'Yes, like a magnet', icone: '🧲' },
              { texte: 'Yes, but on one side only', icone: '⬆️' },
            ],
            explication:
              'What counts is the difference in pull between the two sides of the Earth: two bulges, not a suction.',
          },
        ],
      },
    },
  },
  {
    cardId: 'le-vent',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'air-chaud',
            question: 'Que fait l’air quand il est bien chaud ?',
            reponses: [
              { texte: 'Il monte', icone: '⬆️', correcte: true },
              { texte: 'Il descend', icone: '⬇️' },
            ],
            explication: 'L’air chaud est plus léger, alors il monte et le vent se crée.',
          },
        ],
        '6-8': [
          {
            id: 'origine-vent',
            question: 'D’où vient le vent ?',
            reponses: [
              { texte: 'De différences de température et de pression', icone: '🌡️', correcte: true },
              { texte: 'Des arbres qui bougent leurs branches', icone: '🌳' },
              { texte: 'De la rotation des nuages', icone: '☁️' },
            ],
            explication:
              'Le Soleil chauffe inégalement : l’air se déplace des zones de haute pression vers les basses.',
          },
        ],
        '9-12': [
          {
            id: 'coriolis',
            question: 'Pourquoi les dépressions s’enroulent-elles en spirale ?',
            reponses: [
              { texte: 'À cause de la rotation de la Terre', icone: '🌍', correcte: true },
              { texte: 'À cause de l’attraction de la Lune', icone: '🌙' },
              { texte: 'À cause du relief des montagnes', icone: '⛰️' },
            ],
            explication:
              'La force de Coriolis dévie les vents, dans un sens opposé selon l’hémisphère.',
          },
        ],
      },
      en: {
        '3-5': [
          {
            id: 'air-chaud',
            question: 'What does the air do when it gets nice and warm?',
            reponses: [
              { texte: 'It goes up', icone: '⬆️', correcte: true },
              { texte: 'It goes down', icone: '⬇️' },
            ],
            explication: 'Warm air is lighter, so it rises, and that is how the wind is made.',
          },
        ],
        '6-8': [
          {
            id: 'origine-vent',
            question: 'Where does the wind come from?',
            reponses: [
              { texte: 'From differences in temperature and pressure', icone: '🌡️', correcte: true },
              { texte: 'From trees waving their branches', icone: '🌳' },
              { texte: 'From the clouds spinning round', icone: '☁️' },
            ],
            explication:
              'The Sun heats unevenly: air moves from areas of high pressure towards low ones.',
          },
        ],
        '9-12': [
          {
            id: 'coriolis',
            question: 'Why do depressions coil into a spiral?',
            reponses: [
              { texte: 'Because of the rotation of the Earth', icone: '🌍', correcte: true },
              { texte: 'Because of the pull of the Moon', icone: '🌙' },
              { texte: 'Because of the shape of the mountains', icone: '⛰️' },
            ],
            explication:
              'The Coriolis force deflects the winds, in opposite directions depending on the hemisphere.',
          },
        ],
      },
    },
  },  {
    cardId: 'pourquoi-le-ciel-est-bleu',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'ciel-couleur',
            question: 'Qu’est-ce qui rend le ciel bleu ?',
            reponses: [
              { texte: 'L’air, qui renvoie le bleu', icone: '🌬️', correcte: true },
              { texte: 'La mer, qui se reflète', icone: '🌊' },
            ],
            explication: 'C’est l’air qui éparpille le bleu partout au-dessus de toi.',
          },
        ],
        '6-8': [
          {
            id: 'ciel-desert',
            question: 'Au-dessus du désert, très loin de la mer, de quelle couleur est le ciel ?',
            reponses: [
              { texte: 'Bleu, comme partout', icone: '🔵', correcte: true },
              { texte: 'Jaune, comme le sable', icone: '🟡' },
              { texte: 'Gris, faute de mer à refléter', icone: '⬜' },
            ],
            explication:
              'Le ciel n’est pas bleu parce qu’il reflète la mer : c’est l’air lui-même qui disperse le bleu.',
          },
        ],
        '9-12': [
          {
            id: 'soleil-couchant',
            question: 'Pourquoi le Soleil couchant est-il rouge ?',
            reponses: [
              { texte: 'Sa lumière traverse plus d’air, le bleu est dispersé ailleurs', icone: '🌅', correcte: true },
              { texte: 'Il chauffe davantage en fin de journée', icone: '🌡️' },
              { texte: 'Il commence à s’éteindre', icone: '🕯️' },
            ],
            explication:
              'Même cause que le ciel bleu de midi — la diffusion — mais sur une épaisseur d’atmosphère bien plus grande.',
          },
        ],
      },
      en: {
        '3-5': [
          {
            id: 'ciel-couleur',
            question: 'What makes the sky blue?',
            reponses: [
              { texte: 'The air, which sends the blue back', icone: '🌬️', correcte: true },
              { texte: 'The sea, reflected in it', icone: '🌊' },
            ],
            explication: 'It is the air that scatters the blue everywhere above you.',
          },
        ],
        '6-8': [
          {
            id: 'ciel-desert',
            question: 'Above the desert, far away from the sea, what colour is the sky?',
            reponses: [
              { texte: 'Blue, like everywhere else', icone: '🔵', correcte: true },
              { texte: 'Yellow, like the sand', icone: '🟡' },
              { texte: 'Grey, with no sea to reflect', icone: '⬜' },
            ],
            explication:
              'The sky is not blue because it reflects the sea: it is the air itself that scatters the blue.',
          },
        ],
        '9-12': [
          {
            id: 'soleil-couchant',
            question: 'Why is the setting Sun red?',
            reponses: [
              { texte: 'Its light crosses more air, so the blue is scattered away', icone: '🌅', correcte: true },
              { texte: 'It gives out more heat at the end of the day', icone: '🌡️' },
              { texte: 'It is starting to go out', icone: '🕯️' },
            ],
            explication:
              'Same cause as the blue midday sky — scattering — but through a far greater thickness of atmosphere.',
          },
        ],
      },
    },
  },  {
    cardId: 'pourquoi-la-mer-est-salee',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'mer-riviere',
            question: 'Dans une rivière, l’eau est-elle salée ?',
            reponses: [
              { texte: 'Non, elle est douce', icone: '💧', correcte: true },
              { texte: 'Oui, comme la mer', icone: '🌊' },
            ],
            explication: 'Seule la mer est salée. L’eau des rivières, elle, est douce.',
          },
        ],
        '6-8': [
          {
            id: 'sel-vient-de',
            question: 'D’où vient le sel de la mer ?',
            reponses: [
              { texte: 'Des roches des continents', icone: '🪨', correcte: true },
              { texte: 'Du fond de l’océan', icone: '🕳️' },
              { texte: 'Des poissons', icone: '🐟' },
            ],
            explication:
              'La pluie use les roches et les rivières emportent le sel jusqu’à la mer, depuis des milliards d’années.',
          },
        ],
        '9-12': [
          {
            id: 'salinite-stable',
            question: 'La mer devient-elle de plus en plus salée avec le temps ?',
            reponses: [
              { texte: 'Non, il s’en redépose autant qu’il en arrive', icone: '⚖️', correcte: true },
              { texte: 'Oui, sans interruption depuis l’origine', icone: '📈' },
              { texte: 'Non, car l’évaporation emporte aussi le sel', icone: '💨' },
            ],
            explication:
              'C’est un état stationnaire : évaporites, sédiments et croûte océanique retirent le sel au rythme où les fleuves l’apportent.',
          },
        ],
      },
      en: {
        '3-5': [
          {
            id: 'mer-riviere',
            question: 'Is the water in a river salty?',
            reponses: [
              { texte: 'No, it is fresh', icone: '💧', correcte: true },
              { texte: 'Yes, like the sea', icone: '🌊' },
            ],
            explication: 'Only the sea is salty. River water is fresh.',
          },
        ],
        '6-8': [
          {
            id: 'sel-vient-de',
            question: 'Where does the salt in the sea come from?',
            reponses: [
              { texte: 'From the rocks of the continents', icone: '🪨', correcte: true },
              { texte: 'From the bottom of the ocean', icone: '🕳️' },
              { texte: 'From the fish', icone: '🐟' },
            ],
            explication:
              'Rain wears the rocks away and rivers carry the salt to the sea, and have done for billions of years.',
          },
        ],
        '9-12': [
          {
            id: 'salinite-stable',
            question: 'Is the sea becoming saltier and saltier over time?',
            reponses: [
              { texte: 'No, as much settles back out as arrives', icone: '⚖️', correcte: true },
              { texte: 'Yes, without a break since the beginning', icone: '📈' },
              { texte: 'No, because evaporation carries the salt away too', icone: '💨' },
            ],
            explication:
              'It is a steady state: evaporites, sediments and the oceanic crust remove salt at the rate the rivers bring it in.',
          },
        ],
      },
    },
  },  {
    cardId: 'dou-vient-le-petrole',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'petrole-dinos',
            question: 'Le pétrole vient-il des dinosaures ?',
            reponses: [
              { texte: 'Non, de tout petits êtres de la mer', icone: '🌊', correcte: true },
              { texte: 'Oui, des gros dinosaures', icone: '🦕' },
            ],
            explication: 'Il vient du plancton, minuscule, qui flottait dans les océans.',
          },
        ],
        '6-8': [
          {
            id: 'petrole-origine',
            question: 'De quoi le pétrole est-il fait, au départ ?',
            reponses: [
              { texte: 'De plancton tombé au fond des mers', icone: '🦠', correcte: true },
              { texte: 'De dinosaures enfouis', icone: '🦕' },
              { texte: 'De roches fondues', icone: '🌋' },
            ],
            explication:
              'Des algues et des organismes microscopiques, enfouis puis chauffés pendant des millions d’années.',
          },
        ],
        '9-12': [
          {
            id: 'charbon-petrole',
            question: 'Le charbon et le pétrole ont-ils la même origine ?',
            reponses: [
              { texte: 'Non : des forêts pour l’un, du plancton marin pour l’autre', icone: '🌲', correcte: true },
              { texte: 'Oui, les deux viennent de forêts', icone: '🌳' },
              { texte: 'Oui, les deux viennent du plancton', icone: '🦠' },
            ],
            explication:
              'Le charbon vient des forêts du Carbonifère, le pétrole du plancton. Les deux stockent de l’énergie solaire.',
          },
        ],
      },
      en: {
        '3-5': [
          {
            id: 'petrole-dinos',
            question: 'Does oil come from the dinosaurs?',
            reponses: [
              { texte: 'No, from tiny creatures in the sea', icone: '🌊', correcte: true },
              { texte: 'Yes, from the big dinosaurs', icone: '🦕' },
            ],
            explication: 'It comes from plankton, tiny things that floated in the oceans.',
          },
        ],
        '6-8': [
          {
            id: 'petrole-origine',
            question: 'What is oil made from, to begin with?',
            reponses: [
              { texte: 'Plankton that sank to the sea floor', icone: '🦠', correcte: true },
              { texte: 'Buried dinosaurs', icone: '🦕' },
              { texte: 'Melted rock', icone: '🌋' },
            ],
            explication:
              'Algae and microscopic organisms, buried and then heated for millions of years.',
          },
        ],
        '9-12': [
          {
            id: 'charbon-petrole',
            question: 'Do coal and oil have the same origin?',
            reponses: [
              { texte: 'No: forests for one, marine plankton for the other', icone: '🌲', correcte: true },
              { texte: 'Yes, both come from forests', icone: '🌳' },
              { texte: 'Yes, both come from plankton', icone: '🦠' },
            ],
            explication:
              'Coal comes from the forests of the Carboniferous, oil from plankton. Both store solar energy.',
          },
        ],
      },
    },
  },  {
    cardId: 'le-sol-est-vivant',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'terre-vivante',
            question: 'La terre du jardin, c’est vivant ?',
            reponses: [
              { texte: 'Oui, pleine de bêtes dedans', icone: '🪱', correcte: true },
              { texte: 'Non, c’est de la poussière', icone: '🌫️' },
            ],
            explication: 'Une seule poignée contient plus d’habitants que la Terre n’a d’humains.',
          },
        ],
        '6-8': [
          {
            id: 'combien-habitants',
            question: 'Combien d’êtres vivants dans une cuillerée de sol ?',
            reponses: [
              { texte: 'Des milliards', icone: '🦠', correcte: true },
              { texte: 'Quelques dizaines', icone: '🔟' },
              { texte: 'Aucun, sauf un ver de temps en temps', icone: '🪱' },
            ],
            explication:
              'Bactéries et champignons s’y comptent par milliards, et par kilomètres de filaments.',
          },
        ],
        '9-12': [
          {
            id: 'sol-renouvelable',
            question: 'Le sol est-il une ressource renouvelable ?',
            reponses: [
              { texte: 'Pas à notre échelle : un siècle par centimètre', icone: '⏳', correcte: true },
              { texte: 'Oui, il se reforme chaque année', icone: '🔁' },
              { texte: 'Oui, il suffit d’ajouter de l’engrais', icone: '🧪' },
            ],
            explication:
              'La formation d’un sol produit environ un centimètre par siècle ; l’érosion peut l’emporter en quelques années.',
          },
        ],
      },
      en: {
        '3-5': [
          {
            id: 'terre-vivante',
            question: 'Is the soil in the garden alive?',
            reponses: [
              { texte: 'Yes, full of creatures inside', icone: '🪱', correcte: true },
              { texte: 'No, it is just dust', icone: '🌫️' },
            ],
            explication: 'A single handful holds more living things than the Earth has people.',
          },
        ],
        '6-8': [
          {
            id: 'combien-habitants',
            question: 'How many living things are there in a spoonful of soil?',
            reponses: [
              { texte: 'Billions', icone: '🦠', correcte: true },
              { texte: 'A few dozen', icone: '🔟' },
              { texte: 'None, apart from the odd worm', icone: '🪱' },
            ],
            explication:
              'Bacteria and fungi are counted there in billions, and in kilometres of threads.',
          },
        ],
        '9-12': [
          {
            id: 'sol-renouvelable',
            question: 'Is soil a renewable resource?',
            reponses: [
              { texte: 'Not on our timescale: a century per centimetre', icone: '⏳', correcte: true },
              { texte: 'Yes, it re-forms every year', icone: '🔁' },
              { texte: 'Yes, you just have to add fertiliser', icone: '🧪' },
            ],
            explication:
              'Soil forms at about one centimetre per century; erosion can carry it away in a few years.',
          },
        ],
      },
    },
  },
];
