import { useQuery } from "react-query";
import { primitiveCredential } from "@/shared/types";

export const useGetSandbox = (nextPublicAuth0ClientIDSandbox: string) => {
  const getSandbox = useQuery({
    queryKey: ["dataGetSandbox"],
    queryFn: async (): Promise<primitiveCredential> =>
      fetch(
        `/bff/auth/management/applications/${nextPublicAuth0ClientIDSandbox}`,
        {
          method: "GET",
        }
      ).then((res) => res.json() as Promise<primitiveCredential>),
  });

  return {
    status: getSandbox.isSuccess ? getSandbox.data : undefined,
    loading: getSandbox.isLoading || getSandbox.isFetching,
  };
};
