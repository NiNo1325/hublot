import type { QuizCarte } from '@/lib/types';

/**
 * Questions du domaine « Les animaux ».
 *
 * Règle de rédaction : la mauvaise réponse reprend l'idée reçue que la carte
 * corrige. Pour les 3-5 ans, deux propositions seulement, et des énoncés assez
 * courts pour tenir dans une phrase entendue.
 */
export const quiz: QuizCarte[] = [
  {
    cardId: 'la-metamorphose-du-papillon',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'qui-sort-de-loeuf',
            question: 'Qui sort d’un œuf de papillon ?',
            reponses: [
              { texte: 'Une chenille', icone: '🐛', correcte: true },
              { texte: 'Un papillon tout fait', icone: '🦋' },
            ],
            explication: "C'est une chenille qui sort de l'œuf. Le papillon vient bien plus tard.",
          },
        ],
        '6-8': [
          {
            id: 'que-fait-la-chrysalide',
            question: 'Quand la chenille s’enferme dans sa chrysalide, que se passe-t-il ?',
            reponses: [
              { texte: 'Le corps se défait puis se reconstruit', icone: '✨', correcte: true },
              { texte: 'La chenille gonfle et devient papillon', icone: '🎈' },
              { texte: 'La chenille dort simplement', icone: '😴' },
            ],
            explication:
              "La chenille ne grandit pas en papillon : dans la chrysalide, son corps se défait presque entièrement, puis un corps neuf se construit.",
          },
        ],
        '9-12': [
          {
            id: 'comment-devient-papillon',
            question: 'Comment la chenille devient-elle un papillon ?',
            reponses: [
              { texte: 'Ses tissus se dissolvent, un corps neuf s’assemble', icone: '🔄', correcte: true },
              { texte: 'Elle grandit jusqu’à prendre la forme d’un papillon', icone: '📏' },
              { texte: 'Il lui pousse des ailes sur son corps de chenille', icone: '🪽' },
            ],
            explication:
              "Dans la chrysalide, la plupart des tissus se dissolvent en une bouillie de cellules, à partir de laquelle un corps entièrement neuf se construit.",
          },
        ],
      },
      en: {
        '3-5': [
          {
            id: 'qui-sort-de-loeuf',
            question: 'What comes out of a butterfly’s egg?',
            reponses: [
              { texte: 'A caterpillar', icone: '🐛', correcte: true },
              { texte: 'A ready-made butterfly', icone: '🦋' },
            ],
            explication: 'A caterpillar comes out of the egg. The butterfly comes much later.',
          },
        ],
        '6-8': [
          {
            id: 'que-fait-la-chrysalide',
            question: 'When the caterpillar shuts itself inside its chrysalis, what happens?',
            reponses: [
              { texte: 'The body comes apart, then rebuilds itself', icone: '✨', correcte: true },
              { texte: 'The caterpillar puffs up and becomes a butterfly', icone: '🎈' },
              { texte: 'The caterpillar simply sleeps', icone: '😴' },
            ],
            explication:
              'The caterpillar does not grow into a butterfly: inside the chrysalis, its body comes apart almost completely, then a new body is built.',
          },
        ],
        '9-12': [
          {
            id: 'comment-devient-papillon',
            question: 'How does the caterpillar become a butterfly?',
            reponses: [
              { texte: 'Its tissues dissolve, and a new body assembles', icone: '🔄', correcte: true },
              { texte: 'It grows until it takes the shape of a butterfly', icone: '📏' },
              { texte: 'Wings sprout on its caterpillar body', icone: '🪽' },
            ],
            explication:
              'Inside the chrysalis, most of the tissues dissolve into a soup of cells, out of which an entirely new body is built.',
          },
        ],
      },
    },
  },
  {
    cardId: 'pourquoi-le-cameleon-change-de-couleur',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'pourquoi-couleurs-vives',
            question: 'Le caméléon devient tout coloré. Pourquoi ?',
            reponses: [
              { texte: 'Pour envoyer un message aux autres', icone: '💬', correcte: true },
              { texte: 'Pour se cacher', icone: '🙈' },
            ],
            explication: 'Ses couleurs vives servent à parler aux autres caméléons, pas à se cacher.',
          },
        ],
        '6-8': [
          {
            id: 'a-quoi-sert-la-couleur',
            question: 'À quoi sert surtout le changement de couleur du caméléon ?',
            reponses: [
              { texte: 'À communiquer et régler sa température', icone: '🌡️', correcte: true },
              { texte: 'À se camoufler sur ce qui l’entoure', icone: '🎨' },
              { texte: 'À devenir invisible', icone: '👻' },
            ],
            explication:
              "Il change de couleur pour montrer son humeur, parler aux autres et se réchauffer ou se refroidir — pas pour se cacher.",
          },
        ],
        '9-12': [
          {
            id: 'comment-change-la-couleur',
            question: 'Comment le caméléon obtient-il ses couleurs ?',
            reponses: [
              { texte: 'Des cristaux sous la peau trient la lumière', icone: '🔷', correcte: true },
              { texte: 'Il prend la couleur de ce qu’il touche', icone: '🖐️' },
              { texte: 'Sa peau se remplit de peinture', icone: '🪣' },
            ],
            explication:
              "Sous sa peau, des cristaux minuscules réfléchissent la lumière ; en changeant leur espacement, il change la couleur renvoyée.",
          },
        ],
      },
      en: {
        '3-5': [
          {
            id: 'pourquoi-couleurs-vives',
            question: 'The chameleon turns bright colours. Why?',
            reponses: [
              { texte: 'To send a message to the others', icone: '💬', correcte: true },
              { texte: 'To hide', icone: '🙈' },
            ],
            explication: 'Its bright colours are for talking to other chameleons, not for hiding.',
          },
        ],
        '6-8': [
          {
            id: 'a-quoi-sert-la-couleur',
            question: 'What is the chameleon’s colour change mostly for?',
            reponses: [
              { texte: 'Communicating and controlling its temperature', icone: '🌡️', correcte: true },
              { texte: 'Blending into whatever is around it', icone: '🎨' },
              { texte: 'Becoming invisible', icone: '👻' },
            ],
            explication:
              'It changes colour to show its mood, to talk to others and to warm up or cool down — not to hide.',
          },
        ],
        '9-12': [
          {
            id: 'comment-change-la-couleur',
            question: 'How does the chameleon get its colours?',
            reponses: [
              { texte: 'Crystals under the skin sort the light', icone: '🔷', correcte: true },
              { texte: 'It takes the colour of whatever it touches', icone: '🖐️' },
              { texte: 'Its skin fills up with paint', icone: '🪣' },
            ],
            explication:
              'Under its skin, tiny crystals reflect light; by changing the spacing between them, it changes the colour sent back.',
          },
        ],
      },
    },
  },
  {
    cardId: 'la-migration-des-oiseaux',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'pourquoi-partent',
            question: 'Pourquoi les oiseaux partent-ils en hiver ?',
            reponses: [
              { texte: 'Parce qu’il n’y a plus à manger', icone: '🍽️', correcte: true },
              { texte: 'Parce qu’ils ont froid', icone: '🥶' },
            ],
            explication: "Ils partent surtout parce que la nourriture manque, pas à cause du froid.",
          },
        ],
        '6-8': [
          {
            id: 'vraie-raison',
            question: 'Quelle est la vraie raison qui pousse les oiseaux migrateurs à partir ?',
            reponses: [
              { texte: 'La nourriture qui devient rare', icone: '🍽️', correcte: true },
              { texte: 'Le froid qu’ils ne supportent pas', icone: '🥶' },
              { texte: 'La nuit qui tombe plus tôt', icone: '🌙' },
            ],
            explication:
              "Bien couverts de plumes, les oiseaux résistent au froid ; c'est la disparition des insectes et des graines qui les fait partir.",
          },
        ],
        '9-12': [
          {
            id: 'comment-orientent',
            question: 'Comment les oiseaux trouvent-ils leur chemin ?',
            reponses: [
              { texte: 'Le soleil, les étoiles et le champ magnétique', icone: '🧭', correcte: true },
              { texte: 'Ils suivent simplement les routes des voitures', icone: '🛣️' },
              { texte: 'Ils volent au hasard jusqu’à trouver', icone: '🎲' },
            ],
            explication:
              "Ils combinent la position du soleil, la carte des étoiles et une perception du champ magnétique terrestre, comme une boussole intérieure.",
          },
        ],
      },
      en: {
        '3-5': [
          {
            id: 'pourquoi-partent',
            question: 'Why do birds leave in winter?',
            reponses: [
              { texte: 'Because there is nothing left to eat', icone: '🍽️', correcte: true },
              { texte: 'Because they are cold', icone: '🥶' },
            ],
            explication: 'They leave mainly because food runs out, not because of the cold.',
          },
        ],
        '6-8': [
          {
            id: 'vraie-raison',
            question: 'What is the real reason migrating birds set off?',
            reponses: [
              { texte: 'Food becoming scarce', icone: '🍽️', correcte: true },
              { texte: 'The cold they cannot bear', icone: '🥶' },
              { texte: 'Night falling earlier', icone: '🌙' },
            ],
            explication:
              'Well covered in feathers, birds can stand the cold; it is the insects and seeds disappearing that makes them leave.',
          },
        ],
        '9-12': [
          {
            id: 'comment-orientent',
            question: 'How do birds find their way?',
            reponses: [
              { texte: 'The sun, the stars and the magnetic field', icone: '🧭', correcte: true },
              { texte: 'They simply follow the roads below', icone: '🛣️' },
              { texte: 'They fly at random until they find it', icone: '🎲' },
            ],
            explication:
              'They combine the position of the sun, the map of the stars and a sense of the Earth’s magnetic field, like a compass inside them.',
          },
        ],
      },
    },
  },
  {
    cardId: 'lhibernation',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'que-fait-le-corps',
            question: "Pendant l'hiver, que fait le corps du hérisson ?",
            reponses: [
              { texte: 'Il tourne tout doucement, presque arrêté', icone: '🐢', correcte: true },
              { texte: 'Il dort normalement comme la nuit', icone: '😴' },
            ],
            explication: "Son cœur bat très lentement et son corps devient froid : il se met au ralenti.",
          },
        ],
        '6-8': [
          {
            id: 'est-ce-un-sommeil',
            question: "L'hibernation, est-ce juste un long sommeil ?",
            reponses: [
              { texte: 'Non, le corps se met au ralenti extrême', icone: '🌡️', correcte: true },
              { texte: 'Oui, l’animal dort simplement des mois', icone: '😴' },
              { texte: 'Oui, mais il rêve tout le temps', icone: '💭' },
            ],
            explication:
              "Ce n'est pas un sommeil : le cœur ralentit énormément et la température chute, pour dépenser presque zéro énergie.",
          },
        ],
        '9-12': [
          {
            id: 'pourquoi-le-ralenti',
            question: 'Pendant l’hibernation, pourquoi le corps se met-il autant au ralenti ?',
            reponses: [
              { texte: 'Pour dépenser presque zéro énergie et tenir sans manger', icone: '🔋', correcte: true },
              { texte: 'Parce que le froid l’endort profondément', icone: '🥶' },
              { texte: 'Pour digérer sa réserve plus vite', icone: '⏩' },
            ],
            explication:
              "En tournant à très bas régime (cœur lent, température près de zéro), l'animal consomme si peu qu'il survit des mois sur ses réserves de graisse.",
          },
        ],
      },
      en: {
        '3-5': [
          {
            id: 'que-fait-le-corps',
            question: 'In winter, what does the hedgehog’s body do?',
            reponses: [
              { texte: 'It ticks over very slowly, almost stopped', icone: '🐢', correcte: true },
              { texte: 'It sleeps normally, like at night', icone: '😴' },
            ],
            explication: 'Its heart beats very slowly and its body goes cold: it slows right down.',
          },
        ],
        '6-8': [
          {
            id: 'est-ce-un-sommeil',
            question: 'Is hibernation just a long sleep?',
            reponses: [
              { texte: 'No, the body slows down to the extreme', icone: '🌡️', correcte: true },
              { texte: 'Yes, the animal simply sleeps for months', icone: '😴' },
              { texte: 'Yes, but it dreams the whole time', icone: '💭' },
            ],
            explication:
              'It is not a sleep: the heart slows enormously and the temperature drops, so that almost no energy is used.',
          },
        ],
        '9-12': [
          {
            id: 'pourquoi-le-ralenti',
            question: 'During hibernation, why does the body slow down so much?',
            reponses: [
              { texte: 'To use almost no energy and last without eating', icone: '🔋', correcte: true },
              { texte: 'Because the cold sends it into a deep sleep', icone: '🥶' },
              { texte: 'To digest its reserves faster', icone: '⏩' },
            ],
            explication:
              'Ticking over very slowly (slow heart, temperature near zero), the animal uses so little that it survives for months on its fat reserves.',
          },
        ],
      },
    },
  },
  {
    cardId: 'lecholocation-de-la-chauve-souris',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'aveugle-ou-non',
            question: 'La chauve-souris est-elle aveugle ?',
            reponses: [
              { texte: 'Non, elle voit très bien', icone: '👀', correcte: true },
              { texte: 'Oui, elle ne voit rien du tout', icone: '🙈' },
            ],
            explication: "Elle voit très bien. Dans le noir, elle se guide en plus avec le son.",
          },
        ],
        '6-8': [
          {
            id: 'comment-dans-le-noir',
            question: 'Comment la chauve-souris se dirige-t-elle dans le noir complet ?',
            reponses: [
              { texte: 'Elle crie et écoute l’écho revenir', icone: '🔊', correcte: true },
              { texte: 'Elle est aveugle et vole au hasard', icone: '🙈' },
              { texte: 'Elle allume ses yeux comme des lampes', icone: '🔦' },
            ],
            explication:
              "Elle émet des cris aigus qui rebondissent sur les obstacles ; l'écho qui revient lui dit ce qui l'entoure.",
          },
        ],
        '9-12': [
          {
            id: 'que-dit-lecho',
            question: 'Qu’apprend la chauve-souris grâce à l’écho ?',
            reponses: [
              { texte: 'La distance et la position de l’obstacle', icone: '📍', correcte: true },
              { texte: 'La couleur de sa proie', icone: '🎨' },
              { texte: 'Rien, l’écho est juste du bruit', icone: '🔇' },
            ],
            explication:
              "Le temps que met l'écho à revenir donne la distance ; en assemblant les échos, son cerveau reconstruit une image sonore de la scène.",
          },
        ],
      },
      en: {
        '3-5': [
          {
            id: 'aveugle-ou-non',
            question: 'Is the bat blind?',
            reponses: [
              { texte: 'No, it sees very well', icone: '👀', correcte: true },
              { texte: 'Yes, it cannot see a thing', icone: '🙈' },
            ],
            explication: 'It sees very well. In the dark, it guides itself with sound as well.',
          },
        ],
        '6-8': [
          {
            id: 'comment-dans-le-noir',
            question: 'How does the bat find its way in complete darkness?',
            reponses: [
              { texte: 'It squeaks and listens for the echo', icone: '🔊', correcte: true },
              { texte: 'It is blind and flies at random', icone: '🙈' },
              { texte: 'It lights its eyes up like lamps', icone: '🔦' },
            ],
            explication:
              'It gives out high squeaks that bounce off obstacles; the echo that comes back tells it what is around it.',
          },
        ],
        '9-12': [
          {
            id: 'que-dit-lecho',
            question: 'What does the bat learn from the echo?',
            reponses: [
              { texte: 'The distance and position of the obstacle', icone: '📍', correcte: true },
              { texte: 'The colour of its prey', icone: '🎨' },
              { texte: 'Nothing, the echo is just noise', icone: '🔇' },
            ],
            explication:
              'The time the echo takes to come back gives the distance; by putting the echoes together, its brain rebuilds a sound picture of the scene.',
          },
        ],
      },
    },
  },
  {
    cardId: 'comment-les-poissons-respirent',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'y-a-t-il-de-lair',
            question: 'Y a-t-il de l’air caché dans l’eau ?',
            reponses: [
              { texte: 'Oui, un peu, mélangé partout', icone: '🫧', correcte: true },
              { texte: 'Non, l’eau c’est juste de l’eau', icone: '🚫' },
            ],
            explication: "Il y a un peu d'oxygène mélangé dans l'eau, et les branchies du poisson l'attrapent.",
          },
        ],
        '6-8': [
          {
            id: 'que-fait-le-poisson',
            question: 'Que fait le poisson avec l’eau qu’il avale ?',
            reponses: [
              { texte: 'Il en retire l’oxygène avec ses branchies', icone: '🫧', correcte: true },
              { texte: 'Il respire l’eau comme on respire l’air', icone: '💧' },
              { texte: 'Il la garde dans son ventre', icone: '🎈' },
            ],
            explication:
              "L'eau passe sur les branchies, qui prennent l'oxygène dissous ; l'eau ressort ensuite par les ouïes.",
          },
        ],
        '9-12': [
          {
            id: 'pourquoi-suffoque',
            question: 'Pourquoi un poisson sorti de l’eau suffoque-t-il, alors que l’air est plein d’oxygène ?',
            reponses: [
              { texte: 'Ses branchies s’effondrent et ne captent plus rien', icone: '🫁', correcte: true },
              { texte: 'Parce qu’il n’aime pas l’air', icone: '😤' },
              { texte: 'Parce que l’air n’a pas d’oxygène', icone: '🚫' },
            ],
            explication:
              "Hors de l'eau, les fins filaments des branchies se collent et s'affaissent : ils ne peuvent plus capter l'oxygène, même en pleine air.",
          },
        ],
      },
      en: {
        '3-5': [
          {
            id: 'y-a-t-il-de-lair',
            question: 'Is there air hidden in the water?',
            reponses: [
              { texte: 'Yes, a little, mixed in everywhere', icone: '🫧', correcte: true },
              { texte: 'No, water is just water', icone: '🚫' },
            ],
            explication: 'There is a little oxygen mixed into the water, and the fish’s gills catch it.',
          },
        ],
        '6-8': [
          {
            id: 'que-fait-le-poisson',
            question: 'What does the fish do with the water it swallows?',
            reponses: [
              { texte: 'It takes the oxygen out with its gills', icone: '🫧', correcte: true },
              { texte: 'It breathes water the way we breathe air', icone: '💧' },
              { texte: 'It keeps it in its tummy', icone: '🎈' },
            ],
            explication:
              'The water flows over the gills, which take the dissolved oxygen; the water then leaves through the gill openings.',
          },
        ],
        '9-12': [
          {
            id: 'pourquoi-suffoque',
            question: 'Why does a fish out of water suffocate, when the air is full of oxygen?',
            reponses: [
              { texte: 'Its gills collapse and capture nothing', icone: '🫁', correcte: true },
              { texte: 'Because it does not like air', icone: '😤' },
              { texte: 'Because air has no oxygen in it', icone: '🚫' },
            ],
            explication:
              'Out of the water, the fine filaments of the gills stick together and flop: they can no longer capture oxygen, even surrounded by air.',
          },
        ],
      },
    },
  },
  {
    cardId: 'pourquoi-les-zebres-ont-des-rayures',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'rayures-pour-quoi',
            question: 'Les rayures du zèbre servent surtout à…',
            reponses: [
              { texte: 'Éloigner les mouches qui piquent', icone: '🪰', correcte: true },
              { texte: 'Se cacher dans les herbes', icone: '🌾' },
            ],
            explication: "Les mouches piqueuses n'arrivent pas à se poser sur les rayures. Ce n'est pas pour se cacher.",
          },
        ],
        '6-8': [
          {
            id: 'camouflage-ou-non',
            question: 'Les rayures du zèbre servent-elles à se camoufler ?',
            reponses: [
              { texte: 'Non, elles gênent les mouches piqueuses', icone: '🪰', correcte: true },
              { texte: 'Oui, pour disparaître dans les hautes herbes', icone: '🌾' },
              { texte: 'Oui, pour se cacher la nuit', icone: '🌙' },
            ],
            explication:
              "Dans la savane, un zèbre rayé se voit de loin. Les rayures empêchent surtout les taons de se poser.",
          },
        ],
        '9-12': [
          {
            id: 'hypothese-la-mieux-etayee',
            question: 'Quelle explication des rayures du zèbre est aujourd’hui la mieux étayée ?',
            reponses: [
              { texte: 'La protection contre les mouches piqueuses', icone: '🪰', correcte: true },
              { texte: 'Le camouflage dans la végétation', icone: '🌾' },
              { texte: 'Se rendre invisible aux lions', icone: '🦁' },
            ],
            explication:
              "Les expériences montrent que les taons dérapent sur les rayures. Comme ils transmettent des maladies, ce pelage offre un vrai avantage de survie.",
          },
        ],
      },
      en: {
        '3-5': [
          {
            id: 'rayures-pour-quoi',
            question: 'The zebra’s stripes are mostly there to…',
            reponses: [
              { texte: 'Keep away the flies that bite', icone: '🪰', correcte: true },
              { texte: 'Hide in the grass', icone: '🌾' },
            ],
            explication: 'Biting flies cannot manage to land on stripes. It is not for hiding.',
          },
        ],
        '6-8': [
          {
            id: 'camouflage-ou-non',
            question: 'Are the zebra’s stripes there for camouflage?',
            reponses: [
              { texte: 'No, they bother the biting flies', icone: '🪰', correcte: true },
              { texte: 'Yes, to vanish into the tall grass', icone: '🌾' },
              { texte: 'Yes, to hide at night', icone: '🌙' },
            ],
            explication:
              'On the savannah, a striped zebra can be seen from far away. Above all, the stripes stop horseflies landing.',
          },
        ],
        '9-12': [
          {
            id: 'hypothese-la-mieux-etayee',
            question: 'Which explanation of the zebra’s stripes is best supported today?',
            reponses: [
              { texte: 'Protection against biting flies', icone: '🪰', correcte: true },
              { texte: 'Camouflage in the vegetation', icone: '🌾' },
              { texte: 'Becoming invisible to lions', icone: '🦁' },
            ],
            explication:
              'Experiments show that horseflies skid off stripes. As they carry diseases, this coat offers a real survival advantage.',
          },
        ],
      },
    },
  },
  {
    cardId: 'comment-les-abeilles-font-le-miel',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'avec-quoi-le-miel',
            question: 'Avec quoi les abeilles font-elles le miel ?',
            reponses: [
              { texte: 'Avec le jus sucré des fleurs', icone: '🌸', correcte: true },
              { texte: 'Avec la poussière jaune, le pollen', icone: '🟡' },
            ],
            explication: "Le miel est fait avec le nectar, le jus sucré des fleurs, que les abeilles font sécher.",
          },
        ],
        '6-8': [
          {
            id: 'pour-qui-le-miel',
            question: 'Pour qui les abeilles font-elles surtout le miel ?',
            reponses: [
              { texte: 'Pour elles, comme réserve d’hiver', icone: '❄️', correcte: true },
              { texte: 'Pour nous, pour qu’on le mange', icone: '🥄' },
              { texte: 'Pour les fleurs', icone: '🌼' },
            ],
            explication:
              "Le miel est leur garde-manger pour l'hiver, quand il n'y a plus de fleurs. On n'en récolte qu'une partie du surplus.",
          },
        ],
        '9-12': [
          {
            id: 'comment-nectar-devient-miel',
            question: 'Comment le nectar liquide devient-il du miel épais ?',
            reponses: [
              { texte: 'Les abeilles en évaporent l’eau', icone: '💨', correcte: true },
              { texte: 'Elles y ajoutent du pollen en poudre', icone: '🟡' },
              { texte: 'Il durcit tout seul au froid', icone: '🧊' },
            ],
            explication:
              "Le nectar contient environ 80 % d'eau. En ventilant des ailes, les abeilles l'évaporent jusqu'à ne laisser qu'environ 18 % d'eau : le miel.",
          },
        ],
      },
      en: {
        '3-5': [
          {
            id: 'avec-quoi-le-miel',
            question: 'What do bees make honey with?',
            reponses: [
              { texte: 'With the sweet juice of flowers', icone: '🌸', correcte: true },
              { texte: 'With the yellow dust, the pollen', icone: '🟡' },
            ],
            explication: 'Honey is made with nectar, the sweet juice of flowers, which the bees dry out.',
          },
        ],
        '6-8': [
          {
            id: 'pour-qui-le-miel',
            question: 'Who do bees mainly make honey for?',
            reponses: [
              { texte: 'For themselves, as a winter store', icone: '❄️', correcte: true },
              { texte: 'For us, so that we can eat it', icone: '🥄' },
              { texte: 'For the flowers', icone: '🌼' },
            ],
            explication:
              'Honey is their larder for the winter, when there are no flowers left. We harvest only part of the surplus.',
          },
        ],
        '9-12': [
          {
            id: 'comment-nectar-devient-miel',
            question: 'How does runny nectar turn into thick honey?',
            reponses: [
              { texte: 'The bees evaporate the water out of it', icone: '💨', correcte: true },
              { texte: 'They add powdered pollen to it', icone: '🟡' },
              { texte: 'It hardens on its own in the cold', icone: '🧊' },
            ],
            explication:
              'Nectar is about 80% water. By fanning with their wings, the bees evaporate it until barely 18% water is left: honey.',
          },
        ],
      },
    },
  },
  {
    cardId: 'la-toile-de-laraignee',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'araignee-collee',
            question: 'L’araignée se colle-t-elle à sa toile ?',
            reponses: [
              { texte: 'Non, elle marche sur les fils qui ne collent pas', icone: '🕸️', correcte: true },
              { texte: 'Oui, elle se colle comme les mouches', icone: '🪰' },
            ],
            explication: "Certains fils ne collent pas. L'araignée se déplace seulement sur ceux-là.",
          },
        ],
        '6-8': [
          {
            id: 'quels-fils-collent',
            question: 'Dans la toile, quels fils sont collants ?',
            reponses: [
              { texte: 'Seulement la spirale', icone: '🌀', correcte: true },
              { texte: 'Tous les fils sans exception', icone: '🕸️' },
              { texte: 'Seulement les rayons du centre', icone: '➡️' },
            ],
            explication:
              "Les rayons secs portent l'araignée ; seule la spirale, couverte de gouttes de colle, piège les insectes.",
          },
        ],
        '9-12': [
          {
            id: 'pourquoi-piege-marche',
            question: 'Pourquoi la toile piège les insectes sans coincer l’araignée ?',
            reponses: [
              { texte: 'Fils secs et collants coexistent, et elle connaît la toile', icone: '🧭', correcte: true },
              { texte: 'Parce que l’araignée est trop légère pour coller', icone: '🪶' },
              { texte: 'Parce que la colle sèche quand elle passe', icone: '☀️' },
            ],
            explication:
              "L'araignée emprunte les rayons secs et évite la spirale gluante ; ses pattes fines et enduites limitent aussi l'adhérence.",
          },
        ],
      },
      en: {
        '3-5': [
          {
            id: 'araignee-collee',
            question: 'Does the spider stick to its own web?',
            reponses: [
              { texte: 'No, it walks on the threads that are not sticky', icone: '🕸️', correcte: true },
              { texte: 'Yes, it gets stuck like the flies', icone: '🪰' },
            ],
            explication: 'Some threads are not sticky. The spider only moves about on those.',
          },
        ],
        '6-8': [
          {
            id: 'quels-fils-collent',
            question: 'In the web, which threads are sticky?',
            reponses: [
              { texte: 'Only the spiral', icone: '🌀', correcte: true },
              { texte: 'Every single thread', icone: '🕸️' },
              { texte: 'Only the spokes from the centre', icone: '➡️' },
            ],
            explication:
              'The dry spokes carry the spider; only the spiral, covered in drops of glue, traps insects.',
          },
        ],
        '9-12': [
          {
            id: 'pourquoi-piege-marche',
            question: 'Why does the web trap insects without catching the spider?',
            reponses: [
              { texte: 'Dry and sticky threads coexist, and it knows its web', icone: '🧭', correcte: true },
              { texte: 'Because the spider is too light to stick', icone: '🪶' },
              { texte: 'Because the glue dries as it walks past', icone: '☀️' },
            ],
            explication:
              'The spider uses the dry spokes and keeps clear of the sticky spiral; its slender, coated legs also limit sticking.',
          },
        ],
      },
    },
  },
  {
    cardId: 'pourquoi-le-chat-retombe-sur-ses-pattes',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'comment-se-retourne',
            question: 'Comment le chat se met-il pattes en bas ?',
            reponses: [
              { texte: 'Il plie son corps et tourne dans le vide', icone: '🌀', correcte: true },
              { texte: 'Il ne se fait jamais mal en tombant', icone: '🛡️' },
            ],
            explication: "Il tourne en pliant son corps souple. Mais tomber peut quand même lui faire mal.",
          },
        ],
        '6-8': [
          {
            id: 'sans-appui',
            question: 'Sur quoi le chat prend-il appui pour se retourner ?',
            reponses: [
              { texte: 'Sur rien : il bouge son propre corps', icone: '🤸', correcte: true },
              { texte: 'Sur l’air, en poussant avec ses pattes', icone: '💨' },
              { texte: 'Sur un mur invisible', icone: '🧱' },
            ],
            explication:
              "Il fait tourner l'avant dans un sens et l'arrière dans l'autre : il se retourne sans aucun point d'appui.",
          },
        ],
        '9-12': [
          {
            id: 'toujours-indemne',
            question: 'Un chat qui retombe sur ses pattes est-il toujours indemne ?',
            reponses: [
              { texte: 'Non, la gravité l’attire et une chute peut le blesser', icone: '⚠️', correcte: true },
              { texte: 'Oui, il ne se fait jamais mal', icone: '🛡️' },
              { texte: 'Oui, car il annule la gravité', icone: '🚫' },
            ],
            explication:
              "Se retourner ne fait que l'orienter : la gravité l'attire vers le sol tout du long, et une chute de plusieurs étages reste dangereuse.",
          },
        ],
      },
      en: {
        '3-5': [
          {
            id: 'comment-se-retourne',
            question: 'How does the cat get its paws pointing down?',
            reponses: [
              { texte: 'It folds its body and turns in mid-air', icone: '🌀', correcte: true },
              { texte: 'It never hurts itself when it falls', icone: '🛡️' },
            ],
            explication: 'It turns by folding its bendy body. But falling can still hurt it.',
          },
        ],
        '6-8': [
          {
            id: 'sans-appui',
            question: 'What does the cat push against to turn itself over?',
            reponses: [
              { texte: 'Nothing: it moves its own body', icone: '🤸', correcte: true },
              { texte: 'The air, pushing with its paws', icone: '💨' },
              { texte: 'An invisible wall', icone: '🧱' },
            ],
            explication:
              'It turns the front one way and the back the other: it turns over with nothing at all to push against.',
          },
        ],
        '9-12': [
          {
            id: 'toujours-indemne',
            question: 'Is a cat that lands on its feet always unhurt?',
            reponses: [
              { texte: 'No, gravity pulls it down and a fall can injure it', icone: '⚠️', correcte: true },
              { texte: 'Yes, it never gets hurt', icone: '🛡️' },
              { texte: 'Yes, because it cancels out gravity', icone: '🚫' },
            ],
            explication:
              'Turning over only orients it: gravity pulls it towards the ground the whole way down, and a fall of several storeys is still dangerous.',
          },
        ],
      },
    },
  },
];
