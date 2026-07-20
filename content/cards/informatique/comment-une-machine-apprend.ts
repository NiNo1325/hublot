import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : une machine qui « apprend » ne comprend pas. Elle
 * ajuste des paramètres pour réduire son erreur sur des exemples. Le dire
 * clairement à des enfants qui grandiront avec ces outils a une valeur
 * pratique — notamment pour comprendre d'où viennent les biais.
 */
export const card: ScienceCard = {
  id: 'comment-une-machine-apprend',
  domainId: 'informatique',
  animationId: 'apprentissage',
  thumbnail: '🤖',
  content: {
    fr: {
      title: {
        '3-5': "La machine qui s'entraîne",
        '6-8': 'Comment une machine apprend',
        '9-12': "Apprentissage automatique et biais",
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'exemples',
              text: "Pour apprendre à reconnaître un chat, la machine regarde des milliers de photos de chats.",
            },
            {
              id: 'erreurs',
              text: "Au début, elle se trompe tout le temps. On lui dit « non, ça c'est un chien », et elle recommence.",
            },
            {
              id: 'ajuste',
              text: "À chaque erreur, elle change un tout petit peu sa façon de regarder, et se trompe un peu moins.",
            },
            {
              id: 'comprend-pas',
              text: "Mais elle ne sait pas ce qu'est un chat. Elle n'en a jamais caressé un. Elle repère juste des formes.",
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'exemples',
              text: "On ne programme pas une machine à reconnaître un chat en lui décrivant les moustaches. On lui montre des milliers d'images déjà étiquetées, et elle cherche seule ce qui les distingue.",
            },
            {
              id: 'erreurs',
              text: "Au départ, ses réponses sont au hasard. Chaque fois qu'elle se trompe, on mesure de combien, puis on corrige légèrement ses réglages internes — ils peuvent être des millions.",
            },
            {
              id: 'ajuste',
              text: "Répétée des millions de fois, cette correction finit par rendre ses réponses justes. C'est de l'entraînement, au sens propre : beaucoup d'essais, beaucoup d'erreurs, de petits ajustements.",
            },
            {
              id: 'comprend-pas',
              text: "Elle ne comprend rien pour autant. Elle a trouvé des régularités dans des chiffres. Et si toutes tes photos de chats avaient été prises sur un canapé, elle pourrait très bien avoir appris à reconnaître... des canapés.",
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'exemples',
              text: "En apprentissage supervisé, un modèle reçoit des paires entrée-sortie et doit inférer la relation qui les lie. Sa qualité dépend entièrement de la quantité et de la représentativité de ces exemples.",
            },
            {
              id: 'erreurs',
              text: "Une fonction de coût mesure l'écart entre prédiction et réponse attendue. L'algorithme calcule dans quelle direction modifier chaque paramètre pour réduire cet écart, puis fait un petit pas dans cette direction — c'est la descente de gradient.",
            },
            {
              id: 'ajuste',
              text: "Répété sur des millions d'exemples, ce processus ajuste des paramètres parfois par milliards. Rien n'est programmé explicitement : le comportement émerge des données. C'est aussi pourquoi on ne sait pas toujours expliquer une décision du modèle.",
            },
            {
              id: 'comprend-pas',
              text: "Le système optimise une corrélation statistique, sans notion de sens ni de causalité. Conséquence directe : un modèle entraîné sur des données biaisées reproduit fidèlement ces biais, et les présente avec l'apparence de l'objectivité. Savoir d'où viennent les données est donc aussi important que l'algorithme lui-même.",
            },
          ],
        },
      },
    },
  },
};
