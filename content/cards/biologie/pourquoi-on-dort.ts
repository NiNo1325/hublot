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
    en: {
      title: {
        '3-5': 'Why we sleep',
        '6-8': 'What sleep is for',
        '9-12': 'Sleep, memory and recovery',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'repos',
              text: 'When you sleep, your body rests, but your head carries on working.',
            },
            {
              id: 'memoire',
              text: 'It tidies away everything you learnt during the day, the way you put toys back in the right boxes.',
            },
            {
              id: 'grandir',
              text: 'The night is also when you grow the most, and when your little scratches heal.',
            },
            {
              id: 'reves',
              text: 'And sometimes you dream. Everybody dreams, even if we do not always remember it when we wake up.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'repos',
              text: 'People often think the brain switches off during sleep. That is false: it stays very busy, and some of its areas work even harder than they do in the daytime.',
            },
            {
              id: 'memoire',
              text: 'One of its main jobs is sorting through memories. What was learnt during the day is replayed and moved across into lasting memory. That is why a night’s sleep really does help you remember a lesson.',
            },
            {
              id: 'grandir',
              text: 'The body makes the most of it too: growth hormone is released mainly during deep sleep, muscles repair themselves and the immune defences build back up.',
            },
            {
              id: 'reves',
              text: 'Sleep is organised in cycles of about ninety minutes. The most vivid dreams come in a stage where the eyes move quickly under the eyelids, while the rest of the body is almost paralysed — which stops you living your dreams out for real.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'repos',
              text: 'Sleep alternates between slow-wave and REM stages, in cycles of about ninety minutes. Brain activity never ceases: it changes in nature, and the change can be measured on an electroencephalogram.',
            },
            {
              id: 'memoire',
              text: 'During deep slow-wave sleep, the circuits active during learning are replayed and memories are transferred from the hippocampus to the cortex. Depriving someone of sleep after they have learnt something clearly degrades what they retain — a result reproduced many times over.',
            },
            {
              id: 'grandir',
              text: 'The glymphatic system, which clears metabolic waste out of the brain, is far more efficient during sleep: the space between cells widens and cerebrospinal fluid circulates more freely. Growth hormone secretion and tissue repair are concentrated there too.',
            },
            {
              id: 'reves',
              text: 'No animal that has been studied does entirely without sleep, which points to a vital function. Its exact purpose is still debated, though: memory consolidation, metabolic cleaning and emotional regulation are all documented, without any single explanation carrying the day. This is a field where research is still under way.',
            },
          ],
        },
      },
    },
  },
};
