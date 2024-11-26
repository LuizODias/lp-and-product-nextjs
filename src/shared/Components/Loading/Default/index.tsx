import React from 'react';
import { PulseLoader } from 'react-spinners';

interface Props {
  className?: string 
}

export const Loader = ({ className }: Props) => {
  return <PulseLoader color="#2D71DF" className={className}/>;
};
