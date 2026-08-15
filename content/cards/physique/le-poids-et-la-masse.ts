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
    en: {
      title: {
        '3-5': 'Lighter on the Moon',
        '6-8': 'Weight and mass',
        '9-12': 'Mass, weight and weightlessness',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'balance',
              text: 'On the Moon, you could jump very, very high. You would be much lighter.',
            },
            {
              id: 'deux-choses',
              text: 'And yet you would be exactly the same! There would still be just as much of you.',
            },
            {
              id: 'sur-la-lune',
              text: 'What changes is how hard the Moon pulls you down. It pulls six times less hard.',
            },
            {
              id: 'apesanteur',
              text: 'And in a rocket, you weigh nothing at all — without losing a single gram.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'balance',
              text: 'Bathroom scales do not quite tell you what you think. Standing on the Moon, they would show six times less.',
            },
            {
              id: 'deux-choses',
              text: 'They are two different things. Mass is the amount of stuff you are made of: it does not change anywhere. Weight is the force with which a world pulls on you: it depends on the world.',
            },
            {
              id: 'sur-la-lune',
              text: 'On the Moon your mass would be the same to the gram, but your weight six times smaller — which is why the Apollo astronauts bounced along. On Jupiter you would weigh more than twice as much, still with exactly the same mass.',
            },
            {
              id: 'apesanteur',
              text: 'In orbit you float, and yet gravity there is almost as strong as on the ground. What is happening: everything falls together, so nothing presses on anything. The mass is still there — pushing a heavy object inside the station takes exactly the same effort as down here.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'balance',
              text: 'The confusion between weight and mass is kept alive by everyday language and by scales, which display kilograms when what they actually measure is a force.',
            },
            {
              id: 'deux-choses',
              text: 'Mass is an intrinsic property, in kilograms: it measures both a body’s inertia and how strongly it couples to gravity. Weight is a force, in newtons — the mass multiplied by the local acceleration due to gravity, about 9.8 metres per second squared on Earth.',
            },
            {
              id: 'sur-la-lune',
              text: 'On the Moon that acceleration is 1.62: the weight is divided by six, the mass is unchanged. Electronic scales calibrated on Earth would therefore read a false value there, whereas a balance scale, which compares two masses, would stay exact.',
            },
            {
              id: 'apesanteur',
              text: 'Weightlessness in orbit is not an absence of gravity: four hundred kilometres up, it is still about 8.7. It is a state of free fall — the station and the people inside it fall with the same acceleration, so no contact force acts between them. Inertia remains, though: moving a module of several tonnes there takes the same work as on the ground.',
            },
          ],
        },
      },
    },
  },
};
