import { CredentialHeader, DefaultAside, useMenuItens } from "@/shared";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const DefaultLayout = ({ children }: Props) => {
  const { menuItems, actualRoute } = useMenuItens();

  return (
    <div className="flex flex-row">
      <DefaultAside items={menuItems} actualRoute={actualRoute} />
      <div className="flex flex-col w-full">
        <CredentialHeader />
        <main className="w-full relative">
          {children}
        </main>
      </div>
    </div>
  );
}
