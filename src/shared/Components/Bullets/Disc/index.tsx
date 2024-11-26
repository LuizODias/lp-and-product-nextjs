import React, { ReactNode, useMemo } from 'react';

interface Props {
  children: ReactNode;
  gap: 'small' | 'medium' | 'large';
}

export const Bullet = ({ children, gap }: Props) => {
  const gapClasses = useMemo(() => {
    if (gap === 'small') return 'gap-1';
    if (gap === 'medium') return 'gap-2';
    return 'gap-3';
  }, [gap]);
  return (
    <div className={`flex flex-row items-center ${gapClasses}`}>
      •{children}
    </div>
  );
};
