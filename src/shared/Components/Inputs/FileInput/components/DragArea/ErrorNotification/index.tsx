import React from "react";
import { Span } from "@/shared/Components/Typography";
import { Button } from "@/shared/Components/Buttons";
import {
  ExclamationTriangleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

interface Props {
  notification: string;
  handleDiscardNotification: (file: string) => void;
}

export const ErrorNotification = ({
  notification,
  handleDiscardNotification,
}: Props) => {
  return (
    <li className="flex items-center gap-3 justify-between min-w-[360px]  bg-status-errorBackground rounded-[4px] p-3 cursor-pointer">
      <Button onClick={() => handleDiscardNotification(notification)}>
        <div className="w-full flex flex-row gap-1 items-center">
          <ExclamationTriangleIcon className="w-5 h-5 stroke-2 stroke-[#C94040]" />
          <Span
            text={notification}
            size="extraSmall"
            weight="bold"
          />
        </div>

        <div className="scale-75 cursor-pointer">
          <XMarkIcon
            className="w-5 h-5 stroke-2 stroke-strongGrayTextColor"
            data-testid="xMarkIcon"
          />
        </div>
      </Button>
    </li>
  );
};
