import { cards } from '@/content/cards';
import { domains } from '@/content/domains';
import { QuizView } from '@/components/quiz/QuizView';

export default function QuizzPage() {
  return <QuizView cards={cards} domains={domains} />;
}
