import React, { useMemo } from 'react';

export interface SpacingProps {
  size: 'small' | 'medium' | 'extraMedium' | 'large' | 'extraLarge';
}

export const Spacing = ({ size }: SpacingProps) => {
  const sizeClasses = useMemo(() => {
    switch (size) {
      case 'extraLarge':
        return 'p-16';
      case 'small':
        return 'p-1';
      case 'medium':
        return 'p-2';
      case 'extraMedium':
        return 'p-6';
      default:
        return 'p-8';
    }
  }, [size]);

  return <div className={sizeClasses} />;
};
