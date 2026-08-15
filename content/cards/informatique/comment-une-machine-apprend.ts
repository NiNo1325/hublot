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
    en: {
      title: {
        '3-5': 'The machine that practises',
        '6-8': 'How a machine learns',
        '9-12': 'Machine learning and bias',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'exemples',
              text: 'To learn to recognise a cat, the machine looks at thousands of photos of cats.',
            },
            {
              id: 'erreurs',
              text: 'At first it gets it wrong every time. We tell it “no, that one is a dog”, and it starts again.',
            },
            {
              id: 'ajuste',
              text: 'Each time it is wrong, it changes the way it looks just a tiny bit, and gets it wrong a little less.',
            },
            {
              id: 'comprend-pas',
              text: 'But it does not know what a cat is. It has never stroked one. It only spots shapes.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'exemples',
              text: 'You do not program a machine to recognise a cat by describing its whiskers to it. You show it thousands of pictures already labelled, and it works out on its own what tells them apart.',
            },
            {
              id: 'erreurs',
              text: 'To begin with, its answers are pure chance. Every time it is wrong, we measure by how much, then nudge its internal settings a little — there can be millions of them.',
            },
            {
              id: 'ajuste',
              text: 'Repeated millions of times, that correction ends up making its answers right. This is training in the literal sense: plenty of tries, plenty of mistakes, small adjustments.',
            },
            {
              id: 'comprend-pas',
              text: 'It still understands nothing for all that. It has found patterns in numbers. And if all your cat photos had been taken on a sofa, it might very well have learnt to recognise... sofas.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'exemples',
              text: 'In supervised learning, a model is given input-output pairs and has to infer the relationship that links them. Its quality depends entirely on how many such examples there are and how representative they are.',
            },
            {
              id: 'erreurs',
              text: 'A cost function measures the gap between the prediction and the expected answer. The algorithm works out in which direction to change each parameter in order to narrow that gap, then takes a small step in that direction — this is gradient descent.',
            },
            {
              id: 'ajuste',
              text: 'Repeated over millions of examples, the process adjusts parameters that sometimes number in the billions. Nothing is programmed explicitly: the behaviour emerges from the data. That is also why a decision made by the model cannot always be explained.',
            },
            {
              id: 'comprend-pas',
              text: 'The system optimises a statistical correlation, with no notion of meaning or of cause. The direct consequence: a model trained on biased data reproduces those biases faithfully, and presents them with the appearance of objectivity. Knowing where the data came from therefore matters as much as the algorithm itself.',
            },
          ],
        },
      },
    },
  },
};
