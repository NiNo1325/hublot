import { cards } from '@/content/cards';
import { LiensView } from '@/components/liens/LiensView';

/** Relier chaque savant à sa découverte. */
export default function LiensPage() {
  return <LiensView cards={cards} />;
}
