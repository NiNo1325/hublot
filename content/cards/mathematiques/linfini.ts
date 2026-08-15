import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : l'infini n'est pas un très grand nombre. Le résultat de
 * Cantor — il existe des infinis de tailles différentes — est authentiquement
 * surprenant et parfaitement rigoureux ; c'est l'occasion de montrer qu'une
 * démonstration peut contredire l'intuition.
 */
export const card: ScienceCard = {
  id: 'linfini',
  domainId: 'mathematiques',
  animationId: 'infini',
  thumbnail: '♾️',
  content: {
    fr: {
      title: {
        '3-5': 'Compter sans fin',
        '6-8': "L'infini",
        '9-12': 'Infinis dénombrables et non dénombrables',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'compter',
              text: "Tu peux compter un, deux, trois... et continuer aussi longtemps que tu veux.",
            },
            {
              id: 'jamais-fini',
              text: "Il n'y a jamais de dernier nombre. Quel que soit celui que tu dis, on peut toujours ajouter un.",
            },
            {
              id: 'pas-un-nombre',
              text: "L'infini n'est donc pas un très grand nombre. C'est l'idée que ça ne s'arrête jamais.",
            },
            {
              id: 'entre',
              text: "Et entre deux nombres tout proches, il y en a encore une infinité d'autres qui se cachent.",
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'compter',
              text: "Les nombres entiers ne s'arrêtent jamais. Un million, un milliard, un milliard de milliards — on peut toujours ajouter un de plus.",
            },
            {
              id: 'jamais-fini',
              text: "L'infini n'est pas un nombre. C'est pourquoi il ne se comporte pas comme eux : l'infini plus un reste l'infini.",
            },
            {
              id: 'pas-un-nombre',
              text: "Voici plus étrange. Il y a autant de nombres pairs que de nombres entiers, alors qu'on n'en garde qu'un sur deux. La raison : à chaque entier on peut associer son double, sans en oublier ni en répéter aucun. Deux ensembles infinis ont la même taille quand on peut les apparier ainsi.",
            },
            {
              id: 'entre',
              text: "Plus surprenant encore : les mathématiciens ont démontré qu'il existe des infinis plus grands que d'autres. Les nombres à virgule entre zéro et un sont bien plus nombreux que tous les entiers réunis — impossible de les apparier.",
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'compter',
              text: "L'ensemble des entiers naturels est infini : aucun élément maximal n'existe, puisque tout entier admet un successeur.",
            },
            {
              id: 'jamais-fini',
              text: "L'infini n'est pas un élément de cet ensemble, mais une propriété de l'ensemble lui-même. Le manipuler comme un nombre conduit à des absurdités, d'où des expressions dites indéterminées.",
            },
            {
              id: 'pas-un-nombre',
              text: "Cantor a défini l'égalité de taille par l'existence d'une bijection. L'application n ↦ 2n apparie chaque entier à un entier pair : ces deux ensembles ont donc le même cardinal, bien que l'un soit strictement inclus dans l'autre. C'est même la définition d'un ensemble infini.",
            },
            {
              id: 'entre',
              text: "L'argument diagonal établit ensuite qu'aucune liste ne peut contenir tous les réels de l'intervalle zéro-un : à partir d'une liste supposée complète, on construit un nombre qui en diffère au rang n pour tout n. Il existe donc des infinis strictement plus grands que d'autres — un résultat contre-intuitif, mais démontré, qui a d'abord été violemment rejeté par les contemporains de Cantor.",
            },
          ],
        },
      },
    },
    en: {
      title: {
        '3-5': 'Counting with no end',
        '6-8': 'Infinity',
        '9-12': 'Countable and uncountable infinities',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'compter',
              text: 'You can count one, two, three... and keep going as long as you like.',
            },
            {
              id: 'jamais-fini',
              text: 'There is never a last number. Whichever one you say, you can always add one more.',
            },
            {
              id: 'pas-un-nombre',
              text: 'So infinity is not a very big number. It is the idea that it never stops.',
            },
            {
              id: 'entre',
              text: 'And between two numbers that sit right next to each other, endlessly many others are still hiding.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'compter',
              text: 'The whole numbers never stop. A million, a billion, a billion billions — you can always add one more.',
            },
            {
              id: 'jamais-fini',
              text: 'Infinity is not a number. That is why it does not behave like one: infinity plus one is still infinity.',
            },
            {
              id: 'pas-un-nombre',
              text: 'Here is something stranger. There are as many even numbers as whole numbers, even though we keep only one in two. The reason: each whole number can be matched with its double, missing none and repeating none. Two infinite sets are the same size when you can pair them up like that.',
            },
            {
              id: 'entre',
              text: 'More surprising still: mathematicians have proved that some infinities are bigger than others. The decimal numbers between zero and one are far more numerous than all the whole numbers put together — there is no way to pair them up.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'compter',
              text: 'The set of natural numbers is infinite: it has no greatest element, since every whole number has a successor.',
            },
            {
              id: 'jamais-fini',
              text: 'Infinity is not an element of that set, but a property of the set itself. Handling it like a number leads to absurdities, hence the expressions we call indeterminate.',
            },
            {
              id: 'pas-un-nombre',
              text: 'Cantor defined equality of size by the existence of a bijection. The mapping n ↦ 2n matches every whole number with an even one: the two sets therefore have the same cardinality, even though one is strictly contained in the other. That is in fact the definition of an infinite set.',
            },
            {
              id: 'entre',
              text: 'The diagonal argument then establishes that no list can contain every real number between zero and one: starting from a list assumed complete, you build a number that differs from the nth one at the nth place, for every n. So there are infinities strictly larger than others — a counter-intuitive result, but a proven one, which Cantor’s contemporaries at first rejected violently.',
            },
          ],
        },
      },
    },
  },
};
