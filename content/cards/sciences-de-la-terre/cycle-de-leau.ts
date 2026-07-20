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
  },
};
