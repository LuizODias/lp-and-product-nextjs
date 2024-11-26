import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().min(3, "Campo obrigatório").required("Campo obrigatório"),
  email: yup
    .string()
    .min(5, "Campo obrigatório")
    .required("Campo obrigatório")
    .email("Insira um email válido")
    .typeError("Insira um email válido"),
  phoneNumber: yup
    .string()
    .min(11, "Preencha o telefone")
    .max(12, "Telefone inválido")
    .required("Campo obrigatório"),
  otherProducts: yup
    .array()
    .min(1, "Selecione uma solução")
    .required("Selecione uma solução")
    .typeError("Selecione uma solução"),
  lastName: yup.string().optional(), //DEACTIVATED
  company: yup.string().optional(), //DEACTIVATED
  role: yup.string().optional(), //DEACTIVATED
  contact: yup.string().optional(), //DEACTIVATED
  clientProblem: yup.string().optional(), //DEACTIVATED
  apiCalls: yup.string().optional(), //DEACTIVATED
  selectedProduct: yup.string().optional(), //DEACTIVATED
});

export interface ContactInputs {
  name: string;
  phoneNumber: string;
  email: string;
  otherProducts: string[];
  lastName?: string | undefined;
  company?: string | undefined;
  role?: string | undefined;
  selectedProduct?: string | undefined;
  contact?: string | undefined;
  clientProblem?: string | undefined;
  apiCalls?: string | undefined;
}

export const useContactForm = () => {
  const form = useForm<ContactInputs>({
    resolver: yupResolver(schema),
    reValidateMode: "onBlur",
    mode: "onBlur",
    defaultValues: {
      lastName: "", //DEACTIVATED
      company: "", //DEACTIVATED
      role: "",
      selectedProduct: "", //DEACTIVATED
      contact: "", //DEACTIVATED
      clientProblem: "", //DEACTIVATED
      apiCalls: "", //DEACTIVATED
    },
  });

  return { form };
};
