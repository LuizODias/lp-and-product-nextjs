import { CheckCircleOutline, modelTypes } from "@/shared";
import { SectionTab } from "./sectiontab";
import { useInView } from "react-intersection-observer";
import { ModelResults } from "../ModelResults";
import { ModelCost } from "../ModelCost";
import React from "react";

interface Props {
  model: modelTypes;
}

export const ModelDescription = ({ model }: Props) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  const [ref2, inView2] = useInView({
    threshold: 0.8,
  });

  const [ref3, inView3] = useInView({
    threshold: 0.5,
  });

  const [ref4, inView4] = useInView({
    threshold: 0.2,
  });

  const [ref5, inView5] = useInView({
    threshold: 0.6,
  });

  const [ref6, inView6] = useInView({
    threshold: 0.2,
  });

  return (
    <div className="flex flex-col w-full text-gray-dark">
      <div
        id="section-tab-parent"
        className="flex flex-col gap-4 justify-between w-full text-gray-dark"
      >
        <h3 className="text-[32px] font-medium leading-8 text-left">
          Visão Geral
        </h3>
      </div>
      <SectionTab
        inviewprops={{ inView, inView2, inView3, inView4, inView5, inView6 }}
      />
      <div id="tab-sibling" className="w-full max-w-[770px] m-auto mt-4 mb-10">
        <div
          className="mt-4 dt:scroll-mt-[180px] scroll-mt-[140px]"
          id="section-1"
          ref={ref}
        >
          <h3 className="mb-6">O que é o {model.title}?</h3>
          <div className="w-full flex flex-row sm:flex-col gap-2">
            <div className="w-full">
              <>
                <h5>O que faz?</h5>
                <br />
                <p className="body-large-semi">
                  {model.sections.scoreDescription.scoreFunction}
                </p>
                <br />
                <h5>Como é elaborado?</h5>
                <br />
                <p className="body-large-semi">
                  {model.sections.scoreDescription.scoreInputs}
                </p>
                <br />
                <h5>Quais fatores são analisados?</h5>
                <br />
                <p className="body-large-semi">
                  {model.sections.scoreDescription.datas}
                </p>
                <br />
              </>
            </div>
          </div>
        </div>

        <div
          className="pt-20 dt:scroll-mt-[100px] scroll-mt-[60px]"
          id="section-2"
          ref={ref2}
        >
          <h3 className="mb-6">Qual o caso de uso?</h3>
          <h6 className="font-semibold">
            {model.sections.scoreSolution.solution}
          </h6>
        </div>

        <div
          className="pt-20 dt:scroll-mt-[100px] scroll-mt-[60px]"
          id="section-3"
          ref={ref3}
        >
          <h3 className="mb-6 leading-8 font-semibold">Quais os benefícios?</h3>
          <div className="flex flex-col gap-2 w-full">
            {model.sections.scoreBenefits.benefits.map((benefit, index) => {
              return (
                <div className="flex flex-row gap-2" key={index}>
                  <div className="w-[25px]">
                    <CheckCircleOutline />
                  </div>
                  <p className="body-large-semi"> {benefit} </p>
                </div>
              );
            })}
          </div>
        </div>

        <div
          className="pt-20 dt:scroll-mt-[100px] scroll-mt-[60px]"
          id="section-4"
          ref={ref4}
        >
          <h3 className="mb-6"> Como funciona? </h3>
          <h6 className="font-semibold mb-6">
            {model.sections.scoreResults.results}
          </h6>

          {model.sections.scoreResults.resultsRating.length ? (
            <ModelResults table={model.sections.scoreResults.resultsRating} />
          ) : (
            <></>
          )}
        </div>

        <div
          className="pt-20 dt:scroll-mt-[100px] scroll-mt-[60px]"
          id="section-5"
          ref={ref5}
        >
          <h3 className="mb-6 leading-8 font-semibold">
            Quais os diferenciais?
          </h3>
          <div className="flex flex-col gap-2">
            {model.sections.scoreDifferentials.differentials.map(
              (differential, index) => {
                return (
                  <div className="flex flex-row gap-2" key={index}>
                    <div className="w-[25px]">
                      <CheckCircleOutline />
                    </div>
                    <p className="body-large-semi"> {differential} </p>
                  </div>
                );
              }
            )}
          </div>
        </div>

        {model.sections.scoreCost && (
          <div
            className="pt-20 dt:scroll-mt-[100px] scroll-mt-[60px]"
            id="section-6"
            ref={ref6}
          >
            <h3 className="mb-6 leading-8 font-semibold">Qual o custo?</h3>
            <h6 className="font-semibold mb-6">
              {model.sections.scoreCost.cost}
            </h6>
            <ModelCost table={model.sections.scoreCost.costRanges} />
          </div>
        )}
      </div>
    </div>
  );
};
