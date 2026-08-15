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
    en: {
      title: {
        '3-5': 'The same birthday',
        '6-8': 'The birthday paradox',
        '9-12': 'Why twenty-three is enough',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'intuition',
              text: 'In a class, two children can have their birthday on the same day. We think that is very rare.',
            },
            {
              id: 'paires',
              text: 'But you must not compare everybody with you. You have to compare everybody, two by two!',
            },
            {
              id: 'vingt-trois',
              text: 'And that makes many, many more comparisons than we think. So it happens often.',
            },
            {
              id: 'coincidences',
              text: 'Coincidences are far less rare than they look.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'intuition',
              text: 'How many people do you need in a room for a one in two chance that two of them were born on the same day? Most people answer around a hundred and eighty. The real answer is twenty-three.',
            },
            {
              id: 'paires',
              text: 'The mistake comes from what we compare. We ask “who has the same birthday as me?”, which is only twenty-two comparisons. But the question is about any pair at all: with twenty-three people, there are two hundred and fifty-three of them.',
            },
            {
              id: 'vingt-trois',
              text: 'Two hundred and fifty-three chances, each of them unlikely, end up making the coincidence likely. At twenty-three people you pass one chance in two; at fifty, you reach near certainty — ninety-seven per cent.',
            },
            {
              id: 'coincidences',
              text: 'The lesson goes far beyond birthdays. We judge coincidences badly because we count the chances from one single point of view. As soon as there are many people and many chances, the extraordinary becomes expected.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'intuition',
              text: 'The birthday paradox is not one in the logical sense: there is no contradiction, only a considerable gap between intuition and calculation.',
            },
            {
              id: 'paires',
              text: 'You go through the complementary probability: the probability that all the birthdays are different. It is 365 over 365, multiplied by 364 over 365, then by 363 over 365, and so on. For twenty-three people, that product falls to 0.493 — so the probability that at least two coincide is 0.507.',
            },
            {
              id: 'vingt-trois',
              text: 'The deep reason is combinatorial: the number of pairs grows as the square of the group size, not in proportion to it. For n people there are n times n minus one, divided by two, pairs — that is two hundred and fifty-three for twenty-three, and one thousand two hundred and twenty-five for fifty. Our intuition, meanwhile, reasons linearly.',
            },
            {
              id: 'coincidences',
              text: 'This bias explains a great deal of misplaced astonishment: lotteries won twice, improbable sequences, matches between profiles. As soon as the chances are numerous, rare events become likely somewhere. So the useful question is never “what is the probability of this happening to me?”, but “what is the probability of this happening to somebody?”.',
            },
          ],
        },
      },
    },
  },
};
