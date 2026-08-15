import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : le squelette de musée est un artefact. Un os est un
 * organe vivant, vascularisé, en remodelage permanent — c'est précisément ce
 * qui lui permet de se ressouder et de se renforcer sous la contrainte.
 * Distinct de la carte sur les fossiles, qui traite de ce qui arrive à l'os
 * après la mort.
 */
export const card: ScienceCard = {
  id: 'les-os',
  domainId: 'biologie',
  animationId: 'os',
  thumbnail: '🩻',
  content: {
    fr: {
      title: {
        '3-5': 'Tes os sont vivants',
        '6-8': 'Les os ne sont pas des cailloux',
        '9-12': 'L’os, un organe en remodelage permanent',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'pas-morts',
              text: 'Tes os ne sont pas des cailloux tout secs. Ils sont vivants, comme le reste de toi.',
            },
            {
              id: 'vivant',
              text: 'Il y a du sang dedans. C’est bien pour ça que ça fait mal quand on en casse un.',
            },
            {
              id: 'moelle',
              text: 'Au milieu, il y a une matière molle qui fabrique ton sang, tous les jours.',
            },
            {
              id: 'reparation',
              text: 'Et un os cassé se répare tout seul. Le plâtre le tient bien droit pendant qu’il se recolle.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'pas-morts',
              text: 'On imagine le squelette comme des morceaux secs et immobiles, à cause des os blanchis qu’on voit dans les musées. En réalité, un os est un organe vivant, parcouru de vaisseaux sanguins et de nerfs.',
            },
            {
              id: 'vivant',
              text: 'Mieux : il se reconstruit sans arrêt. Des cellules démolissent l’os ancien pendant que d’autres en fabriquent du neuf. En une dizaine d’années, la quasi-totalité de ton squelette a été remplacée sans que tu t’en aperçoives.',
            },
            {
              id: 'moelle',
              text: 'À l’intérieur se trouve la moelle osseuse, une usine qui fabrique tes globules rouges et une partie de tes défenses — des milliards de cellules chaque jour.',
            },
            {
              id: 'reparation',
              text: 'C’est parce qu’il est vivant qu’un os cassé se ressoude. Le plâtre ne répare rien : il immobilise pendant que l’os fait le travail. Et un os qu’on sollicite se renforce — d’où la perte osseuse des astronautes, dont le squelette ne porte plus rien.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'pas-morts',
              text: 'Le tissu osseux est un tissu conjonctif vivant, vascularisé et innervé, composé d’une matrice de collagène minéralisée par des cristaux de phosphate de calcium. Le squelette sec des collections est un artefact : de la matrice débarrassée de ses cellules.',
            },
            {
              id: 'vivant',
              text: 'Le remodelage est continu : les ostéoclastes résorbent la matrice ancienne, les ostéoblastes en déposent de la nouvelle. Ce couplage renouvelle environ dix pour cent du squelette par an et sert accessoirement de réserve régulatrice pour la calcémie.',
            },
            {
              id: 'moelle',
              text: 'La moelle osseuse rouge est le siège de l’hématopoïèse : à partir de cellules souches, elle produit chaque jour des centaines de milliards de cellules sanguines. C’est ce qui rend la greffe de moelle possible et efficace.',
            },
            {
              id: 'reparation',
              text: 'La consolidation d’une fracture passe par un hématome, un cal cartilagineux, puis un cal osseux remodelé pendant des mois. La loi de Wolff en résume le principe général : l’os s’adapte aux contraintes mécaniques qu’il subit. D’où la déminéralisation en microgravité, de l’ordre de un pour cent par mois chez les astronautes.',
            },
          ],
        },
      },
    },
    en: {
      title: {
        '3-5': 'Your bones are alive',
        '6-8': 'Bones are not stones',
        '9-12': 'Bone, an organ forever rebuilding itself',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'pas-morts',
              text: 'Your bones are not dry little stones. They are alive, just like the rest of you.',
            },
            {
              id: 'vivant',
              text: 'There is blood inside them. That is exactly why it hurts when you break one.',
            },
            {
              id: 'moelle',
              text: 'In the middle there is a soft stuff that makes your blood, every single day.',
            },
            {
              id: 'reparation',
              text: 'And a broken bone mends itself. The plaster cast just holds it straight while it sticks back together.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'pas-morts',
              text: 'We picture the skeleton as dry, motionless pieces, because of the bleached bones we see in museums. In fact a bone is a living organ, threaded with blood vessels and nerves.',
            },
            {
              id: 'vivant',
              text: 'Better still: it rebuilds itself without a break. Some cells pull down the old bone while others build new bone. In about ten years, almost your entire skeleton has been replaced without you noticing a thing.',
            },
            {
              id: 'moelle',
              text: 'Inside sits the bone marrow, a factory that makes your red blood cells and part of your defences — billions of cells every day.',
            },
            {
              id: 'reparation',
              text: 'It is because it is alive that a broken bone knits back together. The plaster cast repairs nothing: it holds everything still while the bone does the work. And a bone that is used grows stronger — which is why astronauts lose bone, their skeletons no longer carrying anything.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'pas-morts',
              text: 'Bone is a living connective tissue, supplied with blood vessels and nerves, made of a collagen matrix mineralised by calcium phosphate crystals. The dry skeleton in a museum case is an artefact: matrix stripped of its cells.',
            },
            {
              id: 'vivant',
              text: 'Remodelling is continuous: osteoclasts resorb the old matrix, osteoblasts lay down new. This coupling renews about ten per cent of the skeleton a year, and doubles as a regulating reserve for the calcium level in the blood.',
            },
            {
              id: 'moelle',
              text: 'Red bone marrow is the seat of haematopoiesis: starting from stem cells, it produces hundreds of billions of blood cells every day. That is what makes a marrow transplant possible, and effective.',
            },
            {
              id: 'reparation',
              text: 'A fracture heals through a haematoma, then a cartilage callus, then a bony callus remodelled over months. Wolff’s law sums up the general principle: bone adapts to the mechanical loads placed on it. Hence the demineralisation in microgravity, of the order of one per cent a month in astronauts.',
            },
          ],
        },
      },
    },
  },
};
