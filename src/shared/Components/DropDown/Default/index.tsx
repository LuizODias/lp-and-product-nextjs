import React, { ReactNode } from 'react';
import { Button, Span } from '../../..';

export interface DropDownItemTypes {
  buttonTitle?: string;
  text: string;
  icon: ReactNode;
  onClickFunction: () => void;
}

export interface DefaultDropDownProps {
  items: DropDownItemTypes[];
  onClose: () => void;
}

export const DefaultDropDown = ({ items, onClose }: DefaultDropDownProps) => {
  const handleClickOnOption = (callBack: () => void) => {
    callBack();
    onClose();
  };
  
  return (
    <div className="right-0 top-8 absolute z-30">
      <div className="w-full flex flex-col items-center shadow-componentShadow border bg-white border-secondary py-3 px-4  ">
        <div
          className="fixed top-0 left-0  w-screen h-screen z-30 cursor-default"
          onClick={onClose}
        />
        <ul className="z-40 flex flex-col list-none m-0">
          {items.map((item) => {
            return (
              <Button
                size='full'
                title={item.buttonTitle}
                onClick={() => handleClickOnOption(item.onClickFunction)}
                key={item.text}
              >
                <div className="flex flex-row gap-2 justify-end items-center w-auto">
                  {item.icon}
                  <Span text={item.text} size="small" weight="medium" className='whitespace-nowrap'/>
                </div>
              </Button>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
