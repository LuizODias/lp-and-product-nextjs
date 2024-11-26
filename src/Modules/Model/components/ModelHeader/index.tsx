import { Button, CheckIconOutline, Span, modelTypes } from "@/shared";
import Link from "next/link";
import { Route } from "../Route";

interface Props {
  model: modelTypes;
}

export const ModelHeader = ({ model }: Props) => {
  return (
    <div className="w-full">
      <Route category={model.category} modelName={model.title} />
      <div className="flex dt:flex-row flex-col w-full items-center rounded-2xl gap-4 dt:py-10 dt:px-24 py-10 px-6 border border-gray-dark h-auto">
        <div className="flex flex-col dt:w-3/4">
          <div>
            <Span
              text={model.title}
              size="extraLarge"
              weight="medium"
              color="gray"
              letter="title"
            />
          </div>

          <div className="mt-[10px] flex dt:flex-row flex-col gap-2 dt:items-center">
            <Span
              text={`${model.author} | Versão: ${model.version}`}
              size="small"
              weight="semibold"
              color="gray"
              letter="normal"
              line="normal"
            />

            <div className={`bg-slate-100 rounded-xl px-2 w-fit sm:-ml-2 tb:-ml-2`}>
              <Span
                text={model.category}
                size="small"
                weight="semibold"
                color="gray"
                letter="normal"
                line="normal"
              />
            </div>
          </div>

          <div className="mt-[10px]">
            <h5 className="font-semibold leading-6 text-gray-dark">
              {model.subtitle}
            </h5>
          </div>

          <div>
            <Span
              text={model.description}
              size="normal"
              weight="normal"
              line="long"
              color="gray"
              letter="description"
            />
          </div>
        </div>
        <div className="dt:w-1/4 flex flex-row text-white justify-center align-middle">
          <Link href={`/contato/${model.url}`} className="w-[241px]">
            <Button className="gap-2.5 h-12" customType="primary" size="full">
              <CheckIconOutline />
              <h6>
                SOLICITAR SCORE
              </h6>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};