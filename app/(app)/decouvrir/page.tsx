import { cards } from '@/content/cards';
import { domains } from '@/content/domains';
import { CielView } from '@/components/ciel/CielView';

/**
 * L'accueil : le ciel. Une étoile par carte, une constellation par monde.
 *
 * Server Component : le catalogue est statique et importé au build, comme
 * ailleurs. Il remplace le choix « libre ou guidé » qui ouvrait l'application —
 * une question de méthode posée avant que rien ne se soit passé.
 */
export default function DecouvrirPage() {
  return <CielView cards={cards} domains={domains} />;
}
