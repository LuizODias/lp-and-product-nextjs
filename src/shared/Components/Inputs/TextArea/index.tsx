import React, { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import { LayoutInput } from '../Layout';
import { UseFormRegister } from 'react-hook-form';

export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
  placeholder?: string;
  error?: string;
  required?: boolean;
  register: UseFormRegister<any>;
}

export const TextArea = (props: TextAreaProps) => {
  const { register, ...rest } = props;

  const borderClasses = () => {
    if (rest.error?.length) return "border-status-error";
    else return "border-gray-base";
  };

  return (
    <LayoutInput {...rest}>
      <textarea
        {...rest}
        {...register(rest.name)}
        className={`border-[1px] ${borderClasses()} focus:border-gray-base rounded-[6px] py-2 px-3 text-black font-medium 
        placeholder:text-gray-500 h-[150px] resize-none`}
      />
    </LayoutInput>
  );
};
