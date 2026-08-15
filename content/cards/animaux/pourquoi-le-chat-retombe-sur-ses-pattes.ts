import type { ScienceCard } from '@/lib/types';

/**
 * Idée reçue corrigée : « le chat retombe toujours sur ses pattes, sans jamais
 * se faire mal ». En réalité, il se retourne en pliant le corps et en faisant
 * tourner l'avant et l'arrière en sens opposés, sans point d'appui — mais il
 * tombe bel et bien, et une chute peut le blesser. Cohérent avec la gravité :
 * elle l'attire vers le sol, il ne fait que s'orienter pendant la chute.
 */
export const card: ScienceCard = {
  id: 'pourquoi-le-chat-retombe-sur-ses-pattes',
  domainId: 'animaux',
  animationId: 'chat-retombe',
  thumbnail: '🐱',
  content: {
    fr: {
      title: {
        '3-5': 'Le chat qui se retourne',
        '6-8': 'Pourquoi le chat retombe sur ses pattes',
        '9-12': 'Pourquoi le chat retombe sur ses pattes',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'depart',
              text: 'Parfois, un chat tombe le dos en premier, la tête en bas.',
            },
            {
              id: 'plie',
              text: 'Alors il plie son corps en deux et tourne très vite pendant qu’il tombe.',
            },
            {
              id: 'sans-appui',
              text: 'Il tourne tout seul dans le vide, sans rien pour se pousser. C’est un vrai acrobate !',
            },
            {
              id: 'pattes',
              text: 'Et hop, il arrive pattes en bas. Mais attention : tomber, ça peut quand même lui faire très mal.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'depart',
              text: 'Quand un chat chute à l’envers, la tête en bas, il n’a que quelques instants pour se retourner.',
            },
            {
              id: 'plie',
              text: 'Il plie son corps souple en son milieu, comme s’il se cassait en deux à la taille.',
            },
            {
              id: 'sans-appui',
              text: 'Puis il fait tourner l’avant de son corps dans un sens, et l’arrière dans l’autre. En pédalant ainsi, il se retourne sans rien pour prendre appui, juste en bougeant son propre corps.',
            },
            {
              id: 'pattes',
              text: 'Il termine pattes vers le sol, prêt à amortir avec ses coussinets. Mais il tombe quand même : de trop haut, il peut se blesser gravement. Il n’est pas invincible.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'depart',
              text: 'Un chat lâché dos vers le sol se redresse en une fraction de seconde. L’énigme a longtemps intrigué les physiciens : comment tourner sans point d’appui ?',
            },
            {
              id: 'plie',
              text: 'La clé est sa colonne très souple. Le chat plie son corps en deux à la taille, séparant l’avant et l’arrière en deux blocs quasi indépendants.',
            },
            {
              id: 'sans-appui',
              text: 'Il fait alors tourner l’avant dans un sens en rentrant les pattes avant, et l’arrière dans l’autre sens en tendant les pattes arrière. En jouant sur l’écartement des pattes, chaque moitié tourne plus ou moins vite : au total, il se retourne alors que sa rotation d’ensemble reste nulle. Rien n’est poussé de l’extérieur.',
            },
            {
              id: 'pattes',
              text: 'Il atterrit pattes déployées, dos arqué, membres fléchis pour absorber le choc. Attention toutefois : la gravité l’attire vers le sol tout du long, il ne fait que s’orienter pendant la chute. Se retourner n’empêche pas de se blesser — une chute de quelques étages reste dangereuse.',
            },
          ],
        },
      },
    },
    en: {
      title: {
        '3-5': 'The cat that turns over',
        '6-8': 'Why cats land on their feet',
        '9-12': 'Why cats land on their feet',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'depart',
              text: 'Sometimes a cat falls back first, upside down.',
            },
            {
              id: 'plie',
              text: 'So it folds its body in two and spins very fast while it falls.',
            },
            {
              id: 'sans-appui',
              text: 'It turns all on its own in mid-air, with nothing to push on. What an acrobat!',
            },
            {
              id: 'pattes',
              text: 'And there it is, paws down. But careful: falling can still hurt it a lot.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'depart',
              text: 'When a cat falls upside down, back first, it has only a moment to turn itself over.',
            },
            {
              id: 'plie',
              text: 'It folds its bendy body in the middle, as if it were breaking in two at the waist.',
            },
            {
              id: 'sans-appui',
              text: 'Then it turns the front of its body one way, and the back the other way. Pedalling like this, it turns over with nothing to push against, just by moving its own body.',
            },
            {
              id: 'pattes',
              text: 'It ends up with its paws towards the ground, ready to cushion the landing on its pads. But it still falls: from too high up, it can be badly hurt. It is not invincible.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'depart',
              text: 'A cat dropped back-down rights itself in a fraction of a second. The puzzle intrigued physicists for a long time: how do you turn with nothing to push against?',
            },
            {
              id: 'plie',
              text: 'The key is its very flexible spine. The cat folds its body in two at the waist, separating front and back into two almost independent blocks.',
            },
            {
              id: 'sans-appui',
              text: 'It then turns the front one way, tucking in its front legs, and the back the other way, stretching out its hind legs. By playing on how far the legs are held out, each half turns faster or slower: overall, it turns over while its total rotation stays zero. Nothing pushes it from outside.',
            },
            {
              id: 'pattes',
              text: 'It lands with legs spread, back arched and limbs bent to absorb the shock. Be careful, though: gravity is pulling it towards the ground the whole way, it is only orienting itself during the fall. Turning over does not stop it getting hurt — a fall of a few storeys is still dangerous.',
            },
          ],
        },
      },
    },
  },
};
