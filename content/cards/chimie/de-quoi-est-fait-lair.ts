import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : « l'air, c'est du vide » est l'idée à défaire. L'air est
 * de la matière, il a une masse, et l'oxygène n'en est qu'un cinquième — deux
 * faits mesurables qui surprennent souvent.
 */
export const card: ScienceCard = {
  id: 'de-quoi-est-fait-lair',
  domainId: 'chimie',
  animationId: 'air',
  thumbnail: '💨',
  content: {
    fr: {
      title: {
        '3-5': "L'air qu'on ne voit pas",
        '6-8': "De quoi est fait l'air",
        '9-12': "Composition et pression atmosphérique",
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'invisible',
              text: "L'air, tu ne le vois pas. Mais il est bien là : agite ta main, tu le sens sur ta peau.",
            },
            {
              id: 'matiere',
              text: "Ce n'est pas du vide ! Souffle dans un ballon : c'est de l'air qui le remplit et le rend tout rond.",
            },
            {
              id: 'melange',
              text: "L'air est un mélange de plusieurs gaz. Il n'y en a qu'un petit morceau qui sert à respirer.",
            },
            {
              id: 'pression',
              text: "Et il y en a tellement au-dessus de toi que ça appuie sur tes épaules, sans que tu le sentes.",
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'invisible',
              text: "L'air est invisible et sans odeur, ce qui le fait passer pour du vide. Pourtant c'est bien de la matière, faite de particules en mouvement permanent.",
            },
            {
              id: 'matiere',
              text: "Il a même une masse : un litre d'air pèse environ 1,2 gramme. L'air d'une salle de classe pèse autant qu'un enfant. Pour le vérifier, il suffit de peser un ballon vide puis gonflé.",
            },
            {
              id: 'melange',
              text: "Contrairement à ce qu'on imagine, l'oxygène n'en est pas le composant principal. L'air contient environ soixante-dix-huit pour cent d'azote et seulement vingt et un pour cent d'oxygène. Le reste est un mélange de gaz rares et de dioxyde de carbone.",
            },
            {
              id: 'pression',
              text: "La colonne d'air au-dessus de toi exerce une pression d'environ un kilogramme par centimètre carré. Tu ne la sens pas car ton corps pousse autant vers l'extérieur. C'est cette pression qui fait monter une boisson dans une paille : tu ne l'aspires pas, c'est l'air qui la pousse.",
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'invisible',
              text: "L'atmosphère est un mélange gazeux dont les molécules se déplacent à environ cinq cents mètres par seconde à température ambiante, en s'entrechoquant sans cesse.",
            },
            {
              id: 'matiere',
              text: "Sa masse volumique au niveau de la mer est de 1,225 kilogramme par mètre cube. L'atmosphère entière pèse environ cinq millions de milliards de tonnes, et devient d'autant moins dense qu'on s'élève.",
            },
            {
              id: 'melange',
              text: "Composition en volume de l'air sec : 78 % de diazote, 21 % de dioxygène, 0,9 % d'argon, et environ 0,04 % de dioxyde de carbone. Cette dernière fraction, minuscule, suffit à modifier le climat parce que la molécule absorbe le rayonnement infrarouge — la quantité ne fait pas l'effet.",
            },
            {
              id: 'pression',
              text: "La pression au niveau de la mer vaut environ 1013 hectopascals, soit dix tonnes sur un mètre carré. Elle résulte du poids de la colonne d'air, et elle décroît avec l'altitude. Torricelli l'a mesurée dès 1643 avec une colonne de mercure — et c'est elle, non une quelconque « aspiration », qui fait fonctionner une paille ou une ventouse.",
            },
          ],
        },
      },
    },
  },
};
