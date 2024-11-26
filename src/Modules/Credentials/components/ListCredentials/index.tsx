import { CheckCircleIcon, PlusIcon } from "@heroicons/react/24/outline";
import { Button, crendentialTypes, useDefaultContext } from "@/shared";
import Link from "next/link";

interface Props {
  credentials: crendentialTypes[];
  setModalState: () => void;
}

export const ListCredentials = ({ credentials, setModalState }: Props) => {
  const { setCredential, client } = useDefaultContext();

  return (
    <ul
      role="list"
      className="grid grid-cols-3 gap-10 list-none ml-0 pt-5 items-start"
    >
      {credentials.map((credential, index) => (
        <li
          key={index}
          className="w-full max-w-[303px] h-auto col-span-1 divide-y divide-gray-200 rounded bg-white shadow-layoutBorder"
        >
          <div className="flex w-full items-center justify-between space-x-6 p-4">
            <div className="flex flex-col flex-1 truncate gap-4">
              <div className="flex items-center space-x-3">
                <h6>{credential.name}</h6>
              </div>
              <div className="flex items-center">
                <span className="inline-flex justify-center gap-1 h-6 w-20 min-w-[73px] flex-shrink-0 items-center rounded-full bg-green-50 px-3 py-0.5 text-xs font-medium text-green-700">
                  <CheckCircleIcon className="w-4 h-4" />
                  <p className="text-xs font-semibold flex-auto">
                    {credential.status ? "Ativa" : "Desativada"}
                  </p>
                </span>
              </div>
              <span className="text-sm font-medium whitespace-nowrap h-5 overflow-hidden w-auto text-ellipsis block">
                {credential.description}
              </span>

              <div>
                <Link
                  href={"/dashboard/credencial"}
                  onClick={() => setCredential(credential)}
                >
                  <Button customType="secondary" size="full" borderRadius="mid">
                    <p className="body-small-semi">Ver configurações</p>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </li>
      ))}
      <li
        className={`w-full h-auto col-span-1 divide-y divide-gray-200 rounded bg-white shadow-layoutBorder ${client.licensed ? "" : "opacity-60"
          }`}
        title={
          client.licensed
            ? ""
            : "Você ainda não tem acesso à criação de credenciais de produção."
        }
      >
        <div className="flex flex-col w-full items-center justify-between p-4 gap-2">
          <div
            className={`w-full h-24 bg-secondary flex items-center justify-center rounded ${client.licensed ? "cursor-pointer" : "cursor-default"
              }`}
            onClick={() => {
              if (client.licensed) setModalState();
            }}
          >
            <PlusIcon className="h-6 w-6 text-primary-base" />
          </div>
          <div className="w-full gap-2 flex flex-col h-[54px]">
            <p className="h6"> Nova Credencial</p>
            <p className="text-xs font-medium">
              Crie credenciais para acesso específico
            </p>
          </div>
        </div>
      </li>
    </ul>
  );
};
