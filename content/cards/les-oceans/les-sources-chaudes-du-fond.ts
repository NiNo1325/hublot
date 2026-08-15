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
    en: {
      title: {
        '3-5': 'Hot water right at the bottom',
        '6-8': 'The hot springs of the deep sea',
        '9-12': 'Hydrothermal vents, life without the Sun',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'un',
              text: 'Right at the bottom of the sea, chimneys puff out very hot water.',
            },
            {
              id: 'deux',
              text: 'This water is full of tiny bits of rock.',
            },
            {
              id: 'trois',
              text: 'Tiny bacteria eat these bits, with no need for light.',
            },
            {
              id: 'quatre',
              text: 'Crabs and worms come and live right next door.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'un',
              text: 'On the floor of some oceans, where two of the Earth’s plates pull apart, natural chimneys spit out scalding water.',
            },
            {
              id: 'deux',
              text: 'This water, heated by the magma beneath the Earth’s crust, is loaded with dissolved minerals.',
            },
            {
              id: 'trois',
              text: 'Special bacteria feed on those minerals through a chemical reaction, with no need for sunlight.',
            },
            {
              id: 'quatre',
              text: 'A whole world settles around these chimneys: crabs, shrimps and enormous tube worms, all of which depend on those bacteria for their food.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'un',
              text: 'Along certain mid-ocean ridges, where magma rises close to the seabed, seawater seeps into the crust and comes back out through hydrothermal vents, sometimes at more than three hundred degrees.',
            },
            {
              id: 'deux',
              text: 'Under this pressure and this temperature, it takes on dissolved minerals, in particular sulphur compounds.',
            },
            {
              id: 'trois',
              text: 'Chemosynthetic bacteria draw their energy from these chemical compounds by oxidising them, without depending on photosynthesis and therefore without depending on the Sun.',
            },
            {
              id: 'quatre',
              text: 'These bacteria form the base of an entire ecosystem — giant tube worms, crabs, blind shrimps — completely independent of solar energy, a discovery that overturned the idea that all life depends on it.',
            },
          ],
        },
      },
    },
  },
};
