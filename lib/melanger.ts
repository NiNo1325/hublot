/**
 * Mélange de Fisher-Yates, sans modifier la source.
 *
 * Trois jeux s'en servent désormais — le quizz, le Défi chrono et le Mémo. Il
 * vivait dans le tirage du quizz, ce qui obligeait le Mémo à importer un module
 * de contenu de quizz pour brasser des cartes : le sortir ici coupe ce lien
 * qui n'avait pas de sens.
 */
export function melanger<T>(liste: T[]): T[] {
  const copie = [...liste];
  for (let i = copie.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copie[i], copie[j]] = [copie[j], copie[i]];
  }
  return copie;
}
