import React from 'react';
import { Span } from '../Span';

interface ErrorMessageProps {
  text: string;
}

export const ErrorMessage = ({ text }: ErrorMessageProps) => {
  return (
    <div className='h-5'>
      <Span text={text} size="small" weight="normal" color="error" />
    </div>
  );
};
