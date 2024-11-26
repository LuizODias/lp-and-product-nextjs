import { VIEWS } from '@/constants/view';
import { useRouter } from 'next/navigation';

export const useHome = () => {
  const route = useRouter();
  const onModelSectionHeaderButton = () =>
    alert('Model Section Header Button Click');
  const onTrainingSectionHeaderButton = () => route.push(VIEWS.home());
  return { onModelSectionHeaderButton, onTrainingSectionHeaderButton };
};
