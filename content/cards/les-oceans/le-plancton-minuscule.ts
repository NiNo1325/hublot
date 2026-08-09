import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : le phytoplancton océanique produirait à lui seul entre
 * la moitié et les deux tiers de l'oxygène atmosphérique — davantage que
 * l'ensemble des forêts terrestres, contrairement à l'idée reçue.
 */
export const card: ScienceCard = {
  id: 'le-plancton-minuscule',
  domainId: 'les-oceans',
  animationId: 'le-plancton-minuscule',
  thumbnail: '🦠',
  content: {
    fr: {
      title: {
        '3-5': 'Le plancton, tout petit',
        '6-8': 'Le plancton, minuscule mais géant',
        '9-12': 'Le plancton, un géant invisible',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'un',
              text: 'Dans la mer flottent des êtres minuscules, si petits qu’on ne les voit presque pas : le plancton.',
            },
            {
              id: 'deux',
              text: 'Beaucoup d’entre eux attrapent la lumière du Soleil, comme le font les plantes.',
            },
            {
              id: 'trois',
              text: 'Grâce à ça, ils fabriquent de l’air pour respirer.',
            },
            {
              id: 'quatre',
              text: 'Et ils nourrissent presque tous les animaux de l’océan.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'un',
              text: 'Le plancton, ce sont des milliards d’êtres minuscules qui flottent à la surface des océans, trop petits pour lutter contre les courants.',
            },
            {
              id: 'deux',
              text: 'Une grande partie, le phytoplancton, capte la lumière du Soleil pour fabriquer sa nourriture, tout comme les plantes sur terre.',
            },
            {
              id: 'trois',
              text: 'En faisant cela, il libère de l’oxygène dans l’eau et dans l’air : on estime qu’il en produit plus de la moitié de tout ce que nous respirons.',
            },
            {
              id: 'quatre',
              text: 'Le plancton est aussi la première nourriture de la chaîne alimentaire marine : sans lui, poissons, baleines et pratiquement tout l’océan disparaîtraient.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'un',
              text: 'Le plancton regroupe l’ensemble des organismes, souvent microscopiques, qui dérivent dans l’eau au gré des courants faute de pouvoir nager contre eux.',
            },
            {
              id: 'deux',
              text: 'Le phytoplancton, composé d’algues unicellulaires, réalise la photosynthèse exactement comme les plantes terrestres, en utilisant la lumière solaire, l’eau et le dioxyde de carbone.',
            },
            {
              id: 'trois',
              text: 'Cette photosynthèse produirait entre la moitié et les deux tiers de l’oxygène présent dans l’atmosphère terrestre, davantage que l’ensemble des forêts du monde.',
            },
            {
              id: 'quatre',
              text: 'Le phytoplancton constitue aussi la base de presque toutes les chaînes alimentaires océaniques : zooplancton, poissons, et jusqu’aux plus grandes baleines en dépendent, directement ou indirectement.',
            },
          ],
        },
      },
    },
  },
};
