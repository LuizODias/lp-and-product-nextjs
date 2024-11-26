import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().min(3, "Campo obrigatório").required("Campo obrigatório"),
  product: yup
    .string()
    .min(3, "Selecione uma solução")
    .required("Selecione uma solução")
    .typeError("Selecione uma solução"),
  terms: yup
    .boolean()
    .required()
    .oneOf([true], "Necessário concordar com os termos e condições"),
});

export interface BacktestInputs {
  name: string;
  product: string;
  terms: boolean;
}

export const useBacktestForm = () => {
  const form = useForm<BacktestInputs>({
    resolver: yupResolver(schema),
    reValidateMode: "onBlur",
    mode: "onBlur",
    defaultValues: {
      terms: false,
    },
  });

  return { form };
};
