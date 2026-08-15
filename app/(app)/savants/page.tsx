import { cards } from '@/content/cards';
import { WallOfFameView } from '@/components/savants/WallOfFameView';

/** Server Component : catalogue statique importé au build. */
export default function SavantsPage() {
  return <WallOfFameView cards={cards} />;
}
