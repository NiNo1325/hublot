import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : le sang n'est pas « bleu dans les veines ». C'est une
 * croyance tenace, entretenue par les schémas colorés et par l'apparence des
 * veines sous la peau. Le niveau 6-8 la corrige explicitement.
 */
export const card: ScienceCard = {
  id: 'le-coeur-et-le-sang',
  domainId: 'biologie',
  animationId: 'circulation',
  thumbnail: '❤️',
  content: {
    fr: {
      title: {
        '3-5': 'Le cœur qui bat',
        '6-8': 'Le voyage du sang',
        '9-12': 'La circulation sanguine',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'pompe',
              text: 'Ton cœur est un muscle gros comme ton poing, et il appuie sans arrêt, toute la journée et toute la nuit.',
            },
            {
              id: 'aller',
              text: "À chaque fois qu'il appuie, il envoie le sang dans de tout petits tuyaux, jusqu'au bout de tes doigts et de tes orteils.",
            },
            {
              id: 'livraison',
              text: "Le sang apporte à ton corps ce qu'il faut pour vivre, un peu comme un camion de livraison.",
            },
            {
              id: 'retour',
              text: "Puis il revient au cœur pour repartir. Pose ta main sur ta poitrine : tu peux le sentir travailler.",
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'pompe',
              text: "Le cœur est un muscle creux qui se contracte environ cent mille fois par jour, sans jamais se reposer complètement.",
            },
            {
              id: 'aller',
              text: "À chaque contraction, il pousse le sang dans les artères. Celles-ci se divisent en vaisseaux de plus en plus fins, jusqu'à des tuyaux plus étroits qu'un cheveu.",
            },
            {
              id: 'livraison',
              text: "Là, le sang livre l'oxygène et les nutriments à chaque cellule, et récupère les déchets. C'est pour cela que respirer et manger servent à quelque chose.",
            },
            {
              id: 'retour',
              text: "Le sang revient ensuite par les veines. On dessine souvent ces veines en bleu, mais le sang n'est jamais bleu : il est rouge sombre quand il manque d'oxygène, rouge vif quand il en est chargé.",
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'pompe',
              text: "Le cœur comporte quatre cavités et fonctionne comme deux pompes accolées. La droite envoie le sang vers les poumons, la gauche vers tout le reste du corps — c'est pourquoi sa paroi est bien plus épaisse.",
            },
            {
              id: 'aller',
              text: "Le sang oxygéné part par l'aorte, puis emprunte des artères de calibre décroissant jusqu'aux capillaires, dont la paroi ne fait qu'une cellule d'épaisseur. Mis bout à bout, tes vaisseaux dépasseraient cent mille kilomètres.",
            },
            {
              id: 'livraison',
              text: "Dans les capillaires, l'oxygène fixé sur l'hémoglobine diffuse vers les cellules, tandis que le dioxyde de carbone fait le trajet inverse. Tout l'intérêt du système tient dans cet échange : le reste n'est que transport.",
            },
            {
              id: 'retour',
              text: "Le retour veineux ramène le sang au cœur droit, qui l'envoie aux poumons se recharger en oxygène. Le sang désoxygéné est rouge sombre, jamais bleu : les veines paraissent bleutées parce que la peau diffuse la lumière, pas à cause de leur contenu.",
            },
          ],
        },
      },
    },
    en: {
      title: {
        '3-5': 'The beating heart',
        '6-8': 'The journey of your blood',
        '9-12': 'Blood circulation',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'pompe',
              text: 'Your heart is a muscle as big as your fist, and it squeezes without ever stopping, all day and all night.',
            },
            {
              id: 'aller',
              text: 'Every time it squeezes, it sends the blood into tiny little tubes, right to the tips of your fingers and your toes.',
            },
            {
              id: 'livraison',
              text: 'The blood brings your body what it needs to live, a bit like a delivery van.',
            },
            {
              id: 'retour',
              text: 'Then it comes back to the heart to set off again. Put your hand on your chest: you can feel it working.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'pompe',
              text: 'The heart is a hollow muscle that squeezes about a hundred thousand times a day, without ever resting completely.',
            },
            {
              id: 'aller',
              text: 'With every squeeze, it pushes the blood into the arteries. These split into finer and finer vessels, down to tubes narrower than a hair.',
            },
            {
              id: 'livraison',
              text: 'There, the blood delivers oxygen and nutrients to every single cell, and picks up the waste. That is what breathing and eating are actually for.',
            },
            {
              id: 'retour',
              text: 'The blood then comes back through the veins. Veins are often drawn in blue, but blood is never blue: it is dark red when it is short of oxygen, bright red when it is loaded with it.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'pompe',
              text: 'The heart has four chambers and works like two pumps side by side. The right one sends blood to the lungs, the left one to all the rest of the body — which is why its wall is far thicker.',
            },
            {
              id: 'aller',
              text: 'Oxygenated blood leaves through the aorta, then follows arteries of decreasing size down to the capillaries, whose wall is a single cell thick. Laid end to end, your vessels would stretch beyond a hundred thousand kilometres.',
            },
            {
              id: 'livraison',
              text: 'In the capillaries, the oxygen carried on haemoglobin diffuses into the cells, while carbon dioxide makes the journey the other way. The whole point of the system lies in that exchange: the rest is only transport.',
            },
            {
              id: 'retour',
              text: 'The venous return brings the blood back to the right heart, which sends it to the lungs to reload with oxygen. Deoxygenated blood is dark red, never blue: veins look bluish because the skin scatters light, not because of what is inside them.',
            },
          ],
        },
      },
    },
  },
};
