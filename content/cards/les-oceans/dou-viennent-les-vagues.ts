import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : une vague ne transporte pas l'eau du large jusqu'à la
 * plage. C'est l'énergie qui se propage ; chaque particule d'eau décrit une
 * trajectoire à peu près circulaire et revient près de sa position de départ.
 */
export const card: ScienceCard = {
  id: 'dou-viennent-les-vagues',
  domainId: 'les-oceans',
  animationId: 'dou-viennent-les-vagues',
  thumbnail: '🏄',
  content: {
    fr: {
      title: {
        '3-5': 'D’où vient la vague ?',
        '6-8': 'D’où viennent les vagues',
        '9-12': 'D’où viennent vraiment les vagues',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'un',
              text: 'Le vent souffle fort sur la mer.',
            },
            {
              id: 'deux',
              text: 'Il fait de toutes petites rides sur l’eau.',
            },
            {
              id: 'trois',
              text: 'Les rides grandissent et deviennent des vagues.',
            },
            {
              id: 'quatre',
              text: 'L’eau reste presque à sa place : c’est le mouvement qui avance jusqu’à toi.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'un',
              text: 'Le vent souffle sur la surface de la mer, jour après jour.',
            },
            {
              id: 'deux',
              text: 'Il pousse l’eau et forme de petites rides à la surface.',
            },
            {
              id: 'trois',
              text: 'Plus le vent souffle longtemps et fort, plus les rides grandissent en vraies vagues.',
            },
            {
              id: 'quatre',
              text: 'Chaque goutte d’eau tourne sur elle-même sans vraiment avancer : c’est l’énergie du mouvement qui voyage jusqu’à la plage, pas l’eau elle-même.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'un',
              text: 'Le vent transfère de l’énergie à la surface de l’eau par frottement.',
            },
            {
              id: 'deux',
              text: 'Ce frottement crée de minuscules rides, qui offrent plus de prise au vent et s’amplifient.',
            },
            {
              id: 'trois',
              text: 'Avec assez de vent, de distance et de temps, ces rides se transforment en vagues de plus en plus hautes.',
            },
            {
              id: 'quatre',
              text: 'Dans une vague, chaque particule d’eau décrit un cercle presque sur place : ce n’est pas la matière qui se déplace, mais une onde d’énergie qui traverse l’eau jusqu’au rivage, où elle finit par déferler.',
            },
          ],
        },
      },
    },
    en: {
      title: {
        '3-5': 'Where does the wave come from?',
        '6-8': 'Where waves come from',
        '9-12': 'Where waves really come from',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'un',
              text: 'The wind blows hard on the sea.',
            },
            {
              id: 'deux',
              text: 'It makes tiny little ripples on the water.',
            },
            {
              id: 'trois',
              text: 'The ripples grow bigger and turn into waves.',
            },
            {
              id: 'quatre',
              text: 'The water stays almost in place: it is the movement that travels to you.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'un',
              text: 'The wind blows over the surface of the sea, day after day.',
            },
            {
              id: 'deux',
              text: 'It pushes the water and makes small ripples on the surface.',
            },
            {
              id: 'trois',
              text: 'The longer and harder the wind blows, the more those ripples grow into real waves.',
            },
            {
              id: 'quatre',
              text: 'Each drop of water turns round on the spot without really moving along: what travels to the beach is the energy of the movement, not the water itself.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'un',
              text: 'The wind transfers energy to the surface of the water through friction.',
            },
            {
              id: 'deux',
              text: 'That friction creates tiny ripples, which give the wind more to push against, so they grow bigger.',
            },
            {
              id: 'trois',
              text: 'With enough wind, enough distance and enough time, these ripples turn into higher and higher waves.',
            },
            {
              id: 'quatre',
              text: 'Inside a wave, each particle of water traces a circle almost on the spot: it is not matter that moves, but a wave of energy crossing the water to the shore, where it finally breaks.',
            },
          ],
        },
      },
    },
  },
};
