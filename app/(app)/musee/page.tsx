import { cards } from '@/content/cards';
import { MuseeView } from '@/components/musee/MuseeView';

/** Le mur des savants : le fil conducteur, et la carte de progression. */
export default function MuseePage() {
  return <MuseeView cards={cards} />;
}
