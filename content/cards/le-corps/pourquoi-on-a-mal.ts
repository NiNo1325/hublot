import type { ScienceCard } from '@/lib/types';

export const card: ScienceCard = {
  id: 'pourquoi-on-a-mal',
  domainId: 'le-corps',
  animationId: 'pourquoi-on-a-mal',
  thumbnail: '🤕',
  content: {
    fr: {
      title: {
        '3-5': 'Pourquoi ça fait mal',
        '6-8': 'Pourquoi on a mal',
        '9-12': 'À quoi sert la douleur',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'un',
              text: 'Quand tu te cognes ou que tu touches quelque chose de trop chaud, ta peau le sent tout de suite.',
            },
            {
              id: 'deux',
              text: 'De petits capteurs, cachés dans ta peau, repèrent le danger.',
            },
            {
              id: 'trois',
              text: 'Ils envoient un message très rapide à ton cerveau.',
            },
            {
              id: 'quatre',
              text: 'Ça fait mal, et ta main se retire toute seule : la douleur te protège.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'un',
              text: 'Quand tu te cognes, te coupes ou touches quelque chose de brûlant, ta peau détecte aussitôt le danger.',
            },
            {
              id: 'deux',
              text: 'Des capteurs spécialisés, présents un peu partout dans ta peau, repèrent les chocs, les brûlures ou les coupures.',
            },
            {
              id: 'trois',
              text: 'Ils envoient un signal électrique qui file à toute vitesse le long des nerfs jusqu’à ton cerveau.',
            },
            {
              id: 'quatre',
              text: 'Ton cerveau déclenche alors la sensation de douleur, et souvent un geste réflexe comme retirer la main : la douleur n’est pas méchante, elle te protège d’un danger plus grave.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'un',
              text: 'Un choc, une coupure ou une brûlure stimule des terminaisons nerveuses spécialisées de la peau, appelées nocicepteurs.',
            },
            {
              id: 'deux',
              text: 'Ces capteurs détectent spécifiquement les stimulations potentiellement dangereuses pour les tissus.',
            },
            {
              id: 'trois',
              text: 'L’information est transmise sous forme de signal électrique le long des nerfs jusqu’à la moelle épinière puis au cerveau.',
            },
            {
              id: 'quatre',
              text: 'Le cerveau interprète ce signal comme une douleur, et déclenche parfois un réflexe immédiat, comme retirer la main, avant même que la douleur soit pleinement ressentie. Loin d’être inutile, la douleur est un système d’alarme qui protège le corps de blessures plus graves.',
            },
          ],
        },
      },
    },
  },
};
