import { Button, Span } from '@/shared';
import React, { useMemo } from 'react';

export interface ButtonWithTextProps {
  text: string;
  full: boolean;
  onClick: () => void;
  dark: boolean;
  minW?: boolean;
  maxW?: boolean;
  disabled?: boolean;
  className?: string;
}

export const ButtonWithText = ({
  text,
  full,
  onClick,
  dark,
  minW = true,
  disabled = false,
  maxW = false,
  className,
}: ButtonWithTextProps) => {
  const darkClasses = useMemo(() => (dark ? 'bg-black' : ''), [dark]);
  const minWClasses = useMemo(
    () => (minW ? 'md:min-w-[200px]' : 'min-w-[200px]'),
    [minW],
  );

  return (
    <Button onClick={onClick} disabled={disabled} className={className}>
      <div
        className={`${darkClasses} w-full  flex flex-row justify-center items-center px-2 py-2 ${minWClasses} `}
      >
        <Span text={text} color={dark ? 'normal' : 'white'} size="medium" weight="medium" />
      </div>
    </Button>
  );
};
