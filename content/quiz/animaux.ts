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
    },
  },
];
