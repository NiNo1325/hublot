import type { ScienceCard } from '@/lib/types';

/**
 * Idée reçue corrigée : « les animaux qui hibernent dorment simplement tout
 * l'hiver ». En réalité, leur corps se met au ralenti extrême — cœur très lent,
 * température qui chute près de zéro — pour économiser l'énergie. Ce n'est pas
 * un long sommeil : c'est un autre état, dont l'animal ressort par périodes.
 */
export const card: ScienceCard = {
  id: 'lhibernation',
  domainId: 'animaux',
  animationId: 'hibernation',
  thumbnail: '🦔',
  content: {
    fr: {
      title: {
        '3-5': "Le grand sommeil de l'hiver",
        '6-8': "L'hibernation",
        '9-12': "L'hibernation",
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'reserves',
              text: "Avant l'hiver, le hérisson mange beaucoup pour faire des réserves dans son ventre.",
            },
            {
              id: 'ralenti',
              text: "Puis il se roule en boule dans un trou. Son cœur bat tout doucement et son corps devient tout froid.",
            },
            {
              id: 'economie',
              text: "Comme ça, il n'a presque pas besoin de manger de tout l'hiver.",
            },
            {
              id: 'reveil',
              text: 'Au printemps, il se réchauffe, se réveille et repart manger.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'reserves',
              text: "À l'automne, certains animaux mangent énormément pour accumuler de la graisse : ce sera leur réserve d'énergie.",
            },
            {
              id: 'ralenti',
              text: "Quand le froid s'installe, ils s'abritent et leur corps se met au ralenti : le cœur bat très lentement et la température descend presque jusqu'au froid de l'air.",
            },
            {
              id: 'economie',
              text: "Ce ralenti leur fait dépenser très peu d'énergie. Ils peuvent ainsi tenir des mois sans manger, en vivant sur leurs réserves.",
            },
            {
              id: 'reveil',
              text: "L'hibernation n'est pas un simple long sommeil : c'est un autre état. D'ailleurs, l'animal se réveille parfois quelques heures avant de replonger.",
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'reserves',
              text: "L'hibernation se prépare dès l'automne : l'animal se gave pour constituer des réserves de graisse, son seul carburant pour l'hiver.",
            },
            {
              id: 'ralenti',
              text: "Puis son métabolisme s'effondre volontairement. Chez la marmotte, le cœur passe de 200 battements par minute à moins de 10, et la température corporelle chute de 37 °C à quelques degrés au-dessus de zéro.",
            },
            {
              id: 'economie',
              text: "En tournant à si bas régime, le corps ne consomme presque plus d'énergie : c'est tout l'intérêt. L'animal survit des mois sans s'alimenter, là où le froid seul l'aurait épuisé en restant actif.",
            },
            {
              id: 'reveil',
              text: "L'hibernation n'est donc pas dormir longtemps, mais suspendre son corps. Curieusement, les hibernants sortent périodiquement de cet état pour... dormir vraiment quelques heures, avant d'y replonger. Le réveil complet, au printemps, demande de réchauffer tout l'organisme.",
            },
          ],
        },
      },
    },
  },
};
