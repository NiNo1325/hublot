import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : l'intuition compte les occasions depuis un seul point
 * de vue — « qui a mon anniversaire ? » — alors que la question porte sur
 * n'importe quelle paire. Le nombre de paires croît comme le carré de
 * l'effectif, et c'est tout l'écart.
 *
 * Distinct de « le hasard », qui traite de l'indépendance des tirages et de la
 * loi des grands nombres.
 */
export const card: ScienceCard = {
  id: 'le-paradoxe-des-anniversaires',
  domainId: 'mathematiques',
  animationId: 'anniversaires',
  thumbnail: '🎂',
  content: {
    fr: {
      title: {
        '3-5': 'Le même anniversaire',
        '6-8': 'Le paradoxe des anniversaires',
        '9-12': 'Pourquoi vingt-trois suffisent',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'intuition',
              text: 'Dans une classe, deux enfants peuvent avoir leur anniversaire le même jour. On croit que c’est très rare.',
            },
            {
              id: 'paires',
              text: 'Mais il ne faut pas comparer chacun avec toi. Il faut comparer tout le monde, deux par deux !',
            },
            {
              id: 'vingt-trois',
              text: 'Et ça fait beaucoup, beaucoup plus de comparaisons qu’on ne le pense. Alors ça arrive souvent.',
            },
            {
              id: 'coincidences',
              text: 'Les coïncidences sont bien moins rares qu’elles n’en ont l’air.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'intuition',
              text: 'Combien faut-il de personnes dans une pièce pour avoir une chance sur deux que deux d’entre elles soient nées le même jour ? La plupart des gens répondent autour de cent quatre-vingts. La vraie réponse est vingt-trois.',
            },
            {
              id: 'paires',
              text: 'L’erreur vient de ce qu’on compare. On se demande « qui a le même anniversaire que moi ? », ce qui ne fait que vingt-deux comparaisons. Or la question porte sur n’importe quelle paire : avec vingt-trois personnes, il y en a deux cent cinquante-trois.',
            },
            {
              id: 'vingt-trois',
              text: 'Deux cent cinquante-trois occasions, chacune peu probable, finissent par rendre la coïncidence probable. À vingt-trois personnes on dépasse une chance sur deux ; à cinquante, on atteint quasiment la certitude — quatre-vingt-dix-sept pour cent.',
            },
            {
              id: 'coincidences',
              text: 'La leçon dépasse largement les anniversaires. Nous jugeons mal les coïncidences parce que nous comptons les occasions depuis un seul point de vue. Dès qu’il y a beaucoup de gens et beaucoup d’occasions, l’extraordinaire devient attendu.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'intuition',
              text: 'Le paradoxe des anniversaires n’en est pas un au sens logique : aucune contradiction, seulement un écart considérable entre l’intuition et le calcul.',
            },
            {
              id: 'paires',
              text: 'On passe par la probabilité complémentaire : celle que tous les anniversaires soient distincts. Elle vaut 365 sur 365, multiplié par 364 sur 365, puis par 363 sur 365, et ainsi de suite. Pour vingt-trois personnes, ce produit tombe à 0,493 — la probabilité qu’au moins deux coïncident vaut donc 0,507.',
            },
            {
              id: 'vingt-trois',
              text: 'La raison profonde est combinatoire : le nombre de paires croît comme le carré de l’effectif, non proportionnellement. À n personnes correspondent n fois n moins un, divisé par deux, paires — soit deux cent cinquante-trois pour vingt-trois, et mille deux cent vingt-cinq pour cinquante. Notre intuition, elle, raisonne linéairement.',
            },
            {
              id: 'coincidences',
              text: 'Ce biais explique beaucoup d’étonnements mal placés : loteries gagnées deux fois, séquences improbables, correspondances entre profils. Dès que les occasions sont nombreuses, les événements rares deviennent probables quelque part. La question utile n’est donc jamais « quelle est la probabilité que cela m’arrive ? », mais « quelle est la probabilité que cela arrive à quelqu’un ? ».',
            },
          ],
        },
      },
    },
  },
};
