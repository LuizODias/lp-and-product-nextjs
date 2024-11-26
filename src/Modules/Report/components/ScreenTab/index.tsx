import { Flags } from "@/shared";
import { useUser } from "@auth0/nextjs-auth0/client";
import React from "react";
import { Dispatch, SetStateAction } from "react";

interface Props {
  inView: boolean;
  setInView: Dispatch<SetStateAction<boolean>>;
}

export const ScreenTab = ({ inView, setInView }: Props) => {
  const { user } = useUser();
  let flags;
  
  if(user) {
    flags = user.flags as Flags
  }
  
  const detailed_report = flags?.detailed_report;

  return (
    <div
      id="section-tab"
      className="bg-white screen-tab  flex flex-row w-full top-[87px] border-b-[1px] border-aliceWhite whitespace-nowrap text-xs dt:text-base overflow-x-scroll sm:pr-8"
    >
      <div id="anchor-section-1">
        <a
          href="#section-1"
          onClick={() => setInView(true)}
          className={`anchor inline-block ${inView
              ? "border-primary-base text-gray-strong"
              : "border-transparent text-primary-base"
            } dt:hover:text-primary-dark p-4 dt:h-12 h-12 border-b-2 font-bold`}
        >
          Visão Geral
        </a>
      </div>

      {detailed_report ? (
        <div id="anchor-section-2">
          <a
            href="#section-2"
            onClick={() => setInView(false)}
            className={`anchor inline-block ${!inView
                ? "border-primary-base text-gray-strong"
                : "border-transparent text-primary-base"
              } dt:hover:text-primary-dark p-4 dt:h-12 h-12 border-b-2 font-bold`}
          >
            Relatório detalhado
          </a>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
