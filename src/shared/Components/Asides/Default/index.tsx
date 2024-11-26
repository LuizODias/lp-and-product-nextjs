import React, { ReactNode } from "react";
import { Navegation } from "../../Navegation";
import Link from "next/link";
import Image from "next/image";
import { useImageLoader } from "@/shared/hooks";

export type MenuItem = {
  id: string;
  text: string;
  url: string;
  icon: ReactNode;
};

interface Props {
  items: MenuItem[];
  actualRoute?: MenuItem;
}

export const DefaultAside = ({ items, actualRoute }: Props) => {
  const { imageLoader } = useImageLoader();

  return (
    <>
      <div className="h-screen z-10 sticky-section top-0">
        <aside
          className={`overflow-hidden -translate-x-[0%] bg-white h-full lg:top-auto lg:left-auto lg:-translate-x-[0%] relative transition-all border-r-[1px] border-aliceWhite duration-500 w-[250px] pt-4 px-4 pb-6`}
        >
          <div className={`h-full flex flex-col items-center gap-10`}>
            <div className="">
              <Link href={"/dashboard"}>
                <Image
                  src=""
                  alt={"Logo API"}
                  className="logo"
                  width={128}
                  height={75}
                />
              </Link>
            </div>
            <Navegation actual={actualRoute} items={items} />
          </div>
        </aside>
      </div>
    </>
  );
};
