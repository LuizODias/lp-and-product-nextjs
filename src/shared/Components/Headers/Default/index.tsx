import React from "react";
import Link from "next/link";
import { Button } from "../../Buttons";
import { LogoIcon, Sidebar, Typography } from "@/shared";

export const DefaultHeader = () => {
  return (
    <header className="flex sticky items-center h-[87px] dt:justify-center top-0 z-50 bg-white w-screen">
      <div className="sm:px-6 sm:py-4 px-20 py-2.5 flex flex-row justify-between items-center w-full max-w-[1440px] h-10">
        <div className="flex flex-row gap-2 sm:w-full tb:w-full justify-between">
          <Link href="/" className="flex flex-row  justify-between items-center gap-3">
            <LogoIcon />
          </Link>
          <Sidebar />
        </div>

        <div className="sm:hidden tb:hidden flex flex-row justify-end font-semibold gap-10">
          <div
            className="flex sm:hidden flex-row justify-center gap-4 w-max items-center font-semibold"
            itemScope
          >
            <Link
              target="_blank"
              itemProp="Sobre a Datarisk"
              href="https://www.datarisk.io/a-datarisk/"
            >
              <Typography
                as={"p"}
                text={"Sobre a Datarisk"}
                size="medium"
                textColor="dark"
                weight="semibold"
              />
            </Link>
          </div>

          <Link
            href="/contato"
            className="flex flex-row justify-end w-fit rounded-3xl dt:text-base tb:text-[13px] sm:text-xs"
          >
            <Button
              className="h-10 px-4"
              size="full"
              borderRadius="mid"
              customType="primary"
            >
              <Typography
                as={"p"}
                text={"Fale conosco"}
                size="small"
                textColor="white"
                weight="semibold"
              />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};
