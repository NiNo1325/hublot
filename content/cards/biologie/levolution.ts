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
    en: {
      title: {
        '3-5': 'Animals change very slowly',
        '6-8': 'Evolution: no goal, and not pure chance',
        '9-12': 'Natural selection: three misunderstandings to clear up',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'pas-du-singe',
              text: 'People sometimes say that humans come from monkeys. Really, we just share a very, very old grandparent.',
            },
            {
              id: 'variation',
              text: 'Look around you: nobody is exactly the same. It is the same for animals.',
            },
            {
              id: 'selection',
              text: 'The ones that cope best where they live have more babies. And the babies look like them.',
            },
            {
              id: 'pas-de-but',
              text: 'So, very, very slowly, animals change. Without meaning to, and without knowing where they are going.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'pas-du-singe',
              text: '“Humans are descended from monkeys” is a false sentence. Humans and chimpanzees are both descended from a common ancestor that was neither one nor the other — the way two cousins share a grandparent without one coming from the other.',
            },
            {
              id: 'variation',
              text: 'The engine behind it is quite simple, though. First, individuals of the same species are never identical: there are always small differences, which turn up by chance.',
            },
            {
              id: 'selection',
              text: 'Next, some of those differences help an animal survive and have young, in a given place. Those individuals leave more offspring, and the offspring inherit the difference. Repeated over thousands of generations, that transforms a whole species.',
            },
            {
              id: 'pas-de-but',
              text: 'Watch out for the trap: evolution chases no goal and is not aiming at perfection. The giraffe did not lengthen its neck by stretching for leaves — it was the ones born with a slightly longer neck that left more young. And nothing guarantees progress: nearly every species that has ever existed has died out.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'pas-du-singe',
              text: 'The claim that “humans are descended from monkeys” is wrong twice over. Humans and chimpanzees share a common ancestor around seven million years old, which belonged to no species alive today. And in terms of classification, humans are apes: we are not descended from apes, we are one of them.',
            },
            {
              id: 'variation',
              text: 'The mechanism needs three conditions: variation between individuals, the heritability of part of that variation, and a difference in reproductive success. Variation arises from random mutations and recombinations — random in the precise sense that they are not aimed at any need.',
            },
            {
              id: 'selection',
              text: 'Natural selection itself is in no way random: it sorts what chance produces. Its measure is the number of surviving offspring. To it are added genetic drift, which shifts frequencies through a simple sampling effect in small populations, and gene flow between neighbouring populations.',
            },
            {
              id: 'pas-de-but',
              text: 'Three misunderstandings to clear up. Evolution has no goal: calling a species “more evolved” means nothing. It does not act on the individual, who does not adapt during their own lifetime — the giraffe’s neck lengthened by effort is Lamarckism, and it has been refuted. And it guarantees no progress: more than ninety-nine per cent of the species that have existed are extinct.',
            },
          ],
        },
      },
    },
  },
};
