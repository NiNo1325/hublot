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
    en: {
      title: {
        '3-5': 'Why an egg goes hard',
        '6-8': 'Why an egg hardens',
        '9-12': 'Why an egg hardens',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'un',
              text: 'A raw egg is runny and a bit see-through.',
            },
            {
              id: 'deux',
              text: 'You put it into hot water.',
            },
            {
              id: 'trois',
              text: 'The heat tangles up everything inside.',
            },
            {
              id: 'quatre',
              text: 'The white goes hard and white, for ever.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'un',
              text: 'A raw egg is runny, soft and almost see-through.',
            },
            {
              id: 'deux',
              text: 'It is filled with tiny proteins, folded up on themselves like little balls of wool.',
            },
            {
              id: 'trois',
              text: 'The heat of cooking unwinds these balls, and they hook on to one another.',
            },
            {
              id: 'quatre',
              text: 'They form a solid: the white turns firm and opaque, and it will never be runny again.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'un',
              text: 'Raw egg white is made mostly of water and of proteins folded into compact coils.',
            },
            {
              id: 'deux',
              text: 'Heat supplies enough energy to unfold these proteins: this is denaturation.',
            },
            {
              id: 'trois',
              text: 'Once unfolded, the proteins form new bonds with each other and weave a solid network.',
            },
            {
              id: 'quatre',
              text: 'This network traps the water and makes the whole thing firm and opaque: unlike butter, which melts and then sets again, this change is irreversible.',
            },
          ],
        },
      },
    },
  },
};
