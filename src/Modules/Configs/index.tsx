"use client";
import {
  DefaultLayout,
  Typography,
  useDefaultContext,
  useVerifyUser,
} from "@/shared";
import { DocumentDuplicateIcon } from "@heroicons/react/24/outline";
import Skeleton from "react-loading-skeleton";
import { SkeletonClientFields } from "./components";

export const Configs = () => {
  const { loading: loadingUser } = useVerifyUser();
  const { client } = useDefaultContext();

  const serilizeCreated = (created_at: string): string => {
    const created = new Date(Date.parse(created_at));
    let day = created.getDate() + "";
    let month = created.toLocaleString("default", { month: "short" });
    let year = created.getFullYear() + "";
    let hour = created.getHours() + "";
    let minutes = created.getMinutes() + "";

    return `${day} de ${month} de ${year} às ${hour}:${minutes}h`;
  };

  return (
    <DefaultLayout>
      <title>Scores de Crédito - Configurações</title>
      <div className="flex flex-col gap-8 px-4 py-7">
        <Typography
          as={"p"}
          text={"Configurações"}
          weight="semibold"
          size="xLarge"
        />
        <div className="flex flex-col gap-5">
          <Typography
            as={"p"}
            text={"Minha conta"}
            weight="semibold"
            size="large"
          />
          {!loadingUser ? (
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-1 w-fit">
                <Typography
                  as={"p"}
                  text={"Status"}
                  weight="medium"
                  size="medium"
                />
                {client.licensed ? (
                  <span className="inline-flex justify-center h-7 w-fit flex-shrink-0 items-center rounded-full bg-[#E3F3F0] px-3 py-1">
                    <Typography
                      as={"p"}
                      text={"Liberado para produção"}
                      weight="semibold"
                      size="small"
                      textColor="success"
                    />
                  </span>
                ) : (
                  <span className="inline-flex justify-center h-7 w-fit flex-shrink-0 items-center rounded-full bg-[#AB34D61F] px-3 py-1">
                    <Typography
                      as={"p"}
                      text={"Acesso de Teste"}
                      weight="semibold"
                      size="small"
                      textColor="warning"
                    />
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-1 w-fit">
                <Typography
                  as={"p"}
                  text={"Nome"}
                  weight="medium"
                  size="medium"
                />
                <Typography
                  as={"p"}
                  text={client.name}
                  weight="semibold"
                  size="medium"
                />
              </div>
              <div className="flex flex-col gap-1 w-fit">
                <Typography
                  as={"p"}
                  text={"Email"}
                  weight="medium"
                  size="medium"
                />
                <Typography
                  as={"p"}
                  text={client.email}
                  weight="semibold"
                  size="medium"
                />
              </div>
              <div className="flex flex-col gap-1 w-fit">
                <Typography
                  as={"p"}
                  text={"CNPJ"}
                  weight="medium"
                  size="medium"
                />
                <Typography
                  as={"p"}
                  text={client.CNPJ}
                  weight="bold"
                  size="medium"
                  textColor="strongGray"
                />
              </div>
              <div className="flex flex-col gap-1 w-fit">
                <Typography
                  as={"p"}
                  text={"Criação da conta"}
                  weight="medium"
                  size="medium"
                />
                <Typography
                  as={"p"}
                  text={serilizeCreated(client.created_at)}
                  weight="bold"
                  size="medium"
                  textColor="strongGray"
                />
              </div>
              <div className="flex flex-col gap-1 w-fit">
                <Typography
                  as={"p"}
                  text={"Sub"}
                  weight="medium"
                  size="medium"
                />
                <div className="flex flex-row gap-2 items-center justify-center">
                  <Typography
                    as={"p"}
                    text={client.sub}
                    weight="semibold"
                    size="medium"
                  />
                  <DocumentDuplicateIcon
                    width={21}
                    className="text-primary-base cursor-pointer stroke-2"
                    onClick={() => {
                      navigator.clipboard.writeText(client.sub);
                    }}
                  />
                </div>
              </div>
            </div>
          ) : (
            <SkeletonClientFields />
          )}
        </div>
      </div>
    </DefaultLayout>
  );
};
