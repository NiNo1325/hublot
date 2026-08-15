import type { ScienceCard } from '@/lib/types';

/**
 * Idée reçue corrigée : « un nuage, c'est de la vapeur ». En réalité, la vapeur
 * d'eau est un gaz invisible ; un nuage est fait de minuscules gouttelettes (ou
 * cristaux de glace) en suspension, si petites que l'air les porte. Angle : le
 * nuage comme objet, pas le cycle de l'eau.
 */
export const card: ScienceCard = {
  id: 'les-nuages',
  domainId: 'meteo',
  animationId: 'nuages',
  thumbnail: '☁️',
  content: {
    fr: {
      title: {
        '3-5': 'Les nuages',
        '6-8': 'De quoi est fait un nuage',
        '9-12': 'De quoi est fait un nuage',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'vapeur-invisible',
              text: "Quand l'eau chauffe, elle devient un gaz qu'on ne voit pas du tout : de la vapeur.",
            },
            {
              id: 'refroidit',
              text: 'Ce gaz monte très haut dans le ciel, là où il fait froid.',
            },
            {
              id: 'gouttelettes',
              text: 'Le froid le transforme en toutes petites gouttes. Ça, on le voit : c’est le nuage !',
            },
            {
              id: 'flotte',
              text: 'Les gouttes sont si légères qu’elles flottent dans l’air, comme de la poussière.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'vapeur-invisible',
              text: "On dit qu'un nuage, c'est de la vapeur. C'est faux : la vraie vapeur d'eau est un gaz totalement invisible.",
            },
            {
              id: 'refroidit',
              text: 'Cette vapeur invisible s’élève, et plus elle monte, plus l’air devient froid autour d’elle.',
            },
            {
              id: 'gouttelettes',
              text: "Au froid, la vapeur se transforme en une nuée de minuscules gouttelettes d'eau. C'est ce brouillard de gouttelettes qu'on voit : le nuage.",
            },
            {
              id: 'flotte',
              text: 'Chaque gouttelette est si petite et si légère que les moindres courants d’air la maintiennent en l’air. Voilà pourquoi le nuage flotte.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'vapeur-invisible',
              text: "Un nuage n'est pas de la vapeur. La vapeur d'eau est l'état gazeux de l'eau, parfaitement invisible — celle qu'on voit sortir d'une casserole n'est déjà plus de la vapeur, mais des gouttelettes condensées.",
            },
            {
              id: 'refroidit',
              text: "L'air chaud et humide s'élève et se refroidit avec l'altitude. En refroidissant, il ne peut plus garder autant d'eau à l'état gazeux.",
            },
            {
              id: 'gouttelettes',
              text: "La vapeur en excès se condense alors autour de microscopiques poussières en suspension, formant des gouttelettes d'eau (ou, plus haut et plus froid, des cristaux de glace). Des milliards d'entre elles forment le nuage visible.",
            },
            {
              id: 'flotte',
              text: "Ces gouttelettes mesurent quelques millièmes de millimètre : leur chute est si lente, et les courants ascendants si présents, qu'elles restent en suspension. Un nuage n'est donc ni de la vapeur ni du coton, mais une immense population de gouttelettes flottantes. Il ne pleut que lorsqu'elles fusionnent assez pour devenir trop lourdes.",
            },
          ],
        },
      },
    },
    en: {
      title: {
        '3-5': 'Clouds',
        '6-8': 'What a cloud is made of',
        '9-12': 'What a cloud is made of',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'vapeur-invisible',
              text: 'When water gets hot, it turns into a gas you cannot see at all: vapour.',
            },
            {
              id: 'refroidit',
              text: 'This gas floats up very high in the sky, where it is cold.',
            },
            {
              id: 'gouttelettes',
              text: 'The cold turns it into tiny little drops. Those we can see: that’s the cloud!',
            },
            {
              id: 'flotte',
              text: 'The drops are so light that they float in the air, like dust.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'vapeur-invisible',
              text: 'People say a cloud is made of vapour. That’s wrong: real water vapour is a completely invisible gas.',
            },
            {
              id: 'refroidit',
              text: 'That invisible vapour rises, and the higher it goes, the colder the air around it becomes.',
            },
            {
              id: 'gouttelettes',
              text: 'In the cold, the vapour turns into a swarm of tiny water droplets. That mist of droplets is what we see: the cloud.',
            },
            {
              id: 'flotte',
              text: 'Each droplet is so small and so light that the faintest air currents hold it up. That’s why a cloud floats.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'vapeur-invisible',
              text: 'A cloud is not vapour. Water vapour is water in its gaseous state, perfectly invisible — the white plume you see above a saucepan is no longer vapour, but condensed droplets.',
            },
            {
              id: 'refroidit',
              text: 'Warm, humid air rises and cools as it gains altitude. As it cools, it can no longer hold as much water in gaseous form.',
            },
            {
              id: 'gouttelettes',
              text: 'The excess vapour then condenses around microscopic specks of dust floating in the air, forming water droplets (or, higher and colder, ice crystals). Billions of them make up the visible cloud.',
            },
            {
              id: 'flotte',
              text: 'These droplets measure a few thousandths of a millimetre: they fall so slowly, and updraughts are so constant, that they stay suspended. A cloud is therefore neither vapour nor cotton wool, but an immense population of floating droplets. It only rains when they merge enough to become too heavy.',
            },
          ],
        },
      },
    },
  },
};
