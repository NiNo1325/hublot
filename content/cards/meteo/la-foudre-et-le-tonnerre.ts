import type { ScienceCard } from '@/lib/types';

/**
 * Idée reçue corrigée : « on voit l'éclair et on entend le tonnerre en même
 * temps ». En réalité, la foudre est une étincelle électrique géante ; la
 * lumière arrive presque instantanément, le son bien plus tard, car il va
 * beaucoup moins vite. Compter les secondes entre l'éclair et le tonnerre dit
 * à quelle distance frappe l'orage. Cohérent avec « comment voyage le son ».
 */
export const card: ScienceCard = {
  id: 'la-foudre-et-le-tonnerre',
  domainId: 'meteo',
  animationId: 'foudre',
  thumbnail: '⚡',
  content: {
    fr: {
      title: {
        '3-5': "L'éclair et le tonnerre",
        '6-8': 'La foudre et le tonnerre',
        '9-12': 'La foudre et le tonnerre',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'charge',
              text: "Dans un gros nuage d'orage, de l'électricité se prépare, comme quand tu te décoiffes avec un ballon.",
            },
            {
              id: 'etincelle',
              text: "D'un coup, une énorme étincelle jaillit vers le sol : c'est l'éclair !",
            },
            {
              id: 'lumiere-avant',
              text: "On voit l'éclair tout de suite. Mais le bruit, le tonnerre, arrive plus tard.",
            },
            {
              id: 'compter',
              text: "Alors on compte : un, deux, trois... Plus on compte longtemps, plus l'orage est loin.",
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'charge',
              text: "Dans un nuage d'orage, l'air brassé sépare de minuscules charges électriques. Peu à peu, une énorme quantité d'électricité s'accumule.",
            },
            {
              id: 'etincelle',
              text: "Quand c'est trop, tout se décharge d'un coup : une gigantesque étincelle électrique traverse l'air. C'est la foudre, et elle chauffe l'air d'un coup — d'où le grondement du tonnerre.",
            },
            {
              id: 'lumiere-avant',
              text: "On voit toujours l'éclair avant d'entendre le tonnerre. Pourtant, les deux naissent en même temps ! C'est que la lumière va bien plus vite que le son.",
            },
            {
              id: 'compter',
              text: "On peut même mesurer : compte les secondes entre l'éclair et le tonnerre, et divise par trois. Cela donne la distance en kilomètres. Si les deux arrivent presque ensemble, l'orage est juste au-dessus.",
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'charge',
              text: "Un nuage d'orage est une machine à électricité statique : les violents courants d'air y frottent gouttelettes et cristaux de glace, séparant les charges — positives en haut, négatives en bas.",
            },
            {
              id: 'etincelle',
              text: "Quand la différence de charge devient énorme, l'air, pourtant isolant, cède : un canal conducteur s'ouvre et une décharge colossale le parcourt. La foudre porte l'air à près de 30 000 °C ; il se dilate brutalement, et cette onde de choc est le tonnerre.",
            },
            {
              id: 'lumiere-avant',
              text: "Éclair et tonnerre sont produits au même instant. Mais la lumière file à 300 000 km/s et nous parvient quasi immédiatement, tandis que le son ne parcourt qu'environ 340 mètres par seconde. Le décalage n'est donc pas un hasard : il vient de l'écart de vitesse.",
            },
            {
              id: 'compter',
              text: "Ce décalage se lit comme un chronomètre. Le son met environ 3 secondes pour faire un kilomètre : compter les secondes entre l'éclair et le tonnerre, puis diviser par trois, donne la distance de l'impact. Un intervalle qui raccourcit signale un orage qui se rapproche.",
            },
          ],
        },
      },
    },
    en: {
      title: {
        '3-5': 'Lightning and thunder',
        '6-8': 'Lightning and thunder',
        '9-12': 'Lightning and thunder',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'charge',
              text: 'Inside a big storm cloud, electricity builds up, like when you rub a balloon on your hair.',
            },
            {
              id: 'etincelle',
              text: 'All at once, a huge spark leaps down towards the ground: that’s the lightning!',
            },
            {
              id: 'lumiere-avant',
              text: 'We see the flash straight away. But the noise, the thunder, comes later.',
            },
            {
              id: 'compter',
              text: 'So we count: one, two, three… The longer we count, the further away the storm is.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'charge',
              text: 'Inside a storm cloud, the churning air separates tiny electric charges. Little by little, an enormous amount of electricity piles up.',
            },
            {
              id: 'etincelle',
              text: 'When it is too much, everything discharges at once: a gigantic electric spark rips through the air. That is lightning, and it heats the air instantly — which is where the rumble of thunder comes from.',
            },
            {
              id: 'lumiere-avant',
              text: 'We always see the flash before we hear the thunder. Yet both are born at the same moment! It is simply that light travels much faster than sound.',
            },
            {
              id: 'compter',
              text: 'You can even measure it: count the seconds between the flash and the thunder, and divide by three. That gives the distance in kilometres. If the two arrive almost together, the storm is right overhead.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'charge',
              text: 'A storm cloud is a static electricity machine: violent air currents rub droplets and ice crystals together, separating the charges — positive at the top, negative at the bottom.',
            },
            {
              id: 'etincelle',
              text: 'When the difference in charge becomes enormous, the air — an insulator until then — gives way: a conducting channel opens and a colossal discharge runs through it. Lightning heats the air to nearly 30,000 °C; it expands violently, and that shock wave is the thunder.',
            },
            {
              id: 'lumiere-avant',
              text: 'Lightning and thunder are produced at the very same instant. But light races along at 300,000 km/s and reaches us almost immediately, while sound covers only about 340 metres per second. The gap is therefore no accident: it comes from the difference in speed.',
            },
            {
              id: 'compter',
              text: 'That gap can be read like a stopwatch. Sound takes about 3 seconds to travel a kilometre: counting the seconds between the flash and the thunder, then dividing by three, gives the distance to the strike. A shrinking interval signals a storm coming closer.',
            },
          ],
        },
      },
    },
  },
};
