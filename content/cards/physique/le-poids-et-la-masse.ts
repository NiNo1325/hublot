import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : la balance affiche des kilogrammes alors qu'elle mesure
 * une force. La masse ne change pas d'un astre à l'autre, le poids si — et
 * l'impesanteur orbitale n'est pas une absence de gravité mais un état de
 * chute libre, où l'inertie demeure entière.
 */
export const card: ScienceCard = {
  id: 'le-poids-et-la-masse',
  domainId: 'physique',
  animationId: 'poids-masse',
  thumbnail: '🏋️',
  content: {
    fr: {
      title: {
        '3-5': 'Plus léger sur la Lune',
        '6-8': 'Le poids et la masse',
        '9-12': 'Masse, poids et impesanteur',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'balance',
              text: 'Sur la Lune, tu pourrais sauter très très haut. Tu serais beaucoup plus léger.',
            },
            {
              id: 'deux-choses',
              text: 'Et pourtant, tu serais exactement le même ! Il y aurait toujours autant de toi.',
            },
            {
              id: 'sur-la-lune',
              text: 'Ce qui change, c’est à quel point la Lune te tire vers le bas. Elle tire six fois moins fort.',
            },
            {
              id: 'apesanteur',
              text: 'Et dans une fusée, on ne pèse plus rien du tout — sans avoir perdu un seul gramme.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'balance',
              text: 'Une balance de salle de bain n’indique pas tout à fait ce que tu crois. Posée sur la Lune, elle afficherait six fois moins.',
            },
            {
              id: 'deux-choses',
              text: 'Ce sont deux choses différentes. La masse, c’est la quantité de matière dont tu es fait : elle ne change nulle part. Le poids, c’est la force avec laquelle un astre t’attire : il dépend de l’astre.',
            },
            {
              id: 'sur-la-lune',
              text: 'Sur la Lune, ta masse serait identique au gramme près, mais ton poids six fois plus faible — d’où les bonds des astronautes d’Apollo. Sur Jupiter, tu pèserais plus du double, toujours avec la même masse.',
            },
            {
              id: 'apesanteur',
              text: 'En orbite, on flotte, et pourtant la gravité y vaut presque autant qu’au sol. Ce qui se passe : tout tombe ensemble, alors plus rien n’appuie sur rien. La masse, elle, est toujours là — pousser un objet lourd dans la station demande exactement le même effort qu’ici.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'balance',
              text: 'La confusion entre poids et masse est entretenue par le langage courant et par les balances, qui affichent des kilogrammes alors qu’elles mesurent une force.',
            },
            {
              id: 'deux-choses',
              text: 'La masse est une propriété intrinsèque, en kilogrammes : elle quantifie à la fois l’inertie d’un corps et son couplage à la gravitation. Le poids est une force, en newtons — le produit de la masse par l’accélération de la pesanteur locale, environ 9,8 mètres par seconde carrée sur Terre.',
            },
            {
              id: 'sur-la-lune',
              text: 'Sur la Lune, cette accélération vaut 1,62 : le poids est divisé par six, la masse est inchangée. Une balance électronique étalonnée sur Terre y afficherait donc une valeur fausse, alors qu’une balance à fléaux, qui compare deux masses, resterait exacte.',
            },
            {
              id: 'apesanteur',
              text: 'L’impesanteur orbitale n’est pas une absence de gravité : à quatre cents kilomètres d’altitude, elle vaut encore environ 8,7. C’est un état de chute libre — la station et ses occupants tombent avec la même accélération, si bien qu’aucune force de contact ne s’exerce entre eux. L’inertie, elle, demeure : déplacer un module de plusieurs tonnes y exige le même travail qu’au sol.',
            },
          ],
        },
      },
    },
  },
};
