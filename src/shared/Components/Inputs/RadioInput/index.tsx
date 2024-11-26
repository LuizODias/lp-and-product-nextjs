import { InputHTMLAttributes } from "react";
import { UseFormRegister } from "react-hook-form";
import { LayoutInput } from "../Layout";
import { OptionsType } from "@/shared/types";
import { Span } from "@/shared";

export interface RadioInputProps {
  name: string;
  title: string;
  error?: string;
  options: OptionsType[];
  required?: boolean;
  register: UseFormRegister<any>;
}

export const RadioInput = (props: RadioInputProps) => {
  const { name, options, title, register, required } = props;

  return (
    <LayoutInput label={title} {...props}>
      {options.map((option, index) => {
        return (  
          <label htmlFor={`field-${option.label}`} key={index}>
            <input
              {...register(name, { required })}
              type="radio"
              value={option.value}
              id={`field-${option.label}`}
              key={index}
              className="mr-3"
            />
            {option.label}
          </label>
        );
      })}
    </LayoutInput>
  )
}
