import type { ScienceCard } from '@/lib/types';

export const card: ScienceCard = {
  id: 'pourquoi-on-eternue',
  domainId: 'le-corps',
  animationId: 'pourquoi-on-eternue',
  thumbnail: '🤧',
  content: {
    fr: {
      title: {
        '3-5': 'Atchoum !',
        '6-8': 'Pourquoi on éternue',
        '9-12': "Le mécanisme de l'éternuement",
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'un',
              text: 'Une petite poussière entre dans ton nez et le chatouille.',
            },
            {
              id: 'deux',
              text: 'Ton nez envoie vite un message à ton cerveau : « Il y a un intrus ! »',
            },
            {
              id: 'trois',
              text: 'D’un coup, l’air sort très fort par ton nez et ta bouche.',
            },
            {
              id: 'quatre',
              text: 'Atchoum ! La poussière est chassée loin de ton nez.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'un',
              text: 'Une poussière, un grain de poivre ou un poil de chat chatouille l’intérieur de ton nez.',
            },
            {
              id: 'deux',
              text: 'Des capteurs très sensibles préviennent aussitôt ton cerveau qu’un intrus s’est glissé là.',
            },
            {
              id: 'trois',
              text: 'Ton cerveau ordonne alors une expulsion : l’air est projeté hors de ton nez et de ta bouche à toute vitesse.',
            },
            {
              id: 'quatre',
              text: 'C’est l’éternuement : un vrai coup de balai qui chasse l’intrus loin de tes voies respiratoires.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'un',
              text: 'Une particule irritante (poussière, poil, poivre) stimule les terminaisons nerveuses tapissant l’intérieur du nez.',
            },
            {
              id: 'deux',
              text: 'Ce signal remonte jusqu’à un centre du cerveau dédié à l’éternuement, qui déclenche la réaction en une fraction de seconde.',
            },
            {
              id: 'trois',
              text: 'Une grande quantité d’air est brusquement expulsée par le nez et la bouche, à une vitesse pouvant dépasser cent cinquante kilomètres par heure.',
            },
            {
              id: 'quatre',
              text: 'Cette expulsion violente chasse l’intrus loin des voies respiratoires. Contrairement à une idée reçue tenace, le cœur ne s’arrête absolument pas pendant un éternuement : il continue de battre normalement.',
            },
          ],
        },
      },
    },
  },
};
