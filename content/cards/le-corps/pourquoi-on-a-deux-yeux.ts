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
    en: {
      title: {
        '3-5': 'Two eyes to see better',
        '6-8': 'Why we have two eyes',
        '9-12': 'Two eyes for seeing depth',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'un',
              text: 'Your two eyes don’t see exactly the same picture.',
            },
            {
              id: 'deux',
              text: 'Close one eye, then the other: look, the thing in front of you seems to jump!',
            },
            {
              id: 'trois',
              text: 'Your brain compares these two slightly different pictures all the time.',
            },
            {
              id: 'quatre',
              text: 'Thanks to that comparison, it works out whether things are near you or far away.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'un',
              text: 'Because your two eyes are set a little apart, each one sees the world from a slightly different angle.',
            },
            {
              id: 'deux',
              text: 'Try it: close your right eye, then your left eye. A nearby object seems to “jump” from one side to the other.',
            },
            {
              id: 'trois',
              text: 'Your brain receives these two pictures at the same time and compares them non-stop.',
            },
            {
              id: 'quatre',
              text: 'By comparing the small differences between the two pictures, it works out how far away things are: that is what gives you depth vision.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'un',
              text: 'Since the eyes are a few centimetres apart, each one captures a slightly shifted image of the scene: this is binocular disparity.',
            },
            {
              id: 'deux',
              text: 'By closing each eye in turn, you can see that the apparent position of a nearby object shifts noticeably against the background.',
            },
            {
              id: 'trois',
              text: 'The brain receives both images and compares them continuously in the visual cortex.',
            },
            {
              id: 'quatre',
              text: 'The size of the shift between the two images tells the brain directly how far away objects are: the greater the gap, the closer the object. The second eye is therefore not a mere spare wheel: it is the comparison of the two images that gives us the perception of depth.',
            },
          ],
        },
      },
    },
  },
};
