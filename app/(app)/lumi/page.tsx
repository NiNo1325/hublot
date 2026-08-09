import { cards } from '@/content/cards';
import { domains } from '@/content/domains';
import { LumiView } from '@/components/lumi/LumiView';

/** L'écran de suivi : rang, badges, progression par monde, échelle des rangs. */
export default function LumiPage() {
  return <LumiView cards={cards} domains={domains} />;
}
