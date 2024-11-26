import React, { ReactNode } from "react";

interface DropDownItemTypes {
  children: ReactNode
}

export interface NotificationDropDownProps {
  items: DropDownItemTypes[];
  onClose: () => void;
}

export const NotificationDropDown = ({
  items,
  onClose,
}: NotificationDropDownProps) => {
  return (
    <div className="right-20 top-8 absolute z-30">
      <div className="w-full flex flex-col items-center shadow-componentShadow border bg-white border-secondary py-3 px-4">
        <div
          className="fixed top-0 left-0  w-screen h-screen z-30 cursor-default"
          onClick={onClose}
        />
        <ul className="z-40 flex flex-col list-none m-0 break-normal">
          {items.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-row gap-2 justify-end items-center w-[374px]"
              >
                {item.children}
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
