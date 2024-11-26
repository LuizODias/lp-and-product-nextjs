import axios from "axios";
import { useDefaultContext } from "@/shared";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useMutation, useQueryClient } from "react-query";

export const useDisconnectCredentialHooks = (clientID: string) => {
  const { user } = useUser();

  const queryClient = useQueryClient();
  const { client } = useDefaultContext();

  const disconnectDataCredentialMutation = useMutation({
    mutationFn: async (clientID: string) => {
      if (user && client.licensed) {
        await axios
          .patch(`/bff/auth/management/users/disconnect/application`, {
            userSub: user.sub,
            applicationId: clientID,
          })
          .then((resp) => {
            return resp.data;
          })
          .catch((error) => {
            console.log(error);
            return error;
          });
      }
    },
    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: ["dataDisconnectCredential", "dataDisconnectCredentialStatus"],
      });
    },
  });

  const handleDisconnect = async () => {
    disconnectDataCredentialMutation.mutate(clientID);
  };

  return {
    handleDisconnect,
    disconnectDataCredentialMutation,
  };
};
