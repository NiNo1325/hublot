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
    en: {
      title: {
        '3-5': 'Dinosaurs in colour',
        '6-8': 'Feathered dinosaurs… and in colour',
        '9-12': 'Finding the colour of feathered dinosaurs',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'un',
              text: 'Some very well kept fossils still show the mark of feathers.',
            },
            {
              id: 'deux',
              text: 'Under a microscope, we see tiny grains that gave the feathers their colour.',
            },
            {
              id: 'trois',
              text: 'We compare these grains with the ones inside the feathers of birds today.',
            },
            {
              id: 'quatre',
              text: 'And we can guess the real colours of some dinosaurs!',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'un',
              text: "At a few remarkable sites, the rock has kept the fine imprint of some dinosaurs' feathers, and not only their bones.",
            },
            {
              id: 'deux',
              text: 'Looking at these fossilised feathers under a microscope, scientists find tiny grains called melanosomes, which gave the feathers their colour.',
            },
            {
              id: 'trois',
              text: 'By comparing the shape of these grains with those in the feathers of birds alive today, whose colours we know, we can link a shape to a colour.',
            },
            {
              id: 'quatre',
              text: 'Thanks to this method, scientists have given real colours back to some species, such as stripes or a reddish-brown plumage.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'un',
              text: 'A few exceptionally preserved deposits, such as those of Liaoning in China, have kept not only the bones but also the detailed imprint of the feathers of several theropod dinosaur species.',
            },
            {
              id: 'deux',
              text: 'Observation under an electron microscope reveals melanosomes in these fossil feathers, cell organelles whose shape and arrangement vary according to the pigment they contained.',
            },
            {
              id: 'trois',
              text: 'By building a database of melanosomes from present-day birds of known colour, palaeontologists can match the shape of a fossil melanosome to a probable colour.',
            },
            {
              id: 'quatre',
              text: 'This method reconstructed the ginger-and-white striped coat of Sinosauropteryx, bringing unprecedented rigour to a question long left to the imagination of artists.',
            },
          ],
        },
      },
    },
  },
};
