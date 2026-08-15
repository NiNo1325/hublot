import { cards } from '@/content/cards';
import { DefiChrono } from '@/components/quiz/DefiChrono';

/** Server Component : catalogue statique importé au build. */
export default function ChronoPage() {
  return <DefiChrono cards={cards} />;
}
