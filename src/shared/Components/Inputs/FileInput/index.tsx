import React, { MutableRefObject, ReactNode, useMemo } from "react";
import { Paragraph, Span } from "../../Typography";
import { Spacing } from "../../Spacing";
import { CloudUpIcon } from "../../Icons/CloudUpIcon";
import { useFileInputHooks } from "./useFileInputHooks";
import { LinkComponent } from "../../Link";
import { FilesNotifications } from "./components/FilesNotifications";
import { Root } from "./components/Root";
import { DragArea } from "./components/DragArea";
import { FileModel } from "./components/FileModel";
import { Button } from "../../Buttons";
import { newValue } from "@/shared/hooks/useSingleFileImport";
import { AsteriskIcon } from "../../Icons";
import { CloudArrowUpIcon } from "@heroicons/react/24/outline";

export interface InputFileProps {
  formatsAccepted: string[];
  handleFile: (file: any) => void;
  files: (newValue | File)[];
  inputRef: MutableRefObject<HTMLInputElement | null>;
  handleDiscardSingleFile: (file: any) => void;
  handleDiscardNotification: (file: any) => void;
  errorNotification: string[];
  title: string;
  description: ReactNode;
  big?: boolean;
  multiple?: boolean;
  modelLink?: string;
  Append?: ReactNode;
}

export const InputFile = (props: InputFileProps) => {
  const {
    title,
    description,
    inputRef,
    formatsAccepted,
    errorNotification,
    multiple = false,
    handleDiscardSingleFile,
    handleDiscardNotification,
    modelLink,
  } = props;
  const {
    extensionAccepted,
    handleClick,
    handleClickOnButton,
    handleDrag,
    handleDrop,
    handleDragLeave,
    dragging,
  } = useFileInputHooks({ ...props });

  const hasFileNotMultipleNoErrors = useMemo(
    () => props.files.length > 0 && !multiple && !!!errorNotification.length,
    [errorNotification.length, multiple, props.files.length]
  );

  const hasNoNotificationAndNoFiles = useMemo(
    () => (!!!errorNotification.length && !!!props.files.length) || multiple,
    [errorNotification.length, multiple, props.files.length]
  );

  const formatsText = useMemo(() => {
    return formatsAccepted.reduce((text: string, format: string, index) => {
      return `${text} .${format}${index + 1 < formatsAccepted.length ? ", " : ""}`;
    }, "");
  }, [formatsAccepted]);

  return (
    <Root>
      <div className="w-full">
        <div>
          <div className="flex flex-row gap-1">
            <Span text={title} weight="normal" size="small" />
            <AsteriskIcon />
          </div>
          <Spacing size="small" />
          <div
            onDragEnter={handleDrag}
            onDragLeave={handleDragLeave}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            className={`border rounded border-dashed border-borderColor ${
              dragging ? "border-primary bg-secondary" : ""
            }  py-6  rounded-md flex justify-center items-center flex-col $`}
          >
            {!!errorNotification.length && !multiple && (
              <DragArea.ErrorNotification
                notification={errorNotification[0]}
                handleDiscardNotification={handleDiscardNotification}
              />
            )}
            {hasFileNotMultipleNoErrors ? (
              <ul className="flex flex-col gap-2">
                {props.files.map((file) => {
                  return (
                    <DragArea.FileCard
                      file={file}
                      key={file.name}
                      handleDiscardSingleFile={handleDiscardSingleFile}
                    />
                  );
                })}
              </ul>
            ) : (
              hasNoNotificationAndNoFiles && (
                <div className="flex w-8 h-8 bg-secondary items-center justify-center text-primary-base rounded-full">
                  <CloudArrowUpIcon width={24} />
                </div>
              )
            )}
            <Paragraph
              size="medium"
              weight="bold"
              text={
                <div className="flex flex-row items-center">
                  {" "}
                  Arraste seu arquivo aqui ou{" "}
                  <Button type="button" onClick={handleClick}>
                    <span className="underline text-primary-base cursor-pointer">
                      selecione o{multiple && "(s)"} arquivo
                      {multiple && "(s)"}
                    </span>
                  </Button>
                </div>
              }
            />

            {formatsAccepted.length ? (
              <div className="flex flex-col justify-center text-center">
                <Span
                  text={`Os formatos permitidos são ${formatsText}`}
                  size="small"
                  weight="medium"
                />

                {props.Append && (
                  <div className="flex flex-col justify-center items-center mt-3 gap-4">
                    <Span text="ou" size="small" weight="medium" />
                    {props.Append}
                  </div>
                )}
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
        <DragArea.Input
          extensionAccepted={extensionAccepted}
          handleClickOnButton={handleClickOnButton}
          inputRef={inputRef}
          multiple={multiple}
        />
      </div>

      <FileModel.Root>        
        <span className="text-xs font-normal">{description}</span>
        {modelLink && (
          <LinkComponent url={modelLink} download target="_blank">
            <FileModel.ButtonFileModel />
          </LinkComponent>
        )}
      </FileModel.Root>

      <FilesNotifications
        errorsNotification={errorNotification}
        files={props.files}
        handleDiscardNotification={handleDiscardNotification}
        handleDiscardSingleFile={handleDiscardSingleFile}
        multiple={multiple}
      />
    </Root>
  );
};
