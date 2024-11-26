import { Span } from "@/shared/Components/Typography";
import { newValue } from "@/shared/hooks/useSingleFileImport";
import {
  CloudIcon,
  DocumentTextIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

interface FileCardProps {
  file: File | newValue;
  handleDiscardSingleFile: (file: File | newValue) => void;
}

export const FileCard = ({ file, handleDiscardSingleFile }: FileCardProps) => {
  return (
    <li className="w-full flex items-center gap-3 justify-between min-w-[360px]  border border-borderColor   rounded-[4px] p-3">
      <div className="w-full flex flex-row gap-1 items-center">
        {file instanceof File ? (
          <DocumentTextIcon className="w-4 h-4 stroke-2 stroke-strongerGrayTextColor" />
        ) : (
          <CloudIcon className="w-5 h-5 stroke-2 stroke-strongerGrayTextColor" />
        )}
        <Span
          text={file.name}
          size="extraSmall"
          weight="semibold"
        />
      </div>

      <button
        className="scale-75 cursor-pointer"
        onClick={() => handleDiscardSingleFile(file)}
      >
        <XMarkIcon
          className="w-5 h-5 stroke-2 stroke-strongGrayTextColor"
          data-testid="xMarkIcon"
        />
      </button>
    </li>
  );
};
