import axios from "axios";
import { useRouter } from "next/navigation";
import { useDefaultContext, useDisconnectCredentialHooks } from "@/shared";
import { useMutation, useQueryClient } from "react-query";
import { useUser } from "@auth0/nextjs-auth0/client";

export const useDeleteCredentialHooks = (clientID: string) => {
  const route = useRouter();

  const queryClient = useQueryClient();
  const { handleDisconnect } = useDisconnectCredentialHooks(clientID);
  const { setErrorDelete, client } = useDefaultContext();
  const { user } = useUser();

  const deleteDataCredentialMutation = useMutation({
    mutationFn: async (clientID: string) => {
      if (user && client.licensed) {
        await axios
          .delete(`/bff/auth/management/applications/${clientID}`)
          .then(() => {
            route.push("/dashboard");
            handleDisconnect();
          })
          .catch((error) => {
            setErrorDelete(true);
            console.log(error);
            return error;
          });
      }
    },
    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: ["dataDeleteCredential", "dataDeleteCredentialStatus"],
      });
    },
  });

  const handleExclude = async () => {
    deleteDataCredentialMutation.mutate(clientID);
  };

  return {
    handleExclude,
    deleteDataCredentialMutation,
  };
};
