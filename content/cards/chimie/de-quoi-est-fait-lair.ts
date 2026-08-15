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
    en: {
      title: {
        '3-5': 'The air you cannot see',
        '6-8': 'What air is made of',
        '9-12': 'Composition and atmospheric pressure',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'invisible',
              text: 'You cannot see the air. But it really is there: wave your hand and you feel it on your skin.',
            },
            {
              id: 'matiere',
              text: 'It is not nothing! Blow into a balloon: it is air that fills it up and makes it all round.',
            },
            {
              id: 'melange',
              text: 'Air is a mix of several gases. Only a little bit of it is the part you breathe.',
            },
            {
              id: 'pression',
              text: 'And there is so much of it above you that it presses on your shoulders, without you feeling it.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'invisible',
              text: 'Air is invisible and has no smell, which makes it seem like nothing at all. Yet it really is matter, made of particles that move about all the time.',
            },
            {
              id: 'matiere',
              text: 'It even has a mass: one litre of air weighs about 1.2 grams. The air in a classroom weighs as much as a child. To check, simply weigh a balloon empty, then blown up.',
            },
            {
              id: 'melange',
              text: 'Unlike what most people imagine, oxygen is not its main ingredient. Air is about seventy-eight per cent nitrogen and only twenty-one per cent oxygen. The rest is a mixture of rare gases and carbon dioxide.',
            },
            {
              id: 'pression',
              text: 'The column of air above you presses down with about one kilogram per square centimetre. You do not feel it because your body pushes back just as hard. It is this pressure that makes a drink climb up a straw: you do not suck it up, the air pushes it.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'invisible',
              text: 'The atmosphere is a mixture of gases whose molecules travel at about five hundred metres per second at room temperature, colliding with one another endlessly.',
            },
            {
              id: 'matiere',
              text: 'Its density at sea level is 1.225 kilograms per cubic metre. The whole atmosphere weighs around five million billion tonnes, and grows less dense the higher you go.',
            },
            {
              id: 'melange',
              text: 'Composition of dry air by volume: 78 % nitrogen, 21 % oxygen, 0.9 % argon, and about 0.04 % carbon dioxide. That last fraction, tiny as it is, is enough to alter the climate because the molecule absorbs infrared radiation — the amount is not what makes the effect.',
            },
            {
              id: 'pression',
              text: 'Pressure at sea level is about 1013 hectopascals, or ten tonnes on a square metre. It comes from the weight of the column of air, and it falls off with altitude. Torricelli measured it as early as 1643 with a column of mercury — and it is pressure, not some kind of ‘suction’, that makes a straw or a rubber sucker work.',
            },
          ],
        },
      },
    },
  },
};
