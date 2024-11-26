import { useUser } from "@auth0/nextjs-auth0/client";
import { useDefaultContext } from "../useMenuState";
import { useQuery } from "react-query";

export const useVerifyUser = () => {
  const { user, isLoading } = useUser();
  const { setClient } = useDefaultContext();

  const verifyUserQuery = useQuery({
    queryKey: ["dataVerifyUser"],
    queryFn: async () =>
      fetch(`/bff/auth/management/users/${user?.sub}`, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((res) => {
          setClient({
            name: res.name,
            email: res.email,
            licensed: res.app_metadata?.licensed ? true : false,
            CNPJ: res.app_metadata?.companyRegistrationNumber || "",
            created_at: res.created_at,
            sub: res.user_id
          })
        })
        .catch((error) => {
          console.log(error);
        }),
    enabled: !isLoading,
  });

  return {
    status: verifyUserQuery.isSuccess ? verifyUserQuery.data : undefined,
    loading: verifyUserQuery.isLoading || verifyUserQuery.isFetching,
  };
};
