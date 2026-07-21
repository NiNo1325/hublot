import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : une poulie fixe seule ne réduit pas l'effort, elle ne
 * fait que changer la direction. C'est en combinant plusieurs poulies qu'on
 * gagne en force — et, comme pour le levier, on paie ce gain en tirant sur une
 * plus grande longueur de corde.
 */
export const card: ScienceCard = {
  id: 'les-poulies',
  domainId: 'ingenierie',
  animationId: 'poulies',
  thumbnail: '🏗️',
  content: {
    fr: {
      title: {
        '3-5': 'La roue qui aide à tirer',
        '6-8': 'Comment marchent les poulies',
        '9-12': 'Poulies et avantage mécanique',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'roue-corde',
              text: 'Une poulie est une petite roue avec une corde qui passe dessus.',
            },
            {
              id: 'direction',
              text: 'Elle est bien pratique : pour lever un seau, tu tires la corde vers le bas, et le seau monte.',
            },
            {
              id: 'plusieurs',
              text: 'Avec plusieurs poulies ensemble, tirer devient beaucoup plus facile.',
            },
            {
              id: 'echange',
              text: 'Mais tu dois tirer beaucoup plus de corde pour que le seau monte un peu.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'roue-corde',
              text: 'Une poulie est une roue à gorge sur laquelle glisse une corde. C’est une machine simple, comme le levier.',
            },
            {
              id: 'direction',
              text: 'Une seule poulie fixe ne rend pas la charge plus légère : elle change juste la direction. Tirer vers le bas est plus commode que soulever, car tu peux t’aider de ton poids.',
            },
            {
              id: 'plusieurs',
              text: 'Le vrai gain vient de plusieurs poulies reliées. Avec deux, tu soulèves une charge en ne fournissant que la moitié de la force. Avec quatre, le quart. La corde se partage le travail entre plusieurs brins.',
            },
            {
              id: 'echange',
              text: 'Rien n’est gratuit, ici non plus. Pour lever la charge d’un mètre avec deux brins, tu dois tirer deux mètres de corde. Comme le levier, la poulie échange de la force contre de la distance.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'roue-corde',
              text: 'Une poulie guide une corde autour d’une roue. On distingue la poulie fixe, dont l’axe ne bouge pas, et la poulie mobile, qui se déplace avec la charge.',
            },
            {
              id: 'direction',
              text: 'Une poulie fixe seule a un avantage mécanique de un : elle ne fait qu’inverser le sens de l’effort, sans le diminuer. C’est déjà utile pour tirer dans une direction commode.',
            },
            {
              id: 'plusieurs',
              text: 'Dans un palan, la charge est soutenue par plusieurs brins de corde en parallèle. La tension s’y répartit également : avec n brins, l’effort à fournir est divisé par n. C’est l’avantage mécanique.',
            },
            {
              id: 'echange',
              text: 'La conservation de l’énergie impose la contrepartie : le travail se conserve. Diviser la force par n multiplie par n la longueur de corde à tirer. Une grue à plusieurs brins soulève ainsi des tonnes, au prix d’un enroulement de câble bien plus long — aux frottements près, qui font perdre un peu d’efficacité.',
            },
          ],
        },
      },
    },
  },
};
