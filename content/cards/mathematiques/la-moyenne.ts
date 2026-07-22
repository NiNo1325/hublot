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
  },
};
