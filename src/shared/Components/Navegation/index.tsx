import { Flags, LinkComponent, Typography } from "@/shared";
import { Span } from "@/shared/Components/Typography";
import { useUser } from "@auth0/nextjs-auth0/client";
import {
  Bars3BottomLeftIcon,
  Cog8ToothIcon,
} from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

export type MenuItem = {
  id: string;
  text: string;
  url: string;
  icon: ReactNode;
};

interface Props {
  items: MenuItem[];
  actual?: MenuItem;
}

export const Navegation = ({ items, actual }: Props) => {
  const route = usePathname();
  const { user } = useUser();
  let flags;

  if (user) {
    flags = user.flags as Flags;
  }

  const config_tab = flags?.config_tab;

  return (
    <nav className="w-full h-full flex flex-col justify-between ">
      <ul className={`w-full list-none flex flex-col ml-0`}>
        {items ? (
          items.map((item) => {
            return (
              <li
                key={item.id}
                className={`px-4 py-3 transition-colors duration-500 ${
                  actual && item.url === actual.url
                    ? "bg-secondary rounded-full"
                    : ""
                }`}
              >
                <LinkComponent url={item.url}>
                  <div className="flex flex-row gap-2 text-strongGrayTextColor">
                    {item.icon}
                    <div>
                      <Typography
                        text={item.text}
                        weight="semibold"
                        size="small"
                        textColor="strongGray"
                        as={"p"}
                      />
                    </div>
                  </div>
                </LinkComponent>
              </li>
            );
          })
        ) : (
          <></>
        )}
      </ul>

      {config_tab ? (
        <ul
          className={`w-full list-none flex flex-row ml-0 gap-2 items-center justify-center`}
        >
          <li
            className={`w-full px-4 py-3 transition-colors duration-500 ${
              route === "/dashboard/configuracoes"
                ? "bg-secondary rounded-full"
                : ""
            }`}
          >
            <LinkComponent url={"/dashboard/configuracoes"}>
              <div className="flex flex-row gap-2 w-full justify-between">
                <div className="flex flex-row gap-2 items-center">
                  <Cog8ToothIcon width={18} height={18} />
                  <Typography
                    text={"Configurações"}
                    textColor="strongGray"
                    weight="semibold"
                    size="small"
                    as={"p"}
                  />
                </div>
              </div>
            </LinkComponent>
          </li>
          <Bars3BottomLeftIcon
            width={18}
            height={18}
            className="cursor-pointer"
            onClick={() => {}}
          />
        </ul>
      ) : (
        <></>
      )}
    </nav>
  );
};
