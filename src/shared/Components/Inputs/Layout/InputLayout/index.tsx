import { Label } from "@/shared/Components/Typography";
import { ErrorMessage } from "@/shared/Components/Typography/Error";
import React, { ReactNode } from "react";

export interface TextInputProps {
  name: string;
  label?: string;
  children: ReactNode;
  error?: string;
  required?: boolean;
}

export const LayoutInput = ({ children, ...props }: TextInputProps) => {
  return (
    <div className="flex flex-col gap-[5px]">
      <div className="flex flex-col gap-2.5">
        <Label
          httpfor={props.name}
          text={props.label}
          required={props.required}
        />
        {children}
      </div>
      <ErrorMessage text={props.error || ""} />
    </div>
  );
};
