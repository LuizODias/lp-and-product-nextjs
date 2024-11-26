import React, { ReactNode, useMemo } from "react";

export interface SpanProps {
  text: ReactNode;
  size: "extraSmall" | "small" | "medium" | "large" | "normal" | "extraLarge";
  weight: "normal" | "medium" | "semibold" | "bold";
  color?: "normal" | "white" | "gray" | "primary" | "error";
  error?: boolean;
  underline?: boolean;
  className?: string;
  letter?: "hero" | "title" | "normal" | "description";
  line?: "normal" | "short" | "long";
}

export const Span = ({
  text,
  size,
  weight,
  color,
  error = false,
  underline = false,
  className,
  letter,
  line,
}: SpanProps) => {
  const sizeClasses = useMemo(() => {
    switch (size) {
      case "extraSmall":
        return " text-xs";
      case "small":
        return " text-sm";
      case "medium":
        return " text-lg";
      case "normal":
        return " text-base";
      case "extraLarge":
        return " text-5xl";
      case "large":
        return " text-2xl";
      default:
        return " text-xl";
    }
  }, [size]);

  const lineClasses = useMemo(() => {
    switch (line) {
      case "normal":
        return " leading-4";
      case "long":
        return " leading-5";
      case "short":
        return " leading-3";
      default:
        return ""
    }
  }, [line]);

  const letterClasses = useMemo(() => {
    switch (letter) {
      case "hero":
        return " tracking-[-2.16px]";
      case "title":
        return " tracking-[0.24px]";
      case "normal":
        return " tracking-[0.48px]";
      case "description":
        return " tracking-[0.42px]";
      default:
        return ""
    }
  }, [letter]);

  const colorClasses = useMemo(() => {
    switch (color) {
      case "white":
        return " text-white";
      case "gray":
        return " text-gray-dark";
      case "primary":
        return " text-primary-base"
      case "error":
        return " text-status-errorModal";
      default:
        return " text-black"
    }
  }, [color]);

  const errorClasses = useMemo(() => {
    if (error) return " text-red-600";
    return "";
  }, [error]);

  const underlineClasses = useMemo(() => {
    if (underline) return " underline decoration-1";
    return "";
  }, [underline])

  const weightClasses = useMemo(() => {
    switch (weight) {
      case "normal":
        return " font-normal";
      case "medium":
        return " font-medium";
      case "semibold":
        return " font-semibold";
      default:
        return " font-bold";
    }
  }, [weight]);

  return (
    <p
      className={`${lineClasses}${sizeClasses}${letterClasses}${weightClasses}${colorClasses}${errorClasses}${underlineClasses} ${className ? className : ""}`}
    >
      {text}
    </p>
  );
};
