import { cards } from '@/content/cards';
import { domains } from '@/content/domains';
import { ParcoursView } from '@/components/parcours/ParcoursView';

/** Server Component : catalogue statique importé au build. */
export default function ParcoursPage() {
  return <ParcoursView cards={cards} domains={domains} />;
}
