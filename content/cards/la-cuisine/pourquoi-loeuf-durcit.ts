import type { ScienceCard } from '@/lib/types';

/**
 * La chaleur déroule les protéines de l'œuf, qui s'accrochent ensuite les
 * unes aux autres et forment un solide : c'est une transformation
 * irréversible, contrairement à ce que suggère l'idée de « cuire » qui, pour
 * beaucoup d'aliments, évoque plutôt un ramollissement.
 */
export const card: ScienceCard = {
  id: 'pourquoi-loeuf-durcit',
  domainId: 'la-cuisine',
  animationId: 'pourquoi-loeuf-durcit',
  thumbnail: '🥚',
  content: {
    fr: {
      title: {
        '3-5': "Pourquoi l'œuf devient dur",
        '6-8': "Pourquoi l'œuf durcit",
        '9-12': "Pourquoi l'œuf durcit",
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'un',
              text: 'Un œuf cru, c\'est liquide et un peu transparent.',
            },
            {
              id: 'deux',
              text: 'Tu le mets dans l\'eau chaude.',
            },
            {
              id: 'trois',
              text: 'La chaleur emmêle tout ce qu\'il y a dedans.',
            },
            {
              id: 'quatre',
              text: 'Le blanc devient dur et blanc, pour toujours.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'un',
              text: 'Un œuf cru est liquide, souple et presque transparent.',
            },
            {
              id: 'deux',
              text: 'Il est rempli de minuscules protéines, repliées sur elles-mêmes comme de petites pelotes.',
            },
            {
              id: 'trois',
              text: 'La chaleur de la cuisson déroule ces pelotes, qui s\'accrochent alors les unes aux autres.',
            },
            {
              id: 'quatre',
              text: 'Elles forment un solide : le blanc devient ferme et opaque, et il ne redeviendra jamais liquide.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'un',
              text: 'Le blanc d\'œuf cru est composé en grande partie d\'eau et de protéines repliées en pelotes compactes.',
            },
            {
              id: 'deux',
              text: 'La chaleur fournit assez d\'énergie pour déplier ces protéines : c\'est la dénaturation.',
            },
            {
              id: 'trois',
              text: 'Une fois dépliées, les protéines forment de nouvelles liaisons entre elles et tissent un réseau solide.',
            },
            {
              id: 'quatre',
              text: 'Ce réseau emprisonne l\'eau et rend l\'ensemble ferme et opaque : contrairement à un beurre qui fond puis se solidifie, cette transformation est irréversible.',
            },
          ],
        },
      },
    },
  },
};
