import { useMemo } from "react";
import { DragArea } from "../DragArea";
import React from "react";
import { newValue } from "@/shared/hooks/useSingleFileImport";

interface Props {
  files: (newValue | File)[];
  multiple: boolean;
  handleDiscardSingleFile: (file: File | newValue) => void;
  errorsNotification: string[];
  handleDiscardNotification: (notification: string) => void;
}

export const FilesNotifications = ({
  files,
  multiple,
  handleDiscardSingleFile,
  errorsNotification,
  handleDiscardNotification,
}: Props) => {
  const hasFilesAndNoMultiple = useMemo(
    () => files.length > 0 && multiple,
    [files.length, multiple],
  );

  const hasErrorsAndIsMultiple = useMemo(
    () => errorsNotification.length > 0 && multiple,
    [errorsNotification.length, multiple],
  );
  return (
    <React.Fragment>
      {hasFilesAndNoMultiple && (
        <ul className="flex flex-col gap-2">
          {files.map((file) => {
            return (
              <DragArea.FileCard
                file={file}
                key={file.name}
                handleDiscardSingleFile={handleDiscardSingleFile}
              />
            );
          })}
        </ul>
      )}
      {hasErrorsAndIsMultiple && (
        <ul className="flex flex-col gap-2">
          {errorsNotification.map((notification, index) => {
            return (
              <DragArea.ErrorNotification
                notification={notification}
                key={index}
                handleDiscardNotification={handleDiscardNotification}
              />
            );
          })}
        </ul>
      )}
    </React.Fragment>
  );
};
