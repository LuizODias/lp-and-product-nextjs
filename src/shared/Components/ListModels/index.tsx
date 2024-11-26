import { SectionModel, Typography } from "@/shared";
import { modelTypes } from "@/shared/types/modelTypes";
import React from "react";

interface Props {
  models: modelTypes[];
  generic?: boolean;
}

export const ListModels = ({ models, generic = false }: Props) => {
  return (
    <div className="flex flex-row w-full bg-primary-base justify-center">
      <div className="max-w-[1440px] py-[70px] px-20 sm:px-6 gap-[70px] flex flex-col">
        <div className="flex flex-col gap-5">
          <Typography
            as={"p"}
            text={"Soluções"}
            size="xLarge"
            textColor="white"
            weight="medium"
          />
          <p className="text-[32px] font-semibold leading-10 text-white">
            A Solução Certa para Cada Problema
          </p>
        </div>

        <div className="dt:px-5 py-0.5 grid sm:grid-cols-1 grid-cols-2 gap-x-8 sm:gap-y-8 gap-y-[70px] w-full">
          {models.map((item, index) => (
            <SectionModel
              key={index}
              model={item}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
