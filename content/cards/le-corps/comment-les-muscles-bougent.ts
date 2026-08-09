import type { ScienceCard } from '@/lib/types';

export const card: ScienceCard = {
  id: 'comment-les-muscles-bougent',
  domainId: 'le-corps',
  animationId: 'comment-les-muscles-bougent',
  thumbnail: '💪',
  content: {
    fr: {
      title: {
        '3-5': 'Comment bougent nos muscles',
        '6-8': 'Comment les muscles bougent',
        '9-12': 'Le fonctionnement des muscles',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'un',
              text: 'Un muscle sait faire une seule chose : tirer, jamais pousser.',
            },
            {
              id: 'deux',
              text: 'Quand il travaille, il devient plus court et plus dur.',
            },
            {
              id: 'trois',
              text: 'En tirant sur l’os, il plie ton bras.',
            },
            {
              id: 'quatre',
              text: 'Pour retendre ton bras, c’est un autre muscle, de l’autre côté, qui tire à son tour.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'un',
              text: 'Un muscle ne sait faire qu’une seule chose : se contracter et tirer. Il ne peut jamais pousser.',
            },
            {
              id: 'deux',
              text: 'Quand il se contracte, le muscle raccourcit et devient plus dur : tu peux le sentir en pliant ton bras.',
            },
            {
              id: 'trois',
              text: 'Attaché à l’os par un tendon, il tire dessus comme une corde, et ton bras se plie.',
            },
            {
              id: 'quatre',
              text: 'Pour retendre le bras, il faut un deuxième muscle, placé de l’autre côté, qui se contracte à son tour et tire dans le sens opposé.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'un',
              text: 'Un muscle squelettique ne peut exercer qu’une force de traction : il est physiquement incapable de pousser.',
            },
            {
              id: 'deux',
              text: 'Lorsqu’il se contracte, ses fibres se raccourcissent, ce qui réduit la longueur globale du muscle.',
            },
            {
              id: 'trois',
              text: 'Relié à l’os par un tendon, le muscle contracté tire dessus comme un câble, provoquant le mouvement de flexion, par exemple du bras au niveau du coude.',
            },
            {
              id: 'quatre',
              text: 'Comme un muscle ne peut pas pousser pour inverser ce mouvement, les muscles fonctionnent par paires opposées : quand le biceps se contracte pour plier le bras, c’est le triceps, de l’autre côté, qui se contracte à son tour pour le retendre.',
            },
          ],
        },
      },
    },
  },
};
