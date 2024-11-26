import React from 'react';
import { LayoutInput } from '../Layout';
import { ArrowDownIcon } from '../../Icons/ArrowDownIcon';
import { OptionsType } from "@/shared/types";
import { UseFormRegister } from 'react-hook-form';

export interface SelectInputProps {
  name: string;
  label: string;
  error?: string;
  required?: boolean;
  options: OptionsType[];
  placeholder?: string;
  register: UseFormRegister<any>;
}

export const Select = (props: SelectInputProps) => {
  const { options, register, required, placeholder } = props;
  return (
    <LayoutInput {...props}>
      <div id="select-wrapper" className="w-full relative ">
        <select
          className="text-sm w-full h-11 border-2 cursor-pointer bg-white border-gray-base rounded-[6px] py-2 px-3 text-black font-medium placeholder:text-gray-500 appearance-none"
          {...register(props.name, { required })}
        >
          <Option option={{label: placeholder ? placeholder : "Selecione...", value: ""}} hidden />
          {options.map((option, index) => {
            return <Option option={option} key={index} />;
          })}
        </select>
        <div className="absolute right-0 top-0 py-2 pr-3 text-lightGray">
          <ArrowDownIcon />
        </div>
      </div>
    </LayoutInput>
  );
};

interface OptionProps {
  option: OptionsType;
  hidden?: boolean;
}

const Option = ({ option, hidden }: OptionProps) => {
  return (
    <option
      value={option.value}
      className="w-full py-2 px-3 text-black font-medium"
      disabled={hidden}
      hidden={hidden}
    >
      {option.label}
    </option>
  );
};
