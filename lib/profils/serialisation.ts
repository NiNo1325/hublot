export interface Profil {
  id: string;
  prenom: string;
  avatar: string;
}

/**
 * Lecture tolérante de la liste des profils.
 *
 * Contrairement aux cartes vues, un profil porte trois champs : le JSON se
 * justifie ici. En revanche il vient du disque d'un appareil qu'on ne contrôle
 * pas — une version future, une extension, un utilisateur curieux. Une valeur
 * illisible rend donc une liste vide plutôt qu'une exception : l'app repart sur
 * un profil neuf, ce qui est désagréable, là où une exception au démarrage
 * rendrait Hublot inutilisable.
 */
export function lireProfils(brut: string | null): Profil[] {
  if (!brut) return [];
  try {
    const analyse: unknown = JSON.parse(brut);
    if (!Array.isArray(analyse)) return [];
    return analyse.filter(estUnProfil).map((p) => ({
      id: p.id,
      prenom: typeof p.prenom === 'string' ? p.prenom : '',
      avatar: typeof p.avatar === 'string' ? p.avatar : '',
    }));
  } catch {
    return [];
  }
}

function estUnProfil(valeur: unknown): valeur is Partial<Profil> & { id: string } {
  return (
    typeof valeur === 'object' &&
    valeur !== null &&
    typeof (valeur as { id?: unknown }).id === 'string' &&
    (valeur as { id: string }).id.length > 0
  );
}

export function ecrireProfils(profils: readonly Profil[]): string {
  return JSON.stringify(profils);
}
