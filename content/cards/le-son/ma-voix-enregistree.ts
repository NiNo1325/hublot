import type { ScienceCard } from '@/lib/types';

/**
 * Le micro ne déforme rien : c'est notre propre perception qui est enrichie
 * par la conduction osseuse. Les autres nous entendent depuis toujours comme
 * l'enregistrement.
 */
export const card: ScienceCard = {
  id: 'ma-voix-enregistree',
  domainId: 'le-son',
  animationId: 'ma-voix-enregistree',
  thumbnail: '🎙️',
  content: {
    fr: {
      title: {
        '3-5': 'Pourquoi ma voix sonne bizarre enregistrée',
        '6-8': "Ma voix enregistrée, c'est bizarre",
        '9-12': 'Pourquoi ta voix enregistrée sonne différente',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'un',
              text: 'Quand tu parles, le son sort par ta bouche, dans l\'air.',
            },
            {
              id: 'deux',
              text: 'Mais il voyage aussi dans les os de ta tête, jusqu\'à ton oreille.',
            },
            {
              id: 'trois',
              text: 'Les os ajoutent plein de graves à ta voix.',
            },
            {
              id: 'quatre',
              text: "L'enregistreur, lui, n'entend que l'air : ta voix paraît plus aiguë, différente.",
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'un',
              text: 'Quand tu parles, le son de ta voix voyage dans l\'air jusqu\'à tes oreilles.',
            },
            {
              id: 'deux',
              text: "Mais il se propage aussi directement à l'intérieur de ta tête, à travers les os du crâne, jusqu'à l'oreille interne.",
            },
            {
              id: 'trois',
              text: 'Ce trajet par les os ajoute des graves supplémentaires à ce que tu entends de toi-même.',
            },
            {
              id: 'quatre',
              text: 'Un enregistreur, lui, ne capte que le son transmis par l\'air, sans ces graves en plus : ta voix enregistrée te paraît donc plus aiguë et étrangement différente.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'un',
              text: 'Lorsque tu parles, le son émis par tes cordes vocales se propage par voie aérienne, dans l\'air, jusqu\'à ton tympan.',
            },
            {
              id: 'deux',
              text: 'Il emprunte simultanément un second chemin, la conduction osseuse, en traversant directement les os du crâne jusqu\'à la cochlée.',
            },
            {
              id: 'trois',
              text: 'Les os transmettent particulièrement bien les basses fréquences, ce qui enrichit la voix perçue en graves.',
            },
            {
              id: 'quatre',
              text: "Un microphone n'enregistre que la conduction aérienne, sans cet apport osseux : c'est pourquoi ta voix enregistrée sonne plus aiguë que celle que tu entends dans ta tête. C'est en réalité cette version enregistrée que les autres entendent depuis toujours.",
            },
          ],
        },
      },
    },
  },
};
