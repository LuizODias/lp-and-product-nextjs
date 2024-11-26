import React, { Dispatch, SetStateAction } from "react";
import { Span } from "../../Typography";

export interface GroupButtonProps {
  firstOptionText: string;
  secondOptionText: string;
  onChange: Dispatch<SetStateAction<boolean>>;
  value: any;
}

export const GroupButton = ({
  firstOptionText,
  secondOptionText,
  onChange,
  value,
}: GroupButtonProps) => {
  const handleBgPosition = () => {
    return value ? "translate-x-0 w-[51px]" : "translate-x-[50px] w-[85px]";
  };

  return (
    <div className="w-[144px] p-1 h-9 flex flex-row bg-[#4D6E95]/10 relative shadow-layoutBorder rounded-md cursor-pointer select-none">
      <div
        className={`absolute bg-white h-7 ${handleBgPosition()} transition-transform duration-300 rounded-md translate-y-   z-0`}
      />
      <div
        className="bg-transparent w-[51px] flex justify-center items-center z-0 transition-colors duration-300"
        onClick={() => onChange(true)}
      >
        <p className={!value ? "text-[#66768C] font-normal" : "text-primary-base font-medium"}>
          {firstOptionText}
        </p>
      </div>
      <div
        className="bg-transparent w-[85px] flex justify-center items-center z-0 transition-colors duration-300"
        onClick={() => onChange(false)}
      >
        <p className={value ? "text-[#66768C] font-normal" : "text-primary-base font-medium"}>
          {secondOptionText}
        </p>
      </div>
    </div>
  );
};
