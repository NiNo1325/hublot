import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : le feu n'est pas une substance, c'est une réaction en
 * cours. Le triangle du feu — combustible, oxygène, chaleur — est directement
 * utile : il explique pourquoi étouffer une flamme l'éteint.
 */
export const card: ScienceCard = {
  id: 'le-feu',
  domainId: 'chimie',
  animationId: 'feu',
  thumbnail: '🔥',
  content: {
    fr: {
      title: {
        '3-5': 'Comment fait le feu',
        '6-8': "Qu'est-ce que le feu",
        '9-12': 'Combustion et triangle du feu',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'trois',
              text: "Pour faire du feu, il faut trois choses en même temps : quelque chose qui brûle, de l'air, et de la chaleur.",
            },
            {
              id: 'reaction',
              text: "Le bois se mélange alors avec l'air, et ça fabrique de la lumière et beaucoup de chaleur.",
            },
            {
              id: 'etouffer',
              text: "Si tu poses un couvercle dessus, l'air ne peut plus entrer et la flamme s'arrête tout de suite.",
            },
            {
              id: 'pas-chose',
              text: "Le feu n'est pas une chose qu'on peut attraper. C'est quelque chose qui se passe, comme une danse.",
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'trois',
              text: "Une flamme a besoin de trois éléments simultanés : un combustible, de l'oxygène, et assez de chaleur pour démarrer. C'est le triangle du feu.",
            },
            {
              id: 'reaction',
              text: "En brûlant, le combustible se combine à l'oxygène de l'air. Cette réaction libère de l'énergie sous forme de chaleur et de lumière, et produit de nouvelles substances : gaz, fumée, cendres.",
            },
            {
              id: 'etouffer',
              text: "Retirer un seul côté du triangle suffit à éteindre. L'eau enlève la chaleur, un couvercle prive d'oxygène, couper le gaz supprime le combustible. Les pompiers choisissent leur méthode selon ce qui brûle.",
            },
            {
              id: 'pas-chose',
              text: "Le feu n'est donc pas une matière : c'est une réaction en train de se produire. La flamme est du gaz devenu si chaud qu'il émet de la lumière. On ne peut pas en garder dans un bocal, seulement l'entretenir.",
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'trois',
              text: "La combustion est une oxydation rapide et exothermique. Elle exige un combustible, un comburant — le dioxygène le plus souvent — et une énergie d'activation suffisante pour amorcer la réaction.",
            },
            {
              id: 'reaction',
              text: "Un solide comme le bois ne brûle pas directement : la chaleur le décompose d'abord en gaz volatils, qui s'enflamment. C'est pourquoi la flamme se situe au-dessus de la bûche, et non à sa surface.",
            },
            {
              id: 'etouffer',
              text: "La réaction s'auto-entretient : la chaleur dégagée fournit l'énergie d'activation de la suite. Rompre cette boucle éteint le feu. L'eau agit surtout en absorbant l'énergie — sa vaporisation consomme énormément de chaleur — et non en « noyant » les flammes.",
            },
            {
              id: 'pas-chose',
              text: "La flamme est un plasma partiel : des gaz portés à haute température qui émettent un rayonnement. Sa couleur renseigne sur la température et sur les éléments présents — c'est le principe du test de flamme, où le sodium donne du jaune et le cuivre du vert.",
            },
          ],
        },
      },
    },
  },
};
