import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : « la terre » n'est pas un support inerte. Un sol est
 * l'un des milieux les plus peuplés de la planète, et sa formation se compte
 * en siècles quand sa perte se compte en saisons — d'où son statut de
 * ressource non renouvelable à l'échelle humaine.
 */
export const card: ScienceCard = {
  id: 'le-sol-est-vivant',
  domainId: 'sciences-de-la-terre',
  animationId: 'sol',
  thumbnail: '🪱',
  content: {
    fr: {
      title: {
        '3-5': 'La terre est pleine de vie',
        '6-8': 'Le sol est vivant',
        '9-12': 'Le sol, écosystème et ressource lente',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'pas-inerte',
              text: 'La terre du jardin, ce n’est pas de la poussière. C’est plein de vie, là-dedans.',
            },
            {
              id: 'habitants',
              text: 'Dans une seule poignée, il y a plus d’habitants que d’humains sur toute la Terre.',
            },
            {
              id: 'fabrication',
              text: 'Les vers et les petites bêtes mangent les feuilles mortes, et fabriquent de la bonne terre.',
            },
            {
              id: 'fragile',
              text: 'Mais c’est très long : il faut des centaines d’années pour en faire un tout petit peu.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'pas-inerte',
              text: 'On dit « la terre » comme on dirait de la poussière. Pourtant un sol est vivant — c’est même l’un des milieux les plus peuplés de la planète.',
            },
            {
              id: 'habitants',
              text: 'Dans une seule cuillerée de sol de jardin, on compte des milliards de bactéries et des kilomètres de filaments de champignons. Il y a là-dedans plus d’êtres vivants que d’humains sur Terre.',
            },
            {
              id: 'fabrication',
              text: 'Et ce peuple travaille : les vers de terre avalent les feuilles mortes et les rejettent digérées, les champignons décomposent le bois, les bactéries libèrent les éléments dont les plantes ont besoin. Sans eux, rien ne repousserait.',
            },
            {
              id: 'fragile',
              text: 'Le tout est très lent : il faut des siècles pour fabriquer un centimètre de sol. On peut le perdre en une saison, si on le laisse nu et que la pluie l’emporte.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'pas-inerte',
              text: 'Le sol n’est pas un support inerte mais un écosystème à part entière : minéraux, matière organique, air, eau et organismes en interaction permanente.',
            },
            {
              id: 'habitants',
              text: 'Un gramme de sol forestier contient de l’ordre du milliard de bactéries, plusieurs kilomètres d’hyphes de champignons, des protozoaires, des nématodes et des arthropodes. Une part majeure de la biodiversité terrestre vit sous nos pieds, et reste largement non décrite.',
            },
            {
              id: 'fabrication',
              text: 'Cette communauté assure la décomposition et le recyclage : elle minéralise la matière organique, rend l’azote et le phosphore assimilables, et structure le sol en agrégats qui retiennent l’eau. Les mycorhizes prolongent les racines et échangent des nutriments contre des sucres — une symbiose dont dépend la grande majorité des plantes.',
            },
            {
              id: 'fragile',
              text: 'La pédogenèse est lente : de l’ordre du centimètre par siècle sous climat tempéré. L’érosion, elle, peut retirer cette épaisseur en quelques années sur un sol laissé nu. C’est ce déséquilibre entre formation et perte qui fait du sol une ressource pratiquement non renouvelable à l’échelle humaine.',
            },
          ],
        },
      },
    },
  },
};
