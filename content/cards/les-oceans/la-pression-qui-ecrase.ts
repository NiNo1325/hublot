import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : ce n'est pas la disponibilité en air qui limite la
 * plongée profonde, mais la pression elle-même, qui écraserait un corps ou un
 * engin non protégé quelle que soit la réserve d'air dont il dispose.
 */
export const card: ScienceCard = {
  id: 'la-pression-qui-ecrase',
  domainId: 'les-oceans',
  animationId: 'la-pression-qui-ecrase',
  thumbnail: '🤿',
  content: {
    fr: {
      title: {
        '3-5': 'L’eau qui écrase',
        '6-8': 'La pression qui écrase',
        '9-12': 'La pression, un poids invisible',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'un',
              text: 'Plus on descend dans la mer, plus il y a d’eau au-dessus de nous.',
            },
            {
              id: 'deux',
              text: 'Toute cette eau pèse et elle pousse fort.',
            },
            {
              id: 'trois',
              text: 'Très profond, ça écraserait un corps tout mou.',
            },
            {
              id: 'quatre',
              text: 'Pour aller tout en bas, il faut un sous-marin très solide.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'un',
              text: 'Chaque mètre où tu descends ajoute encore de l’eau au-dessus de ta tête.',
            },
            {
              id: 'deux',
              text: 'Tout ce poids d’eau appuie de tous les côtés à la fois : c’est ce qu’on appelle la pression.',
            },
            {
              id: 'trois',
              text: 'Plus on descend, plus la pression augmente, et à grande profondeur, elle peut écraser ce qui n’est pas assez solide, même avec plein d’air en réserve.',
            },
            {
              id: 'quatre',
              text: 'C’est pourquoi les sous-marins qui explorent les grands fonds sont construits avec des parois épaisses et très résistantes.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'un',
              text: 'La pression de l’eau augmente avec la profondeur, car elle correspond au poids de toute la colonne d’eau située au-dessus.',
            },
            {
              id: 'deux',
              text: 'Tous les dix mètres environ, la pression augmente d’à peu près une atmosphère, soit le poids de l’air qui nous entoure en surface.',
            },
            {
              id: 'trois',
              text: 'Au fond des grandes fosses océaniques, à onze mille mètres, la pression dépasse mille fois celle de la surface — assez pour écraser un objet non préparé en un instant, quelle que soit sa réserve d’air.',
            },
            {
              id: 'quatre',
              text: 'Les submersibles capables d’atteindre ces profondeurs ont une coque sphérique en titane ou en acier très épais, seule forme qui répartit uniformément une pression aussi énorme.',
            },
          ],
        },
      },
    },
    en: {
      title: {
        '3-5': 'The water that squashes',
        '6-8': 'The pressure that crushes',
        '9-12': 'Pressure, an invisible weight',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'un',
              text: 'The deeper we go in the sea, the more water there is above us.',
            },
            {
              id: 'deux',
              text: 'All that water is heavy, and it pushes very hard.',
            },
            {
              id: 'trois',
              text: 'Very deep down, it would squash a soft little body.',
            },
            {
              id: 'quatre',
              text: 'To go right to the bottom, you need a very strong submarine.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'un',
              text: 'Every metre you go down adds still more water above your head.',
            },
            {
              id: 'deux',
              text: 'All that weight of water presses in from every side at once: that is what we call pressure.',
            },
            {
              id: 'trois',
              text: 'The deeper you go, the higher the pressure, and far down it can crush anything that is not strong enough, even with plenty of air in reserve.',
            },
            {
              id: 'quatre',
              text: 'That is why the submarines that explore the deep sea are built with thick, very tough walls.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'un',
              text: 'Water pressure increases with depth, because it is the weight of the whole column of water sitting above.',
            },
            {
              id: 'deux',
              text: 'Roughly every ten metres, the pressure rises by about one atmosphere, the weight of the air around us at the surface.',
            },
            {
              id: 'trois',
              text: 'At the bottom of the great ocean trenches, eleven thousand metres down, the pressure is over a thousand times that at the surface — enough to crush an unprepared object in an instant, whatever air supply it carries.',
            },
            {
              id: 'quatre',
              text: 'The submersibles able to reach those depths have a spherical hull of titanium or very thick steel, the only shape that spreads such an enormous pressure evenly.',
            },
          ],
        },
      },
    },
  },
};
