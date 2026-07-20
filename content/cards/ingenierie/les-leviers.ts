import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : un levier ne crée pas d'énergie. On gagne en force
 * exactement ce qu'on perd en distance — c'est ce compromis, et non un gain
 * magique, qui définit une machine simple.
 */
export const card: ScienceCard = {
  id: 'les-leviers',
  domainId: 'ingenierie',
  animationId: 'leviers',
  thumbnail: '⚖️',
  content: {
    fr: {
      title: {
        '3-5': 'Soulever sans forcer',
        '6-8': 'Les leviers',
        '9-12': 'Machines simples et moment de force',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'lourd',
              text: "Il y a des choses beaucoup trop lourdes pour que tu puisses les soulever avec tes mains.",
            },
            {
              id: 'barre',
              text: "Mais avec un bâton posé sur un caillou, tu appuies d'un côté et la pierre se soulève de l'autre.",
            },
            {
              id: 'distance',
              text: "Plus tu appuies loin du caillou, plus c'est facile. Essaie sur une balançoire, tu le sens tout de suite.",
            },
            {
              id: 'echange',
              text: "Mais attention : ta main doit descendre beaucoup, alors que la pierre ne monte qu'un tout petit peu.",
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'lourd',
              text: "Un levier est une barre rigide qui pivote autour d'un point d'appui, appelé pivot.",
            },
            {
              id: 'barre',
              text: "Ce qui compte n'est pas seulement la force appliquée, mais aussi sa distance au pivot. Une petite force loin du pivot peut équilibrer une grande force placée tout près.",
            },
            {
              id: 'distance',
              text: "Si tu appuies deux fois plus loin, tu n'as besoin que de la moitié de la force. C'est le principe de la brouette, du casse-noix, des ciseaux, et même de ton avant-bras quand tu portes un objet.",
            },
            {
              id: 'echange',
              text: "Rien n'est gratuit pour autant : ce qu'on gagne en force, on le perd en distance. Pour soulever la charge d'un centimètre, ta main devra parcourir dix centimètres. Un levier ne crée pas d'énergie, il la redistribue.",
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'lourd',
              text: "L'effet d'une force sur une rotation se mesure par son moment : le produit de la force par la distance perpendiculaire à l'axe. Deux moments opposés et égaux donnent l'équilibre.",
            },
            {
              id: 'barre',
              text: "D'où la relation force fois distance égale force fois distance, de part et d'autre du pivot. Elle explique aussi pourquoi une poignée de porte est placée loin des gonds : le même effort y produit un moment bien supérieur.",
            },
            {
              id: 'distance',
              text: "On distingue trois classes de leviers selon les positions relatives du pivot, de la charge et de l'effort. La pince à épiler appartient à la troisième : elle démultiplie le déplacement au prix d'une force accrue — l'inverse d'une brouette. Ton biceps fonctionne de la même façon, ce qui te permet des gestes rapides et précis.",
            },
            {
              id: 'echange',
              text: "La conservation de l'énergie impose ce compromis : le travail fourni, force multipliée par déplacement, ne peut pas augmenter. Aucune machine simple ne crée d'énergie. « Donnez-moi un point d'appui et je soulèverai le monde », disait Archimède — il aurait fallu déplacer son extrémité du levier sur une distance astronomique.",
            },
          ],
        },
      },
    },
  },
};
