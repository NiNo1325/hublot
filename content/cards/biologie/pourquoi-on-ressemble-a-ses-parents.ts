import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : hériter n'est pas mélanger. On reçoit des versions
 * entières de gènes, pas une moyenne — c'est ce qui explique qu'un caractère
 * puisse sauter une génération.
 */
export const card: ScienceCard = {
  id: 'pourquoi-on-ressemble-a-ses-parents',
  domainId: 'biologie',
  animationId: 'heredite',
  thumbnail: '🧬',
  content: {
    fr: {
      title: {
        '3-5': 'Pourquoi tu leur ressembles',
        '6-8': 'Pourquoi on ressemble à ses parents',
        '9-12': 'ADN, gènes et hérédité',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'notice',
              text: "Dans ton corps, il y a une sorte de notice qui explique comment tu es fabriqué.",
            },
            {
              id: 'moitie',
              text: "La moitié vient de ta maman, l'autre moitié de ton papa. C'est pour ça que tu ressembles un peu aux deux.",
            },
            {
              id: 'combinaison',
              text: "Mais le mélange n'est jamais le même. C'est pourquoi les frères et sœurs ne sont pas identiques.",
            },
            {
              id: 'unique',
              text: "Ta notice à toi n'existe nulle part ailleurs. Il n'y a personne exactement comme toi.",
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'notice',
              text: "Chaque cellule de ton corps contient de l'ADN, une longue molécule qui porte les instructions de fabrication d'un être vivant.",
            },
            {
              id: 'moitie',
              text: "Cet ADN est rangé en quarante-six chromosomes, par paires. Dans chaque paire, l'un vient de ta mère et l'autre de ton père : tu reçois exactement la moitié de chacun.",
            },
            {
              id: 'combinaison',
              text: "Attention à une idée fausse : ce n'est pas un mélange, comme deux peintures. Tu reçois des versions entières de chaque gène. C'est pourquoi un caractère peut sauter une génération et réapparaître chez toi alors qu'aucun de tes parents ne le montre.",
            },
            {
              id: 'unique',
              text: "Le tirage est différent à chaque fois, ce qui fait des milliards de combinaisons possibles. Deux frères ont les mêmes parents mais pas le même ADN — sauf les vrais jumeaux, issus d'un même œuf séparé en deux.",
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'notice',
              text: "L'ADN est une double hélice de quatre bases — A, T, G, C — dont l'ordre code la construction des protéines. Le génome humain compte environ trois milliards de paires de bases, pour à peu près vingt mille gènes.",
            },
            {
              id: 'moitie',
              text: "Les cellules reproductrices ne contiennent que vingt-trois chromosomes. Leur fusion en restaure quarante-six, dont la moitié provient de chaque parent — mécanisme découvert bien avant qu'on ne sache ce qu'était un gène.",
            },
            {
              id: 'combinaison',
              text: "L'hérédité est particulaire, non mélangée : c'est la découverte de Mendel. Un allèle récessif peut être transmis sans s'exprimer, puis réapparaître si l'enfant en reçoit deux copies. Un mélange continu aurait au contraire dilué toute variation en quelques générations — objection majeure à laquelle Darwin ne savait pas répondre.",
            },
            {
              id: 'unique',
              text: "Le brassage lors de la formation des gamètes, avec échange de segments entre chromosomes, rend chaque cellule reproductrice unique. Le nombre de combinaisons dépasse largement le nombre d'humains ayant jamais vécu. Et le génotype ne fait pas tout : l'environnement module l'expression des gènes.",
            },
          ],
        },
      },
    },
  },
};
