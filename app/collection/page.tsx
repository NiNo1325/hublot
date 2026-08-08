import { cards } from '@/content/cards';
import { domains } from '@/content/domains';
import { CollectionView } from '@/components/cards/CollectionView';

/** Server Component : catalogue statique importé au build. */
export default function CollectionPage() {
  return <CollectionView cards={cards} domains={domains} />;
}
