import { Button, DefaultCollapse, Span } from "@/shared";
import { ExclamationTriangleIcon, FireIcon } from "@heroicons/react/24/outline";
import { Dispatch, SetStateAction } from "react";

interface Props {
  setModalState: Dispatch<SetStateAction<boolean>>;
}

export const CollapseDelete = ({ setModalState }: Props) => {
  return (
    <DefaultCollapse
      verticalPadding={false}
      shortPadding
      Header={
        <div className="flex flex-row items-center gap-2">
          <FireIcon className="h-[18px] w-[18px] text-status-errorModal" />
          <Span
            text={"Apagar essa credencial"}
            size={"medium"}
            weight={"semibold"}
          />
        </div>
      }
      Body={
        <div className="flex flex-col gap-[31px]">
          <div className="flex flex-row gap-4 cursor-default">
            <div className="h-[46px] w-[46px] text-status-errorModal bg-status-errorBackground rounded-full flex justify-center items-center">
              <ExclamationTriangleIcon className="h-[18px]" />
            </div>
            <div className="flex flex-col gap-4">
              <p className="body-small-regular">
                Apaga permanentemente a credencial atual.
              </p>
              <p className="body-small-regular">
                O acesso à API através dessa credencial não será mais possível.
              </p>
            </div>
          </div>
          <div className="flex justify-end">
            <Button
              customType="primary"
              className="w-36 h-10 bg-red-dark hover:bg-red-700 active:bg-red-900"
              borderRadius="mid"
              onClick={() => setModalState(true)}
            >
              <p className="body-small-semi"> Apagar essa Aplicação </p>
            </Button>
          </div>
        </div>
      }
    />
  );
};
