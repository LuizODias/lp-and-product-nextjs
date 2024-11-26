import {
  ChangeEvent,
  DragEvent,
  MutableRefObject,
  useCallback,
  useMemo,
  useState,
} from "react";

interface Props {
  inputRef: MutableRefObject<HTMLInputElement | null>;
  handleFile: (fileList: FileList) => void;
  formatsAccepted: string[];
}

export const useFileInputHooks = ({
  handleFile,
  inputRef,
  formatsAccepted,
}: Props) => {
  const [dragging, setDragging] = useState(false);
  const handleClick = useCallback(() => {
    if (inputRef?.current?.click) inputRef.current.click();
  }, [inputRef]);

  const extensionAccepted = useMemo(
    () => formatsAccepted.join(","),
    [formatsAccepted],
  );

  const handleDrag = (e: DragEvent<HTMLDivElement>) => {
    setDragging(true);
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    setDragging(false);
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
    handleFile(e.dataTransfer.files);
  };

  const handleClickOnButton = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (!!e.target?.files?.length) {
      handleFile(e.target.files);
    }
  };
  return {
    handleClickOnButton,
    handleDrop,
    handleDrag,
    handleDragLeave,
    extensionAccepted,
    handleClick,
    dragging,
  };
};
