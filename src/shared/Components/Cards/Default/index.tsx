import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const DefaultCard = ({ children }: Props) => {
  return (
    <div className="w-full  object-fit  min-h-[220px]  border-2 border-b-4 border-black rounded-md px-7 py-5">
      {children}
    </div>
  );
};
