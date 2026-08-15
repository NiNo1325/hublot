import type { QuizCarte } from '@/lib/types';

/**
 * Questions du domaine « La météo ».
 *
 * Règle de rédaction : la mauvaise réponse reprend l'idée reçue que la carte
 * corrige. Pour les 3-5 ans, deux propositions seulement, et des énoncés assez
 * courts pour tenir dans une phrase entendue.
 */
export const quiz: QuizCarte[] = [
  {
    cardId: 'les-nuages',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'nuage-fait-de-quoi',
            question: 'Un nuage, c’est fait de quoi ?',
            reponses: [
              { texte: 'De toutes petites gouttes d’eau', icone: '💧', correcte: true },
              { texte: 'De vapeur qu’on voit', icone: '💨' },
            ],
            explication: "Un nuage est fait de minuscules gouttelettes. La vapeur, elle, est invisible.",
          },
        ],
        '6-8': [
          {
            id: 'vapeur-visible',
            question: 'Peut-on voir la vapeur d’eau ?',
            reponses: [
              { texte: 'Non, elle est invisible', icone: '👻', correcte: true },
              { texte: 'Oui, c’est le nuage blanc', icone: '☁️' },
              { texte: 'Oui, c’est la fumée grise', icone: '💨' },
            ],
            explication:
              "La vapeur d'eau est un gaz invisible. Ce qu'on voit dans un nuage, ce sont des gouttelettes formées quand elle refroidit.",
          },
        ],
        '9-12': [
          {
            id: 'pourquoi-flotte',
            question: 'Pourquoi un nuage flotte-t-il ?',
            reponses: [
              { texte: 'Ses gouttelettes sont trop petites pour tomber vite', icone: '🎈', correcte: true },
              { texte: 'Parce que la vapeur est plus légère que l’air', icone: '💨' },
              { texte: 'Parce qu’il est fait de coton léger', icone: '🧶' },
            ],
            explication:
              "Les gouttelettes mesurent quelques millièmes de millimètre : leur chute est si lente, et les courants d'air si présents, qu'elles restent en suspension.",
          },
        ],
      },
      en: {
        '3-5': [
          {
            id: 'nuage-fait-de-quoi',
            question: 'What is a cloud made of?',
            reponses: [
              { texte: 'Tiny little drops of water', icone: '💧', correcte: true },
              { texte: 'Vapour that we can see', icone: '💨' },
            ],
            explication: 'A cloud is made of tiny droplets. Vapour itself is invisible.',
          },
        ],
        '6-8': [
          {
            id: 'vapeur-visible',
            question: 'Can you see water vapour?',
            reponses: [
              { texte: 'No, it is invisible', icone: '👻', correcte: true },
              { texte: 'Yes, it’s the white cloud', icone: '☁️' },
              { texte: 'Yes, it’s the grey smoke', icone: '💨' },
            ],
            explication:
              'Water vapour is an invisible gas. What you see in a cloud is droplets, formed when the vapour cools down.',
          },
        ],
        '9-12': [
          {
            id: 'pourquoi-flotte',
            question: 'Why does a cloud float?',
            reponses: [
              { texte: 'Its droplets are too small to fall quickly', icone: '🎈', correcte: true },
              { texte: 'Because vapour is lighter than air', icone: '💨' },
              { texte: 'Because it is made of light cotton wool', icone: '🧶' },
            ],
            explication:
              'The droplets measure a few thousandths of a millimetre: they fall so slowly, and air currents are so constant, that they stay suspended.',
          },
        ],
      },
    },
  },
  {
    cardId: 'pourquoi-il-fait-plus-froid-en-montagne',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'plus-haut-plus-froid',
            question: 'Quand on monte tout en haut d’une montagne…',
            reponses: [
              { texte: 'Il fait plus froid', icone: '🥶', correcte: true },
              { texte: 'Il fait plus chaud, on est près du soleil', icone: '☀️' },
            ],
            explication: "Plus on monte, plus il fait froid : il y a moins d'air pour garder la chaleur.",
          },
        ],
        '6-8': [
          {
            id: 'vraie-raison-froid',
            question: 'Pourquoi fait-il plus froid en haut des montagnes ?',
            reponses: [
              { texte: 'L’air s’y raréfie et garde mal la chaleur', icone: '💨', correcte: true },
              { texte: 'On est plus près du Soleil', icone: '☀️' },
              { texte: 'Le vent souffle plus fort', icone: '🌬️' },
            ],
            explication:
              "Le Soleil est à 150 millions de km : monter n'y change rien. En altitude, l'air rare retient mal la chaleur.",
          },
        ],
        '9-12': [
          {
            id: 'soleil-chauffe-quoi',
            question: 'Qu’est-ce que le Soleil chauffe surtout ?',
            reponses: [
              { texte: 'Le sol, qui réchauffe ensuite l’air', icone: '🌍', correcte: true },
              { texte: 'Directement l’air, d’autant plus qu’on est haut', icone: '💨' },
              { texte: 'Seulement les sommets enneigés', icone: '🏔️' },
            ],
            explication:
              "Le Soleil chauffe peu l'air directement : il chauffe le sol, qui réchauffe l'air à son contact. Plus on monte, plus on s'éloigne de ce sol et plus l'air rare retient mal la chaleur.",
          },
        ],
      },
      en: {
        '3-5': [
          {
            id: 'plus-haut-plus-froid',
            question: 'When you climb right to the top of a mountain…',
            reponses: [
              { texte: 'It gets colder', icone: '🥶', correcte: true },
              { texte: 'It gets warmer, you are near the sun', icone: '☀️' },
            ],
            explication: 'The higher you go, the colder it gets: there is less air to keep the heat in.',
          },
        ],
        '6-8': [
          {
            id: 'vraie-raison-froid',
            question: 'Why is it colder at the top of mountains?',
            reponses: [
              { texte: 'The air thins out and holds heat badly', icone: '💨', correcte: true },
              { texte: 'You are closer to the Sun', icone: '☀️' },
              { texte: 'The wind blows harder', icone: '🌬️' },
            ],
            explication:
              'The Sun is 150 million km away: climbing changes nothing. High up, the thin air holds heat badly.',
          },
        ],
        '9-12': [
          {
            id: 'soleil-chauffe-quoi',
            question: 'What does the Sun mainly heat?',
            reponses: [
              { texte: 'The ground, which then warms the air', icone: '🌍', correcte: true },
              { texte: 'The air directly, all the more so high up', icone: '💨' },
              { texte: 'Only the snow-covered summits', icone: '🏔️' },
            ],
            explication:
              'The Sun barely heats the air directly: it heats the ground, which warms the air in contact with it. The higher you go, the further you are from that ground, and the worse the thin air holds heat.',
          },
        ],
      },
    },
  },
  {
    cardId: 'la-foudre-et-le-tonnerre',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'eclair-ou-tonnerre',
            question: 'Que remarque-t-on d’abord pendant un orage ?',
            reponses: [
              { texte: 'On voit l’éclair, puis on entend le tonnerre', icone: '⚡', correcte: true },
              { texte: 'On voit et on entend en même temps', icone: '👂' },
            ],
            explication: "On voit l'éclair avant d'entendre le tonnerre, parce que la lumière va plus vite que le son.",
          },
        ],
        '6-8': [
          {
            id: 'pourquoi-decalage',
            question: 'Pourquoi entend-on le tonnerre après avoir vu l’éclair ?',
            reponses: [
              { texte: 'La lumière va bien plus vite que le son', icone: '💨', correcte: true },
              { texte: 'Le tonnerre part plus tard que l’éclair', icone: '⏰' },
              { texte: 'Le nuage garde le bruit un moment', icone: '☁️' },
            ],
            explication:
              "Éclair et tonnerre naissent en même temps ; mais la lumière nous parvient presque instantanément, le son beaucoup plus lentement.",
          },
        ],
        '9-12': [
          {
            id: 'calcul-distance',
            question: 'Comment estimer la distance de l’orage ?',
            reponses: [
              { texte: 'Compter les secondes éclair-tonnerre et diviser par trois', icone: '🔢', correcte: true },
              { texte: 'Compter le nombre d’éclairs', icone: '⚡' },
              { texte: 'Regarder la taille du nuage', icone: '☁️' },
            ],
            explication:
              "Le son parcourt environ 1 km en 3 secondes. Compter les secondes entre l'éclair et le tonnerre puis diviser par trois donne la distance en kilomètres.",
          },
        ],
      },
      en: {
        '3-5': [
          {
            id: 'eclair-ou-tonnerre',
            question: 'What do you notice first during a storm?',
            reponses: [
              { texte: 'You see the flash, then hear the thunder', icone: '⚡', correcte: true },
              { texte: 'You see it and hear it at the same time', icone: '👂' },
            ],
            explication: 'You see the flash before you hear the thunder, because light travels faster than sound.',
          },
        ],
        '6-8': [
          {
            id: 'pourquoi-decalage',
            question: 'Why do you hear the thunder after seeing the flash?',
            reponses: [
              { texte: 'Light travels much faster than sound', icone: '💨', correcte: true },
              { texte: 'The thunder starts later than the flash', icone: '⏰' },
              { texte: 'The cloud holds on to the noise for a while', icone: '☁️' },
            ],
            explication:
              'Lightning and thunder are born at the same instant; but light reaches us almost immediately, and sound much more slowly.',
          },
        ],
        '9-12': [
          {
            id: 'calcul-distance',
            question: 'How can you estimate how far away a storm is?',
            reponses: [
              { texte: 'Count the seconds from flash to thunder and divide by three', icone: '🔢', correcte: true },
              { texte: 'Count how many flashes there are', icone: '⚡' },
              { texte: 'Look at the size of the cloud', icone: '☁️' },
            ],
            explication:
              'Sound travels about 1 km in 3 seconds. Counting the seconds between the flash and the thunder, then dividing by three, gives the distance in kilometres.',
          },
        ],
      },
    },
  },
  {
    cardId: 'la-neige',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'neige-cest-quoi',
            question: 'La neige, c’est…',
            reponses: [
              { texte: 'De petits cristaux de glace en étoile', icone: '❄️', correcte: true },
              { texte: 'De la pluie qui a gelé en tombant', icone: '🌧️' },
            ],
            explication: "La neige se forme directement dans le froid en cristaux, ce n'est pas de la pluie gelée.",
          },
        ],
        '6-8': [
          {
            id: 'combien-de-branches',
            question: 'Combien de branches a toujours un cristal de neige ?',
            reponses: [
              { texte: 'Six', icone: '❄️', correcte: true },
              { texte: 'Quatre', icone: '➕' },
              { texte: 'Un nombre au hasard', icone: '🎲' },
            ],
            explication:
              "À cause de la façon dont les molécules d'eau s'assemblent, un flocon a toujours six branches.",
          },
        ],
        '9-12': [
          {
            id: 'de-quel-etat',
            question: 'À partir de quoi se forme un flocon de neige ?',
            reponses: [
              { texte: 'De la vapeur qui devient glace sans étape liquide', icone: '💨', correcte: true },
              { texte: 'D’une goutte d’eau qui gèle', icone: '💧' },
              { texte: 'De grêlons qui se cassent', icone: '🧊' },
            ],
            explication:
              "Dans un nuage sous zéro, la vapeur se dépose directement à l'état solide (déposition). Une goutte gelée donnerait du verglas, pas un flocon.",
          },
        ],
      },
      en: {
        '3-5': [
          {
            id: 'neige-cest-quoi',
            question: 'Snow is…',
            reponses: [
              { texte: 'Little star-shaped crystals of ice', icone: '❄️', correcte: true },
              { texte: 'Rain that froze as it fell', icone: '🌧️' },
            ],
            explication: 'Snow forms straight away as crystals in the cold; it is not frozen rain.',
          },
        ],
        '6-8': [
          {
            id: 'combien-de-branches',
            question: 'How many arms does a snow crystal always have?',
            reponses: [
              { texte: 'Six', icone: '❄️', correcte: true },
              { texte: 'Four', icone: '➕' },
              { texte: 'Any number at all', icone: '🎲' },
            ],
            explication:
              'Because of the way water molecules fit together, a snowflake always has six arms.',
          },
        ],
        '9-12': [
          {
            id: 'de-quel-etat',
            question: 'What does a snowflake form from?',
            reponses: [
              { texte: 'Vapour that becomes ice with no liquid stage', icone: '💨', correcte: true },
              { texte: 'A drop of water that freezes', icone: '💧' },
              { texte: 'Hailstones that break apart', icone: '🧊' },
            ],
            explication:
              'In a cloud below freezing, vapour settles directly as a solid (deposition). A frozen drop would give glaze ice, not a snowflake.',
          },
        ],
      },
    },
  },
  {
    cardId: 'la-grele',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'grele-monte',
            question: 'Dans le nuage, que fait le petit grêlon ?',
            reponses: [
              { texte: 'Il monte et descend plusieurs fois', icone: '🔃', correcte: true },
              { texte: 'Il tombe tout de suite', icone: '⬇️' },
            ],
            explication: "Le vent le fait monter et descendre ; à chaque tour, il s'entoure d'une couche de glace.",
          },
        ],
        '6-8': [
          {
            id: 'grele-quoi',
            question: 'La grêle, qu’est-ce que c’est ?',
            reponses: [
              { texte: 'Des billes de glace faites de couches', icone: '🧅', correcte: true },
              { texte: 'De la neige roulée en boule', icone: '⚪' },
              { texte: 'De la pluie très froide', icone: '💧' },
            ],
            explication:
              "Un grêlon grossit couche après couche en montant et descendant dans l'orage, comme un oignon.",
          },
        ],
        '9-12': [
          {
            id: 'quand-tombe',
            question: 'Quand un grêlon finit-il par tomber ?',
            reponses: [
              { texte: 'Quand il est trop lourd pour le courant d’air', icone: '⚖️', correcte: true },
              { texte: 'Quand le nuage a fini sa neige', icone: '❄️' },
              { texte: 'Quand il fait plus froid', icone: '🌡️' },
            ],
            explication:
              "Il grossit tant que le courant ascendant le soutient ; dès que son poids l'emporte, il chute — d'autant plus gros que l'orage est puissant.",
          },
        ],
      },
      en: {
        '3-5': [
          {
            id: 'grele-monte',
            question: 'Inside the cloud, what does the little hailstone do?',
            reponses: [
              { texte: 'It goes up and down several times', icone: '🔃', correcte: true },
              { texte: 'It falls straight away', icone: '⬇️' },
            ],
            explication: 'The wind carries it up and down; each time round, a new layer of ice wraps around it.',
          },
        ],
        '6-8': [
          {
            id: 'grele-quoi',
            question: 'What is hail?',
            reponses: [
              { texte: 'Balls of ice made of layers', icone: '🧅', correcte: true },
              { texte: 'Snow rolled into a ball', icone: '⚪' },
              { texte: 'Very cold rain', icone: '💧' },
            ],
            explication:
              'A hailstone grows layer after layer as it rises and falls inside the storm, like an onion.',
          },
        ],
        '9-12': [
          {
            id: 'quand-tombe',
            question: 'When does a hailstone finally fall?',
            reponses: [
              { texte: 'When it is too heavy for the updraught', icone: '⚖️', correcte: true },
              { texte: 'When the cloud has run out of snow', icone: '❄️' },
              { texte: 'When the weather turns colder', icone: '🌡️' },
            ],
            explication:
              'It keeps growing as long as the updraught can hold it; as soon as its weight wins, it drops — and the more powerful the storm, the bigger it is.',
          },
        ],
      },
    },
  },
  {
    cardId: 'le-brouillard',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'brouillard-vient-do',
            question: 'D’où vient le brouillard ?',
            reponses: [
              { texte: 'Il se forme tout près du sol', icone: '🌫️', correcte: true },
              { texte: 'Il descend du ciel', icone: '⬇️' },
            ],
            explication: "Le brouillard se forme au ras du sol, quand l'air y refroidit. Il ne tombe pas du ciel.",
          },
        ],
        '6-8': [
          {
            id: 'brouillard-cest',
            question: 'Le brouillard, c’est en fait…',
            reponses: [
              { texte: 'Un nuage posé au niveau du sol', icone: '☁️', correcte: true },
              { texte: 'De la fumée', icone: '💨' },
              { texte: 'De la pluie très fine', icone: '🌧️' },
            ],
            explication:
              "C'est un nuage de gouttelettes, mais au ras du sol : l'air y a refroidi et sa vapeur s'est condensée sur place.",
          },
        ],
        '9-12': [
          {
            id: 'brouillard-se-leve',
            question: 'Quand on dit que le brouillard « se lève », que se passe-t-il ?',
            reponses: [
              { texte: 'Il se réchauffe et se change en vapeur invisible sur place', icone: '☀️', correcte: true },
              { texte: 'Il monte dans le ciel comme un ballon', icone: '🎈' },
              { texte: 'Le vent l’emporte vers un autre pays', icone: '🌬️' },
            ],
            explication:
              "Quand l'air se réchauffe et repasse au-dessus du point de rosée, les gouttelettes s'évaporent. Le brouillard ne monte pas : il disparaît là où il était.",
          },
        ],
      },
      en: {
        '3-5': [
          {
            id: 'brouillard-vient-do',
            question: 'Where does fog come from?',
            reponses: [
              { texte: 'It forms right down near the ground', icone: '🌫️', correcte: true },
              { texte: 'It comes down from the sky', icone: '⬇️' },
            ],
            explication: 'Fog forms right at ground level, when the air there cools. It does not fall from the sky.',
          },
        ],
        '6-8': [
          {
            id: 'brouillard-cest',
            question: 'Fog is actually…',
            reponses: [
              { texte: 'A cloud sitting at ground level', icone: '☁️', correcte: true },
              { texte: 'Smoke', icone: '💨' },
              { texte: 'Very fine rain', icone: '🌧️' },
            ],
            explication:
              'It is a cloud of droplets, but down at ground level: the air there cooled and its vapour condensed on the spot.',
          },
        ],
        '9-12': [
          {
            id: 'brouillard-se-leve',
            question: 'When we say the fog “lifts”, what really happens?',
            reponses: [
              { texte: 'It warms up and turns into invisible vapour on the spot', icone: '☀️', correcte: true },
              { texte: 'It rises into the sky like a balloon', icone: '🎈' },
              { texte: 'The wind carries it off to another country', icone: '🌬️' },
            ],
            explication:
              'When the air warms back above the dew point, the droplets evaporate. Fog does not rise: it disappears right where it was.',
          },
        ],
      },
    },
  },
  {
    cardId: 'louragan',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'ouragan-au-milieu',
            question: 'Qu’y a-t-il au milieu d’un ouragan ?',
            reponses: [
              { texte: 'Un endroit tout calme, l’œil', icone: '😌', correcte: true },
              { texte: 'Le vent le plus fort', icone: '🌪️' },
            ],
            explication: "Au centre se trouve l'œil, une zone calme. Tout tourne bien rangé autour de lui.",
          },
        ],
        '6-8': [
          {
            id: 'vent-desordre',
            question: 'Dans un ouragan, le vent souffle-t-il n’importe comment ?',
            reponses: [
              { texte: 'Non, il tourne en spirale autour de l’œil', icone: '🌀', correcte: true },
              { texte: 'Oui, dans tous les sens au hasard', icone: '🎲' },
              { texte: 'Oui, toujours tout droit', icone: '➡️' },
            ],
            explication:
              "Un ouragan est très organisé : une immense spirale de nuages qui tourne autour d'un centre calme.",
          },
        ],
        '9-12': [
          {
            id: 'energie-ouragan',
            question: 'D’où un ouragan tire-t-il son énergie ?',
            reponses: [
              { texte: 'De la chaleur d’une mer chaude qui évapore de l’eau', icone: '🌊', correcte: true },
              { texte: 'Du froid de l’hiver', icone: '❄️' },
              { texte: 'Des éclairs qu’il contient', icone: '⚡' },
            ],
            explication:
              "Sur une mer à plus de 26 °C, l'eau s'évapore ; en se condensant en altitude, la vapeur libère la chaleur qui alimente la tempête.",
          },
        ],
      },
      en: {
        '3-5': [
          {
            id: 'ouragan-au-milieu',
            question: 'What is in the middle of a hurricane?',
            reponses: [
              { texte: 'A very calm spot, the eye', icone: '😌', correcte: true },
              { texte: 'The strongest wind of all', icone: '🌪️' },
            ],
            explication: 'At the centre is the eye, a calm zone. Everything turns neatly around it.',
          },
        ],
        '6-8': [
          {
            id: 'vent-desordre',
            question: 'In a hurricane, does the wind blow every which way?',
            reponses: [
              { texte: 'No, it spirals around the eye', icone: '🌀', correcte: true },
              { texte: 'Yes, in all directions at random', icone: '🎲' },
              { texte: 'Yes, always straight ahead', icone: '➡️' },
            ],
            explication:
              'A hurricane is highly organised: an immense spiral of cloud turning around a calm centre.',
          },
        ],
        '9-12': [
          {
            id: 'energie-ouragan',
            question: 'Where does a hurricane get its energy from?',
            reponses: [
              { texte: 'From the heat of a warm sea evaporating water', icone: '🌊', correcte: true },
              { texte: 'From the cold of winter', icone: '❄️' },
              { texte: 'From the lightning it contains', icone: '⚡' },
            ],
            explication:
              'Over a sea warmer than 26 °C, water evaporates; as it condenses high up, the vapour releases the heat that fuels the storm.',
          },
        ],
      },
    },
  },
  {
    cardId: 'la-rosee-du-matin',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'rosee-tombe',
            question: 'La rosée sur l’herbe, d’où vient-elle ?',
            reponses: [
              { texte: 'L’eau de l’air se colle sur l’herbe froide', icone: '💧', correcte: true },
              { texte: 'Elle tombe du ciel la nuit', icone: '⬇️' },
            ],
            explication: "La rosée se forme sur place : l'eau de l'air se dépose sur l'herbe refroidie. Elle ne tombe pas.",
          },
        ],
        '6-8': [
          {
            id: 'pourquoi-le-matin',
            question: 'Pourquoi la rosée apparaît-elle au matin ?',
            reponses: [
              { texte: 'La nuit refroidit les surfaces, la vapeur s’y condense', icone: '🌙', correcte: true },
              { texte: 'Il a plu pendant la nuit', icone: '🌧️' },
              { texte: 'Les plantes fabriquent de l’eau la nuit', icone: '🌱' },
            ],
            explication:
              "La nuit, l'herbe devient plus froide que l'air ; la vapeur d'eau se condense dessus, comme la buée sur un verre glacé.",
          },
        ],
        '9-12': [
          {
            id: 'rosee-ou-givre',
            question: 'Que devient la rosée si la surface descend sous zéro ?',
            reponses: [
              { texte: 'La vapeur se dépose en glace : c’est le givre', icone: '🌬️', correcte: true },
              { texte: 'La rosée gèle en petits glaçons ronds', icone: '🧊' },
              { texte: 'Il ne se passe rien de spécial', icone: '🤷' },
            ],
            explication:
              "Sous zéro, la vapeur se dépose directement en glace au lieu de gouttes : on obtient du givre, pas de la rosée.",
          },
        ],
      },
      en: {
        '3-5': [
          {
            id: 'rosee-tombe',
            question: 'Where does the dew on the grass come from?',
            reponses: [
              { texte: 'Water in the air sticks to the cold grass', icone: '💧', correcte: true },
              { texte: 'It falls from the sky at night', icone: '⬇️' },
            ],
            explication: 'Dew forms on the spot: water from the air settles on the cooled grass. It does not fall.',
          },
        ],
        '6-8': [
          {
            id: 'pourquoi-le-matin',
            question: 'Why does dew appear in the morning?',
            reponses: [
              { texte: 'Night cools the surfaces, and vapour condenses on them', icone: '🌙', correcte: true },
              { texte: 'It rained during the night', icone: '🌧️' },
              { texte: 'Plants make water at night', icone: '🌱' },
            ],
            explication:
              'At night the grass becomes colder than the air; water vapour condenses on it, like mist on an ice-cold glass.',
          },
        ],
        '9-12': [
          {
            id: 'rosee-ou-givre',
            question: 'What becomes of dew if the surface drops below zero?',
            reponses: [
              { texte: 'The vapour settles as ice: that is frost', icone: '🌬️', correcte: true },
              { texte: 'The dew freezes into little round beads of ice', icone: '🧊' },
              { texte: 'Nothing in particular happens', icone: '🤷' },
            ],
            explication:
              'Below zero, the vapour settles directly as ice instead of forming drops: you get frost, not dew.',
          },
        ],
      },
    },
  },
  {
    cardId: 'le-givre',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'givre-cest',
            question: 'Le givre blanc sur les vitres, c’est fait de quoi ?',
            reponses: [
              { texte: 'De petits cristaux de glace', icone: '❄️', correcte: true },
              { texte: 'De rosée qui a gelé', icone: '💧' },
            ],
            explication: "L'eau de l'air se change directement en glace sur la vitre froide, en jolis cristaux.",
          },
        ],
        '6-8': [
          {
            id: 'givre-ou-rosee-gelee',
            question: 'Le givre, est-ce de la rosée qui a gelé ?',
            reponses: [
              { texte: 'Non, la vapeur devient glace sans faire de goutte', icone: '🌬️', correcte: true },
              { texte: 'Oui, les gouttes de rosée ont gelé', icone: '🧊' },
              { texte: 'Oui, c’est de la neige écrasée', icone: '❄️' },
            ],
            explication:
              "Sur une surface sous zéro, la vapeur se dépose directement en glace, sans passer par la goutte : c'est la déposition.",
          },
        ],
        '9-12': [
          {
            id: 'forme-du-givre',
            question: 'Pourquoi le givre forme-t-il des plumes et non des gouttes rondes ?',
            reponses: [
              { texte: 'Parce que la vapeur se solidifie en cristaux, comme la neige', icone: '🪶', correcte: true },
              { texte: 'Parce que le vent étire les gouttes', icone: '💨' },
              { texte: 'Parce que la rosée gèle en pointe', icone: '🧊' },
            ],
            explication:
              "Le givre naît de vapeur solidifiée (déposition) : comme la neige, il s'organise en cristaux — plumes, aiguilles, fougères — jamais en gouttes.",
          },
        ],
      },
      en: {
        '3-5': [
          {
            id: 'givre-cest',
            question: 'What is the white frost on windows made of?',
            reponses: [
              { texte: 'Little crystals of ice', icone: '❄️', correcte: true },
              { texte: 'Dew that has frozen', icone: '💧' },
            ],
            explication: 'Water in the air turns straight into ice on the cold glass, in pretty crystals.',
          },
        ],
        '6-8': [
          {
            id: 'givre-ou-rosee-gelee',
            question: 'Is frost just dew that has frozen?',
            reponses: [
              { texte: 'No, the vapour becomes ice without ever making a drop', icone: '🌬️', correcte: true },
              { texte: 'Yes, the drops of dew froze', icone: '🧊' },
              { texte: 'Yes, it is crushed snow', icone: '❄️' },
            ],
            explication:
              'On a surface below zero, vapour settles directly as ice, never passing through a droplet: that is deposition.',
          },
        ],
        '9-12': [
          {
            id: 'forme-du-givre',
            question: 'Why does frost form feathers rather than round drops?',
            reponses: [
              { texte: 'Because vapour solidifies into crystals, like snow', icone: '🪶', correcte: true },
              { texte: 'Because the wind stretches the drops out', icone: '💨' },
              { texte: 'Because dew freezes into points', icone: '🧊' },
            ],
            explication:
              'Frost is born of solidified vapour (deposition): like snow, it arranges itself into crystals — feathers, needles, ferns — never drops.',
          },
        ],
      },
    },
  },
  {
    cardId: 'la-forme-des-gouttes-de-pluie',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'forme-goutte',
            question: 'Quelle est la vraie forme d’une petite goutte de pluie ?',
            reponses: [
              { texte: 'Toute ronde, comme une bille', icone: '⚪', correcte: true },
              { texte: 'Pointue, comme une larme', icone: '💧' },
            ],
            explication: "Une petite goutte est ronde. La forme de larme des dessins n'existe pas dans la vraie pluie.",
          },
        ],
        '6-8': [
          {
            id: 'goutte-qui-tombe',
            question: 'Quelle forme prend une grosse goutte qui tombe ?',
            reponses: [
              { texte: 'Un petit coussin, aplati en dessous', icone: '🍔', correcte: true },
              { texte: 'Une larme pointue en haut', icone: '💧' },
              { texte: 'Une longue aiguille', icone: '📍' },
            ],
            explication:
              "En tombant, l'air pousse la goutte par en dessous et l'aplatit : elle ressemble à un petit pain, pas à une larme.",
          },
        ],
        '9-12': [
          {
            id: 'pourquoi-ronde',
            question: 'Pourquoi une petite goutte est-elle sphérique ?',
            reponses: [
              { texte: 'La tension de surface la ramène en boule', icone: '⚪', correcte: true },
              { texte: 'Parce qu’elle tourne en tombant', icone: '🌀' },
              { texte: 'Parce que le froid l’arrondit', icone: '❄️' },
            ],
            explication:
              "La tension superficielle tire la surface vers l'intérieur et donne la forme la plus compacte, la sphère. C'est l'air, en tombant, qui l'aplatit ensuite en coussin.",
          },
        ],
      },
      en: {
        '3-5': [
          {
            id: 'forme-goutte',
            question: 'What is the real shape of a small raindrop?',
            reponses: [
              { texte: 'Completely round, like a marble', icone: '⚪', correcte: true },
              { texte: 'Pointed, like a tear', icone: '💧' },
            ],
            explication: 'A small drop is round. The tear shape in drawings does not exist in real rain.',
          },
        ],
        '6-8': [
          {
            id: 'goutte-qui-tombe',
            question: 'What shape does a big falling drop take?',
            reponses: [
              { texte: 'A little cushion, flattened underneath', icone: '🍔', correcte: true },
              { texte: 'A tear with a point on top', icone: '💧' },
              { texte: 'A long needle', icone: '📍' },
            ],
            explication:
              'As it falls, the air pushes the drop from underneath and flattens it: it looks like a bread roll, not a tear.',
          },
        ],
        '9-12': [
          {
            id: 'pourquoi-ronde',
            question: 'Why is a small drop spherical?',
            reponses: [
              { texte: 'Surface tension pulls it back into a ball', icone: '⚪', correcte: true },
              { texte: 'Because it spins as it falls', icone: '🌀' },
              { texte: 'Because the cold rounds it off', icone: '❄️' },
            ],
            explication:
              'Surface tension pulls the surface inwards and gives the most compact shape there is, the sphere. It is the air, during the fall, that then flattens it into a cushion.',
          },
        ],
      },
    },
  },
];
