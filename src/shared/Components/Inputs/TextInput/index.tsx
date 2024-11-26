import React from "react";
import { LayoutInput } from "../Layout";
import { UseFormRegister, ValidationRule } from "react-hook-form";

export interface TextInputProps {
  name: string;
  label: string;
  error?: string;
  maxLength?: number;
  placeholder?: string;
  required?: boolean;
  isValid: boolean;
  pattern?: ValidationRule<RegExp>;
  register: UseFormRegister<any>;
}

export const TextInput = (props: TextInputProps) => {
  const { register, pattern, required, isValid, maxLength, ...rest } = props;

  const borderClasses = () => {
    if (rest.error?.length) return "border-status-errorModal";
    else if (isValid) return "border-status-success";
    else return "border-gray-base";
  };

  return (
    <LayoutInput {...rest} required={required}>
      <div className="relative flex flex-row w-full">
        <input
          maxLength={maxLength}
          {...rest}
          {...register(rest.name, { required, pattern })}
          className={`w-full h-11 border-2 bg-white font-medium placeholder:text-gray-500 shadow-inputBorder rounded-md py-3 px-4 text-black ${borderClasses()} font-medium placeholder:text-grayTextColor placeholder:text-sm outline-none text-sm`}
        />
        {rest.error?.length && (
          <div className="absolute right-2 top-3 input-icon-invalid h-[18px] w-[18px]" />
        )}
        {isValid && !rest.error?.length && (
          <div className="absolute right-2 top-3 input-icon-valid h-[18px] w-[18px]" />
        )}
      </div>
    </LayoutInput>
  );
};
