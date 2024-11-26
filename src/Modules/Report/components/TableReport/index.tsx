import { Loader, Span } from "@/shared";
import {
  CheckCircleIcon,
  ChevronDownIcon,
  ClockIcon,
  DocumentTextIcon,
  EllipsisVerticalIcon,
  ExclamationTriangleIcon,
  InboxIcon,
  ListBulletIcon,
} from "@heroicons/react/24/outline";
import React, { ReactNode } from "react";

type headerTypes = {
  text: string;
  width?: string;
};

type cellTypes = string | ReactNode;

export interface tableType {
  header: headerTypes[];
  rows: cellTypes[][];
  tableHeight?: number;
}

export const TableReport = (data: tableType) => {
  if (!data.header.length) return <></>;

  return (
    <div
      className="h-full overflow-y-auto shadow-tableShadow"
      style={{
        maxHeight: data.tableHeight ? `${data.tableHeight}px` : undefined,
      }}
    >
      <table className="border w-full overflow-visible border-aliceWhite rounded">
        <thead className="sticky top-0">
          <tr className="bg-tableHeader sticky top-0 h-9">
            {data.header.map((header, index) => {
              return (
                <th
                  key={index}
                  align="left"
                  style={{ width: header.width }}
                  className="px-4 py-2 border-b-2 border-b-aliceWhite sticky top-0 "
                >
                  <div className="flex flex-row gap-2">
                    <p className="text-sm font-bold leading-4 text-gray-strong">
                      {header.text}
                    </p>
                    {header.text.length ? (
                      <ChevronDownIcon className="cursor-pointer" height={14} />
                    ) : (
                      <></>
                    )}
                  </div>
                </th>
              );
            })}
          </tr>
        </thead>

        <tbody>
          {data.rows.length ? (
            data.rows.map((row, index) => {
              return (
                <tr key={index} className="border-b last:border-b-0">
                  {row.map((cell, index) => {
                    return (
                      <>
                        {index === 0 ? (
                          <td
                            key={index}
                            className="p-4 leading-4 text-darkTextColor font-semibold"
                          >
                            {cell}
                          </td>
                        ) : index === 1 ? (
                          <td
                            key={index}
                            className="p-4 text-[#66768C] text-[9px] font-bold leading-[11px]"
                          >
                            {cell}
                          </td>
                        ) : index === 2 ? (
                          <td
                            key={index}
                            className="p-4 font-semibold text-xs leading-5"
                          >
                            {cell === "processing" ? (
                              <div className="bg-[#F5E6FA] text-status-warning rounded-full w-fit flex gap-1 items-center py-0.5 px-3">
                                <ClockIcon height={14} />
                                Processando
                              </div>
                            ) : cell === "failed" ? (
                              <div className="bg-status-errorBackground text-status-errorModal rounded-full w-fit flex gap-1 items-center py-0.5 px-3">
                                <ExclamationTriangleIcon height={14} />
                                Solicitação falhou
                              </div>
                            ) : (
                              <div className="bg-[#E3F3F0] text-status-success rounded-full w-fit flex gap-1 items-center py-0.5 px-3">
                                <CheckCircleIcon height={14} />
                                Pronto
                              </div>
                            )}
                          </td>
                        ) : index === 3 ? (
                          <td key={index} className="p-4">
                            {cell === "processing" ? <Loader /> : <></>}
                          </td>
                        ) : index === 4 ? (
                          <td
                            key={index}
                            className="p-4 flex gap-4 text-primary-base font-bold"
                          >
                            <span className="flex gap-1 items-center cursor-pointer">
                              <ListBulletIcon height={16} /> Baixar .csv
                            </span>
                            <span className="flex gap-1 items-center cursor-pointer">
                              <DocumentTextIcon height={16} />
                              Baixar .pdf
                            </span>
                          </td>
                        ) : index === 5 ? (
                          <td key={index} className="p-4">
                            <EllipsisVerticalIcon
                              height={20}
                              className="cursor-pointer"
                            />
                          </td>
                        ) : (
                          <></>
                        )}
                      </>
                    );
                  })}
                </tr>
              );
            })
          ) : (
            <tr className="border-b last:border-b-0">
              <td colSpan={5} className="p-4 table-cell">
                <div className="flex flex-row leading-4 text-[#66768C] font-semibold w-full justify-center gap-2 items-center">
                  <InboxIcon height={18} /> Ainda não temos nenhum relatório.
                  Seus relatórios aparecerão aqui.
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
