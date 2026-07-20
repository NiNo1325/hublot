import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : dormir n'est pas « ne rien faire ». Le cerveau est
 * intensément actif, il consolide la mémoire et évacue ses déchets. On évite
 * ici de surinterpréter : la fonction du sommeil reste partiellement ouverte,
 * et le dire est plus honnête que de trancher.
 */
export const card: ScienceCard = {
  id: 'pourquoi-on-dort',
  domainId: 'biologie',
  animationId: 'sommeil',
  thumbnail: '😴',
  content: {
    fr: {
      title: {
        '3-5': 'Pourquoi on dort',
        '6-8': 'À quoi sert le sommeil',
        '9-12': 'Sommeil, mémoire et récupération',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'repos',
              text: "Quand tu dors, ton corps se repose, mais ta tête, elle, continue de travailler.",
            },
            {
              id: 'memoire',
              text: "Elle range tout ce que tu as appris dans la journée, comme on range des jouets dans les bonnes boîtes.",
            },
            {
              id: 'grandir',
              text: "C'est aussi la nuit que tu grandis le plus, et que tes petites blessures guérissent.",
            },
            {
              id: 'reves',
              text: "Et parfois tu rêves. Tout le monde rêve, même si on ne s'en souvient pas toujours au réveil.",
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'repos',
              text: "On croit souvent que le cerveau s'éteint pendant le sommeil. C'est faux : il reste très actif, et certaines de ses zones travaillent même davantage qu'en journée.",
            },
            {
              id: 'memoire',
              text: "Une de ses tâches principales est de trier les souvenirs. Ce qui a été appris dans la journée est rejoué et transféré vers la mémoire durable. C'est pourquoi une nuit de sommeil aide vraiment à retenir une leçon.",
            },
            {
              id: 'grandir',
              text: "Le corps en profite aussi : l'hormone de croissance est surtout libérée pendant le sommeil profond, les muscles se réparent et les défenses immunitaires se renforcent.",
            },
            {
              id: 'reves',
              text: "Le sommeil s'organise en cycles d'environ quatre-vingt-dix minutes. Les rêves les plus vifs surviennent lors d'une phase où les yeux bougent rapidement sous les paupières, alors que le reste du corps est presque paralysé — ce qui t'empêche de vivre tes rêves pour de vrai.",
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'repos',
              text: "Le sommeil alterne phases lentes et phases paradoxales, en cycles d'environ quatre-vingt-dix minutes. L'activité cérébrale ne cesse jamais : elle change de nature, mesurable à l'électroencéphalogramme.",
            },
            {
              id: 'memoire',
              text: "Pendant le sommeil lent profond, les circuits activés durant l'apprentissage sont rejoués et les souvenirs transférés de l'hippocampe vers le cortex. Priver quelqu'un de sommeil après un apprentissage dégrade nettement sa rétention — un résultat reproduit de nombreuses fois.",
            },
            {
              id: 'grandir',
              text: "Le système glymphatique, qui évacue les déchets métaboliques du cerveau, est bien plus efficace pendant le sommeil : l'espace entre les cellules s'élargit et le liquide céphalo-rachidien circule davantage. Sécrétion d'hormone de croissance et réparation tissulaire s'y concentrent également.",
            },
            {
              id: 'reves',
              text: "Aucun animal étudié ne se passe totalement de sommeil, ce qui suggère une fonction vitale. Sa raison d'être exacte reste néanmoins débattue : consolidation mnésique, nettoyage métabolique et régulation émotionnelle sont documentés, sans qu'aucune explication unique ne fasse consensus. C'est un domaine où la recherche est toujours en cours.",
            },
          ],
        },
      },
    },
  },
};
