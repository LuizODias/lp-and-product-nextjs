import React from "react";

export interface Props {
  className?: string;
}

export const Divider = ({className}: Props) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
      <circle cx="4" cy="4" r="4" fill="#777777" />
    </svg>
  )
}