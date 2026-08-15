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
    en: {
      title: {
        '3-5': 'The big ship that floats',
        '6-8': 'Why ships float',
        '9-12': 'Archimedes’ principle',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'lourd',
              text: 'A ship is enormous and very, very heavy. Yet it does not sink, while a little pebble does.',
            },
            {
              id: 'boule',
              text: 'Take some modelling clay. Rolled into a ball, it sinks straight to the bottom.',
            },
            {
              id: 'creux',
              text: 'Now make it into a little hollow bowl. Put it on the water: it floats! And it is the very same clay.',
            },
            {
              id: 'place',
              text: 'A ship is a very big bowl, with lots of air inside. It is the air that helps it stay on top.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'lourd',
              text: 'People often think light things float and heavy things sink. That is wrong: an aircraft carrier weighs a hundred thousand tonnes and floats, and an iron ball of twenty grams sinks.',
            },
            {
              id: 'boule',
              text: 'What counts is the comparison with the same volume of water. A ball of modelling clay weighs more than the water it would take the place of: it sinks.',
            },
            {
              id: 'creux',
              text: 'Shape that same clay into a hollow hull: it now takes up far more room while keeping the same mass. Clay plus air together now weigh less than the water pushed aside, and the whole thing floats.',
            },
            {
              id: 'place',
              text: 'When an object goes into water, it pushes the water aside, and the water pushes it back up with a force equal to the weight of the water pushed aside. A ship is built to push aside a great deal of water: that is the whole reason for its hollow hull.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'lourd',
              text: 'A body floats if its average density is lower than that of the fluid. The total mass plays no part: it is the mass-to-volume ratio that decides.',
            },
            {
              id: 'boule',
              text: 'Steel has a density of about seven thousand eight hundred kilograms per cubic metre, against a thousand for fresh water. A solid piece of steel therefore has no choice but to sink.',
            },
            {
              id: 'creux',
              text: 'A hollow hull encloses a large volume of air. The average density of the whole then falls below that of water, and the object floats — without any material having changed.',
            },
            {
              id: 'place',
              text: 'Archimedes’ principle states that the upward force equals the weight of the fluid displaced. At equilibrium, it exactly balances the weight of the ship: a vessel of a hundred thousand tonnes displaces a hundred thousand tonnes of water. It is also what governs a submarine’s dive, as it fills or empties its ballast tanks to adjust its average density.',
            },
          ],
        },
      },
    },
  },
};
