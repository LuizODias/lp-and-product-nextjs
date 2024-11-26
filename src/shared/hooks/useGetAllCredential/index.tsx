import { primitiveCredential, useDefaultContext } from "@/shared";
import { useQuery } from "react-query";
import { useUser } from "@auth0/nextjs-auth0/client";

export const useGetAllCredential = () => {
  const { user, isLoading } = useUser();
  const { client } = useDefaultContext();

  const getAllCredentials = useQuery({
    queryKey: ["dataGetAllCredential"],
    queryFn: async (): Promise<primitiveCredential[]> =>
      fetch(`/bff/auth/management/users/${user?.sub}/applications`, {
        method: "GET",
      }).then((res) => res.json() as Promise<primitiveCredential[]>),
    enabled: !isLoading && client.licensed,
  });

  return {
    status: getAllCredentials.isSuccess ? getAllCredentials.data : undefined,
    loading: getAllCredentials.isLoading || getAllCredentials.isFetching,
  };
};
