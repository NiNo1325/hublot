import { cards } from '@/content/cards';
import { domains } from '@/content/domains';
import { MondesView } from '@/components/lumi/MondesView';

/** L'avancée monde par monde, et les deux médailles à décrocher. */
export default function MondesPage() {
  return <MondesView cards={cards} domains={domains} />;
}
