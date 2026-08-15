import { cards } from '@/content/cards';
import { domains } from '@/content/domains';
import { MondesView } from '@/components/cards/MondesView';

/**
 * Server Component : catalogue statique importé au build. La page d'accueil de
 * Découvrir est désormais la grille des mondes.
 */
export default function DecouvrirPage() {
  return <MondesView cards={cards} domains={domains} />;
}
