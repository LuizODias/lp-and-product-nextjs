import { Span } from "@/shared/Components/Typography";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

export const ButtonFileModel = () => {
  return (
    <div className="w-full flex flex-row gap-1.5 outline-none items-center w justify-center h-9 px-4 py-1 rounded-full bg-primary-base">
      <ArrowDownTrayIcon
        width={15}
        height={15}
        className="stroke-2 stroke-white"
      />
      <span className="font-semibold text-white text-sm">Baixar arquivo modelo</span>
    </div>
  );
};
