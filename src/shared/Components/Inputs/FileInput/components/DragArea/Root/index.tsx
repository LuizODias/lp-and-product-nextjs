import React, { ReactNode } from "react";
import { VariantProps, tv } from "tailwind-variants";

const RootVariants = tv({
  base: "border-2 border-dashed border-borderColor py-6  rounded-md flex justify-center items-center flex-col",
  variants: {
    dragging: {
      true: "border-primary bg-secondary",
    },
  },
  defaultVariants: {
    dragging: false,
  },
});

interface Props extends VariantProps<typeof RootVariants> {
  children: ReactNode;
  handleDrag: (e: React.DragEvent<HTMLDivElement>) => void;
  handleDragLeave: (e: React.DragEvent<HTMLDivElement>) => void;
  handleDrop: (e: React.DragEvent<HTMLDivElement>) => void;
}

export const Root = ({
  children,
  dragging,
  handleDrag,
  handleDragLeave,
  handleDrop,
}: Props) => {
  return (
    <div
      onDragEnter={handleDrag}
      onDragLeave={handleDragLeave}
      onDragOver={handleDrag}
      onDrop={handleDrop}
      className={RootVariants({ dragging })}
      data-testid={"dragarea"}
    >
      {children}
    </div>
  );
};
