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
    en: {
      title: {
        '3-5': "The sounds you can't hear",
        '6-8': "The sounds we can't hear",
        '9-12': 'Ultrasound and infrasound: the sounds beyond our reach',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'un',
              text: 'Your ear only hears some sounds — not too high, not too low.',
            },
            {
              id: 'deux',
              text: 'A dog whistle makes a sound that is too high: you hear nothing at all.',
            },
            {
              id: 'trois',
              text: 'But the dog hears it perfectly well!',
            },
            {
              id: 'quatre',
              text: 'And a very, very low sound — elephants and whales can hear that one too.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'un',
              text: 'Your ear picks up only part of all the sounds that exist, one precise range of frequencies.',
            },
            {
              id: 'deux',
              text: 'A dog whistle gives out a sound too high for you: to your ears, it is complete silence.',
            },
            {
              id: 'trois',
              text: 'But to a dog, whose ear picks up sounds far higher than yours, that whistle is perfectly audible.',
            },
            {
              id: 'quatre',
              text: 'The other way round, sounds too low for you — infrasound — are used by elephants and whales to talk to each other across very long distances.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'un',
              text: 'The human ear picks up frequencies between roughly twenty and twenty thousand hertz: that is our audible range.',
            },
            {
              id: 'deux',
              text: 'A sound above twenty thousand hertz is ultrasound: too high for our ears, it produces no sensation of sound in us at all.',
            },
            {
              id: 'trois',
              text: 'A dog, whose ear reaches up to about sixty thousand hertz, hears that same ultrasound perfectly well — the sound of a special whistle, for instance.',
            },
            {
              id: 'quatre',
              text: 'At the other end, infrasound, below twenty hertz, is inaudible to us but put to full use by elephants and whales, which communicate this way across tens of kilometres.',
            },
          ],
        },
      },
    },
  },
};
