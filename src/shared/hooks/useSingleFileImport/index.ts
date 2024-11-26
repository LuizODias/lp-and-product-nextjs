import { RefObject, useRef, useState } from "react";

export interface SingleFileInputProps {
  handleFileChange: (file: FileList) => void;
  handleDiscardFile: () => "" | undefined;
  file: File | undefined;
  inputRef: RefObject<HTMLInputElement>;
  acceptedExtensions: string[];
  handleDiscardSingleFile: (file: File) => void;
  handleDiscardNotification: (file: string) => void;
  errorNotification: string[];
}

interface Props {
  acceptedExtensions: string[];
}

export interface newValue {
  name: string;
  value: any;
}

export const useSingleFileImport = ({ acceptedExtensions }: Props) => {
  const [file, setFile] = useState<File>();
  const [errorNotification, setErrorNotification] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDiscardSingleFile = () => {
    handleDiscardFile();
  };

  const handleFileChange = (files: FileList) => {
    for (let i = 0; i < files.length; i++) {
      const extension = files[i].name.split(".").pop();

      if (acceptedExtensions.length)
        if (
          !acceptedExtensions.some(
            (acceptedExtension) => acceptedExtension === extension,
          )
        )
          return setErrorNotification([
            `O arquivo ${files[0].name} não é compatível.`,
          ]);
    }
    if (files.length) {
      setFile(undefined);
      setErrorNotification([]);
      return setFile(files[0]);
    }
  };

  const handleDiscardFile = () => {
    setFile(undefined);
    if (inputRef?.current?.value) return (inputRef.current.value = "");
  };

  const handleDiscardNotification = (file: string) => {
    setErrorNotification(errorNotification.filter((error) => error !== file));
  };

  return {
    handleFileChange,
    handleDiscardFile,
    file,
    inputRef,
    acceptedExtensions,
    handleDiscardSingleFile,
    errorNotification,
    handleDiscardNotification,
  };
};
