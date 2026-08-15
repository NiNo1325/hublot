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
    en: {
      title: {
        '3-5': 'The spider’s web',
        '6-8': 'The spider’s web',
        '9-12': 'The spider’s web',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'rayons',
              text: 'First the spider makes threads that go out from the middle, like the spokes of a wheel. Those threads are not sticky.',
            },
            {
              id: 'spirale',
              text: 'Then it goes round and round to make a big circle. That thread is very sticky.',
            },
            {
              id: 'marche',
              text: 'To get about, the spider only walks on the threads that are not sticky.',
            },
            {
              id: 'proie',
              text: 'The little fly touches the sticky thread and gets stuck. Then the spider just has to come along!',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'rayons',
              text: 'People think a spider sticks to its own web. Wrong! First it stretches out dry threads from the centre, like the spokes of a wheel.',
            },
            {
              id: 'spirale',
              text: 'On top of those, it adds a spiral of threads covered in tiny drops of glue. It is this spiral that traps.',
            },
            {
              id: 'marche',
              text: 'When it moves about, the spider puts its feet only on the dry spokes. It knows its web and keeps clear of the sticky threads.',
            },
            {
              id: 'proie',
              text: 'A flying insect does not know the plan: it hits the sticky spiral and is glued fast. The vibrations warn the spider, which comes running.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'rayons',
              text: 'The idea that a spider sticks to its own web is a myth. It first builds a framework: an outer frame and spokes of dry, non-sticky silk, stretched out from the hub at the centre.',
            },
            {
              id: 'spirale',
              text: 'It then lays down, in a spiral, a second kind of silk covered in droplets of glue. A single spider makes several different silks, each one from a specialised gland.',
            },
            {
              id: 'marche',
              text: 'To get around, it uses the dry spokes and knows exactly where the sticky threads are. Its legs help too: they are slender, covered in hairs and coated with a substance that limits sticking, and it touches the silk only with the tips of its claws.',
            },
            {
              id: 'proie',
              text: 'The prey, for its part, knows nothing of the web’s geometry: it hits the sticky spiral and struggles in vain. The tugs travel along the threads to the spider, which locates its catch by the vibration and comes to pin it down. The trap works because sticky and non-sticky exist side by side in the same web.',
            },
          ],
        },
      },
    },
  },
};
