import moment from "moment";
import {
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip as TooltipRecharts,
  Legend as LegendRecharts,
} from "recharts";
import { formatNumber, renderCustomizedLabel } from "../../utils/handles";
import { UseQueryResult } from "@tanstack/react-query";
import { COLORS } from "../../utils/constants";
import Skeleton from "react-loading-skeleton";

interface Props {
  monthly: any;
  isPending: boolean;
  dataPie: never[];
}

export const PieChartComponent = ({ monthly, dataPie, isPending }: Props) => {
  return (
    <div className="flex flex-row w-full gap-6">
      {!isPending ? (
        <div className="flex flex-row w-full gap-6">
          {!!dataPie.length ? (
            <div className="flex flex-row w-full gap-6">
              <div className="flex flex-col w-1/2 gap-6">
                <div className="flex flex-col w-full h-1/2 rounded bg-white shadow-layoutBorder p-4 gap-4 text-gray-strong">
                  <div className="flex flex-col">
                    <div className="flex flex-row gap-1 items-end">
                      <h6>Gasto mensal</h6>
                      <p className="font-medium text-xs leading-5">
                        até o momento
                      </p>
                    </div>
                    <p className="text-[9px] font-bold">
                      {moment().format("DD MMM YYYY")}
                    </p>
                  </div>
                  <div className="flex flex-row items-end gap-1">
                    <h4 className="text-[#4F4F4F]">R$</h4>
                    <h3 className="text-[#06437B]">
                      {formatNumber.format(monthly.cost)}
                    </h3>
                  </div>
                </div>

                <div className="flex flex-col w-full h-1/2 rounded bg-white shadow-layoutBorder p-4 gap-4 text-gray-strong">
                  <div className="flex flex-col">
                    <div className="flex flex-row gap-1 items-end">
                      <h6>Consumo mensal</h6>
                      <p className="font-medium text-xs leading-5">
                        até o momento
                      </p>
                    </div>
                    <p className="text-[9px] font-bold">
                      {moment().format("DD MMM YYYY")}
                    </p>
                  </div>
                  <div className="flex flex-row items-end gap-1">
                    <h3 className="text-[#1F878B]">{monthly.calls}</h3>
                    <p className="font-medium text-xs leading-5">chamadas</p>
                  </div>
                </div>
              </div>

              <div className="w-1/2 h-auto rounded bg-white shadow-layoutBorder p-4 gap-4 text-gray-strong">
                <div className="flex flex-col">
                  <div className="flex flex-row gap-1 items-end">
                    <h6>Consumo por produto mensal</h6>
                    <p className="font-medium text-xs leading-5">
                      até o momento
                    </p>
                  </div>
                  <p className="text-[9px] font-bold">
                    {moment().format("DD MMM YYYY")}
                  </p>
                </div>

                <div className="flex w-full justify-center">
                  <div className="flex justify-center w-[330px] h-[250px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={dataPie}
                          cx={160}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          label={renderCustomizedLabel}
                          labelLine={false}
                        >
                          {dataPie.map((entry, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={COLORS[index % COLORS.length]}
                            />
                          ))}
                        </Pie>  
                        <TooltipRecharts />
                        <LegendRecharts
                          display="Produtos"
                          align="left"
                          verticalAlign="bottom"
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <> Não há registros de consumo no mês atual </>
          )}
        </div>
      ) : (
        <div className="flex flex-row w-full gap-6">
          <div className="flex flex-col w-1/2 gap-6">
            <div className="flex flex-col w-full h-1/2 rounded bg-white shadow-layoutBorder p-4 gap-4 text-gray-strong">
              <div className="flex flex-col">
                <div className="flex flex-row gap-1 items-end">
                  <h6>Gasto mensal</h6>
                  <p className="font-medium text-xs leading-5">até o momento</p>
                </div>
                <p className="text-[9px] font-bold">
                  {moment().format("DD MMM YYYY")}
                </p>
              </div>
              <Skeleton className="h-10" />
            </div>

            <div className="flex flex-col w-full h-1/2 rounded bg-white shadow-layoutBorder p-4 gap-4 text-gray-strong">
              <div className="flex flex-col">
                <div className="flex flex-row gap-1 items-end">
                  <h6>Consumo mensal</h6>
                  <p className="font-medium text-xs leading-5">até o momento</p>
                </div>
                <p className="text-[9px] font-bold">
                  {moment().format("DD MMM YYYY")}
                </p>
              </div>
              <Skeleton className="h-10" />
            </div>
          </div>

          <div className="w-1/2 h-auto rounded bg-white shadow-layoutBorder p-4 gap-4 text-gray-strong">
            <div className="flex flex-col">
              <div className="flex flex-row gap-1 items-end">
                <h6>Consumo por produto mensal</h6>
                <p className="font-medium text-xs leading-5">até o momento</p>
              </div>
              <p className="text-[9px] font-bold">
                {moment().format("DD MMM YYYY")}
              </p>
            </div>

            <div className="flex w-full justify-center">
              <div className="flex justify-center items-center w-[450px] h-[250px] gap-5">
                <ResponsiveContainer width="35%" height="60%">
                  <Skeleton className="w-full h-full" circle/>
                </ResponsiveContainer>
                <div className="h-auto w-2/5 items-center">
                  <Skeleton count={4} className="w-full h-4"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
