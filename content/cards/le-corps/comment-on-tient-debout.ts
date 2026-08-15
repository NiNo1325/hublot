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
    en: {
      title: {
        '3-5': 'How we don’t fall over',
        '6-8': 'How we keep our balance',
        '9-12': 'The sense of balance',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'un',
              text: 'Deep inside your ear there are little tubes filled with liquid.',
            },
            {
              id: 'deux',
              text: 'When you move your head, that liquid moves too, a bit like water in a glass.',
            },
            {
              id: 'trois',
              text: 'It warns your brain: “Careful, you are tipping over!”',
            },
            {
              id: 'quatre',
              text: 'So your body catches itself all on its own, and you don’t fall.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'un',
              text: 'Deep inside each ear, tiny channels filled with liquid lie hidden.',
            },
            {
              id: 'deux',
              text: 'As soon as you turn or tilt your head, that liquid shifts along the channels, like water in a glass you tip.',
            },
            {
              id: 'trois',
              text: 'Small sensors feel this movement and send the news to your brain: it then knows exactly which way your head is facing.',
            },
            {
              id: 'quatre',
              text: 'Your brain adjusts your muscles straight away to keep your balance. If this system is thrown off, by spinning round very fast for instance, you feel dizzy.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'un',
              text: 'In the inner ear sits an organ called the vestibular apparatus, made up of channels filled with fluid.',
            },
            {
              id: 'deux',
              text: 'Any movement of the head shifts this fluid, which bends the tiny sensory hairs lining the channels.',
            },
            {
              id: 'trois',
              text: 'These hairs turn the movement into a nerve signal, sent to the brain, which thereby keeps track at every moment of the position and motion of the head.',
            },
            {
              id: 'quatre',
              text: 'The brain combines this information with sight and with the sensors in the muscles to adjust the balance of the body: sight alone is not enough, as standing upright with your eyes shut shows. When the system is disturbed, after spinning very fast for example, the result is a feeling of dizziness.',
            },
          ],
        },
      },
    },
  },
};
