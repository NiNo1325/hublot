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
  },
};
