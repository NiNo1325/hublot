import type { ScienceCard } from '@/lib/types';

/**
 * L'oreille humaine ne capte qu'une plage de fréquences parmi d'autres :
 * ultrasons et infrasons existent bel et bien, d'autres espèces les perçoivent.
 */
export const card: ScienceCard = {
  id: 'les-sons-quon-nentend-pas',
  domainId: 'le-son',
  animationId: 'les-sons-quon-nentend-pas',
  thumbnail: '🐶',
  content: {
    fr: {
      title: {
        '3-5': 'Les sons que tu n\'entends pas',
        '6-8': "Les sons qu'on n'entend pas",
        '9-12': 'Ultrasons et infrasons : les sons hors de notre portée',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'un',
              text: 'Ton oreille entend seulement certains sons, ni trop aigus ni trop graves.',
            },
            {
              id: 'deux',
              text: "Un sifflet à chien fait un son trop aigu : toi, tu n'entends rien.",
            },
            {
              id: 'trois',
              text: "Mais le chien, lui, l'entend très bien !",
            },
            {
              id: 'quatre',
              text: "Et un son très très grave, l'éléphant ou la baleine, eux, l'entendent aussi.",
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'un',
              text: "Ton oreille ne capte qu'une partie de tous les sons qui existent, une plage bien précise de fréquences.",
            },
            {
              id: 'deux',
              text: "Un sifflet à chien émet un son trop aigu pour toi : pour tes oreilles, c'est un silence complet.",
            },
            {
              id: 'trois',
              text: 'Mais pour un chien, dont l\'oreille capte des sons bien plus aigus que la tienne, ce sifflet est parfaitement audible.',
            },
            {
              id: 'quatre',
              text: 'À l\'inverse, des sons trop graves pour toi, les infrasons, sont utilisés par les éléphants ou les baleines pour communiquer sur de très longues distances.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'un',
              text: "L'oreille humaine perçoit les fréquences comprises entre environ vingt et vingt mille hertz : c'est notre plage audible.",
            },
            {
              id: 'deux',
              text: 'Un son au-delà de vingt mille hertz est un ultrason : trop aigu pour nos oreilles, il ne produit chez nous aucune sensation sonore.',
            },
            {
              id: 'trois',
              text: 'Un chien, dont l\'oreille perçoit jusqu\'à environ soixante mille hertz, entend très bien ce même ultrason, comme celui d\'un sifflet spécial.',
            },
            {
              id: 'quatre',
              text: "À l'autre extrémité, les infrasons, en dessous de vingt hertz, sont inaudibles pour nous mais parfaitement exploités par les éléphants ou les baleines, qui communiquent ainsi sur des dizaines de kilomètres.",
            },
          ],
        },
      },
    },
  },
};
