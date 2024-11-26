import { Span } from "@/shared/Components/Typography";
import React from "react";

interface Props {
  formatsAccepted: string[];
}

export const FormatsAccepted = ({ formatsAccepted }: Props) => {
  if (!!!formatsAccepted.length) return <></>;

  return (
    <div>
      <Span
        text={"Os formatos permitidos são "}
        size="small"
        weight="medium"
      />
      {formatsAccepted.map((format, index) => (
        <Span
          text={`.${format}${index + 1 < formatsAccepted.length ? ", " : ""}`}
          size="small"
          weight="medium"
          key={index}
        />
      ))}
    </div>
  );
};
