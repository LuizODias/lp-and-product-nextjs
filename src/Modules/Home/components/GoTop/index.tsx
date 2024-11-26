import { ChevronUpIcon } from "@heroicons/react/24/outline";

interface Props {
  showGoTop: string;
  scrollUp: () => void;
}

const GoTop = ({ showGoTop, scrollUp }: Props) => {
  return (
    <div className={showGoTop} onClick={scrollUp}>
      <button className="flex items-center justify-center w-full h-full cursor-pointer">
        <ChevronUpIcon className="text-white" height={24} />
      </button>
    </div>
  );
};
export default GoTop;
