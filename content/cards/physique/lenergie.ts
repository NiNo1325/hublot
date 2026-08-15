import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : « produire » et « consommer » de l'énergie sont des
 * abus de langage. La carte est construite autour du paradoxe que cela
 * soulève — si l'énergie se conserve, pourquoi faut-il en produire ? — dont la
 * réponse est la dégradation, et non la disparition.
 *
 * Les cartes sur les leviers et les poulies invoquent déjà la conservation
 * comme contrepartie des machines simples ; celle-ci part de là plutôt que de
 * la réexpliquer.
 */
export const card: ScienceCard = {
  id: 'lenergie',
  domainId: 'physique',
  animationId: 'energie',
  thumbnail: '🔋',
  content: {
    fr: {
      title: {
        '3-5': 'L’énergie change de forme',
        '6-8': 'On ne produit pas d’énergie',
        '9-12': 'Conservation et dégradation de l’énergie',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'produire',
              text: 'On dit qu’on « produit » de l’électricité. En vrai, personne ne fabrique d’énergie.',
            },
            {
              id: 'conserver',
              text: 'On la prend quelque part et on la change de forme. Le vent fait tourner, et ça donne du courant.',
            },
            {
              id: 'degrader',
              text: 'À chaque fois, un peu s’en va en chaleur. Touche un appareil qui marche : il est tiède.',
            },
            {
              id: 'soleil',
              text: 'Et au tout début, presque toute cette énergie vient du Soleil.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'produire',
              text: 'Une centrale ne crée pas d’énergie, et ton téléphone n’en détruit pas. Cela paraît absurde, et c’est pourtant la règle : l’énergie ne peut être ni créée ni supprimée.',
            },
            {
              id: 'conserver',
              text: 'Elle ne fait que changer de forme. Le vent fait tourner une éolienne, le mouvement devient électricité, l’électricité devient lumière, son et chaleur. La quantité totale, elle, ne bouge pas d’un poil.',
            },
            {
              id: 'degrader',
              text: 'Alors pourquoi faut-il en produire sans arrêt ? Parce qu’à chaque transformation, une part part en chaleur diffuse, répandue partout et trop diluée pour resservir. Ce qu’on consomme n’est donc pas l’énergie, mais sa qualité : sa capacité à faire encore quelque chose.',
            },
            {
              id: 'soleil',
              text: 'Presque toute l’énergie que nous utilisons vient du Soleil : le vent, l’eau des barrages, la nourriture, le pétrole. Les exceptions se comptent sur les doigts d’une main — le nucléaire, la géothermie, les marées.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'produire',
              text: 'Le premier principe de la thermodynamique l’énonce : l’énergie d’un système isolé se conserve. « Production » et « consommation » d’énergie sont donc, littéralement, des abus de langage.',
            },
            {
              id: 'conserver',
              text: 'Ce qui a lieu est une conversion. Une centrale thermique convertit de l’énergie chimique en chaleur, la chaleur en énergie mécanique, puis en énergie électrique. À chaque étape, le total est rigoureusement conservé — pertes comprises, qui n’en sont pas au sens strict.',
            },
            {
              id: 'degrader',
              text: 'Le second principe lève le paradoxe : les conversions dégradent l’énergie. Une part croissante finit en chaleur à basse température, diffuse et inexploitable ; l’entropie augmente. Ce qui manque n’est jamais l’énergie — sa quantité est constante — mais l’énergie utilisable. Carnot a même montré que le rendement d’une machine thermique est plafonné par les seules températures entre lesquelles elle fonctionne.',
            },
            {
              id: 'soleil',
              text: 'Presque toutes nos sources remontent au Soleil : éolien, hydraulique, biomasse, hydrocarbures — de la lumière stockée, parfois depuis des centaines de millions d’années. Les exceptions sont la fission nucléaire, la géothermie et les marées. Et le mouvement perpétuel reste impossible, non par insuffisance technique, mais par principe.',
            },
          ],
        },
      },
    },
    en: {
      title: {
        '3-5': 'Energy changes shape',
        '6-8': 'Nobody makes energy',
        '9-12': 'Conservation and degradation of energy',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'produire',
              text: 'People say we “make” electricity. Really, nobody makes energy.',
            },
            {
              id: 'conserver',
              text: 'We take it from somewhere and change its shape. The wind makes things turn, and that gives current.',
            },
            {
              id: 'degrader',
              text: 'Each time, a little goes off as heat. Touch a gadget that is working: it feels warm.',
            },
            {
              id: 'soleil',
              text: 'And right at the start, nearly all of that energy comes from the Sun.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'produire',
              text: 'A power station does not create energy, and your phone does not destroy any. It sounds absurd, and yet that is the rule: energy can be neither created nor made to disappear.',
            },
            {
              id: 'conserver',
              text: 'All it ever does is change form. The wind turns a wind turbine, the movement becomes electricity, the electricity becomes light, sound and heat. The total amount does not budge one bit.',
            },
            {
              id: 'degrader',
              text: 'So why do we have to keep producing more of it? Because at every change, part of it goes off as scattered heat, spread everywhere and far too thinned out to be used again. What we consume is not the energy, then, but its quality: its power to still do something.',
            },
            {
              id: 'soleil',
              text: 'Nearly all the energy we use comes from the Sun: the wind, the water behind dams, our food, oil. The exceptions can be counted on the fingers of one hand — nuclear power, geothermal heat, the tides.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'produire',
              text: 'The first law of thermodynamics states it: the energy of an isolated system is conserved. “Producing” and “consuming” energy are therefore, quite literally, figures of speech.',
            },
            {
              id: 'conserver',
              text: 'What takes place is a conversion. A thermal power station converts chemical energy into heat, the heat into mechanical energy, then into electrical energy. At every stage the total is rigorously conserved — losses included, which are not losses in the strict sense.',
            },
            {
              id: 'degrader',
              text: 'The second law resolves the paradox: conversions degrade energy. A growing share ends up as low-temperature heat, diffuse and unusable; entropy increases. What runs short is never the energy — its quantity is constant — but the usable energy. Carnot even showed that the efficiency of a heat engine is capped by the two temperatures it works between, and nothing else.',
            },
            {
              id: 'soleil',
              text: 'Almost all our sources go back to the Sun: wind, hydro, biomass, hydrocarbons — stored sunlight, sometimes hundreds of millions of years old. The exceptions are nuclear fission, geothermal heat and the tides. And perpetual motion remains impossible, not for want of technology, but as a matter of principle.',
            },
          ],
        },
      },
    },
  },
};
