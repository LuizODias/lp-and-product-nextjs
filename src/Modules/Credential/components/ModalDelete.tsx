import { Button, Loader, Modal, useDeleteCredentialHooks } from "@/shared";
import { FireIcon } from "@heroicons/react/24/outline";
import { verify } from "crypto";
import {
  ChangeEvent,
  Dispatch,
  FocusEvent,
  SetStateAction,
  useState,
} from "react";

interface Props {
  modalState: boolean;
  setModalState: Dispatch<SetStateAction<boolean>>;
  credentialName: string;
  credentialID: string;
}

export const ModalDelete = ({
  modalState,
  setModalState,
  credentialName,
  credentialID,
}: Props) => {
  const [isInputValid, setInputValid] = useState(false);
  const [isInputError, setInputError] = useState(true);
  const { deleteDataCredentialMutation, handleExclude } = useDeleteCredentialHooks(credentialID);

  function verifyInput(e: ChangeEvent<HTMLInputElement>): boolean {
    if (e.target.value === "apagar credencial " + credentialName) {
      return true;
    }
    return false;
  }

  return (
    <Modal
      open={modalState}
      setOpen={() => setModalState(true)}
      setClose={() => setModalState(false)}
    >
      {deleteDataCredentialMutation.isLoading ? (
        <div className="fixed bg-opacity-80 bg-white top-0 left-0 flex justify-center w-[630px] h-screen z-30 cursor-default">
          <div className="fixed top-[200px]">
            <Loader />
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="flex flex-col w-[582px] gap-8">
        <div className="flex flex-row gap-3 w-full justify-center">
          <div className="flex justify-center items-center rounded-full bg-status-errorBackground text-status-errorModal w-[45px] h-[45px]">
            <FireIcon className="w-[22px] h-[22px]" />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col justify-center gap-4">
            <h6>
              Tem certeza que deseja apagar a credencial {credentialName} ?
            </h6>
            <p className="text-sm leading-4 font-bold text-gray-strong justify-center flex">
              Não será mais possível acessar a API com essas credenciais.
            </p>
            <p className="text-sm leading-4 font-medium text-gray-strong justify-center flex">
              Para prosseguir escreva “apagar credencial {credentialName}”
            </p>
            <div className="flex flex-col">
              <input
                required
                className={`border h-9 rounded py-2 px-4 input-credentials ${!isInputError
                    ? "border-status-errorModal"
                    : "border-aliceWhite"
                  }`}
                placeholder={`Escreva “apagar credencial ${credentialName}"`}
                onChange={(e) => setInputValid(verifyInput(e))}
                onBlur={(e) => setInputError(verifyInput(e))}
              />
              <p className={`text-[13px] leading-5 font-medium text-status-errorModal ${!isInputError ? "flex" : "hidden"}`}>
                Texto de confirmação incorreto. Tente novamente.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-row gap-6 justify-center h-10">
            <Button
              customType="secondary"
              borderRadius="mid"
              type="reset"
              onClick={() => setModalState(false)}
              className="w-[140px]"
            >
              <p className="body-small-semi">Cancelar</p>
            </Button>
            <Button
              disabled={!isInputValid}
              customType={"primary"}
              borderRadius="mid"
              className="w-[140px] disabled:bg-red-dark/60 bg-red-dark hover:bg-red-700 active:bg-red-900"
            >
              <input
                type="submit"
                className={`body-small-semi ${isInputValid ? "cursor-pointer" : ""
                  }`}
                onClick={handleExclude}
                value="Ok, deletar"
              />
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
