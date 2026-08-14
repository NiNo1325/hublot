import type { ScienceCard } from '@/lib/types';

/**
 * Deux notes sonnent bien ensemble quand leurs fréquences forment un rapport
 * simple de nombres entiers, comme l'octave (2:1) : ce n'est pas qu'une
 * question de goût, c'est un phénomène physique mesurable.
 */
export const card: ScienceCard = {
  id: 'les-notes-qui-vont-ensemble',
  domainId: 'le-son',
  animationId: 'les-notes-qui-vont-ensemble',
  thumbnail: '🎹',
  content: {
    fr: {
      title: {
        '3-5': 'Des sons qui vont bien ensemble',
        '6-8': 'Les notes qui vont bien ensemble',
        '9-12': 'Pourquoi certaines notes sonnent bien ensemble',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'un',
              text: 'Une corde qui vibre donne une note de musique.',
            },
            {
              id: 'deux',
              text: 'Une corde deux fois plus courte vibre deux fois plus vite.',
            },
            {
              id: 'trois',
              text: 'Elle chante la même note, mais tout en haut.',
            },
            {
              id: 'quatre',
              text: 'Des vibrations qui s\'accordent bien ensemble, ça sonne joli à l\'oreille.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'un',
              text: 'Une corde qui vibre produit une note précise.',
            },
            {
              id: 'deux',
              text: 'Si tu prends une corde deux fois plus courte, elle vibre exactement deux fois plus vite.',
            },
            {
              id: 'trois',
              text: 'Elle joue alors la même note, mais plus haute : c\'est ce qu\'on appelle une octave.',
            },
            {
              id: 'quatre',
              text: "Quand les vitesses de vibration de deux notes s'emboîtent bien, en suivant des rapports simples comme deux contre un, l'accord sonne agréable à l'oreille, et ce n'est pas qu'une question de goût.",
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'un',
              text: 'Chaque note correspond à une fréquence de vibration précise, mesurée en hertz.',
            },
            {
              id: 'deux',
              text: "Une corde deux fois plus courte, à tension égale, vibre exactement deux fois plus vite : sa fréquence est doublée.",
            },
            {
              id: 'trois',
              text: 'Une fréquence double correspond à la même note, une octave plus haut : c\'est le rapport de fréquence deux pour un le plus simple qui existe.',
            },
            {
              id: 'quatre',
              text: 'Plus généralement, deux notes dont les fréquences forment un rapport de nombres entiers simples, comme trois pour deux ou quatre pour trois, produisent des ondes qui se superposent de façon régulière : notre oreille perçoit cette régularité comme un accord harmonieux, un phénomène physique mesurable, pas une simple question de goût.',
            },
          ],
        },
      },
    },
    en: {
      title: {
        '3-5': 'Sounds that go well together',
        '6-8': 'Notes that go well together',
        '9-12': 'Why some notes sound good together',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'un',
              text: 'A string that vibrates gives a musical note.',
            },
            {
              id: 'deux',
              text: 'A string half as long vibrates twice as fast.',
            },
            {
              id: 'trois',
              text: 'It sings the same note, but way up high.',
            },
            {
              id: 'quatre',
              text: 'When vibrations fit nicely together, it sounds lovely to your ear.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'un',
              text: 'A vibrating string makes one exact note.',
            },
            {
              id: 'deux',
              text: 'If you take a string half as long, it vibrates exactly twice as fast.',
            },
            {
              id: 'trois',
              text: 'It then plays the same note, but higher: that is what we call an octave.',
            },
            {
              id: 'quatre',
              text: 'When the vibration speeds of two notes fit together neatly, following simple ratios like two to one, the chord sounds pleasant to the ear — and that is not just a matter of taste.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'un',
              text: 'Every note matches one exact frequency of vibration, measured in hertz.',
            },
            {
              id: 'deux',
              text: 'A string half as long, at the same tension, vibrates exactly twice as fast: its frequency is doubled.',
            },
            {
              id: 'trois',
              text: 'A doubled frequency gives the same note one octave higher: it is the simplest frequency ratio there is, two to one.',
            },
            {
              id: 'quatre',
              text: 'More generally, two notes whose frequencies form a simple whole-number ratio, such as three to two or four to three, produce waves that overlap in a regular pattern: our ear hears that regularity as a harmonious chord — a measurable physical phenomenon, not simply a matter of taste.',
            },
          ],
        },
      },
    },
  },
};
