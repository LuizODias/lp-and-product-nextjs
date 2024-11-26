import React, { ReactNode } from "react";

interface Props {
  width?: string;
  children: ReactNode;
}

export const Td = ({ width, children }: Props) => {
  return (
    <td className="px-3" style={{ width: `${width || undefined}` }}>
      {children}
    </td>
  );
};
