import type { ScienceCard } from '@/lib/types';

export const card: ScienceCard = {
  id: 'la-chair-de-poule',
  domainId: 'le-corps',
  animationId: 'la-chair-de-poule',
  thumbnail: '🥶',
  content: {
    fr: {
      title: {
        '3-5': 'Les petits poils qui se dressent',
        '6-8': 'La chair de poule',
        '9-12': "D'où vient la chair de poule",
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'un',
              text: 'Quand tu as froid, ou quand tu as un peu peur, ta peau change.',
            },
            {
              id: 'deux',
              text: 'De tout petits muscles, cachés sous la peau, tirent sur chaque poil.',
            },
            {
              id: 'trois',
              text: 'Alors tes poils se dressent, et ta peau fait plein de petites bosses.',
            },
            {
              id: 'quatre',
              text: 'Chez les animaux très poilus, ça les réchauffe. Chez toi, c’est juste un petit souvenir de nos ancêtres.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'un',
              text: 'Quand tu as froid ou que tu as peur, ton corps réagit tout seul, sans que tu y penses.',
            },
            {
              id: 'deux',
              text: 'Sous ta peau, de minuscules muscles se contractent et tirent sur la racine de chaque poil.',
            },
            {
              id: 'trois',
              text: 'Chaque poil se redresse, et une petite bosse apparaît autour de lui : c’est la chair de poule.',
            },
            {
              id: 'quatre',
              text: 'Chez un animal bien poilu, les poils dressés emprisonnent de l’air chaud contre la peau. Chez toi, ce réflexe ne te réchauffe presque pas : c’est un souvenir hérité d’ancêtres bien plus poilus.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'un',
              text: 'Le froid ou la peur déclenchent une réaction automatique du corps, commandée par le système nerveux.',
            },
            {
              id: 'deux',
              text: 'De minuscules muscles appelés muscles arrecteurs, attachés à la base de chaque poil, se contractent.',
            },
            {
              id: 'trois',
              text: 'Chaque poil se redresse, et la peau forme une petite bosse tout autour de lui.',
            },
            {
              id: 'quatre',
              text: 'Chez les animaux à fourrure épaisse, les poils dressés emprisonnent une couche d’air isolante et gardent la chaleur. Nous avons trop peu de poils pour que cela nous réchauffe vraiment : la chair de poule est un réflexe hérité de nos ancêtres bien plus velus, pas un vrai chauffage.',
            },
          ],
        },
      },
    },
  },
};
