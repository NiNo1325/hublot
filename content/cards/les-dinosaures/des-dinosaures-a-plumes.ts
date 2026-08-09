import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : la reconstitution de couleurs fondée sur les
 * mélanosomes fossiles ne concerne que quelques espèces exceptionnellement
 * conservées (gisements du Liaoning notamment) — la plupart des couleurs de
 * dinosaures restent hypothétiques.
 */
export const card: ScienceCard = {
  id: 'des-dinosaures-a-plumes',
  domainId: 'les-dinosaures',
  animationId: 'des-dinosaures-a-plumes',
  thumbnail: '🪶',
  content: {
    fr: {
      title: {
        '3-5': 'Des dinosaures en couleur',
        '6-8': 'Des dinosaures à plumes… et en couleur',
        '9-12': 'Retrouver la couleur des dinosaures à plumes',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'un',
              text: 'Certains fossiles très bien conservés montrent encore la trace des plumes.',
            },
            {
              id: 'deux',
              text: 'Au microscope, on voit de tout petits grains qui donnaient leur couleur aux plumes.',
            },
            {
              id: 'trois',
              text: "On compare ces grains à ceux des plumes des oiseaux d'aujourd'hui.",
            },
            {
              id: 'quatre',
              text: 'Et on peut deviner les vraies couleurs de certains dinosaures !',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'un',
              text: "Dans quelques sites exceptionnels, la roche a conservé l'empreinte fine des plumes de certains dinosaures, et pas seulement leurs os.",
            },
            {
              id: 'deux',
              text: 'En observant ces plumes fossilisées au microscope, les scientifiques y trouvent de minuscules grains appelés mélanosomes, qui donnaient leur couleur aux plumes.',
            },
            {
              id: 'trois',
              text: "En comparant la forme de ces grains à ceux des plumes d'oiseaux actuels, dont on connaît la couleur, on peut faire le lien entre forme et couleur.",
            },
            {
              id: 'quatre',
              text: 'Grâce à cette méthode, les scientifiques ont pu redonner de vraies couleurs à certaines espèces, comme des rayures ou un plumage roux.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'un',
              text: "Certains gisements à conservation exceptionnelle, comme ceux du Liaoning en Chine, ont préservé non seulement les os mais aussi l'empreinte détaillée des plumes de plusieurs espèces de dinosaures théropodes.",
            },
            {
              id: 'deux',
              text: "L'observation au microscope électronique révèle dans ces plumes fossiles des mélanosomes, organites cellulaires dont la forme et la disposition varient selon le pigment qu'ils contenaient.",
            },
            {
              id: 'trois',
              text: "En établissant une base de données de mélanosomes d'oiseaux actuels de couleur connue, les paléontologues peuvent associer une forme de mélanosome fossile à une couleur probable.",
            },
            {
              id: 'quatre',
              text: "Cette méthode a permis de reconstituer la robe rayée de roux et de blanc de Sinosauropteryx, apportant une rigueur inédite à une question longtemps laissée à l'imagination des artistes.",
            },
          ],
        },
      },
    },
  },
};
