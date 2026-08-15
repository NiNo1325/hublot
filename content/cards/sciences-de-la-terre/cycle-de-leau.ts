import type { ScienceCard } from '@/lib/types';

/**
 * Les quatre beats sont identiques d'une tranche d'âge à l'autre : c'est ce qui
 * permet au composant d'animation de rester unique, seul le texte narré change.
 * Toute nouvelle carte doit respecter cette règle — même liste d'`id` de beats
 * pour les trois âges.
 */
export const card: ScienceCard = {
  id: 'cycle-de-leau',
  domainId: 'sciences-de-la-terre',
  animationId: 'cycle-de-leau',
  thumbnail: '💧',
  content: {
    fr: {
      title: {
        '3-5': "L'eau qui voyage",
        '6-8': "Le voyage de l'eau",
        '9-12': "Le cycle de l'eau",
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'evaporation',
              text: "Le soleil chauffe la mer. L'eau devient toute légère et monte dans le ciel.",
            },
            {
              id: 'condensation',
              text: 'Tout là-haut, il fait froid. Les petites gouttes se serrent et font un nuage.',
            },
            {
              id: 'precipitation',
              text: 'Le nuage devient très lourd. Alors il pleut !',
            },
            {
              id: 'ruissellement',
              text: "La pluie glisse sur la terre et retourne à la mer. Et l'eau repart en voyage.",
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'evaporation',
              text: "Le soleil réchauffe l'eau des océans. Une partie se transforme en vapeur invisible et s'élève dans les airs : c'est l'évaporation.",
            },
            {
              id: 'condensation',
              text: "Plus on monte, plus il fait froid. La vapeur se retransforme alors en minuscules gouttelettes, et des millions de gouttelettes ensemble forment un nuage.",
            },
            {
              id: 'precipitation',
              text: "Dans le nuage, les gouttelettes se collent les unes aux autres et grossissent. Quand elles sont trop lourdes pour flotter, elles tombent : c'est la pluie.",
            },
            {
              id: 'ruissellement',
              text: "L'eau tombée sur le sol coule dans les ruisseaux et les rivières, qui la ramènent jusqu'à la mer. Et le voyage recommence, sans jamais s'arrêter.",
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'evaporation',
              text: "L'énergie du soleil fournit aux molécules d'eau de surface assez de chaleur pour qu'elles s'échappent à l'état gazeux. C'est l'évaporation. Les plantes y contribuent aussi, en rejetant de la vapeur par leurs feuilles : on appelle cela la transpiration.",
            },
            {
              id: 'condensation',
              text: "En altitude, la température chute. La vapeur d'eau se condense autour de minuscules poussières en suspension et redevient liquide sous forme de gouttelettes. Un nuage n'est rien d'autre que ces gouttelettes en suspension dans l'air.",
            },
            {
              id: 'precipitation',
              text: "Les gouttelettes fusionnent et gagnent en masse jusqu'à ce que leur poids l'emporte sur les courants ascendants qui les maintenaient en l'air. Elles tombent alors en précipitations : pluie, neige ou grêle selon la température.",
            },
            {
              id: 'ruissellement',
              text: "Au sol, une partie de l'eau ruisselle vers les rivières et les océans, une autre s'infiltre et alimente les nappes souterraines. Rien ne se perd : la quantité d'eau sur Terre est pratiquement la même depuis des milliards d'années. Celle que tu bois aujourd'hui a peut-être déjà été bue par un dinosaure.",
            },
          ],
        },
      },
    },
    en: {
      title: {
        '3-5': 'Water on a journey',
        '6-8': 'The journey of water',
        '9-12': 'The water cycle',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'evaporation',
              text: 'The sun warms the sea. The water goes all light and floats up into the sky.',
            },
            {
              id: 'condensation',
              text: 'Way up there, it is cold. The tiny drops huddle together and make a cloud.',
            },
            {
              id: 'precipitation',
              text: 'The cloud gets very heavy. Then it rains!',
            },
            {
              id: 'ruissellement',
              text: 'The rain slides over the ground and goes back to the sea. And the water sets off again.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'evaporation',
              text: 'The sun warms the water in the oceans. Some of it turns into invisible vapour and rises into the air: that is evaporation.',
            },
            {
              id: 'condensation',
              text: 'The higher you go, the colder it gets. The vapour turns back into tiny droplets, and millions of droplets together make a cloud.',
            },
            {
              id: 'precipitation',
              text: 'Inside the cloud, the droplets stick to one another and grow. When they are too heavy to float, they fall: that is rain.',
            },
            {
              id: 'ruissellement',
              text: 'The water that lands on the ground runs into streams and rivers, which carry it back to the sea. And the journey begins again, never stopping.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'evaporation',
              text: 'The Sun’s energy gives water molecules at the surface enough heat to escape as a gas. That is evaporation. Plants add to it as well, releasing vapour through their leaves: this is called transpiration.',
            },
            {
              id: 'condensation',
              text: 'High up, the temperature drops. Water vapour condenses around tiny specks of dust floating in the air and becomes liquid again as droplets. A cloud is nothing but those droplets held up in the air.',
            },
            {
              id: 'precipitation',
              text: 'The droplets merge and gain mass until their weight wins out over the rising currents that were holding them up. They then fall as precipitation: rain, snow or hail, depending on the temperature.',
            },
            {
              id: 'ruissellement',
              text: 'On the ground, some of the water runs off towards rivers and oceans, and some soaks in and feeds the reserves underground. Nothing is lost: the amount of water on Earth has been practically the same for billions of years. The water you drink today may already have been drunk by a dinosaur.',
            },
          ],
        },
      },
    },
  },
};
