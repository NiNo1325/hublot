import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : une fusée ne s'appuie pas sur l'air. Elle éjecte de la
 * matière et se trouve poussée en retour — ce qui marche mieux dans le vide,
 * où plus rien ne la freine. Le New York Times l'a appris à ses dépens en
 * 1920, et s'est rétracté la veille du départ d'Apollo 11.
 */
export const card: ScienceCard = {
  id: 'comment-avance-une-fusee',
  domainId: 'ingenierie',
  animationId: 'fusee',
  thumbnail: '🚀',
  content: {
    fr: {
      title: {
        '3-5': 'La fusée qui monte',
        '6-8': 'Comment avance une fusée',
        '9-12': 'Action, réaction : le vol des fusées',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'ballon',
              text: 'Gonfle un ballon, puis lâche-le sans le fermer. Il part tout seul, très vite, du côté opposé à l’air qui s’échappe.',
            },
            {
              id: 'pousser',
              text: 'Une fusée fait pareil : elle envoie du gaz très fort vers le bas, et ça la pousse vers le haut.',
            },
            {
              id: 'sans-air',
              text: 'Tout là-haut, il n’y a plus d’air du tout. Et ça marche quand même : elle n’a besoin de rien pour s’appuyer.',
            },
            {
              id: 'etages',
              text: 'Quand un gros morceau est vide, elle le laisse tomber. Plus légère, elle monte encore mieux.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'ballon',
              text: 'Le ballon qu’on lâche explique tout : ce n’est pas l’air du dehors qui le pousse, c’est l’air qui sort de lui.',
            },
            {
              id: 'pousser',
              text: 'Chaque fois qu’une chose en pousse une autre, elle est poussée en retour, aussi fort et en sens inverse. La fusée éjecte des tonnes de gaz brûlant vers le bas ; le gaz la repousse vers le haut.',
            },
            {
              id: 'sans-air',
              text: 'On imagine souvent qu’une fusée s’appuie sur l’air, comme une rame sur l’eau. C’est faux : dans le vide, elle pousse encore mieux, puisqu’il n’y a plus d’air pour la freiner.',
            },
            {
              id: 'etages',
              text: 'Le plus lourd, dans une fusée, c’est son carburant. À mesure qu’il brûle, elle largue les étages devenus des coques vides : inutile de traîner un réservoir vide jusque dans l’espace.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'ballon',
              text: 'Le principe tient dans la troisième loi de Newton : toute action s’accompagne d’une réaction égale et opposée. Le ballon qui se dégonfle en est la démonstration domestique.',
            },
            {
              id: 'pousser',
              text: 'Un moteur-fusée éjecte de la matière — les gaz de combustion — à plusieurs kilomètres par seconde. La quantité de mouvement emportée vers l’arrière est exactement compensée par celle que gagne la fusée vers l’avant. La poussée ne dépend que du débit de gaz et de leur vitesse d’éjection.',
            },
            {
              id: 'sans-air',
              text: 'En 1920, un éditorial du New York Times reprochait à Robert Goddard d’ignorer qu’une fusée n’aurait rien contre quoi pousser dans le vide. Le journal s’est rétracté en 1969, la veille du décollage d’Apollo 11 : le vide améliore le rendement, l’atmosphère ne fait que freiner.',
            },
            {
              id: 'etages',
              text: 'D’où l’étagement. La vitesse finale dépend du rapport entre la masse au départ et la masse à l’arrivée : larguer les réservoirs vidés en cours de route améliore ce rapport, et c’est précisément ce qui rend l’orbite atteignable.',
            },
          ],
        },
      },
    },
    en: {
      title: {
        '3-5': 'The rocket that goes up',
        '6-8': 'How a rocket moves',
        '9-12': 'Action and reaction: how rockets fly',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'ballon',
              text: 'Blow up a balloon, then let go without tying it. Off it shoots, very fast, the opposite way to the air rushing out.',
            },
            {
              id: 'pousser',
              text: 'A rocket does the same: it blows gas downwards very hard, and that pushes it upwards.',
            },
            {
              id: 'sans-air',
              text: 'Way up high there is no air at all. And it still works: it needs nothing to lean on.',
            },
            {
              id: 'etages',
              text: 'When a big piece is empty, the rocket drops it. Lighter now, it climbs even better.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'ballon',
              text: 'The balloon you let go explains everything: it is not the air outside that pushes it, it is the air coming out of it.',
            },
            {
              id: 'pousser',
              text: 'Every time one thing pushes another, it is pushed back just as hard and the opposite way. A rocket throws tonnes of burning gas downwards; the gas pushes it upwards.',
            },
            {
              id: 'sans-air',
              text: 'People often imagine that a rocket leans on the air, like an oar on water. That is wrong: in a vacuum it pushes even better, since there is no air left to slow it down.',
            },
            {
              id: 'etages',
              text: 'The heaviest thing in a rocket is its fuel. As it burns, the rocket drops the stages that have become empty shells: no point dragging an empty tank all the way to space.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'ballon',
              text: 'The principle is Newton’s third law: every action comes with an equal and opposite reaction. A deflating balloon is the household demonstration of it.',
            },
            {
              id: 'pousser',
              text: 'A rocket engine ejects matter — the combustion gases — at several kilometres per second. The momentum carried backwards is exactly matched by the momentum the rocket gains forwards. The thrust depends only on the flow rate of the gas and its exhaust speed.',
            },
            {
              id: 'sans-air',
              text: 'In 1920, a New York Times editorial scolded Robert Goddard for not knowing that a rocket would have nothing to push against in a vacuum. The paper retracted in 1969, the day before Apollo 11 lifted off: a vacuum improves the efficiency, and the atmosphere only slows things down.',
            },
            {
              id: 'etages',
              text: 'Hence staging. The final speed depends on the ratio between the mass at launch and the mass on arrival: dropping the emptied tanks along the way improves that ratio, and that is precisely what puts orbit within reach.',
            },
          ],
        },
      },
    },
  },
};
