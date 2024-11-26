'use client';
import { ReactNode, useEffect } from "react";
import { GrowthBook, GrowthBookProvider } from "@growthbook/growthbook-react";

interface Props {
  children: ReactNode;
}

const gb = new GrowthBook({
  apiHost: process.env.NEXT_PUBLIC_GROWTHBOOK_API_HOST,
  clientKey: process.env.NEXT_PUBLIC_GROWTHBOOK_CLIENT_KEY,
});

export const GBProvider = ({ children }: Props) => {
  useEffect(() => {
    gb.init();

    gb.setAttributes({
      ...gb.getAttributes(),
    });
  }, []);

  return <GrowthBookProvider growthbook={gb}>{children}</GrowthBookProvider>;
};
