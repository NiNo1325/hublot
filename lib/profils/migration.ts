import { avatarParDefaut } from './avatars';
import { ecrireProfils, lireProfils } from './serialisation';
import { CLE_PROFILS, CLE_PROFIL_ACTIF, CLES_PROFIL, cle, cleHeritee } from './stockage';

type Lire = (cle: string) => string | null;
type Ecrire = (cle: string, valeur: string) => void;

/**
 * Fait entrer un joueur d'avant les profils dans le nouveau monde.
 *
 * Hublot tourne en production : des enfants ont déjà libéré des savants et
 * écouté des centaines de cartes. Au premier lancement après la mise à jour,
 * cette fonction crée un profil unique et y recopie l'état existant. L'enfant
 * ne voit rien — ni écran de bienvenue, ni choix à faire, ni progression
 * perdue : ses cartes sont là, simplement rangées sous un profil.
 *
 * Les anciennes clés sont **copiées, jamais effacées**. Elles ne coûtent que
 * quelques kilo-octets, et elles laissent une version antérieure de l'app
 * relire la progression si une mise à jour devait être retirée du Play Store.
 *
 * Reçoit ses accès au stockage en paramètres plutôt que d'importer
 * `lib/storage` : c'est ce qui la rend testable sous node, et c'est la seule
 * partie du chantier où un bug se paierait en semaines d'écoute effacées.
 */
export function migrer(lire: Lire, ecrire: Ecrire, nouvelId: () => string): void {
  const dejaFait = lireProfils(lire(CLE_PROFILS)).length > 0;
  if (dejaFait) return;

  const id = nouvelId();

  for (const nom of CLES_PROFIL) {
    const ancienne = lire(cleHeritee(nom));
    if (ancienne !== null) ecrire(cle(nom, id), ancienne);
  }

  ecrire(CLE_PROFILS, ecrireProfils([{ id, prenom: '', avatar: avatarParDefaut() }]));
  ecrire(CLE_PROFIL_ACTIF, id);
}
