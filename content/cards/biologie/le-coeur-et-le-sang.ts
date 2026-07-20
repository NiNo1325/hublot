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
  },
};
