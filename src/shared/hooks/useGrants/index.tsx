import axios from "axios";
import { useConnectCredentialHooks, useDefaultContext } from "@/shared";
import { credentialDefault } from "@/constants/models";
import { useMutation, useQueryClient } from "react-query";

export const useGrantCredentialHooks = () => {
  const queryClient = useQueryClient();
  const { client, setCredential, setErrorCreation } = useDefaultContext();
  const { handleConnect } = useConnectCredentialHooks();

  const grantCredentialMutation = useMutation({
    mutationFn: async (clientID: string) => {
      if (client.licensed) {
        await axios
          .post(`bff/auth/management/applications/grants`, {
            clientId: clientID,
          })
          .then(() => {
            handleConnect(clientID);
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
        queryKey: ["dataGrantCredential", "dataGrantCredentialStatus"],
      });
    },
  });

  const handleGrant = async (clientID: string) => {
    grantCredentialMutation.mutate(clientID);
  };

  return {
    handleGrant,
    grantCredentialMutation,
  };
};
