"use client"
import { FrameLayout, ListModels, modelTypes, useDefaultContext } from "@/shared";
import { ModelDescription, ModelHeader, ModelHighlights } from "./components";
import React from "react";

interface Props {
  model?: modelTypes;
}

export const Model = ({ model }: Props) => {
  const { models } = useDefaultContext();

  const modelsCopy: modelTypes[] = models.filter((aux) => {
    return aux.title !== model?.title;
  });

  return (
    <FrameLayout>
      {model?.title ?
        <div className="w-full max-w-[1440px] flex flex-col gap-6 px-20 sm:px-6">
          <ModelHeader model={model} />
          <ModelHighlights model={model} />
          <ModelDescription model={model} />
        </div>
        : <>Modelo não encontrado</>}
      <ListModels models={modelsCopy} generic={true} />
    </FrameLayout>
  );
};