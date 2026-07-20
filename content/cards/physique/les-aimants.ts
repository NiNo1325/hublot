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
  },
};
