import type { ScienceCard } from '@/lib/types';

/**
 * La réaction de Maillard transforme sucres et protéines en surface à la
 * chaleur, créant couleur dorée et arômes : ce n'est pas du brûlé, qui est
 * une réaction différente, plus tardive et amère.
 */
export const card: ScienceCard = {
  id: 'pourquoi-ca-dore',
  domainId: 'la-cuisine',
  animationId: 'pourquoi-ca-dore',
  thumbnail: '🍗',
  content: {
    fr: {
      title: {
        '3-5': 'Pourquoi ça devient doré',
        '6-8': 'Pourquoi ça dore et sent bon',
        '9-12': 'Pourquoi la cuisson fait dorer',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'un',
              text: 'Tu chauffes le pain ou la viande dans le four.',
            },
            {
              id: 'deux',
              text: 'À l\'intérieur, de tout petits morceaux se rencontrent.',
            },
            {
              id: 'trois',
              text: 'Ensemble, ils deviennent quelque chose de nouveau.',
            },
            {
              id: 'quatre',
              text: 'Ça devient doré, et ça sent très bon.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'un',
              text: 'Quand tu chauffes du pain ou de la viande, sa surface devient de plus en plus chaude.',
            },
            {
              id: 'deux',
              text: 'À la surface, les sucres et les protéines de l\'aliment se rencontrent sous l\'effet de la chaleur.',
            },
            {
              id: 'trois',
              text: 'Ils se transforment en de tout nouvelles molécules, qui n\'existaient pas avant.',
            },
            {
              id: 'quatre',
              text: 'Ces nouvelles molécules donnent la couleur dorée et la bonne odeur si appétissante.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'un',
              text: 'Dès qu\'un aliment atteint une température suffisante à sa surface, sa chimie interne change.',
            },
            {
              id: 'deux',
              text: 'Les sucres et les acides aminés des protéines entrent alors en contact sous l\'effet de la chaleur.',
            },
            {
              id: 'trois',
              text: 'Ils réagissent ensemble : c\'est la réaction de Maillard, qui crée des centaines de nouvelles molécules.',
            },
            {
              id: 'quatre',
              text: 'Ces molécules donnent la couleur dorée et les arômes de cuisson : rien à voir avec du brûlé, qui est une réaction différente et plus tardive.',
            },
          ],
        },
      },
    },
    en: {
      title: {
        '3-5': 'Why it turns golden',
        '6-8': 'Why food turns golden and smells so good',
        '9-12': 'Why cooking makes food turn golden',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'un',
              text: 'You heat bread or meat in the oven.',
            },
            {
              id: 'deux',
              text: 'Inside, tiny little bits bump into each other.',
            },
            {
              id: 'trois',
              text: 'Together, they turn into something new.',
            },
            {
              id: 'quatre',
              text: 'It goes golden, and it smells lovely.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'un',
              text: 'When you heat bread or meat, its surface gets hotter and hotter.',
            },
            {
              id: 'deux',
              text: 'At the surface, the sugars and the proteins in the food meet under the heat.',
            },
            {
              id: 'trois',
              text: 'They turn into brand new molecules that did not exist before.',
            },
            {
              id: 'quatre',
              text: 'These new molecules give the golden colour and that mouth-watering smell.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'un',
              text: 'As soon as the surface of a food reaches a high enough temperature, its chemistry starts to change.',
            },
            {
              id: 'deux',
              text: 'The sugars and the amino acids from the proteins then come into contact under the effect of the heat.',
            },
            {
              id: 'trois',
              text: 'They react together: this is the Maillard reaction, which creates hundreds of new molecules.',
            },
            {
              id: 'quatre',
              text: 'These molecules give the golden colour and the aromas of cooking: nothing to do with burning, which is a different reaction that comes later.',
            },
          ],
        },
      },
    },
  },
};
