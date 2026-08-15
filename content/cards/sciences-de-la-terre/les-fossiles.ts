import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : un fossile n'est presque jamais l'os d'origine, mais sa
 * copie minérale. Et la fossilisation est rarissime — ce qui explique que
 * l'histoire de la vie nous parvienne pleine de trous.
 */
export const card: ScienceCard = {
  id: 'les-fossiles',
  domainId: 'sciences-de-la-terre',
  animationId: 'fossiles',
  thumbnail: '🦴',
  content: {
    fr: {
      title: {
        '3-5': "Les traces d'avant",
        '6-8': 'Comment se forme un fossile',
        '9-12': 'Fossilisation et archives de la Terre',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'mort',
              text: "Il y a très très longtemps, des animaux vivaient ici. Bien avant les grands-parents de tes grands-parents.",
            },
            {
              id: 'enfouissement',
              text: "Quand l'un d'eux mourait au bon endroit, du sable et de la boue le recouvraient tout doucement.",
            },
            {
              id: 'pierre',
              text: "Pendant des millions d'années, ses os se sont transformés en pierre, en gardant la même forme.",
            },
            {
              id: 'rare',
              text: "C'est très rare ! Presque tous les animaux disparaissent sans laisser de trace. Trouver un fossile, c'est un vrai trésor.",
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'mort',
              text: "Quand un animal meurt, il est généralement mangé ou décomposé, et il n'en reste rien au bout de quelques semaines.",
            },
            {
              id: 'enfouissement',
              text: "Pour qu'un fossile se forme, il faut un enfouissement rapide — dans la vase d'un lac, le sable d'un delta — qui protège le corps de l'air et des charognards.",
            },
            {
              id: 'pierre',
              text: "L'eau qui circule dans le sédiment dépose des minéraux dans les moindres cavités de l'os. Peu à peu, la matière d'origine est remplacée par de la roche. Un fossile n'est donc pas l'os lui-même : c'est sa copie en pierre, au détail près.",
            },
            {
              id: 'rare',
              text: "Cet enchaînement est si improbable qu'une espèce sur mille, peut-être, a laissé une trace. Les fossiles sont des archives incomplètes, et c'est pourquoi chaque découverte peut modifier ce que l'on croyait savoir.",
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'mort',
              text: "La fossilisation exige des conditions exceptionnelles. Dans la plupart des cas, décomposition bactérienne, prédation et érosion effacent toute trace en quelques années.",
            },
            {
              id: 'enfouissement',
              text: "L'enfouissement rapide en milieu pauvre en oxygène interrompt la décomposition. Les environnements sédimentaires — lacs, deltas, fonds marins — sont donc surreprésentés dans le registre fossile, ce qui biaise notre vision des écosystèmes anciens.",
            },
            {
              id: 'pierre',
              text: "La perminéralisation substitue des minéraux dissous — silice, calcite, pyrite — à la matière organique, souvent jusqu'à l'échelle cellulaire. D'autres modes existent : moulages, empreintes, ambre, ou traces d'activité comme des pistes de pas.",
            },
            {
              id: 'rare',
              text: "La datation combine la stratigraphie, qui ordonne les couches, et la radiochronologie, qui mesure la désintégration d'isotopes pour donner un âge absolu. Le registre reste lacunaire par nature : l'absence de fossile ne prouve jamais l'absence d'espèce, et c'est une prudence méthodologique constante en paléontologie.",
            },
          ],
        },
      },
    },
    en: {
      title: {
        '3-5': 'Traces from long ago',
        '6-8': 'How a fossil forms',
        '9-12': 'Fossilisation and the archives of the Earth',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'mort',
              text: 'A very very long time ago, animals lived here. Long before the grandparents of your grandparents.',
            },
            {
              id: 'enfouissement',
              text: 'When one of them died in just the right place, sand and mud covered it up very gently.',
            },
            {
              id: 'pierre',
              text: 'Over millions of years, its bones turned into stone, keeping the very same shape.',
            },
            {
              id: 'rare',
              text: 'It is very rare! Almost every animal disappears without leaving a trace. Finding a fossil is a real treasure.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'mort',
              text: 'When an animal dies, it is usually eaten or broken down, and after a few weeks nothing is left of it.',
            },
            {
              id: 'enfouissement',
              text: 'For a fossil to form, the body has to be buried quickly — in the mud of a lake, the sand of a delta — which shields it from the air and from scavengers.',
            },
            {
              id: 'pierre',
              text: 'Water moving through the sediment leaves minerals in the tiniest hollows of the bone. Little by little, the original material is replaced by rock. So a fossil is not the bone itself: it is its copy in stone, down to the last detail.',
            },
            {
              id: 'rare',
              text: 'This chain of events is so unlikely that perhaps one species in a thousand has left a trace. Fossils are incomplete archives, and that is why every new find can change what we thought we knew.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'mort',
              text: 'Fossilisation demands exceptional conditions. In most cases, bacterial decay, predation and erosion wipe out every trace within a few years.',
            },
            {
              id: 'enfouissement',
              text: 'Rapid burial in an oxygen-poor setting halts decomposition. Sedimentary environments — lakes, deltas, sea floors — are therefore over-represented in the fossil record, which skews our picture of ancient ecosystems.',
            },
            {
              id: 'pierre',
              text: 'Permineralisation substitutes dissolved minerals — silica, calcite, pyrite — for the organic material, often down to the scale of individual cells. Other modes exist: casts, imprints, amber, or traces of activity such as footprints.',
            },
            {
              id: 'rare',
              text: 'Dating combines stratigraphy, which puts the layers in order, and radiometric dating, which measures the decay of isotopes to give an absolute age. The record is patchy by its very nature: the absence of a fossil never proves the absence of a species, and that caution is a constant in palaeontology.',
            },
          ],
        },
      },
    },
  },
};
