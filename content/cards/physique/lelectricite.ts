import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : les électrons ne filent pas à la vitesse de la lumière
 * dans un fil — ils dérivent de quelques millimètres par seconde. C'est le
 * signal qui se propage vite, distinction rarement faite et pourtant simple.
 */
export const card: ScienceCard = {
  id: 'lelectricite',
  domainId: 'physique',
  animationId: 'electricite',
  thumbnail: '⚡',
  content: {
    fr: {
      title: {
        '3-5': 'Le courant qui allume',
        '6-8': "L'électricité",
        '9-12': 'Courant, tension et circuit',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'circuit',
              text: "Pour allumer une ampoule, il faut un fil qui part de la pile et un autre qui y revient.",
            },
            {
              id: 'boucle',
              text: "Si tu coupes le chemin quelque part, tout s'éteint. Le courant a besoin d'une boucle complète.",
            },
            {
              id: 'electrons',
              text: "Dans le fil, de minuscules choses invisibles se poussent les unes les autres, tout le long.",
            },
            {
              id: 'chaleur',
              text: "En passant dans l'ampoule, elles la font chauffer très fort, et c'est comme ça qu'elle brille.",
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'circuit',
              text: "Un circuit électrique a besoin d'une source, comme une pile, de fils conducteurs, et d'un appareil à alimenter.",
            },
            {
              id: 'boucle',
              text: "Le circuit doit former une boucle fermée. Un interrupteur ne fait rien d'autre qu'ouvrir ou fermer cette boucle. Ouvert, le courant ne passe plus du tout.",
            },
            {
              id: 'electrons',
              text: "Dans les métaux, certains électrons sont libres de se déplacer. La pile les met en mouvement, et chacun bouscule son voisin de proche en proche.",
            },
            {
              id: 'chaleur',
              text: "Attention à une idée fausse : ces électrons avancent très lentement, quelques millimètres par seconde. Ce qui va presque à la vitesse de la lumière, c'est la poussée qui se transmet de l'un à l'autre — comme dans un tuyau déjà plein d'eau, où l'eau sort à l'instant où tu ouvres le robinet.",
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'circuit',
              text: "Le courant est un déplacement ordonné de charges électriques, mesuré en ampères. La tension, en volts, représente la différence d'énergie potentielle qui met ces charges en mouvement.",
            },
            {
              id: 'boucle',
              text: "Un circuit fermé est nécessaire car les charges ne s'accumulent pas : autant il en entre dans un composant, autant il en sort. La loi d'Ohm relie ces grandeurs — la tension est le produit de la résistance par l'intensité.",
            },
            {
              id: 'electrons',
              text: "La vitesse de dérive des électrons dans un fil de cuivre typique est de l'ordre du dixième de millimètre par seconde. Le signal, lui, se propage à une fraction notable de la vitesse de la lumière, car le champ électrique s'établit presque instantanément le long du conducteur.",
            },
            {
              id: 'chaleur',
              text: "Curiosité historique : le sens conventionnel du courant a été fixé avant la découverte de l'électron, du plus vers le moins. Les électrons circulent en réalité dans l'autre sens. La convention a été conservée, car elle ne change aucun calcul — un bon exemple d'erreur de départ devenue inoffensive.",
            },
          ],
        },
      },
    },
    en: {
      title: {
        '3-5': 'The current that lights up',
        '6-8': 'Electricity',
        '9-12': 'Current, voltage and circuits',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'circuit',
              text: 'To light a bulb, you need a wire going out from the battery and another one coming back.',
            },
            {
              id: 'boucle',
              text: 'If you cut the path anywhere, everything goes out. The current needs a complete loop.',
            },
            {
              id: 'electrons',
              text: 'Inside the wire, tiny invisible things push each other along, all the way round.',
            },
            {
              id: 'chaleur',
              text: 'As they go through the bulb, they make it get very hot, and that is how it shines.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'circuit',
              text: 'An electric circuit needs a source, such as a battery, some conducting wires, and something to power.',
            },
            {
              id: 'boucle',
              text: 'The circuit has to form a closed loop. A switch does nothing more than open or close that loop. Open, and no current flows at all.',
            },
            {
              id: 'electrons',
              text: 'In metals, some electrons are free to move about. The battery sets them going, and each one nudges its neighbour along the wire.',
            },
            {
              id: 'chaleur',
              text: 'Watch out for a common mistake: those electrons creep along, a few millimetres per second. What travels at almost the speed of light is the push passed from one to the next — like a pipe already full of water, where the water comes out the instant you turn the tap.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'circuit',
              text: 'A current is an ordered movement of electric charges, measured in amperes. Voltage, in volts, is the difference in potential energy that sets those charges moving.',
            },
            {
              id: 'boucle',
              text: 'A closed circuit is necessary because charges do not pile up: as much goes into a component as comes out of it. Ohm’s law links these quantities — the voltage is the resistance multiplied by the current.',
            },
            {
              id: 'electrons',
              text: 'The drift speed of electrons in a typical copper wire is of the order of a tenth of a millimetre per second. The signal, on the other hand, travels at a sizeable fraction of the speed of light, because the electric field sets itself up almost instantly along the conductor.',
            },
            {
              id: 'chaleur',
              text: 'A historical curiosity: the conventional direction of the current was fixed before the electron was discovered, from plus to minus. Electrons in fact flow the other way. The convention was kept, because it changes no calculation — a fine example of an early mistake that turned out to be harmless.',
            },
          ],
        },
      },
    },
  },
};
