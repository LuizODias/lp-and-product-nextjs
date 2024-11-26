import React, { ReactNode, useMemo } from 'react';

export interface ParagraphProps {
  text: ReactNode;
  size: 'small' | 'medium' | 'large';
  weight: 'normal' | 'medium' | 'semibold' | 'bold';
  center?: boolean;
}

export const Paragraph = ({
  text,
  size,
  weight,
  center = false,
}: ParagraphProps) => {
  const sizeClasses = useMemo(() => {
    switch (size) {
      case 'small':
        return 'text-sm';
      case 'medium':
        return 'text-base';
      default:
        return 'text-xl';
    }
  }, [size]);

  const weightClasses = useMemo(() => {
    switch (weight) {
      case 'normal':
        return 'font-base';
      case 'medium':
        return 'font-medium';
      case 'semibold':
        return 'font-semibold';
      default:
        return 'font-bold';
    }
  }, [weight]);

  const centerClasses = useMemo(() => (center ? 'text-center' : ''), [center]);

  return (
    <span
      className={`${sizeClasses} ${weightClasses} ${centerClasses} text-black leading-4`}
    >
      {text}
    </span>
  );
};
