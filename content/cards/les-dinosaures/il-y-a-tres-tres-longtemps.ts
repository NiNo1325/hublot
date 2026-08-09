import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : le Tyrannosaure est chronologiquement plus proche de
 * l'humain actuel que du Stégosaure. À rapporter à une année civile pour
 * toute l'histoire de la Terre, l'espèce humaine n'occupe que les toutes
 * dernières secondes du trente et un décembre.
 */
export const card: ScienceCard = {
  id: 'il-y-a-tres-tres-longtemps',
  domainId: 'les-dinosaures',
  animationId: 'il-y-a-tres-tres-longtemps',
  thumbnail: '⏳',
  content: {
    fr: {
      title: {
        '3-5': 'Il y a très longtemps',
        '6-8': 'Il y a très, très longtemps',
        '9-12': "Dinosaures et humains : des millions d'années d'écart",
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'un',
              text: 'Les dinosaures ont vécu il y a très, très, très longtemps.',
            },
            {
              id: 'deux',
              text: "C'était bien avant qu'il y ait des gens sur Terre.",
            },
            {
              id: 'trois',
              text: "Entre les dinosaures et toi, il s'est passé un temps immense.",
            },
            {
              id: 'quatre',
              text: "Les humains sont arrivés tout, tout à la fin de l'histoire.",
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'un',
              text: "Les dinosaures ont vécu il y a environ deux cent trente à soixante-six millions d'années.",
            },
            {
              id: 'deux',
              text: "Les tout premiers humains, eux, sont apparus il y a seulement quelques millions d'années : bien après la disparition des dinosaures non aviens.",
            },
            {
              id: 'trois',
              text: "Entre le dernier dinosaure non avien et le premier humain, il s'est écoulé un temps si long qu'il est presque impossible à imaginer.",
            },
            {
              id: 'quatre',
              text: "Si on résume toute l'histoire de la Terre en une seule année, les humains n'apparaissent que dans les toutes dernières minutes du trente et un décembre.",
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'un',
              text: "Les dinosaures non aviens dominent les écosystèmes terrestres du Trias supérieur au Crétacé, soit environ de moins deux cent trente à moins soixante-six millions d'années.",
            },
            {
              id: 'deux',
              text: "Le genre Homo n'apparaît qu'il y a environ deux à trois millions d'années, et Homo sapiens il y a seulement trois cent mille ans.",
            },
            {
              id: 'trois',
              text: "Le tyrannosaure est ainsi plus proche de nous dans le temps que du stégosaure : quatre-vingts millions d'années les séparaient déjà, soit davantage que l'écart entre le tyrannosaure et l'humain actuel.",
            },
            {
              id: 'quatre',
              text: "Rapportée à une année civile pour toute l'histoire de la Terre, l'espèce humaine n'occupe que les toutes dernières secondes du trente et un décembre à minuit.",
            },
          ],
        },
      },
    },
  },
};
