import { CheckCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
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

export const FeedbackSuccess = ({
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
          className={`rounded-md bg-green-50 p-4 border-green-400 border-[1px] ${
            fixed ? "fixed" : ""
          } top-20 right-7 ${full ? "w-full" : ""}`}
        >
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <CheckCircleIcon
                className="h-5 w-5 text-green-400"
                aria-hidden="true"
              />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-darkTextColor">{text}</p>
            </div>
            {closeable ? (
              <div className="ml-auto pl-3">
                <div className="-mx-1.5 -my-1.5">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="inline-flex rounded-md bg-green-50 p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
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
