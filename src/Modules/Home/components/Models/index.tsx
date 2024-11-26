import { modelTypes } from "@/shared/types/modelTypes";
import React from "react";
import Image from "next/image";
import { Button, Typography, useImageLoader } from "@/shared";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

interface Props {
  models: modelTypes[];
}

export const Models = () => {
  const { imageLoader } = useImageLoader();

  return (
    <div className="w-full bg-primary-base flex justify-center text-white">
      <div className="max-w-[1440px] w-full flex flex-col dt:px-20 py-20 px-11 gap-10 items-center">
        <div className="flex flex-col w-full dt:max-w-[1440px] max-w-[381px] dt:text-left text-center gap-2.5">
          <p className="dt:text-2xl dt:font-semibold text-xl leading-6 font-medium">
            Casos de Uso
          </p>
          <p className="dt:text-4xl dt:leading-10 font-semibold text-xl leading-9">
            Esteira de Crédito Pessoa Jurídica
          </p>
        </div>

        <div className="w-full flex flex-col dt:flex-row items-center dt:gap-[110px] gap-10">
          <div className="h-[606px] overflow-hidden rounded-xl flex items-center dt:pt-16">
            <div className="w-full flex justify-center">
              <Image
                loader={imageLoader}
                className={`sm:w-full rounded-xl`}
                src="pj-discover.jpeg"
                alt={"Pessoa sorrindo com notebook nas mãos"}
                width={606}
                height={606}
              />
            </div>
          </div>

          <div className="dt:w-1/2 w-full dt:max-w-[460px] flex flex-col dt:gap-8 gap-4 max-w-[381px] dt:text-left text-center items-center dt:items-start">
            <p className="dt:text-2xl leading-10 font-bold text-lg">
              Transforme sua Análise de Crédito com a Automação Completa
            </p>
            <p className="dt:text-lg dt:leading-5 font-normal text-base">
              Descubra como aplicar o Score de Crédito em cada etapa da sua
              esteira de crédito, desde a pré-análise até a decisão final. Tenha
              mais precisão e agilidade na concessão de crédito.
            </p>
            <Link href={"/modelo/credito-pessoa-juridica"} className="w-fit">
              <Button
                customType="secondary"
                className="w-44 h-9 bg-white"
                borderRadius="mid"
              >
                <p className="flex flex-row items-center gap-1 text-sm font-medium">
                  Veja como aplicar <ChevronRightIcon width={20} height={20} />
                </p>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
