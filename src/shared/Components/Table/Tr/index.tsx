import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Tr = ({ children }: Props) => {
  return <tr className="border">{children}</tr>;
};
