import React, { HTMLAttributeAnchorTarget, ReactNode, useMemo } from "react";
import Link from "next/link";

interface Props {
  url?: string;
  children: ReactNode;
  underline?: boolean;
  target?: HTMLAttributeAnchorTarget;
  download?: boolean;
  ariaLabel?: string;
  ariaDescription?: string;
  onClick?: () => void;
}

export const LinkComponent = ({
  url,
  children,
  underline = false,
  target = "_self",
  download = false,
  ariaLabel,
  ariaDescription,
  onClick,
}: Props) => {
  const underlineClasses = useMemo(
    () => (underline ? "underline" : ""),
    [underline],
  );

  if (!url) return <>{children}</>;

  return (
    <Link
      href={url}
      passHref={true}
      target={target}
      download={download}
      className={`${underlineClasses} `}
      aria-label={ariaLabel}
      aria-describedby={ariaDescription}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};
