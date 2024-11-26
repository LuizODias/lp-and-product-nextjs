import axios from "axios";
import { useDefaultContext } from "@/shared";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/navigation";
import { credentialDefault } from "@/constants/models";
import { useMutation, useQueryClient } from "react-query";

export const useConnectCredentialHooks = () => {
  const queryClient = useQueryClient();
  const {
    client,
    setCredential,
    setErrorCreation,
    errorCreation,
  } = useDefaultContext();
  const { user } = useUser();
  const route = useRouter();

  const connectCredentialMutation = useMutation({
    mutationFn: async (clientID: string) => {
      if (client.licensed && user) {
        await axios
          .post(`/bff/auth/management/users/connect/application`, {
            userSub: user.sub,
            applicationId: clientID,
          })
          .then(() => {})
          .catch((error) => {
            setCredential(credentialDefault);
            setErrorCreation(true);
            console.log(error);
          })
          .finally(() => {
            if (!errorCreation) {
              route.push("/dashboard/credencial");
            }
          });
      }
    },
    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: ["dataConnectCredential", "dataConnectCredentialStatus"],
      });
    },
  });

  const handleConnect = async (clientID: string) => {
    connectCredentialMutation.mutate(clientID);
  };

  return {
    handleConnect,
    connectCredentialMutation,
  };
};
