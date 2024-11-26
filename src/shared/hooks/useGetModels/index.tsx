import { useQuery } from "react-query";

export const useGetModels = () => {
  const getSandbox = useQuery({
    queryKey: ["dataGetModels"],
    queryFn: async () =>
      fetch(``, {
        method: "GET",
      }).then((res) => res.json()).then((res) => {
        for (var i = res.length - 1; i >= 3; i--) {
          res.splice(Math.floor(Math.random() * res.length), 1);
        }
        return res;
      }),
  });

  return {
    status: getSandbox.isSuccess ? getSandbox.data : undefined,
    loading: getSandbox.isLoading || getSandbox.isFetching,
  };
};

