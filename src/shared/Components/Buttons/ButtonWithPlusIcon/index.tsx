import { Button, PlusIcon, Span } from '@/shared';
import React from 'react';

export interface ButtonWithPlusIconProps {
  onClick: () => void;
  text: string;
  full?: boolean;
}

export const ButtonWithPlusIcon = ({
  text,
  ...rest
}: ButtonWithPlusIconProps) => {
  return (
    <Button {...rest}>
      <div className="flex flex-row justify-center items-center px-2 py-2 md:min-w-[200px]">
        <PlusIcon />
        <Span text={text} size="medium" weight="semibold" />
      </div>
    </Button>
  );
};
