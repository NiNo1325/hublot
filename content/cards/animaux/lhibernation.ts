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
    en: {
      title: {
        '3-5': 'The big winter sleep',
        '6-8': 'Hibernation',
        '9-12': 'Hibernation',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'reserves',
              text: 'Before winter, the hedgehog eats a lot to make a store in its tummy.',
            },
            {
              id: 'ralenti',
              text: 'Then it curls up in a hole. Its heart beats very softly and its body goes cold.',
            },
            {
              id: 'economie',
              text: 'That way, it hardly needs to eat all winter long.',
            },
            {
              id: 'reveil',
              text: 'In spring, it warms up, wakes up and goes off to eat.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'reserves',
              text: 'In autumn, some animals eat enormous amounts to build up fat: that will be their store of energy.',
            },
            {
              id: 'ralenti',
              text: 'When the cold sets in, they take shelter and their body slows right down: the heart beats very slowly and their temperature drops almost to the temperature of the air.',
            },
            {
              id: 'economie',
              text: 'Running this slowly, they use hardly any energy. So they can last for months without eating, living off their reserves.',
            },
            {
              id: 'reveil',
              text: 'Hibernation is not simply a long sleep: it is another state altogether. In fact, the animal sometimes wakes for a few hours before dropping back into it.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'reserves',
              text: 'Hibernation is prepared from autumn onwards: the animal stuffs itself to build up reserves of fat, its only fuel for the winter.',
            },
            {
              id: 'ralenti',
              text: 'Then its metabolism deliberately collapses. In a marmot, the heart goes from 200 beats a minute to fewer than 10, and body temperature falls from 37 °C to a few degrees above zero.',
            },
            {
              id: 'economie',
              text: 'Ticking over that slowly, the body uses almost no energy at all: that is the whole point. The animal survives for months without feeding, where the cold alone would have exhausted it had it stayed active.',
            },
            {
              id: 'reveil',
              text: 'Hibernation is therefore not sleeping for a long time, but suspending the body. Curiously, hibernators come out of that state now and then in order to... really sleep for a few hours, before dropping back in. Waking fully, in spring, means warming the whole organism back up.',
            },
          ],
        },
      },
    },
  },
};
