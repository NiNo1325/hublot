import { cards } from '@/content/cards';
import { domains } from '@/content/domains';
import { DiscoverView } from '@/components/cards/DiscoverView';

/**
 * Server Component : le catalogue est statique et importé au build, il n'y a ni
 * fetch ni latence réseau à l'ouverture de la page.
 */
export default function DecouvrirPage() {
  return <DiscoverView cards={cards} domains={domains} />;
}
