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
  },
};
