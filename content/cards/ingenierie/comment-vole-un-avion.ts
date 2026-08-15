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
    en: {
      title: {
        '3-5': 'The aeroplane that stays up in the air',
        '6-8': 'Why an aeroplane flies',
        '9-12': 'Lift',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'vitesse',
              text: 'To take off, an aeroplane first has to roll very, very fast down the runway.',
            },
            {
              id: 'aile',
              text: 'Its wings are tilted a little. As it moves forward, they push the air downwards.',
            },
            {
              id: 'reaction',
              text: 'And when you push something, it pushes you back too. So the air pushes the aeroplane upwards.',
            },
            {
              id: 'main',
              text: 'Try it in a car: put your hand out of the window and tilt it a little. You feel your hand rise all by itself.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'vitesse',
              text: 'An airliner takes off at around two hundred and fifty kilometres per hour. Without that speed, its wings are no use at all.',
            },
            {
              id: 'aile',
              text: 'The wing is tilted and curved. As it slices through the air, it turns a huge amount of air downwards — several tonnes every second on a large aeroplane.',
            },
            {
              id: 'reaction',
              text: 'Now every time you push on something, that something pushes back, with the same force and in the opposite direction. The wing pushes the air down, so the air pushes the wing up. That push is called lift.',
            },
            {
              id: 'main',
              text: 'People often say the air travels faster over the top because the path up there is longer. That is wrong: an aeroplane can fly upside down, which would be impossible if the shape alone explained everything. What counts is the air turned downwards.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'vitesse',
              text: 'Lift grows with the square of the speed, the wing area and the density of the air. Doubling the speed quadruples the lift — hence the importance of the take-off speed.',
            },
            {
              id: 'aile',
              text: 'Through its profile and its angle of attack, the wing forces the airflow into a downward turn called downwash. The flow leaves the trailing edge pointing towards the ground, carrying momentum in that direction.',
            },
            {
              id: 'reaction',
              text: 'By Newton’s third law, the wing feels an equal and opposite force, directed upwards. The description in terms of pressure and the one in terms of deflection do not compete: they are two readings of the same phenomenon, the low pressure over the upper surface being precisely what curves the flow.',
            },
            {
              id: 'main',
              text: 'The so-called “equal transit time” explanation — the air that splits at the front supposedly having to meet again at the trailing edge — is wrong, and measured to be wrong: the air over the upper surface arrives well ahead. It also predicts far less lift than is actually observed, and explains neither inverted flight nor the flight of a flat wing.',
            },
          ],
        },
      },
    },
  },
};
