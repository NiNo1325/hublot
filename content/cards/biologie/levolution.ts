import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : trois contresens en un. « L'homme descend du singe » —
 * non, ancêtre commun, et nous sommes des primates. L'évolution aurait un but
 * — non, elle n'en a aucun. L'individu s'adapterait de son vivant — c'est le
 * lamarckisme du cou de la girafe, réfuté.
 */
export const card: ScienceCard = {
  id: 'levolution',
  domainId: 'biologie',
  animationId: 'evolution',
  thumbnail: '🦖',
  content: {
    fr: {
      title: {
        '3-5': 'Les animaux changent très lentement',
        '6-8': 'L’évolution, sans but et sans hasard total',
        '9-12': 'Sélection naturelle : trois contresens à écarter',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'pas-du-singe',
              text: 'On dit parfois que l’humain vient du singe. En vrai, on a juste un très très vieux grand-parent en commun.',
            },
            {
              id: 'variation',
              text: 'Regarde autour de toi : personne n’est exactement pareil. Chez les animaux non plus.',
            },
            {
              id: 'selection',
              text: 'Ceux qui se débrouillent le mieux là où ils vivent ont plus de petits. Et les petits leur ressemblent.',
            },
            {
              id: 'pas-de-but',
              text: 'Alors, très très lentement, les animaux changent. Sans le vouloir, et sans savoir où ils vont.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'pas-du-singe',
              text: '« L’homme descend du singe » est une phrase fausse. Humains et chimpanzés descendent d’un ancêtre commun qui n’était ni l’un ni l’autre — comme deux cousins ont un grand-parent commun sans descendre l’un de l’autre.',
            },
            {
              id: 'variation',
              text: 'Le moteur est pourtant simple. D’abord, les individus d’une même espèce ne sont jamais identiques : il y a toujours de petites différences, apparues au hasard.',
            },
            {
              id: 'selection',
              text: 'Ensuite, certaines de ces différences aident à survivre et à avoir des petits, dans un milieu donné. Ces individus-là laissent plus de descendants, qui héritent de la différence. Répété sur des milliers de générations, cela transforme une espèce entière.',
            },
            {
              id: 'pas-de-but',
              text: 'Attention au piège : l’évolution ne poursuit aucun but et ne cherche pas la perfection. La girafe n’a pas allongé son cou à force de tendre le sien — ce sont celles qui naissaient avec un cou un peu plus long qui laissaient plus de petits. Et rien ne garantit le progrès : presque toutes les espèces ayant existé ont disparu.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'pas-du-singe',
              text: 'L’énoncé « l’homme descend du singe » est doublement faux. Humains et chimpanzés partagent un ancêtre commun vieux d’environ sept millions d’années, qui n’appartenait à aucune espèce actuelle. Et au sens de la classification, les humains sont des primates : nous ne descendons pas des singes, nous en sommes.',
            },
            {
              id: 'variation',
              text: 'Le mécanisme suppose trois conditions : de la variation entre individus, l’héritabilité d’une partie de cette variation, et un différentiel de succès reproducteur. La variation naît de mutations et de recombinaisons aléatoires — aléatoires au sens précis où elles ne sont pas orientées vers un besoin.',
            },
            {
              id: 'selection',
              text: 'La sélection naturelle, elle, n’a rien d’aléatoire : elle trie ce que le hasard produit. Sa mesure est le nombre de descendants viables. S’y ajoutent la dérive génétique, qui fait varier les fréquences par simple effet d’échantillonnage dans les petites populations, et le flux de gènes entre populations voisines.',
            },
            {
              id: 'pas-de-but',
              text: 'Trois contresens à écarter. L’évolution n’a pas de but : parler d’espèce « plus évoluée » n’a pas de sens. Elle n’agit pas sur l’individu, qui ne s’adapte pas de son vivant — le cou de la girafe allongé par l’effort est du lamarckisme, réfuté. Et elle ne garantit aucun progrès : plus de quatre-vingt-dix-neuf pour cent des espèces ayant existé sont éteintes.',
            },
          ],
        },
      },
    },
  },
};
