import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : la matière paraît pleine et continue. Elle est faite de
 * grains, et ces grains sont eux-mêmes presque entièrement vides. La solidité
 * n'est donc pas un remplissage mais une affaire de forces — ce qui empêche la
 * main de traverser la table, c'est la répulsion, pas la matière.
 */
export const card: ScienceCard = {
  id: 'les-atomes',
  domainId: 'physique',
  animationId: 'atomes',
  thumbnail: '⚛️',
  content: {
    fr: {
      title: {
        '3-5': 'Les tout petits grains',
        '6-8': 'Les atomes, et le vide dedans',
        '9-12': 'L’atome : presque entièrement vide',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'decouper',
              text: 'Coupe un morceau de pain en deux. Puis encore en deux. Et encore, et encore.',
            },
            {
              id: 'atome',
              text: 'À la fin, tu arrives à des grains si petits qu’on ne peut plus les couper. On les appelle des atomes.',
            },
            {
              id: 'vide',
              text: 'Et le plus drôle : un atome est presque tout vide ! Une minuscule bille au milieu, et beaucoup de rien autour.',
            },
            {
              id: 'assembler',
              text: 'Tout est fait avec ça : toi, l’eau, l’air, les étoiles. C’est juste rangé différemment.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'decouper',
              text: 'Imagine couper un objet en deux, encore et encore. Peut-on continuer sans fin ? Non : on finit par tomber sur l’atome.',
            },
            {
              id: 'atome',
              text: 'Un atome est inimaginablement petit. Dans un seul grain de sable, il y a plus d’atomes qu’il n’y a de grains de sable sur toutes les plages de la Terre.',
            },
            {
              id: 'vide',
              text: 'Et voici le plus surprenant : un atome est essentiellement vide. Si son noyau était une bille posée au centre d’un stade, les électrons tourneraient dans les gradins — et entre les deux, il n’y aurait rien.',
            },
            {
              id: 'assembler',
              text: 'La table sous ta main est donc surtout du vide, et ta main aussi. Si elles ne se traversent pas, ce n’est pas parce qu’elles sont pleines : c’est parce que leurs électrons se repoussent.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'decouper',
              text: 'L’idée qu’il existe une limite à la division remonte à Démocrite, vingt-quatre siècles avant qu’on ne la démontre. Le mot atome signifie « qu’on ne peut pas couper » — ce qui s’est révélé faux, puisqu’on a fini par le briser, mais le nom est resté.',
            },
            {
              id: 'atome',
              text: 'Un atome mesure environ un dixième de nanomètre. Son noyau, formé de protons et de neutrons, concentre plus de 99,9 pour cent de sa masse dans un diamètre cent mille fois plus petit.',
            },
            {
              id: 'vide',
              text: 'Ramené à notre échelle : si le noyau était une bille d’un centimètre, l’atome ferait un kilomètre de diamètre. Tout le reste est occupé par les électrons, qu’il ne faut d’ailleurs pas se représenter comme des billes en orbite, mais comme une probabilité de présence répartie dans ce volume.',
            },
            {
              id: 'assembler',
              text: 'La solidité n’est donc pas une question de remplissage, mais de forces. Ce qui empêche ta main de traverser la table, c’est la répulsion électromagnétique entre électrons, renforcée par le principe d’exclusion de Pauli, qui interdit à deux électrons d’occuper le même état. La matière est vide, et pourtant impénétrable.',
            },
          ],
        },
      },
    },
    en: {
      title: {
        '3-5': 'The tiniest grains',
        '6-8': 'Atoms, and the empty space inside',
        '9-12': 'The atom: almost entirely empty',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'decouper',
              text: 'Cut a piece of bread in two. Then in two again. And again, and again.',
            },
            {
              id: 'atome',
              text: 'In the end you reach grains so small that they cannot be cut any more. They are called atoms.',
            },
            {
              id: 'vide',
              text: 'And the funny part: an atom is nearly all empty! A tiny bead in the middle, and lots of nothing around it.',
            },
            {
              id: 'assembler',
              text: 'Everything is made with them: you, water, air, the stars. It is just arranged differently.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'decouper',
              text: 'Imagine cutting an object in two, over and over again. Can you carry on for ever? No: in the end you reach the atom.',
            },
            {
              id: 'atome',
              text: 'An atom is unimaginably small. In a single grain of sand there are more atoms than there are grains of sand on all the beaches on Earth.',
            },
            {
              id: 'vide',
              text: 'And here is the most surprising part: an atom is essentially empty. If its nucleus were a marble in the middle of a stadium, the electrons would be going round in the stands — and between the two, there would be nothing.',
            },
            {
              id: 'assembler',
              text: 'So the table under your hand is mostly empty space, and your hand is too. If they do not go through each other, it is not because they are full: it is because their electrons push each other away.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'decouper',
              text: 'The idea that there is a limit to dividing things goes back to Democritus, twenty-four centuries before anyone could demonstrate it. The word atom means “that cannot be cut” — which turned out to be false, since it was eventually split, but the name stayed.',
            },
            {
              id: 'atome',
              text: 'An atom measures about a tenth of a nanometre. Its nucleus, made of protons and neutrons, concentrates more than 99.9 per cent of its mass into a diameter a hundred thousand times smaller.',
            },
            {
              id: 'vide',
              text: 'Brought up to our scale: if the nucleus were a marble one centimetre across, the atom would be a kilometre wide. All the rest is taken up by the electrons, which should not, by the way, be pictured as marbles in orbit, but as a probability of presence spread through that volume.',
            },
            {
              id: 'assembler',
              text: 'Solidity is therefore not a question of filling, but of forces. What stops your hand going through the table is the electromagnetic repulsion between electrons, reinforced by the Pauli exclusion principle, which forbids two electrons from occupying the same state. Matter is empty, and yet impenetrable.',
            },
          ],
        },
      },
    },
  },
};
