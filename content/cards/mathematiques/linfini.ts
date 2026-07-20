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
  },
};
