"use client"
import { useEffect, useState } from "react";
import {
  CheckCircleIcon,
  ChevronLeftIcon,
  DocumentDuplicateIcon,
  ExclamationTriangleIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";
import {
  FeedbackInfo,
  FeedbackWarning,
  FeedbackSuccess,
  DefaultLayout,
  Button,
  useDefaultContext,
  Modal,
} from "@/shared";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FullScreenLoader } from "@/shared";
import { CollapseDelete } from "./components/CollapseDelete";
import { ModalDelete } from "./components/ModalDelete";
import { useEnvContext } from "next-runtime-env";
import React from "react";

export const Credential = () => {
  const [credentialStatus, setCredentialStatus] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [modalState, setModalState] = useState(false);
  const [showSuccessClientID, setShowSuccessClientID] = useState(false);
  const [showSuccessClientSecret, setShowSuccessClientSecret] = useState(false);
  const {NEXT_PUBLIC_AUTH0_CLIENT_ID_SANDBOX} = useEnvContext();

  const {
    credential,
    setCredential,
    errorDelete,
    setErrorDelete,
    client,
  } = useDefaultContext();
  const route = useRouter();

  useEffect(() => {
    if (!credential.clientID.length) {
      route.push("/dashboard");
    }

    return () => {
      credential.isNew
        ? setCredential({
            ...credential,
            isNew: false,
          })
        : "";
    };
  }, [credential, setCredential]);

  const isLicensed = client.licensed || NEXT_PUBLIC_AUTH0_CLIENT_ID_SANDBOX === credential.clientID

  return (
    <DefaultLayout>
      {credential.clientID.length ? (
        <div className="flex flex-col p-7 gap-6">
          <div className="flex flex-col pb-32 gap-6">
            <div className="flex flex-row gap-2 items-center">
              <Link href={"/dashboard"}>
                <ChevronLeftIcon className="h-6 w-6 text-primary-base cursor-pointer" />
              </Link>
              <h4> Sua credencial</h4>
            </div>
            <FeedbackInfo
              open
              full
              closeable
              text={
                "Para ter acesso à API envie o Client ID e Client Secret para a pessoa desenvolvedora no seu time."
              }
            />
            {credential.isNew ? (
              <FeedbackSuccess
                open
                full
                closeable
                text={
                  "Credencial criada com sucesso. Agora você pode copiar o Client ID e Client Secret e enviar para seu desenvolvedor para prosseguir com a integração da API."
                }
              />
            ) : (
              <></>
            )}
            <div className="flex flex-row gap-6 w-full">
              <div className="flex flex-col gap-4 w-1/2">
                <div className="flex flex-col gap-2">
                  <p className="body-small-regular font-medium text-gray-stronger"> Nome da credencial </p>
                  <p className="button-large"> {credential.name} </p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="body-small-regular font-medium text-gray-stronger"> Descrição </p>
                  <p className="body-small-regular text-gray-strong">
                    {credential.description}
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="body-small-regular font-medium text-gray-stronger"> Score(s) habilitado(s) </p>
                  <p className="flex flex-row body-small-regular gap-2 items-center text-gray-strong">
                    <CheckCircleIcon className="w-4 h-4 text-status-success" />
                    Estabilidade empregatícia
                  </p>
                  <p className="flex flex-row body-small-regular gap-2 items-center text-gray-strong">
                    <CheckCircleIcon className="w-4 h-4 text-status-success" />
                    Score Pessoa Física
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4 w-1/2">
                <div className="flex flex-col gap-2">
                  <p className="body-small-regular font-medium text-gray-stronger"> Client ID </p>
                  <div className="flex flex-row w-full gap-1 items-center">
                    <input
                      type="text"
                      className={`w-[412px] input-credentials border ${
                        isLicensed
                          ? "border-aliceWhite"
                          : "border-aliceWhite text-aliceWhite bg-[#F5FAFC]"
                      }  h-9`}
                      readOnly
                      disabled={!(isLicensed)}
                      value={credential.clientID}
                    />
                    <DocumentDuplicateIcon
                      className={`h-6 w-6 ${
                        isLicensed
                          ? "text-primary-base cursor-pointer"
                          : "text-aliceWhite cursor-default"
                      } stroke-2`}
                      onClick={() => {
                        if (isLicensed) {
                          navigator.clipboard.writeText(credential.clientID);
                          setShowSuccessClientID(true);
                          setTimeout(() => {
                            setShowSuccessClientID(false);
                          }, 1500);
                        }
                      }}
                    />
                    <FeedbackSuccess
                      open={showSuccessClientID}
                      text={"Client ID copiado!"}
                      fixed
                      autoClose
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="body-small-regular font-medium text-gray-stronger"> Client secret </p>
                  <div className="flex flex-row w-full gap-1 items-center">
                    <input
                      type={!showPassword ? "password" : "text"}
                      readOnly
                      disabled={!(isLicensed)}
                      className={`w-[412px] input-credentials border ${
                        isLicensed
                          ? "border-aliceWhite"
                          : "border-aliceWhite text-aliceWhite bg-[#F5FAFC]"
                      }  h-9`}
                      value={credential.clientSecret}
                    />
                    <EyeIcon
                      className={`h-6 w-6 ${
                        isLicensed
                          ? "text-primary-base cursor-pointer"
                          : "text-aliceWhite cursor-default"
                      } stroke-2`}
                      onClick={() => {
                        if (isLicensed)
                          setShowPassword(!showPassword);
                      }}
                    />
                    <DocumentDuplicateIcon
                      className={`h-6 w-6 ${
                        isLicensed
                          ? "text-primary-base cursor-pointer"
                          : "text-aliceWhite cursor-default"
                      } stroke-2`}
                      onClick={() => {
                        if (isLicensed) {
                          navigator.clipboard.writeText(
                            credential.clientSecret
                          );
                          setShowSuccessClientSecret(true);
                          setTimeout(() => {
                            setShowSuccessClientSecret(false);
                          }, 1500);
                        }
                      }}
                    />
                    <FeedbackSuccess
                      open={showSuccessClientSecret}
                      text={"Client Secret copiado!"}
                      fixed
                      autoClose
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {!(
            credential.clientID === NEXT_PUBLIC_AUTH0_CLIENT_ID_SANDBOX
          ) ? (
            <div className="flex flex-col gap-6 border-t border-gray-300 pt-6">
              <h6>Ações Restritivas</h6>
              <FeedbackWarning
                full
                open
                text={
                  "As ações a seguir interrompem o acesso à API, verifique com a pessoa desenvolvedora do seu time antes de prosseguir."
                }
              />

              <Modal open={errorDelete} setOpen={() => {}} setClose={() => {}}>
                <div className="flex flex-col gap-8 w-[566px] items-center m-2">
                  <div className="h-[46px] w-[46px] text-status-errorModal bg-status-errorBackground rounded-full flex justify-center items-center">
                    <ExclamationTriangleIcon className="h-[18px]" />
                  </div>
                  <div className="flex flex-col gap-4 items-center">
                    <h6 className="text-darkTextColor">
                      Não foi possível apagar a credencial {credential.name}
                    </h6>
                    <p className="text-sm font-medium text-center text-gray-strong">
                      Desculpe, no momento não conseguimos apagar a credencial.
                      <br />
                      Tente novamente mais tarde.
                    </p>
                  </div>
                  <Button
                    customType="secondary"
                    borderRadius="mid"
                    onClick={() => {
                      setErrorDelete(false);
                    }}
                  >
                    <p className="body-small-semi">Entendi</p>
                  </Button>
                </div>
              </Modal>

              <CollapseDelete setModalState={() => setModalState(true)} />
              <ModalDelete
                modalState={modalState}
                setModalState={setModalState}
                credentialName={credential.name}
                credentialID={credential.clientID}
              />

              <div className="flex flex-row justify-end">
                <Link href={"/dashboard"}>
                  <Button
                    customType="secondary"
                    className="w-36 h-10"
                    borderRadius="mid"
                  >
                    <p className="body-small-semi"> &lt; Voltar </p>
                  </Button>
                </Link>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        <FullScreenLoader />
      )}
    </DefaultLayout>
  );
};
