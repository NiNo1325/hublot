import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : « les microbes rendent malades » est l'idée reçue à
 * corriger, sans pour autant décourager le lavage des mains. On distingue donc
 * clairement la minorité pathogène de l'immense majorité utile ou inoffensive.
 */
export const card: ScienceCard = {
  id: 'les-microbes',
  domainId: 'biologie',
  animationId: 'microbes',
  thumbnail: '🦠',
  content: {
    fr: {
      title: {
        '3-5': 'Les tout petits vivants',
        '6-8': 'Les microbes',
        '9-12': 'Micro-organismes et microbiote',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'invisible',
              text: "Il existe des êtres vivants si petits qu'on ne peut pas les voir, même en approchant l'œil tout près.",
            },
            {
              id: 'partout',
              text: "Il y en a partout : dans l'air, sur tes mains, dans la terre, et même à l'intérieur de ton ventre.",
            },
            {
              id: 'utiles',
              text: "Beaucoup nous aident ! Ce sont eux qui fabriquent le yaourt, le pain et le fromage.",
            },
            {
              id: 'certains',
              text: "Quelques-uns peuvent nous rendre malades. C'est pour ça qu'on se lave les mains avant de manger.",
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'invisible',
              text: "Les microbes sont des êtres vivants trop petits pour être vus à l'œil nu. Il faut un microscope : sur un point final de phrase, on pourrait en aligner des milliers.",
            },
            {
              id: 'partout',
              text: "Ils sont partout, et surtout dans ton corps. Tu transportes environ autant de bactéries que tu as de cellules — des dizaines de milliers de milliards, principalement dans tes intestins.",
            },
            {
              id: 'utiles',
              text: "La plupart sont utiles ou inoffensifs. Ceux de ton ventre t'aident à digérer et fabriquent des vitamines. D'autres transforment le lait en yaourt, font lever le pain, ou décomposent les feuilles mortes pour enrichir la terre.",
            },
            {
              id: 'certains',
              text: "Une petite minorité provoque des maladies : ce sont les microbes pathogènes. Se laver les mains reste donc important — non pas pour éliminer tous les microbes, ce qui serait impossible et néfaste, mais pour écarter ceux-là.",
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'invisible',
              text: "Le terme « microbe » regroupe des organismes très différents : bactéries, archées, levures et champignons microscopiques, protozoaires. Les virus y sont souvent associés, bien qu'ils ne soient pas considérés comme vivants au sens strict, faute de métabolisme propre.",
            },
            {
              id: 'partout',
              text: "Ton microbiote intestinal compte environ quarante mille milliards de bactéries, pour un poids d'à peine deux cents grammes. On lit souvent qu'il pèserait deux kilos : c'est une estimation ancienne, corrigée depuis. Il abrite pourtant bien plus de gènes que ton propre génome.",
            },
            {
              id: 'utiles',
              text: "Ces micro-organismes dégradent des fibres que nos enzymes ne savent pas digérer, synthétisent des vitamines K et B, et occupent l'espace que des pathogènes pourraient coloniser. À l'échelle planétaire, ils recyclent la matière organique et fixent l'azote atmosphérique — sans eux, les sols cesseraient d'être fertiles.",
            },
            {
              id: 'certains',
              text: "Une fraction infime est pathogène. La pénicilline, tirée d'une moisissure, illustre bien le paradoxe : c'est un micro-organisme qui nous a donné de quoi combattre les autres. L'enjeu n'est donc pas d'éliminer les microbes, mais de maintenir l'équilibre — un traitement antibiotique perturbe d'ailleurs le microbiote pendant plusieurs semaines.",
            },
          ],
        },
      },
    },
  },
};
