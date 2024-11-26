import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Root = ({ children }: Props) => {
  return <div className="flex flex-col gap-2">{children}</div>;
};
