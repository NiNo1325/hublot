import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : l'eau salée est plus dense que l'eau douce, ce qui
 * augmente la poussée d'Archimède et facilite la flottaison — un effet de
 * densité, pas une propriété générale « de l'eau » indépendante du sel.
 */
export const card: ScienceCard = {
  id: 'pourquoi-on-flotte-mieux-dans-la-mer',
  domainId: 'les-oceans',
  animationId: 'pourquoi-on-flotte-mieux-dans-la-mer',
  thumbnail: '🏊',
  content: {
    fr: {
      title: {
        '3-5': 'Pourquoi on flotte bien dans la mer',
        '6-8': 'Pourquoi on flotte mieux dans la mer',
        '9-12': 'Flottabilité : pourquoi la mer porte mieux',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'un',
              text: 'L’eau de mer a du sel dedans, ce qui la rend plus lourde que l’eau de la piscine.',
            },
            {
              id: 'deux',
              text: 'Cette eau plus lourde pousse plus fort vers le haut.',
            },
            {
              id: 'trois',
              text: 'Alors ton corps flotte plus facilement.',
            },
            {
              id: 'quatre',
              text: 'Dans une mer très très salée, tu peux flotter sans même bouger.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'un',
              text: 'L’eau salée contient du sel dissous en plus de l’eau : à volume égal, elle est donc plus lourde que l’eau douce, on dit qu’elle est plus dense.',
            },
            {
              id: 'deux',
              text: 'Cette eau plus dense pousse ton corps vers le haut avec plus de force que ne le fait l’eau douce, comme la poussée d’Archimède.',
            },
            {
              id: 'trois',
              text: 'C’est pourquoi il est plus facile de flotter dans la mer que dans une piscine d’eau douce ou dans un lac.',
            },
            {
              id: 'quatre',
              text: 'Dans une mer très salée, comme la mer Morte, l’eau est tellement dense qu’on flotte quasiment sans le moindre effort, allongé à la surface.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'un',
              text: 'L’eau de mer contient environ trente-cinq grammes de sel dissous par litre, ce qui la rend plus dense que l’eau douce.',
            },
            {
              id: 'deux',
              text: 'Selon le principe d’Archimède, la force qui pousse un corps vers le haut dépend de la densité du liquide déplacé : plus l’eau est dense, plus cette poussée est forte.',
            },
            {
              id: 'trois',
              text: 'Pour un même corps humain, la poussée vers le haut est donc plus importante en mer qu’en eau douce, ce qui facilite la flottaison.',
            },
            {
              id: 'quatre',
              text: 'Dans la mer Morte, dont la salinité dépasse trente pour cent, la densité de l’eau est si élevée que la flottabilité y est presque totale, même sans savoir nager.',
            },
          ],
        },
      },
    },
    en: {
      title: {
        '3-5': 'Why you float well in the sea',
        '6-8': 'Why you float better in the sea',
        '9-12': 'Buoyancy: why the sea holds you up better',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'un',
              text: 'Sea water has salt in it, and that makes it heavier than the water in a swimming pool.',
            },
            {
              id: 'deux',
              text: 'This heavier water pushes upwards harder.',
            },
            {
              id: 'trois',
              text: 'So your body floats more easily.',
            },
            {
              id: 'quatre',
              text: 'In a very, very salty sea, you can float without even moving.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'un',
              text: 'Salt water holds dissolved salt as well as water: for the same amount, it is heavier than fresh water, and we say it is denser.',
            },
            {
              id: 'deux',
              text: 'This denser water pushes your body upwards with more force than fresh water does, like a hand under your back; that push is called upthrust.',
            },
            {
              id: 'trois',
              text: 'That is why it is easier to float in the sea than in a fresh-water pool or in a lake.',
            },
            {
              id: 'quatre',
              text: 'In a very salty sea such as the Dead Sea, the water is so dense that you float almost without any effort at all, lying flat on the surface.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'un',
              text: 'Sea water contains about thirty-five grams of dissolved salt per litre, which makes it denser than fresh water.',
            },
            {
              id: 'deux',
              text: 'According to Archimedes’ principle, the force pushing a body upwards depends on the density of the liquid it displaces: the denser the water, the stronger that push.',
            },
            {
              id: 'trois',
              text: 'For one and the same human body, the upthrust is therefore greater in the sea than in fresh water, which makes floating easier.',
            },
            {
              id: 'quatre',
              text: 'In the Dead Sea, whose salinity exceeds thirty per cent, the water is so dense that buoyancy there is almost total, even for someone who cannot swim.',
            },
          ],
        },
      },
    },
  },
};
