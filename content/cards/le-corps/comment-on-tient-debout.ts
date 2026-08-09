import type { ScienceCard } from '@/lib/types';

export const card: ScienceCard = {
  id: 'comment-on-tient-debout',
  domainId: 'le-corps',
  animationId: 'comment-on-tient-debout',
  thumbnail: '🤸',
  content: {
    fr: {
      title: {
        '3-5': 'Comment on ne tombe pas',
        '6-8': 'Comment on tient en équilibre',
        '9-12': 'Le sens de l’équilibre',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'un',
              text: 'Tout au fond de ton oreille, il y a des petits tubes remplis de liquide.',
            },
            {
              id: 'deux',
              text: 'Quand tu bouges la tête, ce liquide bouge aussi, un peu comme l’eau dans un verre.',
            },
            {
              id: 'trois',
              text: 'Ça prévient ton cerveau : « Attention, tu es en train de pencher ! »',
            },
            {
              id: 'quatre',
              text: 'Alors ton corps se rattrape tout seul pour ne pas tomber.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'un',
              text: 'Tout au fond de chaque oreille se cachent de minuscules canaux remplis de liquide.',
            },
            {
              id: 'deux',
              text: 'Dès que tu tournes ou penches la tête, ce liquide se déplace dans les canaux, comme l’eau dans un verre qu’on incline.',
            },
            {
              id: 'trois',
              text: 'De petits capteurs sentent ce mouvement et envoient l’information à ton cerveau : il sait alors exactement comment ta tête est orientée.',
            },
            {
              id: 'quatre',
              text: 'Ton cerveau ajuste aussitôt tes muscles pour garder l’équilibre. Si ce système se dérègle, par exemple en tournant très vite sur toi-même, tu ressens des vertiges.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'un',
              text: 'Dans l’oreille interne se trouve un organe appelé appareil vestibulaire, composé de canaux remplis de liquide.',
            },
            {
              id: 'deux',
              text: 'Tout mouvement de la tête déplace ce liquide, qui vient courber de minuscules cils sensoriels tapissant les canaux.',
            },
            {
              id: 'trois',
              text: 'Ces cils transforment le mouvement en signal nerveux, transmis au cerveau, qui reconstitue ainsi en permanence la position et les déplacements de la tête.',
            },
            {
              id: 'quatre',
              text: 'Le cerveau combine cette information avec la vue et les capteurs des muscles pour ajuster l’équilibre du corps : la vue seule n’y suffit pas, comme le montre la capacité à rester debout les yeux fermés. Quand ce système est perturbé, par exemple après avoir tourné très vite, il en résulte une sensation de vertige.',
            },
          ],
        },
      },
    },
  },
};
