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
  },
};
