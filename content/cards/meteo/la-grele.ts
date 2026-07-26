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
  },
};
