import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : « ça flotte parce que c'est léger » est faux — un
 * porte-avions pèse cent mille tonnes. Ce qui compte est la masse volumique
 * moyenne, coque et air compris. La pâte à modeler le démontre en une minute.
 */
export const card: ScienceCard = {
  id: 'pourquoi-les-bateaux-flottent',
  domainId: 'ingenierie',
  animationId: 'flottaison',
  thumbnail: '⛵',
  content: {
    fr: {
      title: {
        '3-5': 'Le gros bateau qui flotte',
        '6-8': 'Pourquoi les bateaux flottent',
        '9-12': "Poussée d'Archimède",
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'lourd',
              text: "Un bateau est énorme et très très lourd. Pourtant il ne coule pas, alors qu'un petit caillou, si.",
            },
            {
              id: 'boule',
              text: "Prends de la pâte à modeler. En boule, elle coule tout de suite au fond.",
            },
            {
              id: 'creux',
              text: "Maintenant fais-en un petit bol tout creux. Pose-le sur l'eau : il flotte ! C'est la même pâte, pourtant.",
            },
            {
              id: 'place',
              text: "Un bateau est un très grand bol, avec beaucoup d'air dedans. C'est l'air qui l'aide à rester en haut.",
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'lourd',
              text: "On croit souvent que les objets légers flottent et les lourds coulent. C'est faux : un porte-avions pèse cent mille tonnes et flotte, une bille de fer de vingt grammes coule.",
            },
            {
              id: 'boule',
              text: "Ce qui compte, c'est la comparaison avec le même volume d'eau. Une boule de pâte à modeler pèse plus que l'eau qu'elle occuperait : elle coule.",
            },
            {
              id: 'creux',
              text: "Façonne la même pâte en coque creuse : elle occupe désormais bien plus de place, tout en gardant la même masse. L'ensemble pâte plus air pèse maintenant moins que l'eau déplacée, et flotte.",
            },
            {
              id: 'place',
              text: "Quand un objet entre dans l'eau, il pousse l'eau de côté, et l'eau le repousse vers le haut avec une force égale au poids de l'eau déplacée. Un bateau est conçu pour déplacer beaucoup d'eau : c'est toute la raison de sa coque creuse.",
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'lourd',
              text: "Un corps flotte si sa masse volumique moyenne est inférieure à celle du fluide. La masse totale n'intervient pas : c'est le rapport masse sur volume qui décide.",
            },
            {
              id: 'boule',
              text: "L'acier a une masse volumique d'environ sept mille huit cents kilogrammes par mètre cube, contre mille pour l'eau douce. Une pièce d'acier pleine coule donc nécessairement.",
            },
            {
              id: 'creux',
              text: "Une coque creuse enferme un grand volume d'air. La masse volumique moyenne de l'ensemble tombe alors sous celle de l'eau, et l'objet flotte — sans qu'aucun matériau n'ait changé.",
            },
            {
              id: 'place',
              text: "Le principe d'Archimède énonce que la poussée verticale ascendante égale le poids du fluide déplacé. À l'équilibre, elle compense exactement le poids du navire : un bateau de cent mille tonnes déplace cent mille tonnes d'eau. C'est aussi ce qui règle la plongée d'un sous-marin, qui remplit ou vide ses ballasts pour ajuster sa masse volumique moyenne.",
            },
          ],
        },
      },
    },
  },
};
