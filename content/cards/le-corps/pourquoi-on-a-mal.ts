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
    en: {
      title: {
        '3-5': 'Why it hurts',
        '6-8': 'Why we feel pain',
        '9-12': 'What pain is for',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'un',
              text: 'When you bump into something, or touch something too hot, your skin feels it straight away.',
            },
            {
              id: 'deux',
              text: 'Little sensors, hidden in your skin, spot the danger.',
            },
            {
              id: 'trois',
              text: 'They send a very fast message to your brain.',
            },
            {
              id: 'quatre',
              text: 'It hurts, and your hand pulls back all by itself: pain looks after you.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'un',
              text: 'When you bump yourself, cut yourself or touch something burning hot, your skin detects the danger at once.',
            },
            {
              id: 'deux',
              text: 'Special sensors, spread all over your skin, pick up knocks, burns and cuts.',
            },
            {
              id: 'trois',
              text: 'They send an electrical signal that races along your nerves all the way to your brain.',
            },
            {
              id: 'quatre',
              text: 'Your brain then sets off the feeling of pain, and often a reflex movement such as pulling your hand back: pain is not being nasty, it protects you from something worse.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'un',
              text: 'A knock, a cut or a burn stimulates specialised nerve endings in the skin, called nociceptors.',
            },
            {
              id: 'deux',
              text: 'These receptors detect specifically the stimulations that could damage the tissues.',
            },
            {
              id: 'trois',
              text: 'The information travels as an electrical signal along the nerves to the spinal cord and then to the brain.',
            },
            {
              id: 'quatre',
              text: 'The brain interprets this signal as pain, and sometimes triggers an immediate reflex, such as pulling the hand away, even before the pain is fully felt. Far from being useless, pain is an alarm system that protects the body from more serious injury.',
            },
          ],
        },
      },
    },
  },
};
