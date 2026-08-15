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
    en: {
      title: {
        '3-5': 'The tiny living things',
        '6-8': 'Microbes',
        '9-12': 'Micro-organisms and the microbiota',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'invisible',
              text: 'There are living things so small that you cannot see them, even with your eye right up close.',
            },
            {
              id: 'partout',
              text: 'They are everywhere: in the air, on your hands, in the soil, and even inside your tummy.',
            },
            {
              id: 'utiles',
              text: 'Lots of them help us! They are the ones that make yoghurt, bread and cheese.',
            },
            {
              id: 'certains',
              text: 'A few of them can make us ill. That is why we wash our hands before we eat.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'invisible',
              text: 'Microbes are living things too small to see with the naked eye. You need a microscope: on the full stop at the end of a sentence, you could line up thousands of them.',
            },
            {
              id: 'partout',
              text: 'They are everywhere, and above all inside your body. You carry roughly as many bacteria as you have cells — tens of thousands of billions, mostly in your intestines.',
            },
            {
              id: 'utiles',
              text: 'Most of them are useful or harmless. The ones in your tummy help you digest and make vitamins. Others turn milk into yoghurt, make bread rise, or break down dead leaves to enrich the soil.',
            },
            {
              id: 'certains',
              text: 'A small minority cause disease: these are the pathogenic microbes. So washing your hands still matters — not to get rid of every microbe, which would be impossible and harmful, but to keep those ones away.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'invisible',
              text: 'The word “microbe” covers very different organisms: bacteria, archaea, yeasts and microscopic fungi, protozoa. Viruses are often lumped in with them, although they are not counted as living in the strict sense, having no metabolism of their own.',
            },
            {
              id: 'partout',
              text: 'Your gut microbiota holds around forty thousand billion bacteria, for a weight of barely two hundred grams. It is often said to weigh two kilos: that is an old estimate, since corrected. It does, though, carry far more genes than your own genome.',
            },
            {
              id: 'utiles',
              text: 'These micro-organisms break down fibres our enzymes cannot digest, synthesise vitamins K and B, and occupy the space pathogens might otherwise colonise. On a planetary scale they recycle organic matter and fix atmospheric nitrogen — without them, soils would cease to be fertile.',
            },
            {
              id: 'certains',
              text: 'A minute fraction is pathogenic. Penicillin, drawn from a mould, captures the paradox neatly: it was a micro-organism that gave us the means to fight the others. The aim is therefore not to wipe out microbes but to keep the balance — a course of antibiotics, incidentally, disturbs the microbiota for several weeks.',
            },
          ],
        },
      },
    },
  },
};
