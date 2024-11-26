import React, { ReactNode } from 'react';
import { Span } from '../Span';
import { Spacing } from '../../Spacing';
import { Paragraph } from '../Paragraph';

export interface TitleDescritiveProps {
  icon: ReactNode;
  title: string;
  subTitle: string;
  description: string;
}

export const TitleDescritive = ({
  icon: Icon,
  title,
  subTitle,
  description,
}: TitleDescritiveProps) => {
  return (
    <div className="flex flex-col items-center">
      <Spacing size="medium" />
      <div className="flex flex-col items-center w-9/12">
        <Span text={subTitle} size="large" weight="bold" />
        <Spacing size="small" />
        <Paragraph text={description} size="medium" weight="medium" center />
      </div>
    </div>
  );
};
