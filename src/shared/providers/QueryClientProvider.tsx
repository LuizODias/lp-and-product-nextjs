"use client"
import { ReactNode } from "react";
import TagManager from "react-gtm-module";
import { QueryClient, QueryClientProvider } from "react-query";

interface Props {
  children: ReactNode;
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const tagManagerArgs = {
  gtmId: "G-4WTW0214P4",
  dataLayer: {
    userId: "001-test",
    userProject: "project-test",
  },
};

if (process.browser) {
  TagManager.initialize(tagManagerArgs);
}

export const ReactQueryProvider = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
};
