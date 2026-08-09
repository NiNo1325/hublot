import type { ScienceCard } from '@/lib/types';

export const card: ScienceCard = {
  id: 'pourquoi-on-a-deux-yeux',
  domainId: 'le-corps',
  animationId: 'pourquoi-on-a-deux-yeux',
  thumbnail: '👀',
  content: {
    fr: {
      title: {
        '3-5': 'Deux yeux pour mieux voir',
        '6-8': 'Pourquoi on a deux yeux',
        '9-12': 'Deux yeux pour voir en relief',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'un',
              text: 'Tes deux yeux ne voient pas exactement la même image.',
            },
            {
              id: 'deux',
              text: 'Ferme un œil, puis l’autre : regarde, l’objet devant toi a l’air de sauter !',
            },
            {
              id: 'trois',
              text: 'Ton cerveau compare tout le temps ces deux images légèrement différentes.',
            },
            {
              id: 'quatre',
              text: 'Grâce à cette comparaison, il devine si les choses sont proches ou loin de toi.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'un',
              text: 'Comme tes deux yeux sont un peu écartés, chacun voit le monde sous un angle légèrement différent.',
            },
            {
              id: 'deux',
              text: 'Essaie : ferme l’œil droit, puis l’œil gauche. Un objet proche semble « sauter » d’un côté à l’autre.',
            },
            {
              id: 'trois',
              text: 'Ton cerveau reçoit ces deux images en même temps et les compare sans arrêt.',
            },
            {
              id: 'quatre',
              text: 'En comparant les petites différences entre les deux images, il calcule à quelle distance se trouvent les objets : c’est ce qui te donne une vision en relief.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'un',
              text: 'Les yeux étant séparés de quelques centimètres, chacun capte une image légèrement décalée de la scène : c’est la disparité binoculaire.',
            },
            {
              id: 'deux',
              text: 'En fermant alternativement chaque œil, on constate que la position apparente d’un objet proche change nettement par rapport à l’arrière-plan.',
            },
            {
              id: 'trois',
              text: 'Le cerveau reçoit les deux images et les compare en continu au niveau du cortex visuel.',
            },
            {
              id: 'quatre',
              text: 'L’ampleur du décalage entre les deux images renseigne directement sur la distance des objets : plus l’écart est grand, plus l’objet est proche. Le second œil n’est donc pas une simple roue de secours : c’est la comparaison des deux images qui donne la perception du relief.',
            },
          ],
        },
      },
    },
  },
};
