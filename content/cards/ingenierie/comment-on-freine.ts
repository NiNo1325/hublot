import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : deux erreurs pour le prix d'une. Bloquer les roues ne
 * freine pas mieux — le glissement adhère moins et supprime la direction — et
 * la distance de freinage ne suit pas la vitesse mais son carré. Doubler la
 * vitesse quadruple la distance : c'est la raison physique des limitations.
 */
export const card: ScienceCard = {
  id: 'comment-on-freine',
  domainId: 'ingenierie',
  animationId: 'freinage',
  thumbnail: '🛞',
  content: {
    fr: {
      title: {
        '3-5': 'S’arrêter, ça prend de la place',
        '6-8': 'Comment on freine vraiment',
        '9-12': 'Freinage : l’adhérence et le carré de la vitesse',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'pedale',
              text: 'Pour arrêter un vélo, tu serres les freins. Ils frottent sur la roue et la ralentissent.',
            },
            {
              id: 'adherence',
              text: 'Mais c’est le pneu qui accroche la route. Sur du sable ou de l’eau, il accroche beaucoup moins.',
            },
            {
              id: 'bloquer',
              text: 'Si la roue se bloque et se met à glisser, tu ne t’arrêtes pas mieux. Et tu ne peux plus tourner.',
            },
            {
              id: 'carre-vitesse',
              text: 'Plus tu vas vite, plus il faut de place pour t’arrêter. Beaucoup plus, pas juste un peu.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'pedale',
              text: 'Freiner, ce n’est pas retenir la roue : c’est transformer le mouvement en chaleur. Les plaquettes frottent, tout s’échauffe, et la vitesse tombe.',
            },
            {
              id: 'adherence',
              text: 'Seulement, rien de tout cela ne sert si le pneu ne tient pas la route. C’est l’accroche entre le pneu et le sol qui fixe la limite — pas la puissance des freins.',
            },
            {
              id: 'bloquer',
              text: 'D’où une surprise : bloquer les roues n’arrête pas plus vite. Une roue bloquée glisse, et un pneu qui glisse freine moins bien qu’un pneu qui roule. En prime, on ne peut plus diriger. C’est le problème que l’ABS résout, en relâchant et reserrant le frein plusieurs fois par seconde.',
            },
            {
              id: 'carre-vitesse',
              text: 'Et la distance ne suit pas la vitesse : elle suit son carré. À cinquante kilomètres par heure, il faut une douzaine de mètres pour s’arrêter. À cent, il en faut quatre fois plus — pas deux.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'pedale',
              text: 'Un frein est un convertisseur d’énergie : il dissipe l’énergie cinétique du véhicule en chaleur, par frottement. D’où l’échauffement des disques, et le fading — la perte d’efficacité quand ils dépassent leur température de fonctionnement.',
            },
            {
              id: 'adherence',
              text: 'La décélération maximale n’est pas fixée par les freins mais par le coefficient d’adhérence entre pneu et chaussée : de l’ordre de 0,8 sur asphalte sec, 0,1 sur verglas. Au-delà, le pneu glisse quelle que soit la force appliquée.',
            },
            {
              id: 'bloquer',
              text: 'Or le coefficient de frottement de glissement est inférieur au coefficient d’adhérence statique. Une roue bloquée freine donc moins bien qu’une roue à la limite du glissement, et perd toute capacité directionnelle. L’ABS module la pression pour maintenir le pneu juste avant cette limite.',
            },
            {
              id: 'carre-vitesse',
              text: 'L’énergie cinétique vaut une demie m v carré : doubler la vitesse quadruple l’énergie à dissiper, donc la distance de freinage. En ajoutant le temps de réaction, qui croît lui proportionnellement à la vitesse, on obtient environ vingt-huit mètres à cinquante kilomètres par heure et près de quatre-vingts à cent. C’est la justification physique des limitations de vitesse.',
            },
          ],
        },
      },
    },
    en: {
      title: {
        '3-5': 'Stopping takes room',
        '6-8': 'How braking really works',
        '9-12': 'Braking: grip and the square of the speed',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'pedale',
              text: 'To stop a bike, you squeeze the brakes. They rub on the wheel and slow it down.',
            },
            {
              id: 'adherence',
              text: 'But it is the tyre that grips the road. On sand or water, it grips a lot less.',
            },
            {
              id: 'bloquer',
              text: 'If the wheel locks and starts to slide, you do not stop any better. And you cannot steer any more.',
            },
            {
              id: 'carre-vitesse',
              text: 'The faster you go, the more room you need to stop. A lot more, not just a bit.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'pedale',
              text: 'Braking is not holding the wheel back: it is turning movement into heat. The pads rub, everything warms up, and the speed drops.',
            },
            {
              id: 'adherence',
              text: 'Except that none of this helps if the tyre does not hold the road. It is the grip between tyre and ground that sets the limit — not how powerful the brakes are.',
            },
            {
              id: 'bloquer',
              text: 'Which brings a surprise: locking the wheels does not stop you sooner. A locked wheel slides, and a sliding tyre brakes worse than a rolling one. On top of that, you can no longer steer. That is the problem ABS solves, by releasing and squeezing the brake several times a second.',
            },
            {
              id: 'carre-vitesse',
              text: 'And the distance does not follow the speed: it follows its square. At fifty kilometres per hour, it takes about a dozen metres to stop. At a hundred, it takes four times as much — not twice.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'pedale',
              text: 'A brake is an energy converter: it dissipates the vehicle’s kinetic energy as heat, through friction. Hence the discs heating up, and brake fade — the loss of effectiveness once they go beyond their working temperature.',
            },
            {
              id: 'adherence',
              text: 'The maximum deceleration is not set by the brakes but by the coefficient of grip between tyre and road surface: around 0.8 on dry asphalt, 0.1 on black ice. Beyond that, the tyre slides however hard you press.',
            },
            {
              id: 'bloquer',
              text: 'Now the coefficient of sliding friction is lower than the coefficient of static grip. A locked wheel therefore brakes worse than a wheel held right at the edge of sliding, and loses all steering ability. ABS modulates the pressure to keep the tyre just short of that limit.',
            },
            {
              id: 'carre-vitesse',
              text: 'Kinetic energy is one half m v squared: doubling the speed quadruples the energy to dissipate, and so the braking distance. Adding the reaction time, which grows in proportion to the speed, gives about twenty-eight metres at fifty kilometres per hour and close to eighty at a hundred. That is the physical justification for speed limits.',
            },
          ],
        },
      },
    },
  },
};
