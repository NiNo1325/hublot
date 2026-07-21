import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : les poumons ne se gonflent pas tout seuls. C'est le
 * diaphragme, un muscle sous les poumons, qui en s'abaissant fait entrer l'air.
 * Et on ne respire pas « de l'oxygène » puis « du gaz carbonique » : on inspire
 * de l'air, on en prélève une partie de l'oxygène, on rejette un peu de CO2.
 */
export const card: ScienceCard = {
  id: 'comment-on-respire',
  domainId: 'biologie',
  animationId: 'respiration',
  thumbnail: '🫁',
  content: {
    fr: {
      title: {
        '3-5': 'Respirer',
        '6-8': 'Comment on respire',
        '9-12': 'Respiration et échanges gazeux',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'muscle',
              text: 'Sous tes poumons, il y a un muscle. Quand il descend, l’air entre tout seul dans ta poitrine.',
            },
            {
              id: 'poumons',
              text: 'L’air remplit tes deux poumons, qui se gonflent comme des éponges légères.',
            },
            {
              id: 'oxygene',
              text: 'Ton corps prend dans l’air ce qu’il faut pour vivre, et le donne à ton sang.',
            },
            {
              id: 'expirer',
              text: 'Puis le muscle remonte, l’air ressort, et tu recommences sans même y penser.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'muscle',
              text: 'On croit souvent que les poumons se gonflent tout seuls. En réalité, c’est un muscle en forme de dôme sous les poumons, le diaphragme, qui commande. Quand il s’abaisse, il agrandit la poitrine et l’air se précipite pour remplir le vide.',
            },
            {
              id: 'poumons',
              text: 'L’air voyage par ton nez, ta gorge, puis des tuyaux qui se divisent en branches de plus en plus fines, jusqu’à de minuscules sacs remplis d’air.',
            },
            {
              id: 'oxygene',
              text: 'Dans ces petits sacs, l’oxygène de l’air passe dans ton sang, qui l’emporte vers tout ton corps. En échange, le sang y dépose un déchet, le dioxyde de carbone.',
            },
            {
              id: 'expirer',
              text: 'Le diaphragme remonte, la poitrine se resserre, et l’air chargé de ce déchet ressort. Tu fais cela environ vingt mille fois par jour, sans y penser.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'muscle',
              text: 'La respiration est mécanique : le diaphragme et les muscles entre les côtes agrandissent la cage thoracique. Le volume augmentant, la pression interne baisse sous celle de l’air extérieur, qui entre alors passivement. On n’aspire pas l’air, on crée une dépression et l’atmosphère le pousse.',
            },
            {
              id: 'poumons',
              text: 'L’air atteint les alvéoles, de minuscules sacs tapissés de capillaires. Il y en a des centaines de millions : dépliée, leur surface d’échange couvrirait environ la moitié d’un terrain de tennis.',
            },
            {
              id: 'oxygene',
              text: 'Aux alvéoles, l’oxygène diffuse vers le sang et se fixe sur l’hémoglobine, tandis que le dioxyde de carbone fait le trajet inverse. On ne respire pas de l’oxygène pur : l’air inspiré en contient vingt et un pour cent, l’air expiré encore seize. On n’en prélève qu’une fraction.',
            },
            {
              id: 'expirer',
              text: 'L’expiration est surtout passive : les muscles se relâchent, les poumons élastiques se rétractent. Le rythme est réglé automatiquement par le tronc cérébral, qui surveille non pas le manque d’oxygène mais l’excès de dioxyde de carbone dans le sang.',
            },
          ],
        },
      },
    },
  },
};
