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
  },
};
