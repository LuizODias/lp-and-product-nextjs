import { modelTypes } from "@/shared";
import React from "react";

interface Props {
  model: modelTypes;
}

export const ModelHighlights = ({ model }: Props) => {
  return (
    <>
      {
        model.sections.scoreHighlights?.highlights.length &&
        <div className="body-small-semi flex w-full h-auto rounded-2xl bg-[#EAF1FC] p-6">
          <div className="py-1 flex flex-row gap-6 sm:flex-col">
            {model.sections.scoreHighlights?.highlights.map((item,index) => {
              return (
                <div key={index} className="border-primary-base border-l-[3px] pl-4 w-1/4 flex items-center sm:w-full">
                  <p> {item} </p>
                </div>
              )
            })}
          </div>
        </div>
      }
    </>
  )
}