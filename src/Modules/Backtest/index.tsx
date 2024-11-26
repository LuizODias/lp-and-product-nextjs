import {
  Button,
  DefaultLayout,
  TableComponents,
  Typography,
  useDefaultContext,
} from "@/shared";
import { headerTestsTable } from "../Contact/constants";
import { useMemo, useRef } from "react";
import {
  ChartBarIcon,
  ClockIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  PlusSmallIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/outline";
import { FormsBacktest } from "./components";

const tableRows = [
  [
    "Solicitação 1",
    "18 jun 2023 - 31 dez 2023",
    "05 jan 24 | 14:37:22",
    "processing",
    "",
  ],
  [
    "Solicitação 2",
    "01 jan 2023 - 31 dez 2023",
    "31 dez 23 | 14:37:22",
    "failed",
    "",
  ],
  [
    "Solicitação 3",
    "15 out 2023 - 15 jan 2024",
    "22 dez 23 | 14:37:22",
    "ready",
    "",
  ],
];

export const BacktestHistory = () => {
  const boxRef = useRef<HTMLInputElement>(null);
  const { isOpenForms, openBacktest, closeBacktest } = useDefaultContext();

  const rows = useMemo(
    () =>
      tableRows.map((row, index) => {
        return (
          <TableComponents.Tr key={index}>
            <TableComponents.Td>
              <p
                className={`leading-4 font-semibold ${row[3] === "processing" ? "text-mediumGrayTextColor" : row[3] === "failed" ? "text-gray-strong" : "text-darkTextColor"}`}
              >
                {row[0]}
              </p>
            </TableComponents.Td>
            <TableComponents.Td>
              <p className="p-4 text-[#66768C] text-xs font-bold leading-[11px]">
                {row[1]}
              </p>
            </TableComponents.Td>
            <TableComponents.Td>
              {row[3] === "processing" ? (
                <div className="bg-[#F5E6FA] text-status-warning rounded-full text-xs font-semibold w-fit flex gap-1 items-center py-0.5 px-3">
                  <ClockIcon height={14} />
                  Processando
                </div>
              ) : row[3] === "failed" ? (
                <div className="bg-status-errorBackground text-status-errorModal text-xs font-semibold rounded-full w-fit flex gap-1 items-center py-0.5 px-3">
                  <ExclamationTriangleIcon height={14} />
                  Solicitação falhou
                </div>
              ) : (
                <div className="bg-[#E3F3F0] text-status-success text-xs font-semibold rounded-full w-fit flex gap-1 items-center py-0.5 px-3">
                  <CheckCircleIcon height={14} />
                  Pronto
                </div>
              )}
            </TableComponents.Td>
            <TableComponents.Td>
              <div
                className={`flex flex-row gap-2 text-primary-base items-center ${row[3] === "ready" ? "opacity-100 cursor-pointer" : "opacity-50 cursor-default"}`}
              >
                <ChartBarIcon width={15} height={15} />
                <Typography
                  as={"p"}
                  text={"Ver resultados"}
                  textColor="primary"
                  weight="bold"
                  size="small"
                />
              </div>
            </TableComponents.Td>
          </TableComponents.Tr>
        );
      }),
    [tableRows]
  );

  return (
    <DefaultLayout>
      <title>Scores de Crédito - Meus testes</title>
      <div className="flex flex-col gap-6 py-8 px-6">
        <div className="flex flex-col gap-4">
          <div className="flex flex-row justify-between items-center">
            <h4> Meus testes </h4>
            <Button
              customType="primary"
              onClick={openBacktest}
              className="flex flex-row gap-1 items-center py-2 px-4"
            >
              <PlusSmallIcon width={15} height={15} />
              <Typography
                as={"p"}
                text={"Solicite um backtest"}
                weight="semibold"
                size="small"
                textColor="white"
              />
            </Button>
          </div>
        </div>

        <TableComponents.Table header={headerTestsTable}>
          {rows}
        </TableComponents.Table>
      </div>
      <div
        ref={boxRef}
        className={`py-2 flex fixed h-[110vh] top-14 z-40 w-full bg-white ease-in-out duration-300 ${
          isOpenForms ? "translate-x-0 left-[250px]" : "translate-x-full"
        }`}
      >
        <div
          className="flex flex-col gap-5 w-[970px] text-darkTextColor"
          itemScope
        >
          <div
            className="w-full flex flex-row pl-6 p-2.5 justify-start items-center cursor-pointer text-primary-base gap-2"
            onClick={closeBacktest}
          >
            <ArrowLeftIcon width={18} className="stroke-2" />
            <Typography
              as={"p"}
              text={"Voltar para Meus testes"}
              weight="bold"
              size="xSmall"
              textColor="primary"
            />
          </div>
          <FormsBacktest />
        </div>
      </div>
    </DefaultLayout>
  );
};
