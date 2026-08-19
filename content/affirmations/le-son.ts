import type { Affirmation } from '@/lib/types';

/** Affirmations du domaine « Le son ». */
export const affirmations: Affirmation[] = [
  {
    cardId: 'pourquoi-lecho-repond',
    vrai: false,
    texte: {
      fr: 'On entend l’écho même quand le mur est tout près.',
      en: 'You hear an echo even when the wall is right next to you.',
    },
    reponse: {
      fr: 'Faux ! Le mur doit être assez loin. Sinon ta voix revient trop vite et se mélange à ton cri, au lieu de te répondre.',
      en: 'False! The wall has to be far enough away. Otherwise your voice returns too fast and blends into your shout instead of answering.',
    },
  },
  {
    cardId: 'aigu-ou-grave',
    vrai: true,
    texte: {
      fr: 'Plus une corde vibre vite, plus le son est aigu.',
      en: 'The faster a string vibrates, the higher the sound.',
    },
    reponse: {
      fr: 'Vrai ! Aigu veut dire « vibre vite », grave veut dire « vibre lentement ». Rien à voir avec fort ou doux.',
      en: 'True! High means vibrating fast, low means vibrating slowly. Nothing to do with loud or quiet.',
    },
  },
  {
    cardId: 'pourquoi-les-voix-sont-differentes',
    vrai: true,
    texte: {
      fr: 'Ta voix est unique à cause de la forme de ta gorge et de ta bouche.',
      en: 'Your voice is unique because of the shape of your throat and mouth.',
    },
    reponse: {
      fr: 'Vrai ! Les cordes vocales donnent la note, mais c’est tout le reste qui donne le timbre — ton vrai signe.',
      en: 'True! The vocal cords give the note, but everything else gives the timbre — your real signature.',
    },
  },
  {
    cardId: 'comment-loreille-entend',
    vrai: false,
    texte: {
      fr: 'Les plus petits os de ton corps sont ceux du bout de tes doigts.',
      en: 'The smallest bones in your body are the ones at your fingertips.',
    },
    reponse: {
      fr: 'Faux ! Ce sont ceux de l’oreille : trois osselets plus petits qu’un grain de riz, qui transmettent la vibration du tympan.',
      en: 'False! They are in your ear: three little bones smaller than a grain of rice, passing the eardrum’s vibration along.',
    },
  },
  {
    cardId: 'quand-le-bruit-fait-mal',
    vrai: true,
    texte: {
      fr: 'Une oreille abîmée par un bruit trop fort ne guérit pas.',
      en: 'An ear damaged by a sound that is too loud does not heal.',
    },
    reponse: {
      fr: 'Vrai ! Les petites cellules qui écoutent ne repoussent jamais. C’est pour ça qu’on baisse le volume avant, pas après.',
      en: 'True! The tiny listening cells never grow back. That is why you turn the volume down before, not after.',
    },
  },
  {
    cardId: 'comment-chante-une-guitare',
    vrai: false,
    texte: {
      fr: 'C’est la corde de la guitare qui fait tout le son.',
      en: 'It is the guitar string that makes all the sound.',
    },
    reponse: {
      fr: 'Faux ! Une corde toute seule s’entend à peine. C’est la caisse en bois qui pousse l’air et fait le vrai bruit.',
      en: 'False! A string on its own is barely audible. It is the wooden body that pushes the air and makes the real sound.',
    },
  },
  {
    cardId: 'la-sirene-qui-change',
    vrai: false,
    texte: {
      fr: 'Le pompier change le son de sa sirène quand il passe devant toi.',
      en: 'The fire crew change their siren’s note as they drive past you.',
    },
    reponse: {
      fr: 'Faux ! Elle ne change pas du tout. C’est le mouvement qui serre les vibrations en approchant, et les étire en s’éloignant.',
      en: 'False! It does not change at all. The movement squeezes the vibrations coming towards you, and stretches them going away.',
    },
  },
  {
    cardId: 'ma-voix-enregistree',
    vrai: false,
    texte: {
      fr: 'Si ta voix enregistrée te paraît bizarre, c’est que le micro la déforme.',
      en: 'If your recorded voice sounds odd, it is because the microphone distorts it.',
    },
    reponse: {
      fr: 'Faux ! C’est l’enregistrement qui est fidèle. Quand tu parles, tes os transmettent aussi le son et ajoutent des graves que personne d’autre n’entend.',
      en: 'False! The recording is the honest one. When you speak, your bones carry the sound too and add low notes nobody else hears.',
    },
  },
  {
    cardId: 'les-sons-quon-nentend-pas',
    vrai: true,
    texte: {
      fr: 'Un chien entend des sons qui existent vraiment, mais que tu ne peux pas entendre.',
      en: 'A dog hears sounds that really exist, but that you cannot hear.',
    },
    reponse: {
      fr: 'Vrai ! Ton oreille a des limites, en haut et en bas. Au-delà, le son est bien là — mais pas pour toi.',
      en: 'True! Your ear has limits, at the top and at the bottom. Beyond them the sound is there — just not for you.',
    },
  },
  {
    cardId: 'les-notes-qui-vont-ensemble',
    vrai: true,
    texte: {
      fr: 'Deux notes qui sonnent bien ensemble ont des vibrations qui se rangent en petits nombres.',
      en: 'Two notes that sound good together have vibrations that line up in small whole numbers.',
    },
    reponse: {
      fr: 'Vrai ! Deux pour un, trois pour deux. La musique qui te plaît obéit à de l’arithmétique toute simple.',
      en: 'True! Two for one, three for two. The music you like obeys some very simple arithmetic.',
    },
  },
];
