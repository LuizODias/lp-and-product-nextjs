import { useSingleFileImport } from "@/shared/hooks/useSingleFileImport";

export const useFiles = () => {
  const backtestFile = useSingleFileImport({
    acceptedExtensions: ["csv"],
  });

  return {
    backtestFile,
  };
};
