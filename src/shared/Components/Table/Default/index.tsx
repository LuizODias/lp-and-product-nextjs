import React, { PropsWithChildren } from "react";
import { Span } from "../../Typography";

export type headerTypes = {
  text: string;
  width?: string;
};

export interface tableType {
  header?: headerTypes[];
  tableHeight?: number;
  onlyBodyTable?: boolean;
  onlyHeaderTable?: boolean;
}

export const Table = ({ children, ...data }: PropsWithChildren<tableType>) => {
  return (
    <div
      className={`h-full overflow-y-auto ${!!data.onlyBodyTable ? " rounded-b-lg " : !!data.onlyHeaderTable ? " rounded-t-lg " : " rounded shadow-layoutBorder "} `}
      data-testid="table wrapper"
      style={{
        maxHeight: data.tableHeight ? `${data.tableHeight}px` : undefined,
      }}
    >
      <table
        className={`${!!data.onlyBodyTable || !!data.onlyHeaderTable ? "" : "border"} w-full overflow-visible `}
        cellPadding="0"
      >
        <thead className="sticky top-0 z-10 ">
          <tr className="bg-tableHeader sticky top-0 ">
            {data.header &&
              data.header.map((header, index) => {
                return (
                  <th
                    key={index}
                    align="left"
                    style={{ width: header.width }}
                    className="px-3 py-2 border-b-2 sticky top-0 "
                  >
                    <Span text={header.text} size="small" weight="bold" />
                  </th>
                );
              })}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
};
