import { cards } from '@/content/cards';
import { domains } from '@/content/domains';
import { MondesView } from '@/components/cards/MondesView';

/**
 * Découvrir : la bibliothèque, et rien d'autre.
 *
 * L'onglet ouvrait sur un choix — exploration libre, parcours guidé, mur des
 * savants — c'est-à-dire sur une question de méthode posée avant que rien ne se
 * soit passé. Le récit vit maintenant au musée, et les savants y ont leur mur ;
 * ici, on vient chercher une carte à écouter, librement, pour aller ensuite
 * répondre à sa question. Une bibliothèque n'a pas besoin de vestibule.
 */
export default function DecouvrirPage() {
  return <MondesView cards={cards} domains={domains} />;
}
