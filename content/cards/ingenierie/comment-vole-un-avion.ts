import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance majeur : l'explication scolaire courante — « l'air passe
 * plus vite dessus parce que le chemin est plus long » — est fausse, et
 * démentie par le fait qu'un avion peut voler sur le dos. On explique la
 * déviation de l'air vers le bas et la troisième loi de Newton, qui est
 * correcte et compréhensible dès le plus jeune âge.
 */
export const card: ScienceCard = {
  id: 'comment-vole-un-avion',
  domainId: 'ingenierie',
  animationId: 'portance',
  thumbnail: '✈️',
  content: {
    fr: {
      title: {
        '3-5': "L'avion qui tient en l'air",
        '6-8': 'Pourquoi un avion vole',
        '9-12': 'La portance',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'vitesse',
              text: "Pour décoller, un avion doit d'abord rouler très très vite sur la piste.",
            },
            {
              id: 'aile',
              text: "Ses ailes sont un peu penchées. En avançant, elles poussent l'air vers le bas.",
            },
            {
              id: 'reaction',
              text: "Et quand tu pousses quelque chose, ça te repousse aussi. L'air pousse donc l'avion vers le haut.",
            },
            {
              id: 'main',
              text: "Essaie en voiture : sors ta main par la fenêtre et penche-la un peu. Tu sens ta main qui monte toute seule.",
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'vitesse',
              text: "Un avion de ligne décolle vers deux cent cinquante kilomètres par heure. Sans cette vitesse, ses ailes ne servent à rien.",
            },
            {
              id: 'aile',
              text: "L'aile est inclinée et courbée. En fendant l'air, elle dévie une énorme quantité d'air vers le bas — plusieurs tonnes par seconde sur un gros avion.",
            },
            {
              id: 'reaction',
              text: "Or chaque fois qu'on pousse sur quelque chose, ce quelque chose pousse en retour, avec la même force et en sens inverse. L'aile pousse l'air vers le bas, donc l'air pousse l'aile vers le haut. Cette poussée s'appelle la portance.",
            },
            {
              id: 'main',
              text: "On raconte souvent que l'air passe plus vite au-dessus parce que le chemin y est plus long. C'est faux : un avion peut voler sur le dos, ce qui serait impossible si la forme seule expliquait tout. Ce qui compte, c'est l'air dévié vers le bas.",
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'vitesse',
              text: "La portance croît avec le carré de la vitesse, la surface alaire et la densité de l'air. Doubler la vitesse quadruple la portance — d'où l'importance de la vitesse de décollage.",
            },
            {
              id: 'aile',
              text: "L'aile, par son profil et son angle d'attaque, impose à l'écoulement une déviation vers le bas appelée déflexion. Le flux quitte le bord de fuite orienté vers le bas, emportant une quantité de mouvement dirigée vers le sol.",
            },
            {
              id: 'reaction',
              text: "Par la troisième loi de Newton, l'aile subit une force égale et opposée, dirigée vers le haut. La description en termes de pression et celle en termes de déviation ne s'opposent pas : ce sont deux lectures du même phénomène, la dépression sur l'extrados étant précisément ce qui courbe l'écoulement.",
            },
            {
              id: 'main',
              text: "L'explication dite « du temps de transit égal » — l'air se séparant devrait se rejoindre au bord de fuite — est fausse et mesurée comme telle : l'air de l'extrados arrive nettement en avance. Elle prédit d'ailleurs une portance très inférieure à celle observée, et n'explique ni le vol inversé, ni celui d'une aile plate.",
            },
          ],
        },
      },
    },
  },
};
