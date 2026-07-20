import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : les films spatiaux font entendre les explosions. Le
 * vide ne transmet aucun son — c'est le démenti le plus frappant du sujet, et
 * il découle directement de la définition : sans matière, rien ne vibre.
 */
export const card: ScienceCard = {
  id: 'comment-voyage-le-son',
  domainId: 'physique',
  animationId: 'son',
  thumbnail: '🔊',
  content: {
    fr: {
      title: {
        '3-5': 'Le bruit qui voyage',
        '6-8': 'Comment voyage le son',
        '9-12': 'Ondes sonores et milieux',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'vibration',
              text: "Quand quelque chose fait du bruit, ça tremble très vite. Pose ta main sur ta gorge et chante : tu le sens.",
            },
            {
              id: 'air',
              text: "Ce tremblement pousse l'air tout autour, comme des petites vagues invisibles.",
            },
            {
              id: 'oreille',
              text: "Les vagues arrivent jusqu'à ton oreille, la font trembler à son tour, et tu entends.",
            },
            {
              id: 'vide',
              text: "Dans l'espace, il n'y a pas d'air. Alors il n'y a aucun bruit : c'est le silence complet.",
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'vibration',
              text: "Un son naît toujours d'une vibration : une corde de guitare, une peau de tambour, ou tes cordes vocales.",
            },
            {
              id: 'air',
              text: "Cette vibration comprime l'air, puis le relâche, encore et encore. Ces zones serrées et desserrées se propagent de proche en proche, à environ trois cent quarante mètres par seconde.",
            },
            {
              id: 'oreille',
              text: "En arrivant sur ton tympan, elles le font vibrer. Ton oreille transforme ce mouvement en signal que ton cerveau interprète comme un son.",
            },
            {
              id: 'vide',
              text: "Le son a donc besoin de matière pour voyager. Dans le vide spatial, il n'y a rien à faire vibrer : les explosions des films de science-fiction seraient en réalité parfaitement silencieuses.",
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'vibration',
              text: "Le son est une onde mécanique de compression. La fréquence, en hertz, détermine la hauteur perçue ; l'amplitude, l'intensité. L'oreille humaine capte environ de vingt à vingt mille hertz.",
            },
            {
              id: 'air',
              text: "Contrairement à la lumière, le son est une onde longitudinale : les particules oscillent dans la direction de propagation, sans être transportées. Elles ne font que transmettre l'énergie à leurs voisines.",
            },
            {
              id: 'oreille',
              text: "La vitesse dépend du milieu, et augmente avec sa rigidité : trois cent quarante mètres par seconde dans l'air, environ mille cinq cents dans l'eau, plus de cinq mille dans l'acier. Un son voyage donc plus vite dans un solide que dans l'air.",
            },
            {
              id: 'vide',
              text: "Sans milieu matériel, aucune propagation n'est possible. L'expérience de la cloche à vide le montre : à mesure qu'on pompe l'air, la sonnerie s'éteint alors que le marteau continue de frapper. C'est aussi pourquoi on voit l'éclair avant d'entendre le tonnerre — la lumière, elle, n'a besoin d'aucun support.",
            },
          ],
        },
      },
    },
  },
};
