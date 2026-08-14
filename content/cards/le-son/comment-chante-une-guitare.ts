import type { ScienceCard } from '@/lib/types';

/**
 * Le son n'est pas fabriqué par le trou de la guitare : c'est la corde qui
 * vibre, et c'est toute la caisse de résonance qui amplifie ce son.
 */
export const card: ScienceCard = {
  id: 'comment-chante-une-guitare',
  domainId: 'le-son',
  animationId: 'comment-chante-une-guitare',
  thumbnail: '🎸',
  content: {
    fr: {
      title: {
        '3-5': 'La guitare qui chante',
        '6-8': 'Comment chante une guitare',
        '9-12': 'Comment une guitare produit son son',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'un',
              text: 'Tu pinces une corde et elle se met à trembler.',
            },
            {
              id: 'deux',
              text: 'Toute seule, la corde fait un tout petit son.',
            },
            {
              id: 'trois',
              text: "La grande caisse en bois fait vibrer l'air et rend le son fort.",
            },
            {
              id: 'quatre',
              text: 'Une corde plus courte chante plus aigu.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'un',
              text: 'Quand tu pinces une corde, elle se met à vibrer très vite.',
            },
            {
              id: 'deux',
              text: 'Seule, une corde de guitare produit un son très faible, presque inaudible.',
            },
            {
              id: 'trois',
              text: 'Ses vibrations passent dans le bois et font vibrer toute la caisse, qui amplifie le son bien plus fort, comme un haut-parleur.',
            },
            {
              id: 'quatre',
              text: 'En posant un doigt pour raccourcir la corde, tu la fais vibrer plus vite : la note devient plus aiguë.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'un',
              text: 'En pinçant une corde, tu lui communiques de l\'énergie, qui la fait vibrer à sa fréquence propre.',
            },
            {
              id: 'deux',
              text: "Une corde qui vibre seule déplace très peu d'air : le son produit est presque inaudible.",
            },
            {
              id: 'trois',
              text: "Ses vibrations se transmettent au chevalet puis à la table d'harmonie, qui met en mouvement une bien plus grande surface d'air : c'est la caisse de résonance qui amplifie réellement le son, pas le trou.",
            },
            {
              id: 'quatre',
              text: 'Raccourcir la longueur vibrante d\'une corde, en la plaquant sur une frette, augmente sa fréquence de vibration et donc la hauteur de la note produite.',
            },
          ],
        },
      },
    },
    en: {
      title: {
        '3-5': 'The singing guitar',
        '6-8': 'How a guitar sings',
        '9-12': 'How a guitar makes its sound',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'un',
              text: 'You pluck a string and it starts to shake.',
            },
            {
              id: 'deux',
              text: 'On its own, the string makes a tiny little sound.',
            },
            {
              id: 'trois',
              text: 'The big wooden box shakes the air and makes the sound loud.',
            },
            {
              id: 'quatre',
              text: 'A shorter string sings higher.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'un',
              text: 'When you pluck a string, it starts vibrating very fast.',
            },
            {
              id: 'deux',
              text: 'On its own, a guitar string makes a very quiet sound, almost too soft to hear.',
            },
            {
              id: 'trois',
              text: 'Its vibrations pass into the wood and shake the whole body, which makes the sound much louder, like a loudspeaker.',
            },
            {
              id: 'quatre',
              text: 'By pressing a finger down to shorten the string, you make it vibrate faster: the note becomes higher.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'un',
              text: 'By plucking a string, you give it energy, which makes it vibrate at its own natural frequency.',
            },
            {
              id: 'deux',
              text: 'A string vibrating on its own moves very little air: the sound it makes is almost inaudible.',
            },
            {
              id: 'trois',
              text: 'Its vibrations travel to the bridge and then to the soundboard, which sets a far larger surface of air moving: it is the body of the guitar that really amplifies the sound, not the hole.',
            },
            {
              id: 'quatre',
              text: 'Shortening the vibrating length of a string, by pressing it against a fret, raises its frequency of vibration and therefore the pitch of the note.',
            },
          ],
        },
      },
    },
  },
};
