import type { ScienceCard } from '@/lib/types';

/**
 * Idée reçue corrigée : « la grêle, c'est de la neige en boule ». En réalité, un
 * grêlon se forme dans un orage : porté par de puissants courants d'air, il monte
 * et descend plusieurs fois, s'entourant à chaque tour d'une nouvelle couche de
 * glace, jusqu'à devenir trop lourd et tomber.
 */
export const card: ScienceCard = {
  id: 'la-grele',
  domainId: 'meteo',
  animationId: 'grele',
  thumbnail: '🧊',
  content: {
    fr: {
      title: {
        '3-5': 'La grêle',
        '6-8': 'Comment se forme la grêle',
        '9-12': 'Comment se forme la grêle',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'orage',
              text: "La grêle vient d'un gros nuage d'orage, avec du vent qui souffle très fort vers le haut.",
            },
            {
              id: 'monte-descend',
              text: 'Une petite bille de glace monte, redescend, remonte encore, poussée par le vent.',
            },
            {
              id: 'couches',
              text: 'À chaque fois, une nouvelle couche de glace se colle autour d’elle. Elle grossit.',
            },
            {
              id: 'tombe',
              text: 'Quand elle est trop lourde, le vent ne la retient plus : elle tombe. C’est un grêlon !',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'orage',
              text: "La grêle n'est pas de la neige en boule. Elle se fabrique dans les nuages d'orage, traversés par de violents courants d'air ascendants.",
            },
            {
              id: 'monte-descend',
              text: 'Une gouttelette gelée est happée vers le haut, retombe, puis est renvoyée en l’air, encore et encore. Elle fait plusieurs allers-retours.',
            },
            {
              id: 'couches',
              text: 'À chaque passage dans les zones très froides, une nouvelle couche de glace se dépose autour d’elle. Le grêlon grossit comme un oignon, couche après couche.',
            },
            {
              id: 'tombe',
              text: 'Quand il devient trop lourd pour être porté par le vent, il tombe au sol. Les plus gros peuvent atteindre la taille d’une balle de golf.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'orage',
              text: "Le grêlon se forme uniquement dans les orages violents, ceux qui abritent de puissants courants ascendants capables de soulever des objets lourds.",
            },
            {
              id: 'monte-descend',
              text: "Un embryon de glace y est aspiré vers le sommet du nuage, retombe sous son poids, puis est de nouveau emporté vers le haut. Il peut effectuer ainsi de nombreux allers-retours dans le nuage.",
            },
            {
              id: 'couches',
              text: "À chaque montée dans les couches glaciales, une pellicule d'eau surfondue gèle à sa surface. Le grêlon accumule des couches concentriques, translucides ou opaques selon la vitesse du gel — un empilement qu'on lit, en coupe, comme les cernes d'un arbre.",
            },
            {
              id: 'tombe',
              text: "Il continue de grossir tant que le courant ascendant est assez fort pour le soutenir. Dès que son poids l'emporte, il chute — d'autant plus gros que l'orage était puissant. C'est pourquoi la grêle accompagne les orages les plus intenses, et non le simple froid.",
            },
          ],
        },
      },
    },
    en: {
      title: {
        '3-5': 'Hail',
        '6-8': 'How hail forms',
        '9-12': 'How hail forms',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'orage',
              text: 'Hail comes from a big storm cloud, with wind blowing very hard upwards.',
            },
            {
              id: 'monte-descend',
              text: 'A little ball of ice goes up, comes down, goes up again, pushed by the wind.',
            },
            {
              id: 'couches',
              text: 'Each time, a new layer of ice sticks around it. It gets bigger.',
            },
            {
              id: 'tombe',
              text: 'When it is too heavy, the wind cannot hold it any more: it falls. That’s a hailstone!',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'orage',
              text: 'Hail is not snow rolled into a ball. It is made inside storm clouds, which are crossed by violent upward air currents.',
            },
            {
              id: 'monte-descend',
              text: 'A frozen droplet is snatched upwards, falls back, then is thrown up again, over and over. It makes several round trips.',
            },
            {
              id: 'couches',
              text: 'Each time it passes through the freezing zones, a new layer of ice settles around it. The hailstone grows like an onion, layer after layer.',
            },
            {
              id: 'tombe',
              text: 'When it becomes too heavy for the wind to carry, it falls to the ground. The biggest ones can reach the size of a golf ball.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'orage',
              text: 'Hailstones only form in violent thunderstorms, the ones that harbour powerful updraughts strong enough to lift heavy objects.',
            },
            {
              id: 'monte-descend',
              text: 'An ice embryo is sucked up towards the top of the cloud, falls back under its own weight, then is carried upwards again. It can make many such round trips inside the cloud.',
            },
            {
              id: 'couches',
              text: 'On each climb into the freezing layers, a film of supercooled water freezes on its surface. The hailstone builds up concentric layers, clear or opaque depending on how fast the freezing happened — a stack you can read, in cross-section, like the rings of a tree.',
            },
            {
              id: 'tombe',
              text: 'It keeps growing as long as the updraught is strong enough to hold it. As soon as its weight wins, it drops — and the more powerful the storm was, the bigger it is. That is why hail comes with the most intense storms, and not simply with cold weather.',
            },
          ],
        },
      },
    },
  },
};
