import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : un tsunami n'est ni une marée ni une vague de vent. Il
 * naît le plus souvent d'un séisme sous-marin et met en mouvement l'océan sur
 * toute sa profondeur, pas seulement sa surface.
 */
export const card: ScienceCard = {
  id: 'la-vague-geante',
  domainId: 'les-oceans',
  animationId: 'la-vague-geante',
  thumbnail: '🌊',
  content: {
    fr: {
      title: {
        '3-5': 'La très grande vague',
        '6-8': 'Le tsunami, la vague géante',
        '9-12': 'Le tsunami, une vague née d’un séisme',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'un',
              text: 'Parfois, la terre tremble tout au fond de la mer.',
            },
            {
              id: 'deux',
              text: 'Ça pousse d’un coup une énorme quantité d’eau.',
            },
            {
              id: 'trois',
              text: 'Cette vague file très très vite sur l’océan.',
            },
            {
              id: 'quatre',
              text: 'En arrivant près de la plage, elle devient un immense mur d’eau.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'un',
              text: 'Un tsunami commence souvent par un séisme sous-marin, un tremblement de terre qui secoue brusquement le fond de l’océan.',
            },
            {
              id: 'deux',
              text: 'Ce mouvement du sol déplace d’un coup une masse d’eau énorme, sur toute la hauteur de l’océan.',
            },
            {
              id: 'trois',
              text: 'Cette perturbation se propage alors à toute vitesse, parfois plus de sept cents kilomètres par heure en pleine mer, sans qu’on la remarque vraiment depuis un bateau.',
            },
            {
              id: 'quatre',
              text: 'En approchant des côtes, où l’eau devient moins profonde, la vague ralentit mais gagne énormément en hauteur, jusqu’à former un véritable mur d’eau qui déferle sur la terre.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'un',
              text: 'Un tsunami est le plus souvent déclenché par un séisme sous-marin qui déplace brutalement une portion du plancher océanique, le long d’une faille.',
            },
            {
              id: 'deux',
              text: 'Ce déplacement soulève ou abaisse toute la colonne d’eau au-dessus, créant une perturbation qui touche l’océan sur toute sa profondeur, contrairement à une vague de vent qui n’agite que la surface.',
            },
            {
              id: 'trois',
              text: 'En haute mer, cette perturbation se propage à des vitesses pouvant dépasser sept cents kilomètres par heure, avec une hauteur souvent inférieure à un mètre, presque imperceptible.',
            },
            {
              id: 'quatre',
              text: 'En arrivant sur le talus continental, où la profondeur diminue rapidement, la vague ralentit mais son énergie se concentre : sa hauteur augmente fortement, parfois jusqu’à plusieurs dizaines de mètres, avant de déferler sur la côte.',
            },
          ],
        },
      },
    },
    en: {
      title: {
        '3-5': 'The very, very big wave',
        '6-8': 'The tsunami, the giant wave',
        '9-12': 'The tsunami, a wave born of an earthquake',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'un',
              text: 'Sometimes the ground shakes right at the bottom of the sea.',
            },
            {
              id: 'deux',
              text: 'That pushes a huge amount of water all at once.',
            },
            {
              id: 'trois',
              text: 'This wave races very, very fast across the ocean.',
            },
            {
              id: 'quatre',
              text: 'When it reaches the beach, it turns into a huge wall of water.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'un',
              text: 'A tsunami often begins with an undersea earthquake, a tremor that suddenly shakes the floor of the ocean.',
            },
            {
              id: 'deux',
              text: 'That movement of the ground shifts an enormous mass of water all at once, from the seabed right up to the surface.',
            },
            {
              id: 'trois',
              text: 'The disturbance then races away at astonishing speed, sometimes more than seven hundred kilometres an hour out at sea, without anyone on a boat really noticing it.',
            },
            {
              id: 'quatre',
              text: 'As it nears the coast, where the water becomes shallower, the wave slows down but gains enormously in height, until it forms a real wall of water breaking over the land.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'un',
              text: 'A tsunami is most often triggered by an undersea earthquake that abruptly shifts a section of the ocean floor along a fault.',
            },
            {
              id: 'deux',
              text: 'That shift lifts or lowers the entire column of water above it, creating a disturbance that stirs the ocean over its whole depth, unlike a wind wave, which only ruffles the surface.',
            },
            {
              id: 'trois',
              text: 'In the open sea, this disturbance travels at speeds that can exceed seven hundred kilometres an hour, often less than a metre high and almost imperceptible.',
            },
            {
              id: 'quatre',
              text: 'On reaching the continental slope, where the water quickly becomes shallower, the wave slows down but its energy concentrates: its height rises sharply, sometimes to several tens of metres, before it breaks over the coast.',
            },
          ],
        },
      },
    },
  },
};
