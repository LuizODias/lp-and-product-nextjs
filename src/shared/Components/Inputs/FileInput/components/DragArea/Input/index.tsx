import React from "react";

interface Props {
  inputRef: React.MutableRefObject<HTMLInputElement | null>;
  extensionAccepted: string;
  multiple: boolean;
  handleClickOnButton: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
  inputRef,
  extensionAccepted,
  multiple,
  handleClickOnButton,
}: Props) => {
  return (
    <input
      type="file"
      className="hidden"
      ref={inputRef}
      accept={extensionAccepted}
      onInput={handleClickOnButton}
      multiple={multiple}
    />
  );
};
