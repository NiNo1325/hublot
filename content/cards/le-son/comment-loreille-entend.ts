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
  },
};
