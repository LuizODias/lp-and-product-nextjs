import { CalltoAction, DefaultHeader, Footer } from '@/shared';
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const FrameLayout = ({ children }: Props) => {
  return (
    <div className="flex flex-wrap justify-center w-full mx-auto my-0 min-h-screen">
      <div className="flex flex-wrap content-start w-full justify-center bg-white min-w-[360px] rounded-2xl">
        <DefaultHeader />
        {children}
      </div>
      <Footer />
    </div>
  );
};
