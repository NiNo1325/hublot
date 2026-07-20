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
  },
};
