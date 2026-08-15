import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : l'erreur du parieur — croire qu'après plusieurs piles,
 * face « doit » sortir. La pièce n'a pas de mémoire. C'est une intuition
 * fausse extrêmement répandue, et la corriger tôt a une valeur pratique
 * durable.
 */
export const card: ScienceCard = {
  id: 'le-hasard',
  domainId: 'mathematiques',
  animationId: 'hasard',
  thumbnail: '🎲',
  content: {
    fr: {
      title: {
        '3-5': 'Pile ou face',
        '6-8': 'Le hasard',
        '9-12': 'Probabilités et loi des grands nombres',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'lancer',
              text: "Quand tu lances une pièce, tu ne peux pas savoir à l'avance si ce sera pile ou face.",
            },
            {
              id: 'memoire',
              text: "Même si tu as eu pile cinq fois de suite, la pièce ne s'en souvient pas du tout.",
            },
            {
              id: 'chance-egale',
              text: "À chaque nouveau lancer, pile et face ont exactement la même chance de sortir. Toujours.",
            },
            {
              id: 'beaucoup',
              text: "Mais si tu lances très longtemps, tu obtiendras à peu près autant de piles que de faces.",
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'lancer',
              text: "Une probabilité mesure la chance qu'un événement se produise. Pour une pièce équilibrée, pile a une chance sur deux.",
            },
            {
              id: 'memoire',
              text: "Beaucoup de gens pensent qu'après cinq piles d'affilée, face « doit » sortir. C'est faux : la pièce n'a aucune mémoire. La probabilité reste une sur deux, exactement comme au premier lancer.",
            },
            {
              id: 'chance-egale',
              text: "Chaque lancer est indépendant des précédents. Cinq piles de suite arrivent une fois sur trente-deux — c'est rare, mais ce n'est pas anormal, et surtout cela ne change rien au lancer suivant.",
            },
            {
              id: 'beaucoup',
              text: "Sur un très grand nombre de lancers, la proportion de piles s'approche de la moitié. Attention : ce n'est pas une compensation des lancers passés, c'est simplement qu'un écart de dix devient négligeable quand on a lancé un million de fois.",
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'lancer',
              text: "La probabilité d'un événement est le rapport entre les cas favorables et les cas possibles, lorsque ceux-ci sont équiprobables. Avec un dé à six faces, obtenir un nombre pair vaut trois sur six, soit un demi.",
            },
            {
              id: 'memoire',
              text: "Des événements sont indépendants lorsque la réalisation de l'un ne modifie pas la probabilité de l'autre. Croire qu'une série de piles rend face plus probable est l'erreur du parieur — un raisonnement qui a ruiné bien des joueurs.",
            },
            {
              id: 'chance-egale',
              text: "La probabilité de cinq piles consécutifs est un demi puissance cinq, soit environ trois pour cent. Mais une fois ces cinq piles obtenus, le sixième lancer reste à un demi : le passé est révolu, seul compte l'état présent du système.",
            },
            {
              id: 'beaucoup',
              text: "La loi des grands nombres énonce que la fréquence observée converge vers la probabilité théorique quand le nombre d'essais augmente. Nuance essentielle : c'est la fréquence relative qui converge, pas l'écart absolu, lequel a même tendance à croître. Le hasard ne se corrige pas, il se dilue.",
            },
          ],
        },
      },
    },
    en: {
      title: {
        '3-5': 'Heads or tails',
        '6-8': 'Chance',
        '9-12': 'Probability and the law of large numbers',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'lancer',
              text: 'When you toss a coin, you cannot know beforehand whether it will be heads or tails.',
            },
            {
              id: 'memoire',
              text: 'Even if you have had heads five times in a row, the coin does not remember it at all.',
            },
            {
              id: 'chance-egale',
              text: 'On every new toss, heads and tails have exactly the same chance of coming up. Always.',
            },
            {
              id: 'beaucoup',
              text: 'But if you toss for a very long time, you will get about as many heads as tails.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'lancer',
              text: 'A probability measures the chance of something happening. For a fair coin, heads has one chance in two.',
            },
            {
              id: 'memoire',
              text: 'Lots of people think that after five heads in a row, tails “has to” come up. That is wrong: the coin has no memory. The probability is still one in two, exactly as on the first toss.',
            },
            {
              id: 'chance-egale',
              text: 'Every toss is independent of the ones before. Five heads in a row happens once in thirty-two — it is rare, but it is not abnormal, and above all it changes nothing about the next toss.',
            },
            {
              id: 'beaucoup',
              text: 'Over a very large number of tosses, the proportion of heads gets close to half. Careful, though: this is not the past tosses being made up for, it is simply that a gap of ten becomes tiny once you have tossed a million times.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'lancer',
              text: 'The probability of an event is the ratio of favourable cases to possible cases, when those cases are equally likely. With a six-sided die, getting an even number is three out of six, that is one half.',
            },
            {
              id: 'memoire',
              text: 'Two events are independent when the outcome of one does not change the probability of the other. Believing that a run of heads makes tails more likely is the gambler’s fallacy — a piece of reasoning that has ruined many a player.',
            },
            {
              id: 'chance-egale',
              text: 'The probability of five heads in a row is a half to the power five, about three per cent. But once those five heads have come up, the sixth toss is still a half: the past is over, only the present state of the system counts.',
            },
            {
              id: 'beaucoup',
              text: 'The law of large numbers states that the observed frequency converges towards the theoretical probability as the number of trials grows. One essential subtlety: it is the relative frequency that converges, not the absolute gap, which actually tends to grow. Chance does not correct itself, it dilutes itself.',
            },
          ],
        },
      },
    },
  },
};
