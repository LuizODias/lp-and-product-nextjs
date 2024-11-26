"use client"
import { DefaultLayout } from "@/shared";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";
import { DetailReport, GeneralView, ScreenTab } from "./components";

export const Report = () => {
  const [inView, setInView] = useState(true);

  return (
    <DefaultLayout>
      <title>Scores de Crédito - Relatório de consumo</title>
      <div className="flex flex-col p-7 gap-6">
        <div className="flex flex-col pb-32 gap-6">
          <div className="flex flex-row gap-2 items-center">
            <Link href={"/dashboard"}>
              <ChevronLeftIcon className="h-6 w-6 text-primary-base cursor-pointer" />
            </Link>
            <h3> Consumo </h3>
          </div>
          <ScreenTab inView={inView} setInView={setInView} />

          { inView ? 
            <GeneralView />
          : <DetailReport />}
        </div>
      </div>
    </DefaultLayout>
  );
};
