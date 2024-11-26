import React, { useMemo } from "react";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
  className?: string;
  disabled?: boolean;
  size?: "lg" | "sml" | "normal" | "full";
  status?: "normal" | "active";
  customType?: "primary" | "secondary" | "inverseSecondary";
  borderRadius?: "mid";
  title?: string;
}

export const Button = ({
  children,
  type,
  disabled = false,
  className,
  size,
  status,
  customType,
  borderRadius,
  title,
  ...rest
}: Props) => {
  const customTypeClass = useMemo(() => {
    switch (customType) {
      case "primary":
        return "text-white bg-primary-base hover:bg-primary-dark active:bg-primary-darkActive disabled:bg-primary-base/50";
      case "inverseSecondary":
        return `text-white bg-transparent border-[1px] border-white hover:border-[#BED3F5] 
          hover:text-[#BED3F5] active:border-[#BED3F5] active:text-[#BED3F5] 
          disabled:border-gray-mid disabled:text-gray-mid`;
      case "secondary":
        return `text-primary-base bg-transparent border-[1px] border-primary-base hover:border-primary-dark 
          hover:text-primary-dark active:border-primary-darkActive active:text-primary-darkActive 
          disabled:border-gray-mid disabled:text-gray-mid`;
    }
  }, [customType]);

  const statusClass = useMemo(() => {
    switch (status) {
      case "normal":
        return "text-white bg-primary-base";
      case "active":
        return "text-primary-base bg-primary-darkActive";
    }
  }, [status]);

  const sizeClass = useMemo(() => {
    switch (size) {
      case "lg":
        return "w-[313px] h-12 py-3";
      case "sml":
        return "w-[159px] h-6 py-1";
      case "full":
        return "w-full py-3";
      case "normal":
        return "px-[72px] py-2.5";
      default:
        return "w-fit h-10 p-2";
    }
  }, [size]);

  const borderRadiusClass = useMemo(() => {
    switch (borderRadius) {
      case "mid":
        return "rounded-md";
      default:
        return "rounded-3xl";
    }
  }, [borderRadius]);

  return (
    <button
      type={type}
      {...rest}
      title={title}
      disabled={disabled}
      className={`${className} ${statusClass} ${sizeClass} ${customTypeClass} ${borderRadiusClass} justify-center items-center flex`}
    >
      {children}
    </button>
  );
};
