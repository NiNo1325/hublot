import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : autour des cheminées hydrothermales, des bactéries
 * chimiosynthétiques tirent leur énergie de composés minéraux, sans dépendre
 * de la photosynthèse ni du Soleil — la vie n'a donc pas toujours besoin de lui.
 */
export const card: ScienceCard = {
  id: 'les-sources-chaudes-du-fond',
  domainId: 'les-oceans',
  animationId: 'les-sources-chaudes-du-fond',
  thumbnail: '♨️',
  content: {
    fr: {
      title: {
        '3-5': 'De l’eau chaude tout au fond',
        '6-8': 'Les sources chaudes du fond',
        '9-12': 'Les cheminées hydrothermales, la vie sans Soleil',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'un',
              text: 'Tout au fond de la mer, des cheminées crachent de l’eau très chaude.',
            },
            {
              id: 'deux',
              text: 'Cette eau est pleine de petites particules minérales.',
            },
            {
              id: 'trois',
              text: 'De minuscules bactéries mangent ces particules, sans avoir besoin de lumière.',
            },
            {
              id: 'quatre',
              text: 'Des crabes et des vers viennent vivre juste à côté.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'un',
              text: 'Au fond de certains océans, là où deux plaques de la Terre s’écartent, des cheminées naturelles crachent de l’eau brûlante.',
            },
            {
              id: 'deux',
              text: 'Cette eau, chauffée par le magma sous la croûte terrestre, est chargée de minéraux dissous.',
            },
            {
              id: 'trois',
              text: 'Des bactéries spéciales se nourrissent de ces minéraux grâce à une réaction chimique, sans avoir besoin de la lumière du Soleil.',
            },
            {
              id: 'quatre',
              text: 'Autour de ces cheminées, toute une vie s’installe : crabes, crevettes et immenses vers tubicoles, qui dépendent tous de ces bactéries pour se nourrir.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'un',
              text: 'Le long de certaines dorsales océaniques, où le magma remonte près du plancher marin, l’eau de mer s’infiltre dans la croûte et ressort en cheminées hydrothermales, parfois à plus de trois cents degrés.',
            },
            {
              id: 'deux',
              text: 'Sous cette pression et cette température, elle se charge de minéraux dissous, notamment des composés soufrés.',
            },
            {
              id: 'trois',
              text: 'Des bactéries chimiosynthétiques tirent leur énergie de ces composés chimiques par oxydation, sans dépendre de la photosynthèse ni donc du Soleil.',
            },
            {
              id: 'quatre',
              text: 'Ces bactéries forment la base d’un écosystème entier — vers tubicoles géants, crabes, crevettes aveugles — totalement indépendant de l’énergie solaire, une découverte qui a bouleversé l’idée que toute vie en dépend.',
            },
          ],
        },
      },
    },
  },
};
