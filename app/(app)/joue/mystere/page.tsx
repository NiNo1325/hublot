import { cards } from '@/content/cards';
import { MystereView } from '@/components/mystere/MystereView';

/** Trois indices, quelques portraits : qui est-ce ? */
export default function MysterePage() {
  return <MystereView cards={cards} />;
}
