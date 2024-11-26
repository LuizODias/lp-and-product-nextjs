import React from "react";
import { VariantProps, tv } from "tailwind-variants";

const TypographyVariants = tv({
  variants: {
    background: {
      primary: "bg-secondary rounded-full px-3 py-1",
      success: "bg-status-success bg-opacity-10 rounded-full px-3 py-1",
      warning: "bg-status-warning bg-opacity-10 rounded-full px-3 py-1",
      failed: "bg-status-error bg-opacity-10 rounded-full px-3 py-1",
      excluded: "bg-darkTextColor bg-opacity-10 rounded-full px-3 py-1",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
    textColor: {
      primary: "text-primary-base", // #2D71DF
      success: "text-status-success", //#169E86
      error: "text-status-error", //#FF4158
      dark: "text-darkTextColor", //#202020
      warning: "text-status-warning", //#AB34D6
      gray: "text-grayTextColor", //#565151
      mediumGray: "text-gray-mid", //#929292
      strongGray: "text-gray-strong", //#3F4A59
      strongerGray: "text-gray-stronger", //#202020
      white: "text-white", //#FFFFFF
      midnightHaze: "text-midnightHaze", //#475467
      black: "text-black", //#000000m
      textGrayBlue: "text-gray-blue" //#9CA3AF
    },
    size: {
      xxSmall: "text-[10px]/[14px]", //size: '10px lineHeight: '14px'
      xSmall: "text-xs", //size: '12px lineHeight: 16px
      small: "text-sm", //size 14px lineheight: 18px'
      medium: "text-base", //size: 16px lineHeight: 20px
      large: "text-xl/[20px]", // size: 20px lineHeight: 24px
      xLarge: "text-2xl/[26px]", // size: 24px, lineHeight: 26px
      xxLarge: "text-[32px]/[36px]", //size: 32px, lineHeight: 36px
      hero: "text-[42px]/[62px]", //size: 42px, lineHeight: 62px
    },
    alignment: {
      center: "text-center",
      justify: "text-justify",
      left: "text-left",
      right: "text-right",
      none: "w-fit sm:text-center",
    },
  },
  defaultVariants: {
    textColor: "dark",
    background: undefined,
    size: "medium",
    weight: "medium",
    alignment: "none",
    leading: "normal",
  },
});

type asTypes =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "strong"
  | "p"
  | "label"
  | "b"
  | "i"
  | "em";

interface Props<Tag extends keyof JSX.IntrinsicElements & asTypes>
  extends VariantProps<typeof TypographyVariants> {
  as: Tag;
  text: string;
  rest?: React.ComponentPropsWithRef<Tag>;
}

export function Typography<T extends asTypes>({
  as,
  text,
  background,
  size,
  textColor,
  weight,
  alignment,
  rest,
}: Props<T>) {
  const Component = as as React.ElementType;
  return (
    <Component
      className={TypographyVariants({
        alignment,
        background,
        size,
        textColor,
        weight,
      })}
      {...rest}
    >
      {text}
    </Component>
  );
}
