import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : un aimant n'attire pas « tous les métaux ». L'aluminium
 * et le cuivre ne réagissent pas, ce qu'un enfant peut vérifier lui-même avec
 * une canette. C'est une expérience de démenti, plus solide qu'une règle
 * apprise par cœur.
 */
export const card: ScienceCard = {
  id: 'les-aimants',
  domainId: 'physique',
  animationId: 'aimants',
  thumbnail: '🧲',
  content: {
    fr: {
      title: {
        '3-5': 'La force invisible',
        '6-8': 'Comment marchent les aimants',
        '9-12': 'Magnétisme et pôles',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'attraction',
              text: "Un aimant peut attraper certains objets sans les toucher. On dirait de la magie, mais c'est de la science.",
            },
            {
              id: 'poles',
              text: "Chaque aimant a deux bouts différents. Deux bouts pareils se repoussent, et refusent de se coller.",
            },
            {
              id: 'pas-tout',
              text: "Attention : l'aimant n'attire pas tout. Essaie sur une canette de boisson, tu verras qu'il ne tient pas.",
            },
            {
              id: 'boussole',
              text: "Et le plus étonnant : la Terre est elle-même un énorme aimant. C'est pour ça qu'une boussole montre toujours le nord.",
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'attraction',
              text: "Un aimant agit à distance, à travers le vide, le papier ou l'eau. Cette zone d'influence invisible s'appelle un champ magnétique.",
            },
            {
              id: 'poles',
              text: "Tout aimant possède deux pôles, nord et sud. Deux pôles différents s'attirent, deux pôles identiques se repoussent. Et si tu coupes un aimant en deux, tu n'obtiens jamais un pôle seul : chaque morceau retrouve aussitôt ses deux pôles.",
            },
            {
              id: 'pas-tout',
              text: "On dit souvent que les aimants attirent les métaux. C'est inexact : ils attirent le fer, le nickel et le cobalt, mais pas l'aluminium ni le cuivre. Une canette ne colle pas, alors qu'elle est bien en métal.",
            },
            {
              id: 'boussole',
              text: "La Terre produit son propre champ magnétique, engendré par le fer liquide en mouvement dans son noyau. L'aiguille d'une boussole est un petit aimant qui s'aligne dessus.",
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'attraction',
              text: "Le magnétisme naît du mouvement des charges électriques. Dans un aimant permanent, ce sont les électrons des atomes qui, par leur spin, se comportent comme d'infimes boucles de courant.",
            },
            {
              id: 'poles',
              text: "Dans la plupart des matériaux, ces moments s'annulent en s'orientant au hasard. Dans le fer, ils s'alignent par zones appelées domaines. Aimanter un objet, c'est aligner ses domaines ; le chauffer fortement les désordonne et lui fait perdre son aimantation.",
            },
            {
              id: 'pas-tout',
              text: "Seuls les matériaux ferromagnétiques — fer, nickel, cobalt et certains alliages — s'aimantent durablement. L'aluminium et le cuivre ne réagissent quasiment pas. On n'a jamais observé de monopôle magnétique : couper un aimant recrée systématiquement deux pôles.",
            },
            {
              id: 'boussole',
              text: "Le champ terrestre provient des courants de fer liquide du noyau externe, un mécanisme appelé effet dynamo. Curiosité de vocabulaire : le pôle nord magnétique de la Terre est physiquement un pôle sud, puisqu'il attire le pôle nord de l'aiguille. Ce champ dévie une partie du vent solaire et protège l'atmosphère.",
            },
          ],
        },
      },
    },
    en: {
      title: {
        '3-5': 'The invisible force',
        '6-8': 'How magnets work',
        '9-12': 'Magnetism and poles',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'attraction',
              text: 'A magnet can grab hold of some things without touching them. It looks like magic, but it is science.',
            },
            {
              id: 'poles',
              text: 'Every magnet has two ends that are not the same. Two ends that match push each other away, and refuse to stick.',
            },
            {
              id: 'pas-tout',
              text: 'Careful: a magnet does not pull on everything. Try it on a drinks can, and you will see it does not hold.',
            },
            {
              id: 'boussole',
              text: 'And the most amazing part: the Earth is itself an enormous magnet. That is why a compass always points north.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'attraction',
              text: 'A magnet acts at a distance, through empty space, through paper or through water. That invisible zone of influence is called a magnetic field.',
            },
            {
              id: 'poles',
              text: 'Every magnet has two poles, north and south. Two different poles attract, two identical poles push apart. And if you cut a magnet in two, you never get a lone pole: each piece immediately has two poles of its own.',
            },
            {
              id: 'pas-tout',
              text: 'People often say that magnets attract metals. That is not accurate: they attract iron, nickel and cobalt, but not aluminium or copper. A drinks can does not stick, even though it really is metal.',
            },
            {
              id: 'boussole',
              text: 'The Earth makes its own magnetic field, produced by liquid iron moving inside its core. A compass needle is a small magnet that lines itself up with it.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'attraction',
              text: 'Magnetism comes from the movement of electric charges. In a permanent magnet, it is the electrons of the atoms which, through their spin, behave like minute loops of current.',
            },
            {
              id: 'poles',
              text: 'In most materials these moments cancel out, because they point in random directions. In iron they line up in regions called domains. Magnetising an object means aligning its domains; heating it strongly scrambles them and makes it lose its magnetisation.',
            },
            {
              id: 'pas-tout',
              text: 'Only ferromagnetic materials — iron, nickel, cobalt and certain alloys — become lastingly magnetised. Aluminium and copper barely react at all. No magnetic monopole has ever been observed: cutting a magnet always recreates two poles.',
            },
            {
              id: 'boussole',
              text: 'The Earth’s field comes from currents of liquid iron in the outer core, a mechanism called the dynamo effect. A curiosity of vocabulary: the Earth’s magnetic north pole is physically a south pole, since it attracts the north pole of the needle. This field deflects part of the solar wind and protects the atmosphere.',
            },
          ],
        },
      },
    },
  },
};
