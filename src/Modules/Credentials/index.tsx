"use client";
import {
  Button,
  DefaultLayout,
  Modal,
  Span,
  DefaultCollapse,
  useVerifyUser,
  FeedbackTemporary,
  useDefaultContext,
  crendentialTypes,
  useGetSandbox,
  useGetAllCredential,
} from "@/shared";
import {
  CreateCredential,
  ListCredentials,
  StepFourOnboarding,
  StepOneOnboarding,
  StepThreeOnboarding,
  StepTwoOnboarding,
} from "./components";
import {
  CheckIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { credentialDefault } from "@/constants/models";
import { ListCredentialSkeleton } from "./components/Skeleton/listCredential";
import { useEnvContext } from "next-runtime-env";

export const Credentials = () => {
  const { loading: loadingUser } = useVerifyUser();
  const { NEXT_PUBLIC_AUTH0_CLIENT_ID_SANDBOX } = useEnvContext();
  const { status: statusSandbox, loading: loadingSandbox } = useGetSandbox(
    NEXT_PUBLIC_AUTH0_CLIENT_ID_SANDBOX as string
  );
  const { status: statusAllCredentials, loading: loadingAllCredential } =
    useGetAllCredential();

  const {
    credential,
    setCredential,
    successDelete,
    setSuccessDelete,
    errorCreation,
    setErrorCreation,
    client,
  } = useDefaultContext();

  const [modalState, setModalState] = useState(false);
  const [sandbox, setSandbox] = useState<crendentialTypes>();
  const [credentialsUser, setCredentialsUser] = useState<crendentialTypes[]>();

  useEffect(() => {
    setModalState(errorCreation);
  }, [errorCreation, setModalState]);

  useEffect(() => {
    if (!loadingSandbox && !!statusSandbox) {
      setSandbox({
        clientID: statusSandbox.client_id,
        clientSecret: statusSandbox.client_secret,
        name: statusSandbox.name,
        description: statusSandbox.description,
        status: true,
        scores: ["Score de Estabilidade Empregatícia"],
      });
    }
  }, [loadingSandbox, statusSandbox]);

  useEffect(() => {
    if (!loadingAllCredential && !!statusAllCredentials) {
      setCredentialsUser(
        statusAllCredentials.map((item: any) => {
          return {
            name: item.name,
            clientID: item.client_id,
            clientSecret: item.client_secret,
            scores: ["Score de Estabilidade Empregatícia"],
            status: true,
            description: item.description,
          };
        })
      );
    }
  }, [loadingAllCredential, statusAllCredentials]);

  return (
    <DefaultLayout>
      <Modal
        open={modalState && !errorCreation}
        setOpen={() => setModalState(true)}
        setClose={() => setModalState(false)}
      >
        <CreateCredential close={() => setModalState(false)} />
      </Modal>

      <Modal open={errorCreation} setOpen={() => {}} setClose={() => {}}>
        <div className="flex flex-col gap-8 w-[566px] items-center m-2">
          <div className="h-[46px] w-[46px] text-status-errorModal bg-status-errorBackground rounded-full flex justify-center items-center">
            <ExclamationTriangleIcon className="h-[18px]" />
          </div>
          <div className="flex flex-col gap-4 items-center">
            <h6 className="text-darkTextColor">
              Não foi possível criar a sua Aplicação
            </h6>
            <p className="text-sm font-medium text-center text-gray-strong">
              Desculpe, não conseguimos criar a aplicação que você solicitou.
              <br />
              Tente novamente mais tarde.
            </p>
          </div>
          <Button
            customType="secondary"
            borderRadius="mid"
            onClick={() => {
              setErrorCreation(false);
            }}
          >
            <p className="body-small-semi">Entendi</p>
          </Button>
        </div>
      </Modal>

      <Modal open={successDelete} setOpen={() => {}} setClose={() => {}}>
        <div className="flex flex-col gap-8 w-[566px] items-center m-2">
          <div className="h-[46px] w-[46px] text-green-500 bg-green-50 rounded-full flex justify-center items-center">
            <CheckIcon className="h-[18px]" />
          </div>
          <div className="flex flex-col gap-4 items-center">
            <h6 className="text-darkTextColor">
              A credencial {credential.name} foi apagada com sucesso.
            </h6>
          </div>
          <Button
            customType="secondary"
            borderRadius="mid"
            onClick={() => {
              setSuccessDelete(false);
              setCredential(credentialDefault);
            }}
          >
            <p className="body-small-semi">Entendi</p>
          </Button>
        </div>
      </Modal>

      <div className="mx-auto p-7 gap-10 flex flex-col max-w-[962px]">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <p className="text-lg font-semibold leading-5">
              Bem-vindo a plataforma Scores de Crédito
            </p>
            <p className="text-sm font-semibold leading-4 text-gray-strong">
              Estes passos ajudarão você a aproveitar ao máximo nossa
              plataforma.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <DefaultCollapse
              verticalPadding={false}
              Header={
                <Span
                  text={"Passo 1: Familirização e Teste dos Scores"}
                  size={"medium"}
                  weight={"semibold"}
                />
              }
              Body={<StepOneOnboarding />}
              startOpen={false}
              bodyPadding={false}
              shortPadding
            />
            <DefaultCollapse
              verticalPadding={false}
              Header={
                <Span
                  text={"Passo 2: Solicitação de Acesso à Produção"}
                  size={"medium"}
                  weight={"semibold"}
                />
              }
              Body={<StepTwoOnboarding />}
              startOpen={false}
              bodyPadding={false}
              shortPadding
            />
            <DefaultCollapse
              verticalPadding={false}
              Header={
                <Span
                  text={"Passo 3: Criação das Credenciais de Produção"}
                  size={"medium"}
                  weight={"semibold"}
                />
              }
              Body={<StepThreeOnboarding />}
              startOpen={false}
              bodyPadding={false}
              shortPadding
            />
            <DefaultCollapse
              verticalPadding={false}
              Header={
                <Span
                  text={"Passo 4: Integração com Credenciais de Produção"}
                  size={"medium"}
                  weight={"semibold"}
                />
              }
              Body={<StepFourOnboarding />}
              startOpen={false}
              bodyPadding={false}
              shortPadding
            />
          </div>
        </div>
        {loadingUser || loadingSandbox || loadingAllCredential ? (
          <ListCredentialSkeleton />
        ) : (
          <div className="w-full">
            <div className="w-full flex flex-row justify-between items-center">
              <h4> Credenciais de Acesso </h4>
              <Button
                customType="primary"
                size="sml"
                disabled={!client.licensed}
                title={
                  client.licensed
                    ? ""
                    : "Você ainda não tem acesso à criação de credenciais de produção."
                }
                onClick={() => {
                  if (client.licensed) setModalState(true);
                }}
              >
                <p className="body-small-semi">+ Nova Credencial</p>
              </Button>
            </div>

            <ListCredentials
              credentials={[
                sandbox || credentialDefault,
                ...(credentialsUser || []),
              ]}
              setModalState={() => setModalState(true)}
            />
          </div>
        )}
      </div>
    </DefaultLayout>
  );
};
