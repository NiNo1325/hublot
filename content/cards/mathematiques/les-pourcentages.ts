import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : les variations en pourcentage se multiplient, elles ne
 * s'additionnent pas. Une baisse de moitié suivie d'une hausse de moitié ne
 * ramène pas au départ mais aux trois quarts — et c'est l'erreur la plus
 * répandue sur le sujet, juste devant la confusion entre pour cent et points
 * de pourcentage.
 */
export const card: ScienceCard = {
  id: 'les-pourcentages',
  domainId: 'mathematiques',
  animationId: 'pourcentages',
  thumbnail: '📉',
  content: {
    fr: {
      title: {
        '3-5': 'La moitié de quoi ?',
        '6-8': 'Les pourcentages et leurs pièges',
        '9-12': 'Pourcentages : ce qui se multiplie ne s’additionne pas',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'part',
              text: 'Un pour cent, c’est un tout petit morceau sur cent morceaux. Comme une part de gâteau.',
            },
            {
              id: 'de-quoi',
              text: 'Mais un morceau de quoi ? La moitié d’un grand gâteau, ce n’est pas la moitié d’un petit.',
            },
            {
              id: 'aller-retour',
              text: 'Et si tu enlèves la moitié, puis que tu rajoutes la moitié de ce qui reste, tu n’as pas ton gâteau entier !',
            },
            {
              id: 'points',
              text: 'Alors il faut toujours demander : la moitié de quoi ?',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'part',
              text: 'Un pourcentage n’est pas une quantité, c’est une part. Vingt pour cent, cela veut dire vingt sur cent.',
            },
            {
              id: 'de-quoi',
              text: 'D’où la première règle : un pourcentage ne veut rien dire tant qu’on ignore de quoi. Dix pour cent de remise sur cent euros font dix euros ; sur dix euros, ils font un euro.',
            },
            {
              id: 'aller-retour',
              text: 'Voici maintenant le piège que presque tout le monde rate. Un prix de cent euros baisse de cinquante pour cent : il tombe à cinquante. Il remonte ensuite de cinquante pour cent : il ne revient pas à cent, mais à soixante-quinze. Parce que la hausse s’applique à cinquante, pas à cent.',
            },
            {
              id: 'points',
              text: 'Retiens-le : une baisse et une hausse du même pourcentage ne s’annulent jamais. Pour repasser de cinquante à cent, il faudrait une hausse de cent pour cent.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'part',
              text: 'Un pourcentage est une proportion, donc un rapport sans dimension. Il ne prend de sens qu’une fois rapporté à sa base.',
            },
            {
              id: 'de-quoi',
              text: 'Négliger cette base produit des énoncés vides. « Le risque double » ne dit rien tant qu’on ignore s’il passe de un sur un million à deux sur un million, ou de un sur dix à deux sur dix. C’est toute la différence entre risque relatif et risque absolu, et c’est le ressort le plus utilisé des titres alarmants.',
            },
            {
              id: 'aller-retour',
              text: 'Les variations successives se multiplient au lieu de s’additionner. Une baisse de cinquante pour cent suivie d’une hausse de cinquante pour cent donne 0,5 multiplié par 1,5, soit 0,75 : il manque un quart. Pour compenser une baisse de x, il faut une hausse de x divisé par un moins x — donc cent pour cent après une baisse de moitié.',
            },
            {
              id: 'points',
              text: 'Dernière confusion, courante dans la presse : passer de deux à trois pour cent, c’est une hausse d’un point de pourcentage, mais aussi une hausse de cinquante pour cent. Les deux formulations sont exactes et décrivent le même fait. D’où la facilité avec laquelle on retient celle qui impressionne le plus.',
            },
          ],
        },
      },
    },
  },
};
