import type { QuizCarte } from '@/lib/types';

/**
 * Questions du domaine « Construire ».
 *
 * Fil conducteur : rien n'est gratuit. Le levier comme l'engrenage échangent
 * de la force contre de la distance, et aucune machine simple ne crée
 * d'énergie. La portance et la flottaison corrigent quant à elles deux
 * explications fausses très répandues.
 */
export const quiz: QuizCarte[] = [
  {
    cardId: 'pourquoi-les-ponts-tiennent',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'forme-solide',
            question: 'Quelle forme ne se déforme pas quand on pousse dessus ?',
            reponses: [
              { texte: 'Le triangle', icone: '🔺', correcte: true },
              { texte: 'Le carré', icone: '🟥' },
            ],
            explication: 'Le triangle ne bouge pas : c’est la forme la plus solide.',
          },
        ],
        '6-8': [
          {
            id: 'pourquoi-triangle',
            question: 'Pourquoi un triangle ne se déforme-t-il pas ?',
            reponses: [
              { texte: 'Ses angles dépendent de ses côtés', icone: '📐', correcte: true },
              { texte: 'Parce qu’il a moins de côtés', icone: '🔢' },
              { texte: 'Parce qu’il est plus petit', icone: '🤏' },
            ],
            explication:
              'Pour changer ses angles, il faudrait allonger un côté. Un carré, lui, se transforme en losange sans rien allonger.',
          },
        ],
        '9-12': [
          {
            id: 'arc-poussee',
            question: 'Comment un arc transmet-il la charge ?',
            reponses: [
              { texte: 'En compression, vers ses appuis', icone: '🌉', correcte: true },
              { texte: 'En traction, vers le haut', icone: '⬆️' },
              { texte: 'En flexion, au milieu', icone: '〰️' },
            ],
            explication:
              'La poussée latérale explique les contreforts des cathédrales. Le pont suspendu, lui, travaille en traction.',
          },
        ],
      },
      en: {
        '3-5': [
          {
            id: 'forme-solide',
            question: 'Which shape does not change when you push on it?',
            reponses: [
              { texte: 'The triangle', icone: '🔺', correcte: true },
              { texte: 'The square', icone: '🟥' },
            ],
            explication: 'The triangle does not budge: it is the strongest shape.',
          },
        ],
        '6-8': [
          {
            id: 'pourquoi-triangle',
            question: 'Why can a triangle not change shape?',
            reponses: [
              { texte: 'Its angles depend on its sides', icone: '📐', correcte: true },
              { texte: 'Because it has fewer sides', icone: '🔢' },
              { texte: 'Because it is smaller', icone: '🤏' },
            ],
            explication:
              'To change its angles, you would have to lengthen a side. A square, on the other hand, turns into a diamond without anything getting longer.',
          },
        ],
        '9-12': [
          {
            id: 'arc-poussee',
            question: 'How does an arch pass the load on?',
            reponses: [
              { texte: 'In compression, towards its supports', icone: '🌉', correcte: true },
              { texte: 'In tension, upwards', icone: '⬆️' },
              { texte: 'In bending, in the middle', icone: '〰️' },
            ],
            explication:
              'The sideways thrust explains the buttresses of cathedrals. A suspension bridge, by contrast, works in tension.',
          },
        ],
      },
    },
  },
  {
    cardId: 'comment-vole-un-avion',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'aile-pousse',
            question: 'L’aile pousse l’air vers le bas. Que fait l’air alors ?',
            reponses: [
              { texte: 'Il pousse l’avion vers le haut', icone: '⬆️', correcte: true },
              { texte: 'Il ne fait rien du tout', icone: '🚫' },
            ],
            explication: 'Quand tu pousses quelque chose, ça te repousse aussi.',
          },
        ],
        '6-8': [
          {
            id: 'vol-inverse',
            question: 'Un avion peut-il voler sur le dos ?',
            reponses: [
              { texte: 'Oui, l’aile dévie encore l’air vers le bas', icone: '✈️', correcte: true },
              { texte: 'Non, la forme de l’aile l’en empêche', icone: '🚫' },
              { texte: 'Non, il tomberait aussitôt', icone: '⬇️' },
            ],
            explication:
              'C’est la preuve que la forme seule n’explique pas tout : ce qui compte est l’air dévié vers le bas.',
          },
        ],
        '9-12': [
          {
            id: 'temps-transit',
            question: 'L’air passant au-dessus de l’aile rejoint-il celui du dessous au bord de fuite ?',
            reponses: [
              { texte: 'Non, il arrive nettement en avance', icone: '⏩', correcte: true },
              { texte: 'Oui, ils se rejoignent exactement', icone: '🤝' },
              { texte: 'Oui, c’est ce qui crée la portance', icone: '📖' },
            ],
            explication:
              'L’explication du « temps de transit égal » est fausse et mesurée comme telle : elle prédit une portance très inférieure à la réalité.',
          },
        ],
      },
      en: {
        '3-5': [
          {
            id: 'aile-pousse',
            question: 'The wing pushes the air down. What does the air do then?',
            reponses: [
              { texte: 'It pushes the aeroplane up', icone: '⬆️', correcte: true },
              { texte: 'It does nothing at all', icone: '🚫' },
            ],
            explication: 'When you push something, it pushes you back too.',
          },
        ],
        '6-8': [
          {
            id: 'vol-inverse',
            question: 'Can an aeroplane fly upside down?',
            reponses: [
              { texte: 'Yes, the wing still turns the air downwards', icone: '✈️', correcte: true },
              { texte: 'No, the shape of the wing stops it', icone: '🚫' },
              { texte: 'No, it would drop straight away', icone: '⬇️' },
            ],
            explication:
              'That is the proof that the shape alone does not explain everything: what counts is the air turned downwards.',
          },
        ],
        '9-12': [
          {
            id: 'temps-transit',
            question: 'Does the air going over the wing meet the air from below at the trailing edge?',
            reponses: [
              { texte: 'No, it arrives well ahead', icone: '⏩', correcte: true },
              { texte: 'Yes, they meet up exactly', icone: '🤝' },
              { texte: 'Yes, and that is what creates lift', icone: '📖' },
            ],
            explication:
              'The “equal transit time” explanation is wrong, and measured to be so: it predicts far less lift than is really there.',
          },
        ],
      },
    },
  },
  {
    cardId: 'les-leviers',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'ou-appuyer',
            question: 'Avec un levier, où faut-il appuyer pour que ce soit facile ?',
            reponses: [
              { texte: 'Le plus loin possible du pivot', icone: '📏', correcte: true },
              { texte: 'Tout près du pivot', icone: '🤏' },
            ],
            explication: 'Plus tu appuies loin du point d’appui, moins tu forces.',
          },
        ],
        '6-8': [
          {
            id: 'gain-perte',
            question: 'Un levier te fait gagner de la force. Que perds-tu ?',
            reponses: [
              { texte: 'De la distance : ta main descend beaucoup', icone: '📐', correcte: true },
              { texte: 'Rien du tout, c’est gratuit', icone: '🎁' },
              { texte: 'Du temps seulement', icone: '⏱️' },
            ],
            explication:
              'Un levier ne crée pas d’énergie, il la redistribue : dix centimètres de main pour un centimètre de charge.',
          },
        ],
        '9-12': [
          {
            id: 'moment-force',
            question: 'Qu’est-ce qui détermine l’effet d’une force sur une rotation ?',
            reponses: [
              { texte: 'La force multipliée par sa distance à l’axe', icone: '⚖️', correcte: true },
              { texte: 'La force seule', icone: '💪' },
              { texte: 'La masse de la barre', icone: '🪵' },
            ],
            explication:
              'C’est le moment de force. Il explique aussi pourquoi une poignée de porte est placée loin des gonds.',
          },
        ],
      },
      en: {
        '3-5': [
          {
            id: 'ou-appuyer',
            question: 'With a lever, where should you press to make it easy?',
            reponses: [
              { texte: 'As far from the pivot as you can', icone: '📏', correcte: true },
              { texte: 'Right next to the pivot', icone: '🤏' },
            ],
            explication: 'The further from the resting point you press, the less you have to strain.',
          },
        ],
        '6-8': [
          {
            id: 'gain-perte',
            question: 'A lever gains you force. What do you lose?',
            reponses: [
              { texte: 'Distance: your hand goes down a long way', icone: '📐', correcte: true },
              { texte: 'Nothing at all, it comes free', icone: '🎁' },
              { texte: 'Only time', icone: '⏱️' },
            ],
            explication:
              'A lever does not create energy, it redistributes it: ten centimetres of hand for one centimetre of load.',
          },
        ],
        '9-12': [
          {
            id: 'moment-force',
            question: 'What decides the effect of a force on a rotation?',
            reponses: [
              { texte: 'The force multiplied by its distance from the axis', icone: '⚖️', correcte: true },
              { texte: 'The force on its own', icone: '💪' },
              { texte: 'The mass of the bar', icone: '🪵' },
            ],
            explication:
              'It is the moment of the force. It also explains why a door handle is fitted far from the hinges.',
          },
        ],
      },
    },
  },
  {
    cardId: 'les-engrenages',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'sens-roues',
            question: 'Deux roues dentées qui se touchent tournent comment ?',
            reponses: [
              { texte: 'Dans des sens opposés', icone: '🔄', correcte: true },
              { texte: 'Dans le même sens', icone: '➡️' },
            ],
            explication: 'Quand l’une va vers la droite, l’autre va vers la gauche.',
          },
        ],
        '6-8': [
          {
            id: 'rapport-dents',
            question: 'Une roue de 10 dents entraîne une roue de 30. Que fait la grande ?',
            reponses: [
              { texte: 'Elle tourne trois fois moins vite', icone: '🐢', correcte: true },
              { texte: 'Elle tourne trois fois plus vite', icone: '🐇' },
              { texte: 'Elle tourne à la même vitesse', icone: '⚖️' },
            ],
            explication:
              'Elle tourne plus lentement mais avec trois fois plus de force : le même compromis que le levier.',
          },
        ],
        '9-12': [
          {
            id: 'puissance-conservee',
            question: 'Un engrenage peut-il augmenter la puissance transmise ?',
            reponses: [
              { texte: 'Non, il la redistribue seulement', icone: '⚖️', correcte: true },
              { texte: 'Oui, s’il a beaucoup de dents', icone: '⚙️' },
              { texte: 'Oui, s’il tourne très vite', icone: '💨' },
            ],
            explication:
              'La puissance est le produit du couple par la vitesse : ce qu’on gagne d’un côté se perd de l’autre, aux frottements près.',
          },
        ],
      },
      en: {
        '3-5': [
          {
            id: 'sens-roues',
            question: 'How do two toothed wheels that touch turn?',
            reponses: [
              { texte: 'In opposite directions', icone: '🔄', correcte: true },
              { texte: 'In the same direction', icone: '➡️' },
            ],
            explication: 'When one goes to the right, the other goes to the left.',
          },
        ],
        '6-8': [
          {
            id: 'rapport-dents',
            question: 'A 10-tooth wheel drives a 30-tooth wheel. What does the big one do?',
            reponses: [
              { texte: 'It turns three times more slowly', icone: '🐢', correcte: true },
              { texte: 'It turns three times faster', icone: '🐇' },
              { texte: 'It turns at the same speed', icone: '⚖️' },
            ],
            explication:
              'It turns more slowly but with three times more force: the same bargain as the lever.',
          },
        ],
        '9-12': [
          {
            id: 'puissance-conservee',
            question: 'Can a gear increase the power passed on?',
            reponses: [
              { texte: 'No, it only redistributes it', icone: '⚖️', correcte: true },
              { texte: 'Yes, if it has plenty of teeth', icone: '⚙️' },
              { texte: 'Yes, if it turns very fast', icone: '💨' },
            ],
            explication:
              'Power is torque multiplied by speed: what you gain on one side is lost on the other, friction aside.',
          },
        ],
      },
    },
  },
  {
    cardId: 'pourquoi-les-bateaux-flottent',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'pate-forme',
            question: 'Une boule de pâte à modeler coule. Et si tu en fais un bol ?',
            reponses: [
              { texte: 'Elle flotte', icone: '🛶', correcte: true },
              { texte: 'Elle coule pareil', icone: '⬇️' },
            ],
            explication: 'C’est la même pâte : c’est la forme creuse qui change tout.',
          },
        ],
        '6-8': [
          {
            id: 'lourd-flotte',
            question: 'Un porte-avions de cent mille tonnes flotte. Pourquoi ?',
            reponses: [
              { texte: 'Sa coque creuse déplace beaucoup d’eau', icone: '🚢', correcte: true },
              { texte: 'Parce qu’il est léger', icone: '🪶' },
              { texte: 'Grâce à ses moteurs', icone: '⚙️' },
            ],
            explication:
              'Ce n’est pas la masse qui décide : une bille de fer de vingt grammes coule, elle.',
          },
        ],
        '9-12': [
          {
            id: 'archimede',
            question: 'À quoi est égale la poussée d’Archimède ?',
            reponses: [
              { texte: 'Au poids du fluide déplacé', icone: '💧', correcte: true },
              { texte: 'Au poids de l’objet immergé', icone: '⚓' },
              { texte: 'À la surface de la coque', icone: '📐' },
            ],
            explication:
              'À l’équilibre, elle compense exactement le poids du navire : un bateau de cent mille tonnes déplace cent mille tonnes d’eau.',
          },
        ],
      },
      en: {
        '3-5': [
          {
            id: 'pate-forme',
            question: 'A ball of modelling clay sinks. What if you make a bowl of it?',
            reponses: [
              { texte: 'It floats', icone: '🛶', correcte: true },
              { texte: 'It sinks just the same', icone: '⬇️' },
            ],
            explication: 'It is the very same clay: the hollow shape changes everything.',
          },
        ],
        '6-8': [
          {
            id: 'lourd-flotte',
            question: 'An aircraft carrier of a hundred thousand tonnes floats. Why?',
            reponses: [
              { texte: 'Its hollow hull pushes aside a lot of water', icone: '🚢', correcte: true },
              { texte: 'Because it is light', icone: '🪶' },
              { texte: 'Thanks to its engines', icone: '⚙️' },
            ],
            explication:
              'It is not the mass that decides: an iron ball of twenty grams sinks, after all.',
          },
        ],
        '9-12': [
          {
            id: 'archimede',
            question: 'What is the upthrust of Archimedes equal to?',
            reponses: [
              { texte: 'The weight of the fluid displaced', icone: '💧', correcte: true },
              { texte: 'The weight of the submerged object', icone: '⚓' },
              { texte: 'The surface area of the hull', icone: '📐' },
            ],
            explication:
              'At equilibrium it exactly balances the weight of the ship: a vessel of a hundred thousand tonnes displaces a hundred thousand tonnes of water.',
          },
        ],
      },
    },
  },
  {
    cardId: 'les-poulies',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'poulie-quoi',
            question: 'Une poulie, c’est quoi ?',
            reponses: [
              { texte: 'Une roue avec une corde dessus', icone: '⚙️', correcte: true },
              { texte: 'Un gros aimant', icone: '🧲' },
            ],
            explication: 'La corde passe sur la roue, et ça aide à tirer.',
          },
        ],
        '6-8': [
          {
            id: 'poulie-fixe',
            question: 'Une seule poulie fixe rend-elle la charge plus légère ?',
            reponses: [
              { texte: 'Non, elle change juste la direction', icone: '🔄', correcte: true },
              { texte: 'Oui, deux fois plus légère', icone: '🪶' },
              { texte: 'Oui, elle supprime le poids', icone: '🚫' },
            ],
            explication: 'Le vrai gain vient de plusieurs poulies reliées ensemble.',
          },
        ],
        '9-12': [
          {
            id: 'poulie-echange',
            question: 'Avec un palan, on divise la force par deux. Que paie-t-on ?',
            reponses: [
              { texte: 'On tire deux fois plus de corde', icone: '📏', correcte: true },
              { texte: 'Rien, c’est gratuit', icone: '🎁' },
              { texte: 'On perd du temps seulement', icone: '⏱️' },
            ],
            explication:
              'Comme le levier, la poulie échange de la force contre de la distance : le travail se conserve.',
          },
        ],
      },
      en: {
        '3-5': [
          {
            id: 'poulie-quoi',
            question: 'What is a pulley?',
            reponses: [
              { texte: 'A wheel with a rope over it', icone: '⚙️', correcte: true },
              { texte: 'A big magnet', icone: '🧲' },
            ],
            explication: 'The rope runs over the wheel, and that helps you pull.',
          },
        ],
        '6-8': [
          {
            id: 'poulie-fixe',
            question: 'Does a single fixed pulley make the load lighter?',
            reponses: [
              { texte: 'No, it only changes the direction', icone: '🔄', correcte: true },
              { texte: 'Yes, twice as light', icone: '🪶' },
              { texte: 'Yes, it takes the weight away', icone: '🚫' },
            ],
            explication: 'The real gain comes from several pulleys linked together.',
          },
        ],
        '9-12': [
          {
            id: 'poulie-echange',
            question: 'A block and tackle halves the force. What do you pay for it?',
            reponses: [
              { texte: 'You pull twice as much rope', icone: '📏', correcte: true },
              { texte: 'Nothing, it comes free', icone: '🎁' },
              { texte: 'You only lose time', icone: '⏱️' },
            ],
            explication:
              'Like the lever, a pulley trades force for distance: the work is conserved.',
          },
        ],
      },
    },
  },  {
    cardId: 'comment-avance-une-fusee',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'ballon-lache',
            question: 'Tu lâches un ballon gonflé. Que fait-il ?',
            reponses: [
              { texte: 'Il part de l’autre côté du souffle', icone: '🎈', correcte: true },
              { texte: 'Il reste sur place', icone: '🚫' },
            ],
            explication:
              'L’air sort d’un côté, le ballon part de l’autre. Une fusée avance exactement pareil.',
          },
        ],
        '6-8': [
          {
            id: 'fusee-appui',
            question: 'Sur quoi une fusée s’appuie-t-elle pour avancer ?',
            reponses: [
              { texte: 'Sur rien : elle éjecte du gaz', icone: '🚀', correcte: true },
              { texte: 'Sur l’air, comme une rame sur l’eau', icone: '🌬️' },
              { texte: 'Sur le sol, qu’elle repousse', icone: '⬇️' },
            ],
            explication:
              'Elle pousse du gaz vers le bas, le gaz la pousse vers le haut. L’air extérieur n’y sert à rien.',
          },
        ],
        '9-12': [
          {
            id: 'fusee-vide',
            question: 'Une fusée pousse-t-elle mieux dans le vide ou dans l’air ?',
            reponses: [
              { texte: 'Dans le vide', icone: '🌌', correcte: true },
              { texte: 'Dans l’air, contre lequel elle s’appuie', icone: '💨' },
              { texte: 'Exactement pareil', icone: '⚖️' },
            ],
            explication:
              'L’atmosphère ne fait que freiner. Le New York Times, qui affirmait le contraire en 1920, s’est rétracté la veille d’Apollo 11.',
          },
        ],
      },
      en: {
        '3-5': [
          {
            id: 'ballon-lache',
            question: 'You let go of a blown-up balloon. What does it do?',
            reponses: [
              { texte: 'It shoots off away from the puff of air', icone: '🎈', correcte: true },
              { texte: 'It stays where it is', icone: '🚫' },
            ],
            explication:
              'The air comes out one way, the balloon goes the other. A rocket moves in exactly the same way.',
          },
        ],
        '6-8': [
          {
            id: 'fusee-appui',
            question: 'What does a rocket lean on to move forward?',
            reponses: [
              { texte: 'Nothing: it throws gas out behind it', icone: '🚀', correcte: true },
              { texte: 'The air, like an oar on water', icone: '🌬️' },
              { texte: 'The ground, which it pushes away', icone: '⬇️' },
            ],
            explication:
              'It pushes gas downwards, and the gas pushes it upwards. The air outside plays no part at all.',
          },
        ],
        '9-12': [
          {
            id: 'fusee-vide',
            question: 'Does a rocket push better in a vacuum or in air?',
            reponses: [
              { texte: 'In a vacuum', icone: '🌌', correcte: true },
              { texte: 'In air, which it leans on', icone: '💨' },
              { texte: 'Exactly the same in both', icone: '⚖️' },
            ],
            explication:
              'The atmosphere only slows it down. The New York Times, which claimed the opposite in 1920, retracted the day before Apollo 11.',
          },
        ],
      },
    },
  },  {
    cardId: 'comment-on-freine',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'freiner-place',
            question: 'Faut-il plus de place pour s’arrêter quand on va vite ?',
            reponses: [
              { texte: 'Oui, beaucoup plus', icone: '📏', correcte: true },
              { texte: 'Non, c’est pareil', icone: '🟰' },
            ],
            explication: 'Plus on va vite, beaucoup plus il faut de place pour s’arrêter.',
          },
        ],
        '6-8': [
          {
            id: 'roue-bloquee',
            question: 'Bloquer les roues fait-il freiner plus vite ?',
            reponses: [
              { texte: 'Non, une roue qui glisse freine moins bien', icone: '🛞', correcte: true },
              { texte: 'Oui, c’est le freinage maximal', icone: '🛑' },
              { texte: 'Oui, mais seulement sur route sèche', icone: '☀️' },
            ],
            explication:
              'Une roue bloquée glisse, et on ne peut plus diriger. C’est exactement le problème que l’ABS résout.',
          },
        ],
        '9-12': [
          {
            id: 'distance-carre',
            question: 'On double la vitesse : que devient la distance de freinage ?',
            reponses: [
              { texte: 'Elle quadruple', icone: '4️⃣', correcte: true },
              { texte: 'Elle double', icone: '2️⃣' },
              { texte: 'Elle augmente d’un tiers', icone: '➗' },
            ],
            explication:
              'L’énergie cinétique varie comme le carré de la vitesse : il y a quatre fois plus d’énergie à dissiper.',
          },
        ],
      },
      en: {
        '3-5': [
          {
            id: 'freiner-place',
            question: 'Do you need more room to stop when you go fast?',
            reponses: [
              { texte: 'Yes, a lot more', icone: '📏', correcte: true },
              { texte: 'No, it is the same', icone: '🟰' },
            ],
            explication: 'The faster you go, the more room you need to stop — a lot more.',
          },
        ],
        '6-8': [
          {
            id: 'roue-bloquee',
            question: 'Does locking the wheels make you brake faster?',
            reponses: [
              { texte: 'No, a sliding wheel brakes worse', icone: '🛞', correcte: true },
              { texte: 'Yes, that is the hardest braking there is', icone: '🛑' },
              { texte: 'Yes, but only on a dry road', icone: '☀️' },
            ],
            explication:
              'A locked wheel slides, and you can no longer steer. That is exactly the problem ABS solves.',
          },
        ],
        '9-12': [
          {
            id: 'distance-carre',
            question: 'You double the speed: what happens to the braking distance?',
            reponses: [
              { texte: 'It quadruples', icone: '4️⃣', correcte: true },
              { texte: 'It doubles', icone: '2️⃣' },
              { texte: 'It grows by a third', icone: '➗' },
            ],
            explication:
              'Kinetic energy varies as the square of the speed: there is four times as much energy to dissipate.',
          },
        ],
      },
    },
  },  {
    cardId: 'comment-marche-un-frigo',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'frigo-froid',
            question: 'Le frigo fabrique-t-il du froid ?',
            reponses: [
              { texte: 'Non, il enlève la chaleur', icone: '🌡️', correcte: true },
              { texte: 'Oui, il fabrique du froid', icone: '❄️' },
            ],
            explication: 'Il prend la chaleur qui est dedans et il la met dehors.',
          },
        ],
        '6-8': [
          {
            id: 'frigo-porte',
            question: 'Si on laisse la porte du frigo ouverte, la cuisine…',
            reponses: [
              { texte: 'se réchauffe', icone: '🔥', correcte: true },
              { texte: 'se rafraîchit', icone: '🧊' },
              { texte: 'ne change pas', icone: '🟰' },
            ],
            explication:
              'La chaleur retirée ressort dans la même pièce, augmentée de celle que produit le moteur.',
          },
        ],
        '9-12': [
          {
            id: 'frigo-travail',
            question: 'Pourquoi un réfrigérateur a-t-il besoin d’électricité ?',
            reponses: [
              { texte: 'Pour faire remonter la chaleur du froid vers le chaud', icone: '⬆️', correcte: true },
              { texte: 'Pour créer du froid à partir de rien', icone: '❄️' },
              { texte: 'Pour refroidir l’air par ventilation', icone: '🌀' },
            ],
            explication:
              'Le second principe interdit ce transfert sans apport de travail : c’est le rôle du compresseur.',
          },
        ],
      },
      en: {
        '3-5': [
          {
            id: 'frigo-froid',
            question: 'Does a fridge make cold?',
            reponses: [
              { texte: 'No, it takes the heat away', icone: '🌡️', correcte: true },
              { texte: 'Yes, it makes cold', icone: '❄️' },
            ],
            explication: 'It takes the heat that is inside and puts it outside.',
          },
        ],
        '6-8': [
          {
            id: 'frigo-porte',
            question: 'If you leave the fridge door open, the kitchen…',
            reponses: [
              { texte: 'gets warmer', icone: '🔥', correcte: true },
              { texte: 'gets cooler', icone: '🧊' },
              { texte: 'stays the same', icone: '🟰' },
            ],
            explication:
              'The heat taken out comes back into the same room, plus the heat the motor makes.',
          },
        ],
        '9-12': [
          {
            id: 'frigo-travail',
            question: 'Why does a refrigerator need electricity?',
            reponses: [
              { texte: 'To push the heat back up from cold to hot', icone: '⬆️', correcte: true },
              { texte: 'To create cold out of nothing', icone: '❄️' },
              { texte: 'To cool the air by blowing it about', icone: '🌀' },
            ],
            explication:
              'The second law forbids that transfer without work being supplied: that is what the compressor is for.',
          },
        ],
      },
    },
  },  {
    cardId: 'le-micro-ondes',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'micro-milieu',
            question: 'Le micro-ondes chauffe-t-il par le milieu ?',
            reponses: [
              { texte: 'Non, par les bords', icone: '🔥', correcte: true },
              { texte: 'Oui, par le milieu', icone: '🎯' },
            ],
            explication: 'Il chauffe surtout le bord. Le milieu se réchauffe ensuite, tout doucement.',
          },
        ],
        '6-8': [
          {
            id: 'micro-eau',
            question: 'Qu’est-ce que le micro-ondes fait bouger ?',
            reponses: [
              { texte: 'L’eau contenue dans les aliments', icone: '💧', correcte: true },
              { texte: 'L’air autour du plat', icone: '💨' },
              { texte: 'Le plat lui-même', icone: '🍽️' },
            ],
            explication:
              'Il fait pivoter les molécules d’eau des milliards de fois par seconde : cette agitation, c’est la chaleur.',
          },
        ],
        '9-12': [
          {
            id: 'porte-grille',
            question: 'Pourquoi la porte du micro-ondes est-elle grillagée ?',
            reponses: [
              { texte: 'Les trous sont plus petits que la longueur d’onde', icone: '📏', correcte: true },
              { texte: 'Pour laisser sortir la vapeur', icone: '💨' },
              { texte: 'Pour renforcer la vitre', icone: '🛡️' },
            ],
            explication:
              'C’est une cage de Faraday : les ondes de douze centimètres sont réfléchies, la lumière passe.',
          },
        ],
      },
      en: {
        '3-5': [
          {
            id: 'micro-milieu',
            question: 'Does a microwave heat from the middle?',
            reponses: [
              { texte: 'No, from the edges', icone: '🔥', correcte: true },
              { texte: 'Yes, from the middle', icone: '🎯' },
            ],
            explication: 'It mostly heats the edge. The middle warms up afterwards, very slowly.',
          },
        ],
        '6-8': [
          {
            id: 'micro-eau',
            question: 'What does a microwave set moving?',
            reponses: [
              { texte: 'The water inside the food', icone: '💧', correcte: true },
              { texte: 'The air around the dish', icone: '💨' },
              { texte: 'The dish itself', icone: '🍽️' },
            ],
            explication:
              'It makes the water molecules spin round billions of times a second: that jiggling is heat.',
          },
        ],
        '9-12': [
          {
            id: 'porte-grille',
            question: 'Why does a microwave door have a metal mesh in it?',
            reponses: [
              { texte: 'The holes are smaller than the wavelength', icone: '📏', correcte: true },
              { texte: 'To let the steam out', icone: '💨' },
              { texte: 'To strengthen the glass', icone: '🛡️' },
            ],
            explication:
              'It is a Faraday cage: the twelve-centimetre waves are reflected, and light goes through.',
          },
        ],
      },
    },
  },
];
