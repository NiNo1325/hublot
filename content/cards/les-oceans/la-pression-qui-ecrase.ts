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
  },
};
