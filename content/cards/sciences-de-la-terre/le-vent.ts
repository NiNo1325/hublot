import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : le vent n'est pas « de l'air qui souffle » sans cause.
 * C'est un déplacement provoqué par des différences de pression, elles-mêmes
 * nées de différences de température. Le moteur, au fond, est le Soleil.
 */
export const card: ScienceCard = {
  id: 'le-vent',
  domainId: 'sciences-de-la-terre',
  animationId: 'vent',
  thumbnail: '🌬️',
  content: {
    fr: {
      title: {
        '3-5': "D'où vient le vent",
        '6-8': 'Comment naît le vent',
        '9-12': 'Pression, convection et circulation',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'chaud',
              text: "Le soleil ne chauffe pas partout pareil. Certains endroits deviennent bien plus chauds que d'autres.",
            },
            {
              id: 'monte',
              text: "L'air chaud est plus léger, alors il monte, tout doucement, vers le ciel.",
            },
            {
              id: 'remplace',
              text: "Il laisse une place vide en bas. L'air d'à côté, plus froid, se précipite pour la remplir.",
            },
            {
              id: 'vent',
              text: "Cet air qui se dépêche, c'est le vent ! Il souffle sur ta joue parce que de l'air bouge d'un endroit à un autre.",
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'chaud',
              text: "Le Soleil chauffe la surface de la Terre de façon inégale : la terre se réchauffe plus vite que la mer, et l'équateur reçoit plus d'énergie que les pôles.",
            },
            {
              id: 'monte',
              text: "L'air réchauffé se dilate, devient moins dense que l'air alentour, et s'élève. La pression diminue alors au sol, à cet endroit précis.",
            },
            {
              id: 'remplace',
              text: "À côté, là où l'air est plus frais et plus dense, la pression est plus forte. Or l'air se déplace toujours des zones de haute pression vers les zones de basse pression.",
            },
            {
              id: 'vent',
              text: "Ce déplacement est le vent. Il souffle d'autant plus fort que l'écart de pression est grand. Sur la côte, la brise vient de la mer l'après-midi, parce que la terre s'est réchauffée plus vite qu'elle.",
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'chaud',
              text: "L'inégalité du chauffage solaire est le moteur de toute la circulation atmosphérique. Elle tient à l'angle d'incidence selon la latitude, et aux capacités thermiques très différentes des océans et des continents.",
            },
            {
              id: 'monte',
              text: "L'air chauffé se dilate, sa masse volumique diminue, et la poussée d'Archimède le fait s'élever : c'est une cellule de convection. Une dépression se forme au sol sous l'ascendance.",
            },
            {
              id: 'remplace',
              text: "Le gradient de pression engendre une force qui met l'air en mouvement. Plus les isobares sont resserrées sur une carte météo, plus le vent est violent.",
            },
            {
              id: 'vent',
              text: "La rotation terrestre dévie ensuite ces déplacements : c'est la force de Coriolis, qui fait tourner les vents vers la droite dans l'hémisphère nord et vers la gauche dans le sud. C'est pourquoi les dépressions s'enroulent en spirale, dans un sens opposé selon l'hémisphère.",
            },
          ],
        },
      },
    },
  },
};
