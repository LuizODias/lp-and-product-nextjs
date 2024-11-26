import React, { ReactNode } from 'react';
import { Title, TitleProps } from '../Title';

export interface TitleWithIconsTwoSidesProps {
  title: TitleProps;
  icon: ReactNode;
}
export const TitleWithIconsTwoSides = ({
  icon: Icon,
  title,
}: TitleWithIconsTwoSidesProps) => {
  return (
    <div className="w-full flex flex-row gap-x-3 items-center justify-center">
      {Icon}
      <Title {...title} />
      {Icon}
    </div>
  );
};
