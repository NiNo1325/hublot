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
    en: {
      title: {
        '3-5': 'The noise that travels',
        '6-8': 'How sound travels',
        '9-12': 'Sound waves and materials',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'vibration',
              text: 'When something makes a noise, it shakes very fast. Put your hand on your throat and sing: you can feel it.',
            },
            {
              id: 'air',
              text: 'That shaking pushes the air all around, like tiny invisible waves.',
            },
            {
              id: 'oreille',
              text: 'The waves reach your ear, make it shake too, and you hear.',
            },
            {
              id: 'vide',
              text: 'In space there is no air. So there is no noise at all: it is completely silent.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'vibration',
              text: 'A sound always starts with a vibration: a guitar string, a drum skin, or your vocal cords.',
            },
            {
              id: 'air',
              text: 'This vibration squeezes the air, then lets it go, again and again. These squeezed and loosened patches spread from one bit of air to the next, at about three hundred and forty metres per second.',
            },
            {
              id: 'oreille',
              text: 'When they reach your eardrum, they make it vibrate. Your ear turns that movement into a signal your brain reads as a sound.',
            },
            {
              id: 'vide',
              text: 'So sound needs matter to travel through. In the vacuum of space there is nothing to set vibrating: the explosions in science-fiction films would really be perfectly silent.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'vibration',
              text: 'Sound is a mechanical compression wave. Its frequency, in hertz, sets the pitch you hear; its amplitude sets the loudness. The human ear picks up roughly twenty to twenty thousand hertz.',
            },
            {
              id: 'air',
              text: 'Unlike light, sound is a longitudinal wave: the particles oscillate along the direction of travel, without being carried along themselves. They only pass the energy on to their neighbours.',
            },
            {
              id: 'oreille',
              text: 'The speed depends on the material, and rises with its stiffness: three hundred and forty metres per second in air, about one thousand five hundred in water, more than five thousand in steel. So sound travels faster through a solid than through air.',
            },
            {
              id: 'vide',
              text: 'With no material to carry it, no propagation is possible. The bell-in-a-vacuum experiment shows this: as the air is pumped out, the ringing fades away while the hammer keeps striking. It is also why you see the lightning before you hear the thunder — light needs no medium at all.',
            },
          ],
        },
      },
    },
  },
};
