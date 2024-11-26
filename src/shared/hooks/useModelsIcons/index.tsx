import { ReactNode, useMemo } from "react";
import { CreditRiskCompany, CreditRiskPerson, EmploymentStabilityIcon, IncomePrediction } from "@/shared/Components/Icons/ModelsIcons";

type ModelIcon = {
  url: string;
  icon: ReactNode;
};

export const useModelIcons = (url: string) => {
  const modelIcons: ModelIcon[] = useMemo(
    () => [
      {
        url: 'renda-estimada',
        icon: <IncomePrediction />,
      },
      {
        url: 'estabilidade-empregaticia',
        icon: <EmploymentStabilityIcon />,
      },
      {
        url: 'credito-pessoa-fisica',
        icon: <CreditRiskPerson />,
      },
      {
        url: 'credito-pessoa-juridica',
        icon: <CreditRiskCompany />,
      },
    ],
    []
  );

  const actualModelIcon = useMemo(
    () => modelIcons.find((item) => item.url === url),
    [modelIcons, url]
  );

  return {
    modelIcons,
    actualModelIcon,
  };
};
