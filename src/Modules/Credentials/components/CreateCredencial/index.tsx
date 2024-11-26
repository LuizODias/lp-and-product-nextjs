import {
  Button,
  OptionsType,
  useConnectCredentialHooks,
  useCreateCredentialHooks,
  useGrantCredentialHooks,
} from "@/shared";
import { KeyIcon } from "@heroicons/react/24/outline";
import {
  CredentialInputs,
  useCredentialForm,
} from "../../hooks/useCredentialForm";
import { SubmitHandler, Controller } from "react-hook-form";
import { useUser } from "@auth0/nextjs-auth0/client";
import { Loader } from "@/shared";

const Models: OptionsType[] = [
  { label: "Score de Crédito Pessoal", value: "credentialScores.scorePessoal" },
  {
    label: "Score de Crédito Empresarial",
    value: "credentialScores.scoreEmpresarial",
  },
  {
    label: "Score de Estabilidade Empregatícia",
    value: "credentialScores.probabilidadeDemissao",
  },
];

interface Props {
  close: () => void;
}

export const CreateCredential = ({ close }: Props) => {
  const { form } = useCredentialForm();
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = form;
  const { handleCreate, createDataCredentialMutation } =
    useCreateCredentialHooks();
  const { connectCredentialMutation } = useConnectCredentialHooks();
  const { grantCredentialMutation } = useGrantCredentialHooks();
  const { user } = useUser();

  const onSubmit: SubmitHandler<CredentialInputs> = (data) =>
    handleCreate(data);

  return (
    <div className="flex flex-col w-[582px]">
      {connectCredentialMutation.isLoading ||
        createDataCredentialMutation.isLoading ||
        grantCredentialMutation.isLoading ? (
        <div className="fixed bg-opacity-80 bg-white top-0 left-0 flex justify-center w-[630px] h-screen z-30 cursor-default">
          <div className="fixed top-[200px]">
            <Loader />
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="flex flex-col gap-3">
        <div className="flex flex-row gap-3">
          <div className="flex justify-center items-center rounded-full bg-secondary text-primary-base w-[45px] h-[45px]">
            <KeyIcon className="w-[22px] h-[22px]" />
          </div>
          <div className="flex flex-col">
            <h6> Nova Credencial </h6>
            <p className="body-small-regular text-gray-strong">
              Crie um conjunto de credenciais para acesso específico
            </p>
          </div>
        </div>

        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-y-2">
                <label className={`text-sm font-medium leading-4 text-black`}>
                  Nome da credencial <span> * </span>
                </label>
                <input
                  required
                  placeholder="Identifique sua credencial"
                  {...register("credentialName")}
                  className={`shadow-inputBorder border rounded-lg py-2 px-3 text-black font-medium placeholder:text-gray-strong/65 placeholder:text-sm outline-none text-sm ${errors.credentialName?.message
                      ? "border-status-error"
                      : "border-gray-base"
                    }`}
                />
              </div>

              <div className="flex flex-col gap-y-2">
                <label className={`text-sm font-medium leading-4 text-black`}>
                  Descrição da credencial (opcional)
                </label>
                <textarea
                  {...register("credentialDescription")}
                  className={`border-[1px] focus:border-gray-base rounded-[6px] py-2 px-3 text-black font-medium 
                  placeholder:text-gray-strong/65 placeholder:text-sm text-sm h-[150px] resize-none`}
                  placeholder="Detalhamento da credencial para seu uso interno"
                />
              </div>

              {user?.email ? (
                ""
              ) : (
                <div className="flex flex-col gap-y-2">
                  <label className={`text-sm font-medium leading-4 text-black`}>
                    Email <span> * </span>
                  </label>
                  <input
                    required
                    placeholder="Identifique sua credencial"
                    {...register("emailGithub")}
                    className={`shadow-inputBorder border rounded-lg py-2 px-3 text-black font-medium placeholder:text-gray-strong/65 placeholder:text-sm outline-none text-sm ${errors.emailGithub?.message
                        ? "border-status-error"
                        : "border-gray-base"
                      }`}
                  />
                </div>
              )}
            </div>
            <div className="flex flex-row gap-6 justify-end h-10">
              <Button
                customType="secondary"
                borderRadius="mid"
                type="reset"
                onClick={() => close()}
                className="w-[140px]"
              >
                <p className="body-small-semi">Cancelar</p>
              </Button>
              <Button
                disabled={!isValid}
                customType={"primary"}
                borderRadius="mid"
                className="w-[140px]"
              >
                <input
                  type="submit"
                  className={`body-small-semi ${isValid ? "cursor-pointer" : ""
                    }`}
                  value="Criar credencial"
                />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
