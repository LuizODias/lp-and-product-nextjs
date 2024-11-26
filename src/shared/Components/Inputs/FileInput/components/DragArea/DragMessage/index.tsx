import { Button } from "@/shared/Components/Buttons";
import { Paragraph } from "@/shared/Components/Typography";
import React, { useMemo } from "react";

interface Props {
  handleClick: () => void;
  multiple: boolean;
}

export const DragMessage = ({ handleClick, multiple }: Props) => {
  const buttonMessage = useMemo(() => {
    if (multiple) return "selecione os arquivos";
    return "selecione o arquivo";
  }, [multiple]);
  return (
    <Paragraph
      size="medium"
      weight="bold"
      text={
        <>
          {" "}
          Arraste seu arquivo aqui ou{" "}
          <Button type="button" onClick={handleClick}>
            <span className="underline text-primary-base cursor-pointer">
              {buttonMessage}
            </span>
          </Button>
        </>
      }
    />
  );
};
