import type { ScienceCard } from '@/lib/types';

/**
 * Le pavillon n'est qu'une entrée : entendre est un travail qui se fait à
 * l'intérieur, du tympan jusqu'à la cochlée en passant par les osselets.
 */
export const card: ScienceCard = {
  id: 'comment-loreille-entend',
  domainId: 'le-son',
  animationId: 'comment-loreille-entend',
  thumbnail: '👂',
  content: {
    fr: {
      title: {
        '3-5': 'Comment tu entends',
        '6-8': "Comment l'oreille entend",
        '9-12': "Le trajet du son dans l'oreille",
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'un',
              text: "Le son fait bouger l'air, tout doucement, jusqu'à ton oreille.",
            },
            {
              id: 'deux',
              text: 'Une petite peau tendue, le tympan, se met à trembler.',
            },
            {
              id: 'trois',
              text: 'Trois tout petits os passent le tremblement plus loin.',
            },
            {
              id: 'quatre',
              text: "Au fond, un escargot rempli d'eau transforme tout ça en message pour ton cerveau.",
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'un',
              text: "Le son voyage dans l'air sous forme de vibrations, qui entrent dans ton oreille.",
            },
            {
              id: 'deux',
              text: 'Elles font trembler le tympan, une fine membrane tendue au fond du conduit.',
            },
            {
              id: 'trois',
              text: "Trois minuscules os, les plus petits de tout ton corps, transmettent ce tremblement de proche en proche.",
            },
            {
              id: 'quatre',
              text: "Ils l'envoient jusqu'à la cochlée, un petit tube enroulé en coquille d'escargot, qui traduit les vibrations en message nerveux pour ton cerveau.",
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'un',
              text: 'Une onde sonore pénètre dans le conduit auditif sous forme de variations de pression de l\'air.',
            },
            {
              id: 'deux',
              text: "Elle fait vibrer le tympan, une membrane tendue à l'entrée de l'oreille moyenne.",
            },
            {
              id: 'trois',
              text: "Ces vibrations sont transmises et amplifiées par la chaîne des osselets, marteau, enclume et étrier, les trois plus petits os du corps humain.",
            },
            {
              id: 'quatre',
              text: "Elles atteignent la cochlée, un organe en spirale rempli de liquide, où des cellules ciliées convertissent le mouvement en signal électrique envoyé au cerveau par le nerf auditif.",
            },
          ],
        },
      },
    },
    en: {
      title: {
        '3-5': 'How you hear',
        '6-8': 'How your ear hears',
        '9-12': 'The journey of sound through the ear',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'un',
              text: 'Sound makes the air move, very gently, all the way to your ear.',
            },
            {
              id: 'deux',
              text: 'A little stretched skin, the eardrum, starts to shake.',
            },
            {
              id: 'trois',
              text: 'Three tiny bones pass the shaking along.',
            },
            {
              id: 'quatre',
              text: 'Deep inside, a snail full of water turns it all into a message for your brain.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'un',
              text: 'Sound travels through the air as vibrations, which come into your ear.',
            },
            {
              id: 'deux',
              text: 'They shake the eardrum, a thin stretched membrane at the end of the ear canal.',
            },
            {
              id: 'trois',
              text: 'Three tiny bones, the smallest in your whole body, pass the shaking on from one to the next.',
            },
            {
              id: 'quatre',
              text: 'They send it to the cochlea, a little tube curled up like a snail shell, which turns the vibrations into a nerve message for your brain.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'un',
              text: 'A sound wave enters the ear canal as variations in air pressure.',
            },
            {
              id: 'deux',
              text: 'It makes the eardrum vibrate, a membrane stretched across the entrance to the middle ear.',
            },
            {
              id: 'trois',
              text: 'These vibrations are passed on and amplified by the chain of ossicles — hammer, anvil and stirrup — the three smallest bones in the human body.',
            },
            {
              id: 'quatre',
              text: 'They reach the cochlea, a spiral organ filled with fluid, where hair cells convert the movement into an electrical signal sent to the brain along the auditory nerve.',
            },
          ],
        },
      },
    },
  },
};
