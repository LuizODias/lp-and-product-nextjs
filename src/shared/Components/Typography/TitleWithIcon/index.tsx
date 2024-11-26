import React, { ReactNode } from 'react';
import { Title, TitleProps } from '../Title';

export interface TitleWithIconProps {
  title: TitleProps;
  icon: ReactNode;
}

export const TitleWithIcon = ({ title, icon: Icon }: TitleWithIconProps) => {
  return (
    <div className="w-full flex flex-col items-center">
      {Icon}
      <Title {...title} />
    </div>
  );
};
