import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : un engrenage ne crée pas de puissance. Comme le levier,
 * il échange vitesse contre force — la carte fait explicitement le lien entre
 * les deux, car c'est le même principe de conservation.
 */
export const card: ScienceCard = {
  id: 'les-engrenages',
  domainId: 'ingenierie',
  animationId: 'engrenages',
  thumbnail: '⚙️',
  content: {
    fr: {
      title: {
        '3-5': 'Les roues à dents',
        '6-8': 'Comment marchent les engrenages',
        '9-12': 'Rapport de transmission',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'dents',
              text: "Un engrenage est une roue avec des dents tout autour, comme une petite couronne.",
            },
            {
              id: 'sens',
              text: "Quand deux roues se touchent, l'une tourne dans un sens et l'autre dans l'autre sens.",
            },
            {
              id: 'vitesse',
              text: "Si une petite roue fait tourner une grande, la grande va beaucoup moins vite.",
            },
            {
              id: 'echange',
              text: "Mais elle pousse bien plus fort. On choisit : soit rapide, soit puissant, jamais les deux.",
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'dents',
              text: "Les dents d'un engrenage s'emboîtent dans celles du voisin. Le mouvement se transmet sans glisser, ce qu'une simple courroie ne garantit pas.",
            },
            {
              id: 'sens',
              text: "Deux roues en contact tournent toujours en sens opposés. Pour conserver le même sens, on en intercale une troisième, ou on utilise une chaîne — comme sur un vélo.",
            },
            {
              id: 'vitesse',
              text: "Ce qui compte, c'est le nombre de dents. Une roue de dix dents entraînant une roue de trente la fera tourner trois fois moins vite : à chaque tour complet du petit pignon, le grand n'avance que d'un tiers de tour.",
            },
            {
              id: 'echange',
              text: "En échange de cette lenteur, la grande roue tourne avec trois fois plus de force. C'est exactement le compromis du levier : ce que l'on gagne d'un côté, on le perd de l'autre. Changer de vitesse à vélo ne fait rien d'autre que choisir ce compromis.",
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'dents',
              text: "L'engrenage assure une transmission sans glissement, donc un rapport rigoureusement constant. Le profil des dents, en développante de cercle, garantit un contact régulier et un couple transmis sans à-coups.",
            },
            {
              id: 'sens',
              text: "Deux roues extérieures en prise tournent en sens inverse. Un train d'engrenages permet d'ajuster à la fois le sens, le rapport et l'axe de sortie ; un engrenage conique renvoie même le mouvement à quatre-vingt-dix degrés.",
            },
            {
              id: 'vitesse',
              text: "Le rapport de transmission est le quotient des nombres de dents. Le couple varie en proportion inverse de la vitesse angulaire : diviser la vitesse par trois multiplie le couple par trois, aux frottements près.",
            },
            {
              id: 'echange',
              text: "La puissance, produit du couple par la vitesse angulaire, se conserve — un engrenage la redistribue, il n'en crée pas. Le rendement réel atteint souvent plus de quatre-vingt-quinze pour cent, le reste étant dissipé en chaleur. C'est le même principe que le levier, appliqué à la rotation.",
            },
          ],
        },
      },
    },
    en: {
      title: {
        '3-5': 'Wheels with teeth',
        '6-8': 'How gears work',
        '9-12': 'Gear ratio',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'dents',
              text: 'A gear is a wheel with teeth all the way round, like a little crown.',
            },
            {
              id: 'sens',
              text: 'When two wheels touch, one turns one way and the other turns the other way.',
            },
            {
              id: 'vitesse',
              text: 'If a small wheel turns a big one, the big one goes much more slowly.',
            },
            {
              id: 'echange',
              text: 'But it pushes much harder. You choose: either quick or strong, never both.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'dents',
              text: 'The teeth of a gear slot into those of its neighbour. The movement is passed on without slipping, which a plain belt cannot promise.',
            },
            {
              id: 'sens',
              text: 'Two wheels in contact always turn in opposite directions. To keep the same direction, you slip a third one in between, or you use a chain — as on a bicycle.',
            },
            {
              id: 'vitesse',
              text: 'What counts is the number of teeth. A ten-tooth wheel driving a thirty-tooth wheel makes it turn three times more slowly: for every full turn of the small pinion, the big one moves only a third of a turn.',
            },
            {
              id: 'echange',
              text: 'In exchange for that slowness, the big wheel turns with three times more force. It is exactly the same bargain as the lever: what you gain on one side, you lose on the other. Changing gear on a bicycle is nothing but choosing that bargain.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'dents',
              text: 'A gear transmits motion without slipping, and therefore keeps a strictly constant ratio. The tooth profile, an involute of a circle, guarantees steady contact and torque passed on without jolts.',
            },
            {
              id: 'sens',
              text: 'Two external wheels in mesh turn in opposite directions. A gear train lets you adjust the direction, the ratio and the output axis at once; a bevel gear even sends the motion off at ninety degrees.',
            },
            {
              id: 'vitesse',
              text: 'The gear ratio is the quotient of the numbers of teeth. Torque varies in inverse proportion to angular speed: dividing the speed by three multiplies the torque by three, friction aside.',
            },
            {
              id: 'echange',
              text: 'Power, the product of torque and angular speed, is conserved — a gear redistributes it, it does not create it. Real efficiency often passes ninety-five per cent, the rest being dissipated as heat. It is the same principle as the lever, applied to rotation.',
            },
          ],
        },
      },
    },
  },
};
