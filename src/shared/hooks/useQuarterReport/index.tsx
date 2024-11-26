import { useQuery } from "react-query";
import { useUser } from "@auth0/nextjs-auth0/client";

interface Props {
  startPeriod: string,
  endPeriod: string,
}

export const useQuarterReport = ({ startPeriod, endPeriod}: Props) => {
  const { user, isLoading } = useUser();

  const quarterReport = useQuery({
    queryKey: ["quarterData", startPeriod, endPeriod],
    enabled: !isLoading,
    queryFn: () =>
      fetch(`/bff/billing/summary`, {
        method: "POST",
        body: JSON.stringify({
          subscription: user?.sub,
          start: startPeriod,
          end: endPeriod,
        }),
      }).then((res) => res.json()),
  });

  return {
    status: quarterReport.isSuccess ? quarterReport.data : undefined,
    loading: quarterReport.isLoading || quarterReport.isFetching,
    refetch: quarterReport.refetch,
  };
};
