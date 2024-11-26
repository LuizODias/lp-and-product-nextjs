import React, { ReactNode } from "react";
import { AsteriskIcon } from "../../Icons";

export interface LabelProps {
  text: ReactNode;
  httpfor: string;
  required?: boolean;
}

export const Label = (props: LabelProps) => {
  return (
    <label
      className={`flex flex-row text-sm font-medium text-[#111928] gap-1`}
      {...props}
    >
      {props.text}
      {props.required && (
        <div className="">
          <AsteriskIcon />
        </div>
      )}
    </label>
  );
};
