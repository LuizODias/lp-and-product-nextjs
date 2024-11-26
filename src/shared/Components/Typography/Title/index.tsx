import React, { ReactNode, useMemo } from 'react';

export type titleAs = 'h1' | 'h2' | 'h3' | 'h4';
export type titleSize = 'small' | 'medium' | 'large' | 'extraLarge';
export type titleWeight = 'bold' | 'semibold';
export interface TitleProps {
  as: titleAs;
  text: ReactNode;
  size: titleSize;
  weight: titleWeight;
  center?: boolean;
}

export const Title = ({
  as,
  text,
  size,
  weight,
  center = true,
}: TitleProps) => {
  const CustomTag = as;

  const centerClasses = useMemo(() => {
    return center ? 'text-center' : '';
  }, [center]);

  const weightClasses = useMemo(() => {
    switch (weight) {
      case 'semibold':
        return 'font-semibold';
      default:
        return 'font-bold';
    }
  }, [weight]);

  const sizeClasses = useMemo(() => {
    switch (size) {
      case 'small':
        return 'md:text-lg';
      case 'medium':
        return 'md:text-xl text-lg';
      case 'large':
        return 'md:text-2xl text-xl';
      default:
        return 'md:text-3xl text-2xl';
    }
  }, [size]);

  return (
    <CustomTag
      className={`${sizeClasses} ${weightClasses} ${centerClasses} text-black `}
    >
      {text}
    </CustomTag>
  );
};
