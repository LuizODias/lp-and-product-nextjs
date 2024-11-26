"use client"
import { ReactNode } from "react";
import { HeadCustom } from "@/shared";
import { Figtree } from "next/font/google";

interface Props {
  children: ReactNode;
}

const figtree = Figtree({
  weight: "variable",
  subsets: ["latin"],
  adjustFontFallback: true,
});

export const FigtreeProvider = ({ children }: Props) => {
  return (
    <div className={figtree.className}>
      <HeadCustom />
      {children}
    </div>
  );
};
