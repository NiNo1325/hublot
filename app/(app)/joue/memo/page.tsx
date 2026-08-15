import { cards } from '@/content/cards';
import { MemoView } from '@/components/memo/MemoView';

/** Server Component : catalogue statique importé au build. */
export default function MemoImagesPage() {
  return <MemoView cards={cards} variante="images" />;
}
