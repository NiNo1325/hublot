import type { QuizCarte } from '@/lib/types';

/**
 * Questions du domaine « La chimie ».
 *
 * Idées reçues visées : la mousse du volcan prise pour de la lave, la vapeur
 * confondue avec le panache blanc, le sucre qui « fondrait » ou disparaîtrait,
 * l'air assimilé à du vide, le feu pris pour une matière.
 */
export const quiz: QuizCarte[] = [
  {
    cardId: 'le-volcan-de-vinaigre',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'mousse-chaude',
            question: 'Le vinaigre et le bicarbonate font une mousse qui déborde. Est-elle brûlante ?',
            reponses: [
              { texte: 'Non, elle est froide', icone: '🫧', correcte: true },
              { texte: 'Oui, comme un vrai volcan', icone: '🌋' },
            ],
            explication: 'Ce n’est ni chaud ni dangereux : juste du liquide plein de bulles.',
          },
        ],
        '6-8': [
          {
            id: 'gaz-bulles',
            question: 'Quand le vinaigre et le bicarbonate moussent, que contiennent les bulles ?',
            reponses: [
              { texte: 'Du dioxyde de carbone', icone: '💨', correcte: true },
              { texte: 'De l’air ordinaire', icone: '🌬️' },
              { texte: 'De la vapeur d’eau brûlante', icone: '♨️' },
            ],
            explication:
              'Le mélange fabrique un gaz nouveau, celui-là même que tu expires en respirant.',
          },
        ],
        '9-12': [
          {
            id: 'melange-ou-reaction',
            question: 'Après avoir mélangé le vinaigre et le bicarbonate, peut-on les récupérer ?',
            reponses: [
              { texte: 'Non, ils se sont transformés', icone: '🔀', correcte: true },
              { texte: 'Oui, en laissant évaporer l’eau', icone: '💧' },
              { texte: 'Oui, en filtrant le mélange', icone: '🧫' },
            ],
            explication:
              'C’est une transformation chimique : les atomes se sont réorganisés, contrairement au sel dissous qu’une évaporation restitue.',
          },
        ],
      },
      en: {
        '3-5': [
          {
            id: 'mousse-chaude',
            question: 'Vinegar and bicarbonate make a foam that spills over. Is it burning hot?',
            reponses: [
              { texte: 'No, it is cold', icone: '🫧', correcte: true },
              { texte: 'Yes, like a real volcano', icone: '🌋' },
            ],
            explication: 'It is neither hot nor dangerous: just liquid full of bubbles.',
          },
        ],
        '6-8': [
          {
            id: 'gaz-bulles',
            question: 'When vinegar and bicarbonate foam up, what is inside the bubbles?',
            reponses: [
              { texte: 'Carbon dioxide', icone: '💨', correcte: true },
              { texte: 'Ordinary air', icone: '🌬️' },
              { texte: 'Scalding water vapour', icone: '♨️' },
            ],
            explication:
              'The mixture makes a brand new gas, the very one you breathe out.',
          },
        ],
        '9-12': [
          {
            id: 'melange-ou-reaction',
            question: 'Once vinegar and bicarbonate have been mixed, can you get them back?',
            reponses: [
              { texte: 'No, they have been transformed', icone: '🔀', correcte: true },
              { texte: 'Yes, by letting the water evaporate', icone: '💧' },
              { texte: 'Yes, by filtering the mixture', icone: '🧫' },
            ],
            explication:
              'It is a chemical change: the atoms have rearranged themselves, unlike dissolved salt, which evaporation gives back untouched.',
          },
        ],
      },
    },
  },
  {
    cardId: 'les-etats-de-la-matiere',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'glacon-fondu',
            question: 'Un glaçon fond dans ton verre. L’eau a-t-elle disparu ?',
            reponses: [
              { texte: 'Non, elle est devenue liquide', icone: '💧', correcte: true },
              { texte: 'Oui, elle s’est envolée', icone: '💨' },
            ],
            explication: 'Rien ne se perd : le glaçon est simplement devenu de l’eau.',
          },
        ],
        '6-8': [
          {
            id: 'vapeur-invisible',
            question: 'Le nuage blanc au-dessus d’une casserole, c’est de la vapeur ?',
            reponses: [
              { texte: 'Non, ce sont des gouttelettes refroidies', icone: '💧', correcte: true },
              { texte: 'Oui, c’est de la vapeur d’eau', icone: '♨️' },
              { texte: 'Oui, c’est de la fumée', icone: '💨' },
            ],
            explication:
              'La vapeur d’eau est totalement invisible. Ce qu’on voit est déjà recondensé.',
          },
        ],
        '9-12': [
          {
            id: 'temperature-palier',
            question: 'Que fait la température pendant qu’un glaçon fond ?',
            reponses: [
              { texte: 'Elle ne bouge pas', icone: '🌡️', correcte: true },
              { texte: 'Elle monte régulièrement', icone: '📈' },
              { texte: 'Elle descend', icone: '📉' },
            ],
            explication:
              'L’énergie sert à rompre les liaisons, pas à élever la température : un mélange eau-glace reste à zéro degré.',
          },
        ],
      },
      en: {
        '3-5': [
          {
            id: 'glacon-fondu',
            question: 'An ice cube melts in your glass. Has the water disappeared?',
            reponses: [
              { texte: 'No, it has turned into liquid', icone: '💧', correcte: true },
              { texte: 'Yes, it has flown away', icone: '💨' },
            ],
            explication: 'Nothing is lost: the ice cube has simply become water.',
          },
        ],
        '6-8': [
          {
            id: 'vapeur-invisible',
            question: 'Is the white cloud above a saucepan water vapour?',
            reponses: [
              { texte: 'No, they are cooled droplets', icone: '💧', correcte: true },
              { texte: 'Yes, that is water vapour', icone: '♨️' },
              { texte: 'Yes, that is smoke', icone: '💨' },
            ],
            explication:
              'Water vapour is completely invisible. What you can see has already condensed back.',
          },
        ],
        '9-12': [
          {
            id: 'temperature-palier',
            question: 'What does the temperature do while an ice cube is melting?',
            reponses: [
              { texte: 'It does not move', icone: '🌡️', correcte: true },
              { texte: 'It rises steadily', icone: '📈' },
              { texte: 'It falls', icone: '📉' },
            ],
            explication:
              'The energy goes into breaking bonds, not into raising the temperature: a water-and-ice mixture stays at zero degrees.',
          },
        ],
      },
    },
  },
  {
    cardId: 'ou-va-le-sucre-dans-leau',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'sucre-cache',
            question: 'Le sucre a disparu dans l’eau. Comment le savoir ?',
            reponses: [
              { texte: 'En goûtant : c’est sucré', icone: '👅', correcte: true },
              { texte: 'Il est vraiment parti', icone: '🕳️' },
            ],
            explication: 'Le sucre est toujours là, réparti partout dans le verre.',
          },
        ],
        '6-8': [
          {
            id: 'fondre-ou-dissoudre',
            question: 'Le sucre « fond »-il dans l’eau ?',
            reponses: [
              { texte: 'Non, il se dissout', icone: '🥄', correcte: true },
              { texte: 'Oui, comme le chocolat qui chauffe', icone: '🍫' },
              { texte: 'Oui, il devient liquide', icone: '💧' },
            ],
            explication:
              'Fondre, c’est passer du solide au liquide par la chaleur. Ici, les grains se dispersent entre les molécules d’eau.',
          },
        ],
        '9-12': [
          {
            id: 'masse-solution',
            question: 'Cent grammes d’eau plus dix de sucre donnent quelle masse ?',
            reponses: [
              { texte: 'Cent dix grammes', icone: '⚖️', correcte: true },
              { texte: 'Cent grammes, le sucre disparaît', icone: '🕳️' },
              { texte: 'Un peu moins, à cause du mélange', icone: '📉' },
            ],
            explication:
              'La masse se conserve rigoureusement. Seul le volume augmente moins que prévu, le sucre se logeant entre les molécules d’eau.',
          },
        ],
      },
      en: {
        '3-5': [
          {
            id: 'sucre-cache',
            question: 'The sugar has vanished in the water. How can you tell it is still there?',
            reponses: [
              { texte: 'By tasting: it is sweet', icone: '👅', correcte: true },
              { texte: 'It has really gone', icone: '🕳️' },
            ],
            explication: 'The sugar is still there, spread all through the glass.',
          },
        ],
        '6-8': [
          {
            id: 'fondre-ou-dissoudre',
            question: 'Does sugar ‘melt’ in water?',
            reponses: [
              { texte: 'No, it dissolves', icone: '🥄', correcte: true },
              { texte: 'Yes, like chocolate that gets hot', icone: '🍫' },
              { texte: 'Yes, it turns into liquid', icone: '💧' },
            ],
            explication:
              'Melting means going from solid to liquid because of heat. Here, the grains spread out between the water molecules.',
          },
        ],
        '9-12': [
          {
            id: 'masse-solution',
            question: 'One hundred grams of water plus ten of sugar give what mass?',
            reponses: [
              { texte: 'One hundred and ten grams', icone: '⚖️', correcte: true },
              { texte: 'One hundred grams, the sugar disappears', icone: '🕳️' },
              { texte: 'A little less, because of the mixing', icone: '📉' },
            ],
            explication:
              'Mass is conserved exactly. Only the volume increases less than expected, the sugar tucking in between the water molecules.',
          },
        ],
      },
    },
  },
  {
    cardId: 'de-quoi-est-fait-lair',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'air-existe',
            question: 'L’air, est-ce que c’est du vide ?',
            reponses: [
              { texte: 'Non, il remplit les ballons', icone: '🎈', correcte: true },
              { texte: 'Oui, il n’y a rien du tout', icone: '🕳️' },
            ],
            explication: 'L’air est bien de la matière : il gonfle les ballons et se sent sur la peau.',
          },
        ],
        '6-8': [
          {
            id: 'gaz-majoritaire',
            question: 'Quel gaz est le plus abondant dans l’air ?',
            reponses: [
              { texte: 'L’azote', icone: '🔵', correcte: true },
              { texte: 'L’oxygène', icone: '🫁' },
              { texte: 'Le dioxyde de carbone', icone: '💨' },
            ],
            explication:
              'L’air contient environ soixante-dix-huit pour cent d’azote, contre seulement vingt et un pour cent d’oxygène.',
          },
        ],
        '9-12': [
          {
            id: 'paille-pression',
            question: 'Quand tu bois avec une paille, qu’est-ce qui fait monter le liquide ?',
            reponses: [
              { texte: 'La pression de l’air qui pousse', icone: '💨', correcte: true },
              { texte: 'Ta bouche qui aspire le liquide', icone: '👄' },
              { texte: 'Le vide qui attire', icone: '🕳️' },
            ],
            explication:
              'Tu réduis la pression dans la paille, et l’air extérieur pousse le liquide vers le haut. Le vide n’attire rien.',
          },
        ],
      },
      en: {
        '3-5': [
          {
            id: 'air-existe',
            question: 'Is air just empty nothing?',
            reponses: [
              { texte: 'No, it fills up balloons', icone: '🎈', correcte: true },
              { texte: 'Yes, there is nothing at all', icone: '🕳️' },
            ],
            explication: 'Air really is matter: it blows balloons up and you feel it on your skin.',
          },
        ],
        '6-8': [
          {
            id: 'gaz-majoritaire',
            question: 'Which gas is the most plentiful in air?',
            reponses: [
              { texte: 'Nitrogen', icone: '🔵', correcte: true },
              { texte: 'Oxygen', icone: '🫁' },
              { texte: 'Carbon dioxide', icone: '💨' },
            ],
            explication:
              'Air is about seventy-eight per cent nitrogen, against only twenty-one per cent oxygen.',
          },
        ],
        '9-12': [
          {
            id: 'paille-pression',
            question: 'When you drink through a straw, what makes the liquid rise?',
            reponses: [
              { texte: 'The pressure of the air, pushing', icone: '💨', correcte: true },
              { texte: 'Your mouth sucking the liquid up', icone: '👄' },
              { texte: 'The vacuum pulling it', icone: '🕳️' },
            ],
            explication:
              'You lower the pressure inside the straw, and the outside air pushes the liquid upwards. A vacuum pulls on nothing.',
          },
        ],
      },
    },
  },
  {
    cardId: 'le-feu',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'couvercle',
            question: 'Tu poses un couvercle sur une flamme. Que se passe-t-il ?',
            reponses: [
              { texte: 'Elle s’éteint', icone: '🚫', correcte: true },
              { texte: 'Elle grandit', icone: '🔥' },
            ],
            explication: 'Sans air, le feu ne peut plus continuer.',
          },
        ],
        '6-8': [
          {
            id: 'triangle-feu',
            question: 'De quoi le feu a-t-il besoin pour exister ?',
            reponses: [
              { texte: 'D’un combustible, d’oxygène et de chaleur', icone: '🔺', correcte: true },
              { texte: 'Seulement d’une allumette', icone: '🔥' },
              { texte: 'Uniquement de bois sec', icone: '🪵' },
            ],
            explication:
              'C’est le triangle du feu : retirer un seul de ces trois éléments suffit à éteindre.',
          },
        ],
        '9-12': [
          {
            id: 'flamme-au-dessus',
            question: 'Pourquoi la flamme se trouve-t-elle au-dessus de la bûche ?',
            reponses: [
              { texte: 'Ce sont les gaz dégagés qui brûlent', icone: '💨', correcte: true },
              { texte: 'Parce que la chaleur monte', icone: '⬆️' },
              { texte: 'Parce que le bois brûle en surface', icone: '🪵' },
            ],
            explication:
              'La chaleur décompose d’abord le bois en gaz volatils : ce sont eux qui s’enflamment, au-dessus de la bûche.',
          },
        ],
      },
      en: {
        '3-5': [
          {
            id: 'couvercle',
            question: 'You put a lid over a flame. What happens?',
            reponses: [
              { texte: 'It goes out', icone: '🚫', correcte: true },
              { texte: 'It grows bigger', icone: '🔥' },
            ],
            explication: 'Without air, the fire cannot carry on.',
          },
        ],
        '6-8': [
          {
            id: 'triangle-feu',
            question: 'What does fire need in order to exist?',
            reponses: [
              { texte: 'A fuel, oxygen and heat', icone: '🔺', correcte: true },
              { texte: 'Only a match', icone: '🔥' },
              { texte: 'Only dry wood', icone: '🪵' },
            ],
            explication:
              'That is the fire triangle: taking away just one of the three is enough to put it out.',
          },
        ],
        '9-12': [
          {
            id: 'flamme-au-dessus',
            question: 'Why does the flame sit above the log rather than on it?',
            reponses: [
              { texte: 'It is the gases given off that burn', icone: '💨', correcte: true },
              { texte: 'Because heat rises', icone: '⬆️' },
              { texte: 'Because wood burns at its surface', icone: '🪵' },
            ],
            explication:
              'Heat first breaks the wood down into volatile gases: it is those that catch light, above the log.',
          },
        ],
      },
    },
  },
  {
    cardId: 'la-rouille',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'rouille-couleur',
            question: 'De quelle couleur devient un vieux clou qui rouille ?',
            reponses: [
              { texte: 'Orange', icone: '🟠', correcte: true },
              { texte: 'Vert', icone: '🟢' },
            ],
            explication: 'La rouille est orange, et c’est le fer lui-même qui se transforme.',
          },
        ],
        '6-8': [
          {
            id: 'rouille-besoin',
            question: 'De quoi le fer a-t-il besoin pour rouiller ?',
            reponses: [
              { texte: 'D’eau et d’air en même temps', icone: '💧', correcte: true },
              { texte: 'D’eau seulement', icone: '🌊' },
              { texte: 'De chaleur seulement', icone: '🔥' },
            ],
            explication: 'Sans oxygène de l’air, le fer ne rouille pas, même dans l’eau.',
          },
        ],
        '9-12': [
          {
            id: 'rouille-nature',
            question: 'La rouille, qu’est-ce que c’est ?',
            reponses: [
              { texte: 'Du fer transformé en oxyde', icone: '🔩', correcte: true },
              { texte: 'De la saleté déposée dessus', icone: '🧹' },
              { texte: 'Une moisissure du métal', icone: '🍄' },
            ],
            explication:
              'Le fer se combine à l’oxygène : une combustion très lente, comme le feu mais étalée sur des mois.',
          },
        ],
      },
      en: {
        '3-5': [
          {
            id: 'rouille-couleur',
            question: 'What colour does an old nail turn when it rusts?',
            reponses: [
              { texte: 'Orange', icone: '🟠', correcte: true },
              { texte: 'Green', icone: '🟢' },
            ],
            explication: 'Rust is orange, and it is the iron itself that is changing.',
          },
        ],
        '6-8': [
          {
            id: 'rouille-besoin',
            question: 'What does iron need in order to rust?',
            reponses: [
              { texte: 'Water and air at the same time', icone: '💧', correcte: true },
              { texte: 'Water only', icone: '🌊' },
              { texte: 'Heat only', icone: '🔥' },
            ],
            explication: 'Without oxygen from the air, iron does not rust, even in water.',
          },
        ],
        '9-12': [
          {
            id: 'rouille-nature',
            question: 'What exactly is rust?',
            reponses: [
              { texte: 'Iron turned into an oxide', icone: '🔩', correcte: true },
              { texte: 'Dirt settled on top of it', icone: '🧹' },
              { texte: 'A mould that grows on metal', icone: '🍄' },
            ],
            explication:
              'The iron joins up with oxygen: a very slow burning, like fire but spread over months.',
          },
        ],
      },
    },
  },  {
    cardId: 'pourquoi-le-savon-lave',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'eau-seule',
            question: 'L’eau toute seule enlève-t-elle le gras ?',
            reponses: [
              { texte: 'Non, elle glisse dessus', icone: '💧', correcte: true },
              { texte: 'Oui, très bien', icone: '✨' },
            ],
            explication: 'L’eau et le gras ne se mélangent pas : il faut du savon pour les réunir.',
          },
        ],
        '6-8': [
          {
            id: 'savon-deux-bouts',
            question: 'Que fait une molécule de savon ?',
            reponses: [
              { texte: 'Elle attrape le gras d’un côté et l’eau de l’autre', icone: '🧼', correcte: true },
              { texte: 'Elle tue la saleté', icone: '☠️' },
              { texte: 'Elle réchauffe l’eau', icone: '🌡️' },
            ],
            explication:
              'Une tête qui aime l’eau, une queue qui aime le gras : le savon sert d’intermédiaire entre les deux.',
          },
        ],
        '9-12': [
          {
            id: 'micelle',
            question: 'Comment le savon fait-il partir la graisse ?',
            reponses: [
              { texte: 'Il l’enferme dans des micelles que l’eau emporte', icone: '🫧', correcte: true },
              { texte: 'Il la dissout, comme l’eau dissout le sucre', icone: '🥄' },
              { texte: 'Il la décompose en la brûlant', icone: '🔥' },
            ],
            explication:
              'Les queues hydrophobes entourent la gouttelette, les têtes hydrophiles font face à l’eau : la saleté devient transportable.',
          },
        ],
      },
      en: {
        '3-5': [
          {
            id: 'eau-seule',
            question: 'Does water on its own take the grease away?',
            reponses: [
              { texte: 'No, it slides over it', icone: '💧', correcte: true },
              { texte: 'Yes, very well', icone: '✨' },
            ],
            explication: 'Water and grease do not mix: you need soap to bring them together.',
          },
        ],
        '6-8': [
          {
            id: 'savon-deux-bouts',
            question: 'What does a soap molecule do?',
            reponses: [
              { texte: 'It grabs grease at one end and water at the other', icone: '🧼', correcte: true },
              { texte: 'It kills the dirt', icone: '☠️' },
              { texte: 'It warms the water up', icone: '🌡️' },
            ],
            explication:
              'A head that loves water, a tail that loves grease: soap acts as a go-between for the two.',
          },
        ],
        '9-12': [
          {
            id: 'micelle',
            question: 'How does soap get the grease to leave?',
            reponses: [
              { texte: 'It shuts it inside micelles that the water carries off', icone: '🫧', correcte: true },
              { texte: 'It dissolves it, as water dissolves sugar', icone: '🥄' },
              { texte: 'It breaks it down by burning it', icone: '🔥' },
            ],
            explication:
              'The hydrophobic tails surround the droplet, the hydrophilic heads face the water: the dirt becomes something the water can carry.',
          },
        ],
      },
    },
  },  {
    cardId: 'les-acides-et-les-bases',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'citron-acide',
            question: 'Le citron qui pique la langue, c’est quoi ?',
            reponses: [
              { texte: 'Un acide', icone: '🍋', correcte: true },
              { texte: 'Un sucre', icone: '🍬' },
            ],
            explication: 'Le citron est un acide — un acide qu’on peut manger sans danger.',
          },
        ],
        '6-8': [
          {
            id: 'bases-dangereuses',
            question: 'Les produits basiques forts sont-ils dangereux ?',
            reponses: [
              { texte: 'Oui, autant que les acides forts', icone: '⚠️', correcte: true },
              { texte: 'Non, seuls les acides brûlent', icone: '🧪' },
              { texte: 'Non, ce sont des savons', icone: '🧼' },
            ],
            explication:
              'La soude brûle la peau tout aussi bien, et elle ne prévient par aucun goût piquant.',
          },
        ],
        '9-12': [
          {
            id: 'ph-logarithme',
            question: 'Un pH de 3 est-il deux fois plus acide qu’un pH de 6 ?',
            reponses: [
              { texte: 'Non : mille fois plus', icone: '🔢', correcte: true },
              { texte: 'Oui, exactement deux fois', icone: '✖️' },
              { texte: 'Non : trois fois plus', icone: '3️⃣' },
            ],
            explication:
              'L’échelle est logarithmique : chaque unité vaut un facteur dix, donc trois unités valent mille.',
          },
        ],
      },
      en: {
        '3-5': [
          {
            id: 'citron-acide',
            question: 'A lemon makes your tongue tingle. What is it?',
            reponses: [
              { texte: 'An acid', icone: '🍋', correcte: true },
              { texte: 'A sugar', icone: '🍬' },
            ],
            explication: 'A lemon is an acid — an acid you can eat quite safely.',
          },
        ],
        '6-8': [
          {
            id: 'bases-dangereuses',
            question: 'Are strong basic products dangerous?',
            reponses: [
              { texte: 'Yes, as much as strong acids', icone: '⚠️', correcte: true },
              { texte: 'No, only acids burn', icone: '🧪' },
              { texte: 'No, they are just soaps', icone: '🧼' },
            ],
            explication:
              'Caustic soda burns the skin just as well, and it gives no warning through a sharp taste.',
          },
        ],
        '9-12': [
          {
            id: 'ph-logarithme',
            question: 'Is a pH of 3 twice as acidic as a pH of 6?',
            reponses: [
              { texte: 'No: a thousand times more', icone: '🔢', correcte: true },
              { texte: 'Yes, exactly twice', icone: '✖️' },
              { texte: 'No: three times more', icone: '3️⃣' },
            ],
            explication:
              'The scale is logarithmic: each unit is a factor of ten, so three units make a thousand.',
          },
        ],
      },
    },
  },  {
    cardId: 'pourquoi-ca-sent',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'odeur-quoi',
            question: 'Quand ça sent bon, qu’est-ce qui arrive à ton nez ?',
            reponses: [
              { texte: 'De tout petits morceaux, dans l’air', icone: '💨', correcte: true },
              { texte: 'Une image de l’odeur', icone: '🖼️' },
            ],
            explication: 'Des morceaux minuscules se détachent et volent jusqu’à ton nez.',
          },
        ],
        '6-8': [
          {
            id: 'odeur-chaud',
            question: 'Pourquoi sent-on plus fort un plat chaud ?',
            reponses: [
              { texte: 'La chaleur libère plus de molécules', icone: '🔥', correcte: true },
              { texte: 'La chaleur rend le nez plus sensible', icone: '👃' },
              { texte: 'Le chaud fait vibrer l’air plus vite', icone: '🔊' },
            ],
            explication:
              'Plus c’est chaud, plus les molécules s’échappent — et plus elles arrivent nombreuses jusqu’à toi.',
          },
        ],
        '9-12': [
          {
            id: 'odeur-habitude',
            question: 'Pourquoi ne sent-on plus l’odeur de sa propre maison ?',
            reponses: [
              { texte: 'Les récepteurs se désensibilisent', icone: '📉', correcte: true },
              { texte: 'Les molécules ont fini par disparaître', icone: '💨' },
              { texte: 'Le cerveau a oublié cette odeur', icone: '🧠' },
            ],
            explication:
              'C’est l’adaptation olfactive : le système est fait pour signaler le changement, pas l’état constant.',
          },
        ],
      },
      en: {
        '3-5': [
          {
            id: 'odeur-quoi',
            question: 'When something smells lovely, what reaches your nose?',
            reponses: [
              { texte: 'Tiny little bits, floating in the air', icone: '💨', correcte: true },
              { texte: 'A picture of the smell', icone: '🖼️' },
            ],
            explication: 'Tiny bits come loose and fly all the way to your nose.',
          },
        ],
        '6-8': [
          {
            id: 'odeur-chaud',
            question: 'Why does a hot dish smell stronger?',
            reponses: [
              { texte: 'Heat releases more molecules', icone: '🔥', correcte: true },
              { texte: 'Heat makes the nose more sensitive', icone: '👃' },
              { texte: 'Heat makes the air vibrate faster', icone: '🔊' },
            ],
            explication:
              'The hotter it is, the more molecules escape — and the more of them reach you.',
          },
        ],
        '9-12': [
          {
            id: 'odeur-habitude',
            question: 'Why do you stop smelling the smell of your own house?',
            reponses: [
              { texte: 'The receptors become desensitised', icone: '📉', correcte: true },
              { texte: 'The molecules have all disappeared', icone: '💨' },
              { texte: 'The brain has forgotten that smell', icone: '🧠' },
            ],
            explication:
              'This is olfactory adaptation: the system is built to signal change, not a constant state.',
          },
        ],
      },
    },
  },  {
    cardId: 'pourquoi-la-glace-flotte',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'glacon-flotte',
            question: 'Un glaçon dans l’eau, il fait quoi ?',
            reponses: [
              { texte: 'Il flotte', icone: '🧊', correcte: true },
              { texte: 'Il coule au fond', icone: '⬇️' },
            ],
            explication: 'La glace est plus légère que l’eau, alors elle reste tout en haut.',
          },
        ],
        '6-8': [
          {
            id: 'glace-place',
            question: 'En gelant, l’eau prend…',
            reponses: [
              { texte: 'plus de place', icone: '📈', correcte: true },
              { texte: 'moins de place', icone: '📉' },
              { texte: 'exactement la même place', icone: '🟰' },
            ],
            explication:
              'Environ neuf pour cent de plus — d’où la bouteille pleine qui éclate au congélateur.',
          },
        ],
        '9-12': [
          {
            id: 'lac-gele',
            question: 'Si la glace coulait, que deviendraient les lacs ?',
            reponses: [
              { texte: 'Ils gèleraient depuis le fond, tuant ce qui y vit', icone: '🐟', correcte: true },
              { texte: 'Rien de particulier', icone: '🟰' },
              { texte: 'Ils gèleraient simplement plus lentement', icone: '🐢' },
            ],
            explication:
              'La glace flottante isole la colonne d’eau, qui reste liquide autour de quatre degrés au fond.',
          },
        ],
      },
      en: {
        '3-5': [
          {
            id: 'glacon-flotte',
            question: 'An ice cube in water: what does it do?',
            reponses: [
              { texte: 'It floats', icone: '🧊', correcte: true },
              { texte: 'It sinks to the bottom', icone: '⬇️' },
            ],
            explication: 'Ice is lighter than water, so it stays right at the top.',
          },
        ],
        '6-8': [
          {
            id: 'glace-place',
            question: 'When it freezes, water takes up…',
            reponses: [
              { texte: 'more room', icone: '📈', correcte: true },
              { texte: 'less room', icone: '📉' },
              { texte: 'exactly the same room', icone: '🟰' },
            ],
            explication:
              'About nine per cent more — hence the full bottle that bursts in the freezer.',
          },
        ],
        '9-12': [
          {
            id: 'lac-gele',
            question: 'If ice sank, what would become of lakes?',
            reponses: [
              { texte: 'They would freeze from the bottom, killing everything living in them', icone: '🐟', correcte: true },
              { texte: 'Nothing in particular', icone: '🟰' },
              { texte: 'They would simply freeze more slowly', icone: '🐢' },
            ],
            explication:
              'Floating ice insulates the water column, which stays liquid at around four degrees at the bottom.',
          },
        ],
      },
    },
  },
];
