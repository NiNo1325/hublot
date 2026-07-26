import type { ScienceCard } from '@/lib/types';

/**
 * Idée reçue corrigée : « l'araignée se colle à sa propre toile ». En réalité,
 * tous les fils ne sont pas collants : les rayons qui partent du centre sont
 * secs, et l'araignée y marche. Seule la spirale sert de piège. Ses pattes sont
 * aussi adaptées pour limiter le contact.
 */
export const card: ScienceCard = {
  id: 'la-toile-de-laraignee',
  domainId: 'animaux',
  animationId: 'toile',
  thumbnail: '🕷️',
  content: {
    fr: {
      title: {
        '3-5': "La toile de l'araignée",
        '6-8': "La toile de l'araignée",
        '9-12': "La toile de l'araignée",
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'rayons',
              text: "L'araignée fabrique d'abord des fils qui partent du milieu, comme les rayons d'une roue. Ces fils-là ne collent pas.",
            },
            {
              id: 'spirale',
              text: 'Ensuite elle fait un grand rond en tournant. Ce fil-là, lui, est tout collant.',
            },
            {
              id: 'marche',
              text: 'Pour se promener, l’araignée marche seulement sur les fils qui ne collent pas.',
            },
            {
              id: 'proie',
              text: 'Le moucheron, lui, touche le fil collant et reste coincé. L’araignée n’a plus qu’à venir !',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'rayons',
              text: "On croit que l'araignée se colle à sa toile. Faux ! Elle tend d'abord des fils secs qui rayonnent depuis le centre, comme les rayons d'une roue.",
            },
            {
              id: 'spirale',
              text: 'Par-dessus, elle ajoute une spirale de fils recouverts de minuscules gouttes de colle. C’est cette spirale qui piège.',
            },
            {
              id: 'marche',
              text: "Quand elle se déplace, l'araignée pose ses pattes uniquement sur les rayons secs. Elle connaît sa toile et évite les fils collants.",
            },
            {
              id: 'proie',
              text: 'Un insecte qui vole ne connaît pas le plan : il heurte la spirale collante et s’englue. Les vibrations préviennent l’araignée, qui accourt.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'rayons',
              text: "L'idée que l'araignée colle à sa propre toile est un mythe. Elle construit d'abord une charpente : un cadre et des rayons de soie sèche, non collante, tendus depuis le moyeu central.",
            },
            {
              id: 'spirale',
              text: "Elle dépose ensuite, en spirale, un second type de soie couverte de gouttelettes de glu. Une même araignée produit plusieurs soies différentes, chacune sortie d'une glande spécialisée.",
            },
            {
              id: 'marche',
              text: "Pour circuler, elle emprunte les rayons secs et sait exactement où se trouvent les fils gluants. Ses pattes aident aussi : elles sont fines, couvertes de poils et enduites d'une substance qui limite l'adhérence, et elle ne touche la soie que du bout des griffes.",
            },
            {
              id: 'proie',
              text: "La proie, elle, ignore la géométrie de la toile : elle percute la spirale collante et se débat en vain. Les secousses se propagent le long des fils jusqu'à l'araignée, qui localise sa capture à la vibration et vient l'immobiliser. Le piège fonctionne parce que collant et non-collant coexistent dans la même toile.",
            },
          ],
        },
      },
    },
  },
};
