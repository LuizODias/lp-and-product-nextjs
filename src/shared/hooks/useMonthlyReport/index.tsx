import { useQuery } from "react-query";
import { useUser } from "@auth0/nextjs-auth0/client";

export const useMonthlyReport = () => {
  const { user, isLoading } = useUser();

  const postMonthlyReport = useQuery({
    queryKey: ["dataMonthly"],
    enabled: !isLoading,
    queryFn: () =>
      fetch(`/bff/billing/monthly`, {
        method: "POST",
        body: JSON.stringify({
          subscription: user?.sub,
        }),
      }).then((res) => res.json()),
  })

  return {
    status: postMonthlyReport.isSuccess ? postMonthlyReport.data : undefined,
    loading: postMonthlyReport.isLoading || postMonthlyReport.isFetching,
  };
};
