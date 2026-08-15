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
    en: {
      title: {
        '3-5': 'The soil is full of life',
        '6-8': 'Soil is alive',
        '9-12': 'Soil: an ecosystem and a slow resource',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'pas-inerte',
              text: 'Garden soil is not just dust. It is full of life in there.',
            },
            {
              id: 'habitants',
              text: 'One handful holds more living things than there are people on the whole Earth.',
            },
            {
              id: 'fabrication',
              text: 'Worms and little creatures eat the dead leaves, and they make good soil.',
            },
            {
              id: 'fragile',
              text: 'But it is very slow: it takes hundreds of years to make a tiny bit.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'pas-inerte',
              text: 'We say “soil” as if we meant dust. Yet soil is alive — it is even one of the most crowded places on the planet.',
            },
            {
              id: 'habitants',
              text: 'A single spoonful of garden soil holds billions of bacteria and kilometres of fungal threads. There are more living things in it than there are people on Earth.',
            },
            {
              id: 'fabrication',
              text: 'And this crowd works hard: earthworms swallow dead leaves and pass them out digested, fungi break down wood, bacteria release the elements plants need. Without them, nothing would grow back.',
            },
            {
              id: 'fragile',
              text: 'The whole thing is very slow: it takes centuries to make one centimetre of soil. It can be lost in a single season, if it is left bare and the rain carries it off.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'pas-inerte',
              text: 'Soil is not an inert support but an ecosystem in its own right: minerals, organic matter, air, water and organisms in constant interaction.',
            },
            {
              id: 'habitants',
              text: 'A gram of forest soil contains something like a billion bacteria, several kilometres of fungal hyphae, protozoa, nematodes and arthropods. A major share of land biodiversity lives beneath our feet, and remains largely undescribed.',
            },
            {
              id: 'fabrication',
              text: 'This community handles decomposition and recycling: it mineralises organic matter, makes nitrogen and phosphorus available to plants, and binds the soil into crumbs that hold water. Mycorrhizae extend the roots and trade nutrients for sugars — a partnership the great majority of plants depend on.',
            },
            {
              id: 'fragile',
              text: 'Soil formation is slow: of the order of a centimetre per century in a temperate climate. Erosion, by contrast, can strip that thickness away in a few years from ground left bare. It is this imbalance between formation and loss that makes soil an essentially non-renewable resource on a human timescale.',
            },
          ],
        },
      },
    },
  },
};
