import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : la moyenne ne décrit pas l'individu typique. Une seule
 * valeur extrême la déplace autant que des centaines d'observations
 * ordinaires, alors que la médiane y résiste. Et aucun indicateur central ne
 * suffit sans une mesure de dispersion.
 */
export const card: ScienceCard = {
  id: 'la-moyenne',
  domainId: 'mathematiques',
  animationId: 'moyenne',
  thumbnail: '📊',
  content: {
    fr: {
      title: {
        '3-5': 'Partager en parts égales',
        '6-8': 'La moyenne ne décrit personne',
        '9-12': 'Moyenne, médiane et dispersion',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'calcul',
              text: 'Pour faire une moyenne, on met tout ensemble, puis on partage en parts égales.',
            },
            {
              id: 'trompe',
              text: 'Mais attention : si un géant entre dans la classe, la taille moyenne ne va plus du tout à personne.',
            },
            {
              id: 'mediane',
              text: 'Alors on regarde plutôt celui du milieu, quand on se range du plus petit au plus grand.',
            },
            {
              id: 'dispersion',
              text: 'Et un seul nombre ne dit jamais si tout le monde se ressemble ou pas.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'calcul',
              text: 'La moyenne, tu sais la calculer : on additionne tout et on divise par le nombre de valeurs. Elle est très utile — et très facile à mal lire.',
            },
            {
              id: 'trompe',
              text: 'Imagine dix personnes dans une pièce, gagnant chacune vingt euros. La moyenne vaut vingt. Fais entrer quelqu’un qui en gagne mille : la moyenne saute à cent-neuf, alors que dix personnes sur onze ont toujours vingt euros. Elle ne décrit plus personne.',
            },
            {
              id: 'mediane',
              text: 'D’où l’intérêt de la médiane : la valeur du milieu quand on range tout dans l’ordre. Ici, elle vaut vingt, ce qui décrit bien mieux la situation. Une seule valeur extrême ne la déplace presque pas.',
            },
            {
              id: 'dispersion',
              text: 'Et surtout, aucun nombre unique ne suffit. Deux classes peuvent avoir exactement la même moyenne alors que dans l’une tout le monde se ressemble, et pas du tout dans l’autre. Il faut aussi savoir à quel point les valeurs s’écartent.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'calcul',
              text: 'La moyenne arithmétique est le centre de gravité d’une distribution. C’est une information réelle, mais partielle — et c’est cette partialité qui produit la plupart des erreurs de lecture.',
            },
            {
              id: 'trompe',
              text: 'Elle est sensible aux valeurs extrêmes : une seule observation aberrante la déplace autant que des centaines d’observations ordinaires. C’est pourquoi, dans toute distribution de revenus — fortement asymétrique à droite —, le revenu moyen dépasse systématiquement le revenu médian.',
            },
            {
              id: 'mediane',
              text: 'La médiane sépare la population en deux moitiés égales. Sa robustesse se mesure : il faut déplacer la moitié des observations pour la faire varier arbitrairement, contre une seule pour la moyenne. Dès qu’une distribution est asymétrique, c’est elle qui décrit le cas typique.',
            },
            {
              id: 'dispersion',
              text: 'Aucun indicateur central ne suffit seul : il faut lui adjoindre une mesure de dispersion, écart-type ou intervalle interquartile. Le quatuor d’Anscombe le montre de façon spectaculaire — quatre jeux de données partageant moyennes, variances et même droite de régression, dont les nuages de points n’ont pourtant rien en commun. Résumer une population par un seul nombre, c’est toujours accepter d’en perdre l’essentiel.',
            },
          ],
        },
      },
    },
    en: {
      title: {
        '3-5': 'Sharing into equal parts',
        '6-8': 'The average describes nobody',
        '9-12': 'Mean, median and spread',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'calcul',
              text: 'To make an average, you put everything together, then share it into equal parts.',
            },
            {
              id: 'trompe',
              text: 'But watch out: if a giant walks into the class, the average height no longer fits anybody at all.',
            },
            {
              id: 'mediane',
              text: 'So instead we look at the one in the middle, when everybody lines up from smallest to tallest.',
            },
            {
              id: 'dispersion',
              text: 'And one single number never tells you whether everybody is alike or not.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'calcul',
              text: 'You know how to work out an average: add everything up and divide by the number of values. It is very useful — and very easy to read wrongly.',
            },
            {
              id: 'trompe',
              text: 'Imagine ten people in a room, each earning twenty euros. The average is twenty. Now let in somebody who earns a thousand: the average jumps to a hundred and nine, even though ten people out of eleven still have twenty euros. It no longer describes anybody.',
            },
            {
              id: 'mediane',
              text: 'Hence the value of the median: the middle value once everything is put in order. Here it is twenty, which describes the situation far better. A single extreme value barely moves it.',
            },
            {
              id: 'dispersion',
              text: 'And above all, no single number is enough. Two classes can have exactly the same average even though everybody is alike in one and not at all in the other. You also need to know how far the values spread out.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'calcul',
              text: 'The arithmetic mean is the centre of gravity of a distribution. It is real information, but partial — and it is that partiality that produces most misreadings.',
            },
            {
              id: 'trompe',
              text: 'It is sensitive to extreme values: a single outlying observation shifts it as much as hundreds of ordinary ones. That is why, in any distribution of incomes — strongly skewed to the right — the mean income systematically exceeds the median income.',
            },
            {
              id: 'mediane',
              text: 'The median splits the population into two equal halves. Its robustness can be measured: you have to move half the observations to change it arbitrarily, against a single one for the mean. As soon as a distribution is skewed, it is the median that describes the typical case.',
            },
            {
              id: 'dispersion',
              text: 'No measure of the centre is enough on its own: it needs a measure of spread alongside it, standard deviation or interquartile range. Anscombe’s quartet shows this spectacularly — four data sets sharing the same means, the same variances and even the same regression line, yet whose scatter plots have nothing in common. Summing up a population with a single number always means accepting the loss of what matters most.',
            },
          ],
        },
      },
    },
  },
};
