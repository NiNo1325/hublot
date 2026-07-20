import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : le sucre ne disparaît pas et ne fond pas — deux mots
 * souvent employés à tort. Il se disperse. La balance le prouve, et c'est un
 * contrepoint utile à la carte du bicarbonate, où là il y a bien
 * transformation chimique.
 */
export const card: ScienceCard = {
  id: 'ou-va-le-sucre-dans-leau',
  domainId: 'chimie',
  animationId: 'dissolution',
  thumbnail: '🥄',
  content: {
    fr: {
      title: {
        '3-5': 'Le sucre qui se cache',
        '6-8': "Où va le sucre dans l'eau",
        '9-12': 'Dissolution et conservation de la masse',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'avant',
              text: "Tu mets une cuillère de sucre dans un verre d'eau. Au début, on le voit très bien au fond.",
            },
            {
              id: 'melange',
              text: "Tu remues, et petit à petit les grains deviennent de plus en plus petits, jusqu'à ne plus se voir.",
            },
            {
              id: 'toujours-la',
              text: "Mais le sucre n'est pas parti ! Goûte l'eau : elle est sucrée. Il s'est juste caché partout dans le verre.",
            },
            {
              id: 'retour',
              text: "Si tu laisses l'eau s'évaporer au soleil, le sucre réapparaît au fond. Il était bien là depuis le début.",
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'avant',
              text: "Un grain de sucre est fait de milliards de particules minuscules, serrées les unes contre les autres.",
            },
            {
              id: 'melange',
              text: "Dans l'eau, ces particules se détachent une à une et se glissent entre les particules d'eau. Elles deviennent bien trop petites pour être vues : le mélange redevient transparent.",
            },
            {
              id: 'toujours-la',
              text: "Rien n'a disparu. Pèse le verre avant et après : la masse est exactement la même. Le goût sucré prouve que le sucre est toujours là, simplement réparti partout.",
            },
            {
              id: 'retour',
              text: "On dit parfois que le sucre « fond ». C'est inexact : fondre, c'est passer du solide au liquide sous l'effet de la chaleur, comme le chocolat. Ici, le sucre se dissout. Et comme rien n'a été transformé, l'évaporation le fait revenir intact.",
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'avant',
              text: "Le saccharose cristallisé est un solide ordonné, maintenu par des liaisons hydrogène entre ses molécules.",
            },
            {
              id: 'melange',
              text: "Les molécules d'eau, polaires, s'insèrent entre elles et les entourent — c'est la solvatation. Chaque molécule de sucre se retrouve isolée, dispersée dans le liquide, à une échelle bien inférieure à la longueur d'onde de la lumière : la solution reste limpide.",
            },
            {
              id: 'toujours-la',
              text: "La masse se conserve rigoureusement : cent grammes d'eau plus dix de sucre donnent cent dix grammes de solution. Le volume, lui, augmente moins que prévu, les molécules de sucre se logeant en partie dans les interstices de l'eau.",
            },
            {
              id: 'retour',
              text: "C'est une transformation physique, non chimique : aucune liaison covalente n'est rompue au sein des molécules de saccharose. L'évaporation les restitue identiques — contrairement au bicarbonate et au vinaigre, dont les produits ne peuvent pas être ramenés à leur état initial.",
            },
          ],
        },
      },
    },
  },
};
