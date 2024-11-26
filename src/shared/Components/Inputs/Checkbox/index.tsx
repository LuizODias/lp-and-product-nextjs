import React from "react";
import { LayoutInput } from "../Layout";
import { OptionsType } from "@/shared/types";
import { UseFormRegister } from "react-hook-form";

export interface CheckBoxInputProps {
  name: string;
  label: string;
  error?: string;
  options: OptionsType[];
  required?: boolean;
  register: UseFormRegister<any>;
}

export const CheckBox = ({
  name,
  label,
  error,
  options,
  required = false,
  register,
}: CheckBoxInputProps) => {
  return (
    <LayoutInput name={name} label={label} error={error} required={required}>
      <div
        id="select-wrapper"
        className="w-full relative flex flex-col gap-2.5"
      >
        {options.map((option, index) => {
          return (
            <InputCheckBox
              option={option}
              key={index}
              register={register}
              name={name}
            />
          );
        })}
      </div>
    </LayoutInput>
  );
};

interface OptionProps {
  option: OptionsType;
  register: UseFormRegister<any>;
  name: string;
}

const InputCheckBox = ({ option, register, name }: OptionProps) => {
  return (
    <div className="flex flex-row items-center gap-2.5">
      <input
        type="checkbox"
        {...register(name)}
        value={option.value}
        className="h-5 w-5"
      />
      {option.label}
    </div>
  );
};
