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
      '3-5': [
        {
          id: 'qui-sort-de-loeuf',
          question: "Qui sort du petit œuf ?",
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
          question: 'Dans la chrysalide, que se passe-t-il ?',
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
  {
    cardId: 'pourquoi-le-cameleon-change-de-couleur',
    questions: {
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
  {
    cardId: 'la-migration-des-oiseaux',
    questions: {
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
          question: 'Quelle est la vraie raison du grand départ ?',
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
  {
    cardId: 'lhibernation',
    questions: {
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
          question: 'Pourquoi le corps se met-il autant au ralenti ?',
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
  {
    cardId: 'lecholocation-de-la-chauve-souris',
    questions: {
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
          question: 'Comment se dirige-t-elle dans le noir complet ?',
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
];
