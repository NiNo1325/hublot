import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : ne pas laisser croire que l'ordinateur « comprend » ou
 * « réfléchit ». Il compte avec deux chiffres, très vite, et rien de plus.
 * Le binaire est concret et vérifiable — un enfant peut le refaire avec ses
 * doigts.
 */
export const card: ScienceCard = {
  id: 'comment-compte-un-ordinateur',
  domainId: 'informatique',
  animationId: 'binaire',
  thumbnail: '💡',
  content: {
    fr: {
      title: {
        '3-5': 'Allumé, éteint',
        '6-8': 'Comment un ordinateur compte',
        '9-12': 'Le langage binaire',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'interrupteurs',
              text: "Dans un ordinateur, il y a des millions de toutes petites lampes. Chacune peut être allumée ou éteinte.",
            },
            {
              id: 'deux-chiffres',
              text: "L'ordinateur ne connaît que ces deux choses : allumé, ou éteint. C'est tout ce qu'il sait faire.",
            },
            {
              id: 'combinaisons',
              text: "Mais avec beaucoup de lampes, il peut faire énormément de dessins différents, comme un jeu de lumières.",
            },
            {
              id: 'tout-est-nombre',
              text: "Tes images, tes chansons, tes jeux : tout est rangé avec ces lampes allumées et éteintes.",
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'interrupteurs',
              text: "Un ordinateur est rempli de minuscules interrupteurs électriques. Il y en a des milliards, si petits qu'on ne les voit qu'au microscope.",
            },
            {
              id: 'deux-chiffres',
              text: "Chaque interrupteur est soit ouvert, soit fermé. On note cela zéro ou un. L'ordinateur ne compte donc qu'avec deux chiffres, alors que nous en utilisons dix.",
            },
            {
              id: 'combinaisons',
              text: "Avec un seul interrupteur, on ne peut dire que deux choses. Avec deux, on en dit quatre. Avec huit, deux cent cinquante-six. Chaque interrupteur ajouté double le nombre de possibilités.",
            },
            {
              id: 'tout-est-nombre',
              text: "Une lettre, une couleur, une note de musique : chacune reçoit son numéro, écrit avec des zéros et des uns. L'ordinateur ne comprend rien à ce qu'il manipule — il déplace des nombres, mais des milliards de fois par seconde.",
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'interrupteurs',
              text: "Les processeurs contiennent des transistors : des interrupteurs sans pièce mobile, commandés par l'électricité. Une puce moderne en compte plusieurs dizaines de milliards, gravés à quelques nanomètres.",
            },
            {
              id: 'deux-chiffres',
              text: "Deux états suffisent, et ce n'est pas un hasard : distinguer « du courant » de « pas de courant » est beaucoup plus fiable que de distinguer dix niveaux de tension. Le binaire est un choix d'ingénierie, pas une limite de l'informatique.",
            },
            {
              id: 'combinaisons',
              text: "Avec n bits, on représente deux puissance n valeurs. Huit bits — un octet — en donnent deux cent cinquante-six. Le système est positionnel, comme le nôtre : en décimal chaque rang vaut dix fois le précédent, en binaire il vaut deux fois plus. Ainsi 1011 vaut huit, plus zéro, plus deux, plus un : onze.",
            },
            {
              id: 'tout-est-nombre',
              text: "Tout devient nombre : un texte via une table de correspondance, une image via la valeur de chaque pixel, un son via la mesure répétée d'une onde. L'ordinateur applique des règles logiques sur ces nombres. Il ne comprend pas plus le sens d'une photo qu'une calculatrice ne comprend les mathématiques.",
            },
          ],
        },
      },
    },
    en: {
      title: {
        '3-5': 'On, off',
        '6-8': 'How a computer counts',
        '9-12': 'The language of binary',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'interrupteurs',
              text: 'Inside a computer there are millions of tiny lamps. Each one can be on, or off.',
            },
            {
              id: 'deux-chiffres',
              text: 'The computer knows only those two things: on, or off. That is everything it can do.',
            },
            {
              id: 'combinaisons',
              text: 'But with lots of lamps, it can make loads of different patterns, like a light show.',
            },
            {
              id: 'tout-est-nombre',
              text: 'Your pictures, your songs, your games: all of it is kept with these lamps on and off.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'interrupteurs',
              text: 'A computer is packed with tiny electrical switches. There are billions of them, so small you need a microscope to see them.',
            },
            {
              id: 'deux-chiffres',
              text: 'Each switch is either open or closed. We write that as zero or one. So a computer counts with only two digits, while we use ten.',
            },
            {
              id: 'combinaisons',
              text: 'With a single switch you can say only two things. With two, you can say four. With eight, two hundred and fifty-six. Every extra switch doubles the number of possibilities.',
            },
            {
              id: 'tout-est-nombre',
              text: 'A letter, a colour, a musical note: each one is given its own number, written with zeros and ones. The computer understands nothing of what it handles — it moves numbers about, but billions of times a second.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'interrupteurs',
              text: 'Processors contain transistors: switches with no moving parts, controlled by electricity. A modern chip holds several tens of billions of them, etched at a scale of a few nanometres.',
            },
            {
              id: 'deux-chiffres',
              text: 'Two states are enough, and that is no accident: telling “current” from “no current” apart is far more reliable than telling ten voltage levels apart. Binary is an engineering choice, not a limit of computing.',
            },
            {
              id: 'combinaisons',
              text: 'With n bits you can represent two to the power of n values. Eight bits — one byte — give two hundred and fifty-six. The system is positional, like ours: in decimal each column is worth ten times the one before, in binary it is worth twice as much. So 1011 is eight, plus zero, plus two, plus one: eleven.',
            },
            {
              id: 'tout-est-nombre',
              text: 'Everything becomes a number: text through a lookup table, an image through the value of each pixel, a sound through repeated measurements of a wave. The computer applies logical rules to those numbers. It understands the meaning of a photograph no more than a calculator understands mathematics.',
            },
          ],
        },
      },
    },
  },
};
