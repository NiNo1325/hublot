import type { ScienceCard } from '@/lib/types';

export const card: ScienceCard = {
  id: 'a-quoi-servent-les-larmes',
  domainId: 'le-corps',
  animationId: 'a-quoi-servent-les-larmes',
  thumbnail: '😢',
  content: {
    fr: {
      title: {
        '3-5': 'Les larmes de nos yeux',
        '6-8': 'À quoi servent les larmes',
        '9-12': 'Le rôle des larmes',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'un',
              text: 'Tes yeux fabriquent des larmes tout le temps, même quand tu ne pleures pas.',
            },
            {
              id: 'deux',
              text: 'Si un cil ou une poussière entre dans ton œil, plus de larmes arrivent pour le rincer.',
            },
            {
              id: 'trois',
              text: 'Quand tu es très content, très triste ou très ému, encore plus de larmes coulent.',
            },
            {
              id: 'quatre',
              text: 'Les larmes lavent et protègent tes yeux, et parfois elles montrent aussi ce que tu ressens.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'un',
              text: 'Tes yeux produisent des larmes en permanence, même quand tu ne pleures pas : elles gardent l’œil humide et propre.',
            },
            {
              id: 'deux',
              text: 'Dès qu’un cil, une poussière ou un peu de fumée irrite ton œil, la production de larmes augmente d’un coup pour le rincer.',
            },
            {
              id: 'trois',
              text: 'Une très forte émotion, joie, tristesse ou colère, peut aussi déclencher un flot de larmes bien plus abondant que d’habitude.',
            },
            {
              id: 'quatre',
              text: 'Dans tous les cas, les larmes nettoient et protègent l’œil ; parfois, en plus, elles accompagnent ce que tu ressens.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'un',
              text: 'La glande lacrymale produit en permanence un fin film de larmes qui nettoie, hydrate et protège la surface de l’œil des microbes.',
            },
            {
              id: 'deux',
              text: 'Une irritation (poussière, cil, oignon) déclenche un afflux réflexe de larmes destiné à évacuer rapidement l’intrus.',
            },
            {
              id: 'trois',
              text: 'Une émotion intense active un circuit différent, lié au cerveau émotionnel, qui provoque lui aussi une production abondante de larmes.',
            },
            {
              id: 'quatre',
              text: 'Que ce soit en continu, par réflexe ou par émotion, les larmes remplissent la même mission de nettoyage et de protection de l’œil. On ne pleure donc pas seulement de tristesse : la joie ou la colère font tout autant couler des larmes.',
            },
          ],
        },
      },
    },
  },
};
