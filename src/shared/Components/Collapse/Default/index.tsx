import React, { ReactNode, useEffect, useRef } from 'react';

import { useToggle } from '@/shared/hooks';
import { ArrowDownSelect } from '@/shared';

interface Props {
  Header: ReactNode;
  Body: ReactNode;
  border?: boolean;
  verticalPadding?: boolean;
  disabled?: boolean;
  startOpen?: boolean;
  bodyPadding?: boolean;
  shortPadding?: boolean;
  eventOnClose?: () => void;
  borderTopBody?: boolean;
}

export const DefaultCollapse = ({
  Header,
  Body,
  border = true,
  verticalPadding = true,
  disabled = false,
  bodyPadding = true,
  startOpen,
  borderTopBody = false,
  shortPadding = false,
  eventOnClose,
}: Props) => {
  const ref = useRef<HTMLDetailsElement | null>(null);
  const { state, toggle, setState } = useToggle();

  useEffect(() => {
    if (ref.current && startOpen !== undefined) {
      setState(startOpen);
      if (startOpen) return ref.current.setAttribute('open', `open`);
      ref.current.removeAttribute('open');
    }
  }, [setState, startOpen]);

  return (
    <details
      ref={ref}
      onClick={(e) => {
        if (disabled) e.preventDefault();
      }}
      className={`${disabled ? 'cursor-auto' : ''} ${border ? 'shadow-layoutBorder' : ''} ${shortPadding ? 'p-4' : 'p-6'} border-black rounded-md`}
    >
      <summary
        className={`cursor-pointer ${
          state ? `${border ? '' : ''}` : 'border-none'
        } border-b-black border-opacity-20 list-none flex flex-row ${shortPadding ? '' : 'px-5'} justify-between items-center ${
          verticalPadding ? 'py-3' : ''
        } gap-5 w-full`}
        onClick={() => {
          if (!disabled) {
            eventOnClose && startOpen && eventOnClose();
            toggle();
          }
        }}
      >
        {Header}
        <div
          className={`${
            !state ? '' : 'rotate-180'
          } transition-transform duration-200`}
        >
          <ArrowDownSelect />
        </div>
      </summary>
      <div
        className={`${bodyPadding ? 'px-5 py-4 ' : ''}${
          borderTopBody ? 'border-t border-[#5651511F]' : ''
        }`}
      >
        {Body}
      </div>
    </details>
  );
};
