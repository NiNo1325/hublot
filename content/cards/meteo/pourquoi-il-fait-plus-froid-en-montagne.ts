import type { ScienceCard } from '@/lib/types';

/**
 * Idée reçue corrigée : « en montagne on est plus près du Soleil, il devrait
 * faire plus chaud ». En réalité, la distance au Soleil ne change quasiment pas
 * (il est à 150 millions de km). En altitude, l'air se raréfie et retient moins
 * la chaleur ; le sol chauffé par le Soleil est aussi plus loin. Il fait donc
 * plus froid en montant.
 */
export const card: ScienceCard = {
  id: 'pourquoi-il-fait-plus-froid-en-montagne',
  domainId: 'meteo',
  animationId: 'altitude-froid',
  thumbnail: '⛰️',
  content: {
    fr: {
      title: {
        '3-5': 'Le froid des montagnes',
        '6-8': 'Pourquoi il fait plus froid en montagne',
        '9-12': 'Pourquoi il fait plus froid en montagne',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'sommet-neige',
              text: 'Tout en haut des montagnes, il y a de la neige, même en été. Il y fait très froid.',
            },
            {
              id: 'pas-le-soleil',
              text: 'Pourtant, on est un peu plus près du soleil, là-haut. Alors pourquoi il ne fait pas plus chaud ?',
            },
            {
              id: 'air-rare',
              text: 'Parce que plus on monte, moins il y a d’air autour de nous.',
            },
            {
              id: 'retient-moins',
              text: 'Et c’est l’air qui garde la chaleur au chaud. Moins d’air, donc plus froid !',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'sommet-neige',
              text: 'Au sommet des montagnes, il gèle et la neige tient toute l’année. Plus on monte, plus il fait froid.',
            },
            {
              id: 'pas-le-soleil',
              text: 'On croit souvent que c’est parce qu’on est plus près du Soleil. Mais le Soleil est à 150 millions de kilomètres : monter de quelques kilomètres n’y change rien du tout.',
            },
            {
              id: 'air-rare',
              text: 'La vraie raison, c’est l’air. Plus on monte, plus l’air se raréfie : il y en a de moins en moins.',
            },
            {
              id: 'retient-moins',
              text: 'Or c’est l’air, réchauffé par le sol, qui garde la chaleur. En haut, l’air rare la retient mal et la laisse s’échapper : il y fait froid.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'sommet-neige',
              text: 'La température baisse d’environ 6 °C tous les 1000 mètres d’altitude. C’est pourquoi les hauts sommets restent enneigés même en plein été.',
            },
            {
              id: 'pas-le-soleil',
              text: 'L’idée d’être « plus près du Soleil » ne tient pas : à 150 millions de kilomètres, gravir quelques kilomètres est totalement négligeable. Ce n’est pas la distance au Soleil qui compte.',
            },
            {
              id: 'air-rare',
              text: 'En altitude, la pression chute et l’air se raréfie. Le Soleil, lui, ne chauffe presque pas l’air directement : il chauffe surtout le sol, qui réchauffe ensuite l’air à son contact.',
            },
            {
              id: 'retient-moins',
              text: 'Plus on s’élève, plus on s’éloigne de ce sol chauffant, et plus l’air raréfié peine à conserver la chaleur : moins de molécules pour la stocker, et elle se dilue en montant. Le résultat, c’est un refroidissement régulier avec l’altitude — l’inverse de l’intuition « plus haut, plus près du Soleil, plus chaud ».',
            },
          ],
        },
      },
    },
    en: {
      title: {
        '3-5': 'The cold up the mountain',
        '6-8': 'Why it is colder up a mountain',
        '9-12': 'Why it is colder up a mountain',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'sommet-neige',
              text: 'Right at the top of mountains there is snow, even in summer. It is very cold up there.',
            },
            {
              id: 'pas-le-soleil',
              text: 'But up there we are a little closer to the sun. So why is it not warmer?',
            },
            {
              id: 'air-rare',
              text: 'Because the higher you go, the less air there is around you.',
            },
            {
              id: 'retient-moins',
              text: 'And it is the air that keeps the warmth in. Less air, so more cold!',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'sommet-neige',
              text: 'On mountain tops it freezes and the snow stays all year round. The higher you climb, the colder it gets.',
            },
            {
              id: 'pas-le-soleil',
              text: 'People often think it is because you are closer to the Sun. But the Sun is 150 million kilometres away: climbing a few kilometres changes nothing at all.',
            },
            {
              id: 'air-rare',
              text: 'The real reason is the air. The higher you go, the thinner the air becomes: there is less and less of it.',
            },
            {
              id: 'retient-moins',
              text: 'And it is the air, warmed by the ground, that holds the heat. Up high, thin air holds it badly and lets it escape: so it is cold.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'sommet-neige',
              text: 'The temperature drops by about 6 °C for every 1000 metres of altitude. That is why high summits stay snow-covered even in midsummer.',
            },
            {
              id: 'pas-le-soleil',
              text: 'The idea of being “closer to the Sun” does not hold up: at 150 million kilometres away, climbing a few kilometres is utterly negligible. Distance to the Sun is not what matters.',
            },
            {
              id: 'air-rare',
              text: 'At altitude, the pressure falls and the air thins out. The Sun, for its part, barely heats the air directly: it mainly heats the ground, which then warms the air in contact with it.',
            },
            {
              id: 'retient-moins',
              text: 'The higher you go, the further you are from that heated ground, and the harder the thin air finds it to keep the heat: fewer molecules to store it, and it spreads out as it rises. The result is a steady cooling with altitude — the opposite of the intuition that higher means closer to the Sun and therefore warmer.',
            },
          ],
        },
      },
    },
  },
};
