import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  credentialName: yup.string().min(3, "Preencha o nome da credencial").required("Campo obrigatório"),
  credentialDescription: yup.string().optional(),
  emailGithub: yup.string().email("Insira um email válido").min(3, "Preencha o seu email").optional(),
});

export interface CredentialInputs {
  credentialName: string;
  credentialDescription?: string;
  emailGithub?: string;
}

export const useCredentialForm = () => {
  const form = useForm<CredentialInputs>({
    resolver: yupResolver(schema),
    reValidateMode: "onSubmit",
    mode: "onBlur",
    defaultValues: {
      credentialDescription: "",
    }
  });

  return { form };
};
