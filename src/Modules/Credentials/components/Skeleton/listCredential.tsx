import { Button } from "@/shared";
import { PlusIcon } from "@heroicons/react/24/outline";
import Skeleton from "react-loading-skeleton";

export const ListCredentialSkeleton = () => {
  return (
    <div className="w-full">
      <div className="w-full flex flex-row justify-between items-center">
        <h4> Credenciais de Acesso </h4>
        <Button
          customType="primary"
          size="sml"
          disabled={true}
          onClick={() => {}}
        >
          <p className="body-small-semi">+ Nova Credencial</p>
        </Button>
      </div>

      <ul
        role="list"
        className="grid grid-cols-3 gap-10 list-none ml-0 pt-5 items-start"
      >
        <li className="w-full max-w-[303px] h-auto col-span-1 divide-y divide-gray-200 rounded shadow-layoutBorder">
          <div className="flex w-full items-center justify-between space-x-6 p-4">
            <div className="flex flex-col flex-1 truncate gap-4">
              <div className="w-full h-7">
                <Skeleton className="h-6 rounded-md" />
              </div>
              <div className="flex items-center">
                <span className="justify-center h-6 w-20 min-w-[73px] rounded-full">
                  <Skeleton />
                </span>
              </div>
              <span className="h-5 w-auto">
                <Skeleton />
              </span>

              <div className="w-full h-10">
                <Skeleton className="h-9 rounded-md" />
              </div>
            </div>
          </div>
        </li>
        <li
          className={`w-full h-auto col-span-1 divide-y divide-gray-200 rounded bg-white shadow-layoutBorder opacity-60`}
        >
          <div className="flex flex-col w-full items-center justify-between p-4 gap-2">
            <div
              className={`w-full h-24 bg-secondary flex items-center justify-center rounded cursor-default`}
              onClick={() => {}}
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
    </div>
  );
};
