import {
  ExclamationTriangleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import { useEffect, useState } from "react";

interface Props {
  open: boolean;
  text: string;
  full?: boolean;
  fixed?: boolean;
  closeable?: boolean;
  autoClose?: boolean;
}

export const FeedbackWarning = ({
  open,
  text,
  full = false,
  fixed = false,
  closeable = false,
  autoClose = false,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(open);
    if (autoClose) {
      setTimeout(() => {
        setIsOpen(false);
      }, 1500);
    }
  }, [autoClose, open]);

  return (
    <>
      {isOpen && (
        <div
          className={`rounded-md bg-red-50 p-4 border-red-400 border-[1px] ${
            fixed ? "fixed" : ""
          } ${full ? "w-full" : ""}`}
        >
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <ExclamationTriangleIcon
                className="h-6 w-6 text-red-400"
                aria-hidden="true"
              />
            </div>
            <div className="ml-3">
              <p className="body-small-semi text-darkTextColor">{text}</p>
            </div>
            {closeable ? (
              <div className="ml-auto pl-3">
                <div className="-mx-1.5 -my-1.5">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="inline-flex rounded-md bg-red-50 p-1.5 text-red-400 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-red-50"
                  >
                    <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      )}
    </>
  );
};
