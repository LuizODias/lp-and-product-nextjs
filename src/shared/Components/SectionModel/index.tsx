import { Typography } from "@/shared";
import { modelTypes } from "@/shared/types/modelTypes";
import {
  CreditRiskCompany,
  CreditRiskPerson,
  EmploymentStabilityIcon,
  IncomePrediction,
} from "../Icons/ModelsIcons";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

export interface SectionModelsProps {
  model: modelTypes;
}

const modelsIcons = [
  {
    url: "credito-pessoa-fisica",
    icon: <CreditRiskPerson />,
  },
  {
    url: "credito-pessoa-juridica",
    icon: <CreditRiskCompany />,
  },
  {
    url: "estabilidade-empregaticia",
    icon: <EmploymentStabilityIcon />,
  },
  {
    url: "renda-estimada",
    icon: <IncomePrediction />,
  },
];

export const SectionModel = ({ model }: SectionModelsProps) => {
  return (
    <section
      className="sm:h-auto flex flex-col gap-6 leading-3 border border-grayWhisper bg-white rounded-lg p-9 w-full relative"
      key={model.id}
    >
      <div className="flex flex-row justify-between">
        <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-primary-base">
          {modelsIcons.find((item) => item.url === model.url)?.icon}
        </div>
        <div className="h-fit font-base rounded-3xl px-2.5 py-1.5 w-fit bg-secondary border border-primary-base">
          <Typography
            text={model.category}
            size="xSmall"
            weight="medium"
            textColor="primary"
            as={"p"}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2.5 h-[100%]">
        <Typography
          as={"p"}
          text={model.title}
          size="large"
          weight="semibold"
          textColor="dark"
        />

        <p className="leading-6 text-sm font-normal text-mediumGrayTextColor">
          {model.cardText}
        </p>
      </div>

      <Link
        href={`/modelo/${model.url}`}
        className="w-fit sm:w-full sm:justify-center text-primary-base flex flex-row items-center gap-2.5"
        itemProp="Saiba mais"
      >
        <Typography
          as={"p"}
          text={"Saiba mais"}
          size="medium"
          textColor="primary"
          weight="semibold"
        />
        <ChevronRightIcon height={18} width={18} />
      </Link>
    </section>
  );
};
