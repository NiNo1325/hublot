import { cards } from '@/content/cards';
import { domains } from '@/content/domains';
import { LumiView } from '@/components/lumi/LumiView';

/** L'écran de Lumi : son rang, puis le menu de ce qu'il y a à suivre. */
export default function LumiPage() {
  return <LumiView cards={cards} domainIds={domains.map((d) => d.id)} />;
}
