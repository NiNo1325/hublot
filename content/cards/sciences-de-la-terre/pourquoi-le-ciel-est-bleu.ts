import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : le ciel n'est pas bleu parce qu'il refléterait la mer —
 * le désert et la haute montagne ont le même ciel. C'est l'air lui-même qui
 * disperse le bleu dans toutes les directions, et cette même dispersion qui
 * rougit le Soleil couchant.
 */
export const card: ScienceCard = {
  id: 'pourquoi-le-ciel-est-bleu',
  domainId: 'sciences-de-la-terre',
  animationId: 'ciel-bleu',
  thumbnail: '🌤️',
  content: {
    fr: {
      title: {
        '3-5': 'Le ciel tout bleu',
        '6-8': 'Pourquoi le ciel est bleu',
        '9-12': 'Le ciel bleu et le Soleil rouge',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'regarder',
              text: 'Lève la tête : le jour, le ciel est tout bleu. Pourtant, l’air, on ne le voit pas.',
            },
            {
              id: 'lumiere-blanche',
              text: 'La lumière du Soleil a l’air blanche, mais elle cache toutes les couleurs de l’arc-en-ciel.',
            },
            {
              id: 'diffusion',
              text: 'En traversant l’air, le bleu part dans tous les sens. C’est lui que tu vois, partout au-dessus de toi.',
            },
            {
              id: 'couchant',
              text: 'Le soir, la lumière traverse beaucoup plus d’air. Le bleu se perd en route, et le ciel devient orange.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'regarder',
              text: 'Beaucoup pensent que le ciel est bleu parce qu’il reflète la mer. Mais au-dessus du désert, très loin de tout océan, il est bleu aussi.',
            },
            {
              id: 'lumiere-blanche',
              text: 'La lumière du Soleil paraît blanche, et pourtant elle contient toutes les couleurs, du rouge au violet. Un arc-en-ciel ne fait que les séparer.',
            },
            {
              id: 'diffusion',
              text: 'Quand cette lumière traverse l’air, les grains d’air renvoient le bleu dans toutes les directions, bien plus que le rouge. Ce bleu éparpillé t’arrive de partout à la fois : le ciel entier semble bleu.',
            },
            {
              id: 'couchant',
              text: 'Au coucher du Soleil, sa lumière arrive de côté et traverse une bien plus grande épaisseur d’air. Le bleu a été dispersé ailleurs depuis longtemps : il ne reste que l’orange et le rouge.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'regarder',
              text: 'Une idée répandue veut que le ciel soit bleu parce qu’il reflète les océans. Le Sahara et le sommet des Andes, loin de toute mer, ont exactement le même ciel : l’explication est ailleurs.',
            },
            {
              id: 'lumiere-blanche',
              text: 'La lumière solaire mélange toutes les longueurs d’onde visibles. Une seule caractéristique compte ici : le violet et le bleu sont les plus courtes, le rouge la plus longue.',
            },
            {
              id: 'diffusion',
              text: 'Les molécules de l’air dévient la lumière d’autant plus fortement que sa longueur d’onde est courte : c’est la diffusion Rayleigh. Le bleu est donc renvoyé dans toutes les directions et te parvient de tout le ciel, quand le rouge poursuit sa route presque tout droit. Le violet est plus dispersé encore, mais le Soleil en émet peu et l’œil y est peu sensible : le mélange qui nous arrive est bleu.',
            },
            {
              id: 'couchant',
              text: 'À l’horizon, les rayons traversent une épaisseur d’atmosphère plusieurs dizaines de fois plus grande. Le bleu a été diffusé loin de ta ligne de visée, et seules les grandes longueurs d’onde arrivent encore. Le Soleil couchant est rouge pour exactement la même raison que le ciel de midi est bleu.',
            },
          ],
        },
      },
    },
  },
};
