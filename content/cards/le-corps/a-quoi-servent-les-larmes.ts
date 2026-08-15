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
    en: {
      title: {
        '3-5': 'The tears in our eyes',
        '6-8': 'What tears are for',
        '9-12': 'The role of tears',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'un',
              text: 'Your eyes make tears all the time, even when you are not crying.',
            },
            {
              id: 'deux',
              text: 'If an eyelash or a speck of dust gets into your eye, more tears come to rinse it out.',
            },
            {
              id: 'trois',
              text: 'When you are very happy, very sad or very moved, even more tears run down.',
            },
            {
              id: 'quatre',
              text: 'Tears wash and protect your eyes, and sometimes they show what you feel, too.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'un',
              text: 'Your eyes make tears all the time, even when you are not crying: they keep the eye moist and clean.',
            },
            {
              id: 'deux',
              text: 'As soon as an eyelash, a speck of dust or a little smoke irritates your eye, tear production shoots up to rinse it out.',
            },
            {
              id: 'trois',
              text: 'A very strong emotion — joy, sadness or anger — can also set off a flood of tears far bigger than usual.',
            },
            {
              id: 'quatre',
              text: 'In every case, tears clean and protect the eye; sometimes, on top of that, they go along with what you are feeling.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'un',
              text: 'The lacrimal gland constantly produces a thin film of tears that cleans, moistens and protects the surface of the eye from microbes.',
            },
            {
              id: 'deux',
              text: 'An irritation (dust, an eyelash, an onion) triggers a reflex rush of tears meant to flush the intruder out quickly.',
            },
            {
              id: 'trois',
              text: 'An intense emotion activates a different circuit, linked to the emotional brain, which also causes tears to be produced in quantity.',
            },
            {
              id: 'quatre',
              text: 'Whether continuous, reflex or emotional, tears carry out the same mission of cleaning and protecting the eye. So we do not cry from sadness alone: joy or anger make tears flow just as readily.',
            },
          ],
        },
      },
    },
  },
};
