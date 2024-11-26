import axios from "axios";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useDefaultContext, useGrantCredentialHooks } from "@/shared";
import { CredentialInputs } from "@/Modules/Credentials/hooks/useCredentialForm";
import { credentialDefault } from "@/constants/models";
import { useMutation, useQueryClient } from "react-query";

export const useCreateCredentialHooks = () => {
  const queryClient = useQueryClient();
  const { client, setCredentialID, setCredential, setErrorCreation } =
    useDefaultContext();
  const { user } = useUser();
  const { handleGrant } = useGrantCredentialHooks();

  const createDataCredentialMutation = useMutation({
    mutationFn: async (form: CredentialInputs) => {
      if (user && client.licensed) {
        await axios
          .post(`/bff/auth/management/applications`, {
            userSub: user?.sub,
            name: form.credentialName,
            description: form.credentialDescription,
            email: user?.email || form.emailGithub,
          })
          .then((resp) => {
            if (resp.data.client_id) {
              setCredentialID(resp.data.client_id);
              setCredential({
                name: resp.data.name,
                clientID: resp.data.client_id,
                clientSecret: resp.data.client_secret,
                status: true,
                scores: ["Score de Estabilidade Empregatícia"],
                description: resp.data.description,
                isNew: true,
              });
              handleGrant(resp.data.client_id);
            }
          })
          .catch((error) => {
            setCredential(credentialDefault);
            setErrorCreation(true);
            console.log(error);
          });
      }
    },
    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: ["dataCreateCredential", "dataCreateCredentialStatus"],
      });
    },
  });

  const handleCreate = async (data: CredentialInputs) => {
    createDataCredentialMutation.mutate(data);
  };

  return {
    handleCreate,
    createDataCredentialMutation,
  };
};
