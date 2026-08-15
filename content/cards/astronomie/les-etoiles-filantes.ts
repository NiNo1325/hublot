import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : aucune étoile ne tombe. Ce qui brille est un grain de
 * poussière de quelques milligrammes, et ce n'est même pas lui qu'on voit mais
 * l'air qu'il comprime devant lui, à quatre-vingts kilomètres d'altitude.
 */
export const card: ScienceCard = {
  id: 'les-etoiles-filantes',
  domainId: 'astronomie',
  animationId: 'etoiles-filantes',
  thumbnail: '💫',
  content: {
    fr: {
      title: {
        '3-5': 'Le trait de lumière dans la nuit',
        '6-8': 'Les étoiles filantes',
        '9-12': 'Météores : ce qui brille vraiment',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'souhait',
              text: 'La nuit, parfois, un trait de lumière file dans le ciel. On dit qu’une étoile est tombée.',
            },
            {
              id: 'grain',
              text: 'Mais les étoiles ne tombent pas. Ce qui file, c’est un tout petit caillou, plus petit qu’un grain de riz.',
            },
            {
              id: 'chauffe',
              text: 'Il arrive si vite qu’il devient brûlant, et l’air autour de lui s’allume. C’est cette lumière que tu vois.',
            },
            {
              id: 'pluie',
              text: 'Certaines nuits de l’année, il en passe beaucoup. On appelle ça une pluie d’étoiles filantes.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'souhait',
              text: 'Une étoile filante n’est pas une étoile qui tombe. Une vraie étoile est un soleil, énorme et immensément loin : elle ne peut pas nous tomber dessus.',
            },
            {
              id: 'grain',
              text: 'Ce qui traverse le ciel est un grain de poussière, souvent plus petit qu’un grain de riz, qui voyageait dans l’espace depuis très longtemps.',
            },
            {
              id: 'chauffe',
              text: 'Il entre dans l’air à une vitesse folle, des dizaines de kilomètres par seconde. L’air qu’il écrase devant lui devient brûlant et se met à briller, très haut, vers quatre-vingts kilomètres. Le grain, lui, disparaît en une seconde.',
            },
            {
              id: 'pluie',
              text: 'Chaque année, la Terre traverse des traînées de poussière abandonnées par des comètes. Ces nuits-là, on en compte des dizaines par heure — et toujours aux mêmes dates.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'souhait',
              text: 'Le nom trompe : rien ne tombe d’une étoile. Le phénomène s’appelle un météore, et il se joue dans notre atmosphère, pas dans les profondeurs du ciel.',
            },
            {
              id: 'grain',
              text: 'L’objet en cause est un météoroïde : le plus souvent un grain de quelques milligrammes, débris laissé par une comète ou arraché à un astéroïde.',
            },
            {
              id: 'chauffe',
              text: 'Il pénètre l’atmosphère entre onze et soixante-douze kilomètres par seconde. Ce n’est pas vraiment le frottement qui l’échauffe, mais l’air qu’il comprime violemment devant lui : ce gaz porté à des milliers de degrés s’ionise et brille. La traînée se forme vers quatre-vingts kilomètres, bien plus bas que la Station spatiale.',
            },
            {
              id: 'pluie',
              text: 'Si un fragment survit et touche le sol, on ne parle plus de météore mais de météorite. Les essaims — les Perséides en août, les Géminides en décembre — reviennent chaque année parce que l’orbite de la Terre recoupe la même traînée de débris.',
            },
          ],
        },
      },
    },
    en: {
      title: {
        '3-5': 'The streak of light in the night',
        '6-8': 'Shooting stars',
        '9-12': 'Meteors: what really glows',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'souhait',
              text: 'At night, sometimes, a streak of light shoots across the sky. People say a star has fallen.',
            },
            {
              id: 'grain',
              text: 'But stars do not fall. What shoots past is a tiny little stone, smaller than a grain of rice.',
            },
            {
              id: 'chauffe',
              text: 'It arrives so fast that it goes red hot, and the air around it lights up. That light is what you see.',
            },
            {
              id: 'pluie',
              text: 'On some nights of the year, lots of them go past. That is called a shower of shooting stars.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'souhait',
              text: 'A shooting star is not a star falling. A real star is a sun, enormous and immensely far away: it cannot fall on us.',
            },
            {
              id: 'grain',
              text: 'What crosses the sky is a speck of dust, often smaller than a grain of rice, that had been travelling through space for a very long time.',
            },
            {
              id: 'chauffe',
              text: 'It enters the air at a crazy speed, tens of kilometres per second. The air it crushes in front of it goes red hot and starts to glow, very high up, around eighty kilometres. The speck itself vanishes in a second.',
            },
            {
              id: 'pluie',
              text: 'Every year, the Earth crosses trails of dust left behind by comets. On those nights, dozens are counted every hour — and always on the same dates.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'souhait',
              text: 'The name misleads: nothing falls from a star. The phenomenon is called a meteor, and it plays out in our own atmosphere, not in the depths of the sky.',
            },
            {
              id: 'grain',
              text: 'The object responsible is a meteoroid: most often a grain weighing a few milligrams, debris left by a comet or torn from an asteroid.',
            },
            {
              id: 'chauffe',
              text: 'It enters the atmosphere at between eleven and seventy-two kilometres per second. It is not really friction that heats it, but the air it violently compresses in front of it: that gas, raised to thousands of degrees, ionises and glows. The trail forms at around eighty kilometres, far lower than the space station.',
            },
            {
              id: 'pluie',
              text: 'If a fragment survives and reaches the ground, we no longer speak of a meteor but of a meteorite. The showers — the Perseids in August, the Geminids in December — come back every year because the Earth’s orbit crosses the same trail of debris.',
            },
          ],
        },
      },
    },
  },
};
