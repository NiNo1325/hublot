import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : le wifi n'est pas internet, seulement le dernier
 * segment — quelques mètres d'ondes radio entre l'appareil et la box. La carte
 * sur internet traite du réseau au-delà ; celle-ci traite de ce bout-là, et de
 * ce qu'il explique au quotidien : les zones mortes et les ralentissements.
 */
export const card: ScienceCard = {
  id: 'le-wifi',
  domainId: 'informatique',
  animationId: 'wifi',
  thumbnail: '📶',
  content: {
    fr: {
      title: {
        '3-5': 'Les ondes de la maison',
        '6-8': 'Le wifi n’est pas internet',
        '9-12': 'Wifi : un média radio partagé',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'pas-internet',
              text: 'Le wifi, ce n’est pas internet. C’est juste le dernier petit bout du chemin.',
            },
            {
              id: 'ondes-radio',
              text: 'La boîte envoie des ondes dans l’air, comme la radio de la voiture.',
            },
            {
              id: 'portee',
              text: 'Plus tu t’éloignes, moins ça marche. Et les murs gênent beaucoup.',
            },
            {
              id: 'partage',
              text: 'Et tout le monde dans la maison se partage le même chemin.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'pas-internet',
              text: 'Quand le wifi ne marche plus, on dit « il n’y a plus internet ». Ce sont pourtant deux choses distinctes : le wifi ne relie que ton appareil à la box, sur quelques mètres. Internet, c’est tout ce qui vient après.',
            },
            {
              id: 'ondes-radio',
              text: 'Ce lien est fait d’ondes radio, de la même famille que celles de la radio FM ou du téléphone — à une fréquence près. Rien de magique là-dedans : c’est de la lumière que nos yeux ne savent pas voir.',
            },
            {
              id: 'portee',
              text: 'D’où le comportement que tu connais bien. Le signal s’affaiblit avec la distance, et les murs, surtout en béton, l’absorbent. Les barres affichées mesurent la qualité de ce lien local — pas la vitesse d’internet.',
            },
            {
              id: 'partage',
              text: 'Enfin, tous les appareils se partagent le même canal et parlent chacun à leur tour, très vite. À dix qui téléchargent, chacun attend davantage. Beaucoup de lenteurs attribuées à internet viennent en réalité de là.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'pas-internet',
              text: 'Le wifi est une technologie de réseau local, normalisée sous la référence 802.11. Il assure la liaison entre un terminal et un point d’accès — le dernier segment, souvent quelques mètres. Le confondre avec internet revient à confondre le couloir et la ville.',
            },
            {
              id: 'ondes-radio',
              text: 'La transmission emploie des ondes électromagnétiques, principalement dans les bandes de 2,4 et 5 gigahertz. Ce sont les mêmes ondes que la radio ou la télévision, à la fréquence près : ce rayonnement est non ionisant, très loin des énergies capables de rompre une liaison chimique.',
            },
            {
              id: 'portee',
              text: 'La puissance reçue décroît approximativement comme le carré de la distance, et l’absorption dépend des matériaux : béton armé et eau atténuent fortement, d’où les zones mortes. La bande 5 gigahertz offre plus de débit mais traverse moins bien les murs que celle à 2,4 — un compromis physique, non un défaut de matériel.',
            },
            {
              id: 'partage',
              text: 'Le wifi est un média partagé à accès concurrent : les stations se disputent le canal selon un protocole d’évitement de collision. Le débit annoncé est donc un maximum théorique, réparti entre tous les émetteurs à portée — y compris ceux des voisins, s’ils utilisent le même canal. C’est pourquoi le goulot d’étranglement d’une connexion domestique est bien plus souvent le wifi que l’abonnement lui-même.',
            },
          ],
        },
      },
    },
  },
};
