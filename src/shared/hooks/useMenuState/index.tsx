"use client";
import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { useToggle } from "../useToggle";
import { Client, crendentialTypes, modelTypes } from "@/shared";
import {
  modelsDefault,
  credentialDefault,
  modelDefault,
  clientDefault,
} from "@/constants/models";
import { SingleFileInputProps } from "../useSingleFileImport";
import { useFiles } from "@/shared/Components/Inputs/FileInput/hooks/useFiles";

interface ContextTypes {
  isOpen: boolean;
  closeMenu: () => void;
  openMenu: () => void;
  isOpenForms: boolean;
  closeBacktest: () => void;
  openBacktest: () => void;
  client: Client;
  setClient: Dispatch<SetStateAction<Client>>;
  errorCreation: boolean;
  setErrorCreation: Dispatch<SetStateAction<boolean>>;
  errorDelete: boolean;
  setErrorDelete: Dispatch<SetStateAction<boolean>>;
  successDelete: boolean;
  setSuccessDelete: Dispatch<SetStateAction<boolean>>;
  models: modelTypes[];
  model: modelTypes;
  setModel: Dispatch<SetStateAction<modelTypes>>;
  credentialID: string;
  setCredentialID: Dispatch<SetStateAction<string>>;
  credential: crendentialTypes;
  setCredential: Dispatch<SetStateAction<crendentialTypes>>;
  allCredentials: crendentialTypes[];
  setAllCredentials: Dispatch<SetStateAction<crendentialTypes[]>>;
  backtestFile: SingleFileInputProps;
}

const DefaultLayoutContext = createContext({} as ContextTypes);

interface Props {
  children: ReactNode;
}

const DefaultContextProvider = ({ children }: Props) => {
  const {
    state: isOpen,
    setStateTrue: openMenu,
    setStateFalse: closeMenu,
  } = useToggle();

  const {
    state: isOpenForms,
    setStateTrue: openBacktest,
    setStateFalse: closeBacktest,
  } = useToggle();

  const { backtestFile } = useFiles();

  const [errorCreation, setErrorCreation] = useState(false);
  const [errorDelete, setErrorDelete] = useState(false);
  const [successDelete, setSuccessDelete] = useState(false);
  const [models] = useState(modelsDefault);
  const [credentialID, setCredentialID] = useState("");
  const [userCNPJ, setUserCNPJ] = useState("");
  const [credential, setCredential] = useState(credentialDefault);
  const [model, setModel] = useState<modelTypes>(modelDefault);
  const [allCredentials, setAllCredentials] = useState<crendentialTypes[]>([]);
  const [client, setClient] = useState<Client>(clientDefault);

  return (
    <DefaultLayoutContext.Provider
      value={{
        backtestFile,
        isOpenForms,
        openBacktest,
        closeBacktest,
        closeMenu,
        isOpen,
        openMenu,
        models,
        model,
        setModel,
        credentialID,
        setCredentialID,
        credential,
        setCredential,
        errorCreation,
        setErrorCreation,
        allCredentials,
        setAllCredentials,
        errorDelete,
        setErrorDelete,
        successDelete,
        setSuccessDelete,
        client,
        setClient,
      }}
    >
      {children}
    </DefaultLayoutContext.Provider>
  );
};

const useDefaultContext = () => {
  return useContext(DefaultLayoutContext);
};

export { useDefaultContext, DefaultContextProvider };
