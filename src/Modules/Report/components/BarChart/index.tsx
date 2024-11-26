import moment from "moment";
import { ReportInputs } from "../../hooks/useReportForm";
import {
  Control,
  Controller,
  FormState,
  Noop,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormReset,
} from "react-hook-form";
import {
  CalendarIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@/shared";
import {
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip as TooltipRecharts,
  Bar as BarRecharts,
  Legend as LegendRecharts,
} from "recharts";
import { UsageByProduct } from "../../utils/types";
import { COLORS, MONTHS } from "../../utils/constants";
import Skeleton from "react-loading-skeleton";
import { useState } from "react";
import React from "react";

interface Props {
  startPeriod: string;
  endPeriod: string;
  onSubmit: SubmitHandler<ReportInputs>;
  handleSubmit: UseFormHandleSubmit<ReportInputs, undefined>;
  register: UseFormRegister<ReportInputs>;
  formState: FormState<ReportInputs>;
  reset: UseFormReset<ReportInputs>;
  control: Control<ReportInputs, any>;
  dataChartBar: any;
  dataBar: any;
  isPending: boolean;
}

interface PropsMonthPicker {
  onChange: (...event: any[]) => void;
  onBlur: Noop;
  value: Date;
}

const MonthPicker = ({ onChange, onBlur, value }: PropsMonthPicker) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [displayedYear, setDisplayedYear] = useState<number>(moment().year());
  const [selected, setSelected] = useState<[index: number, year: number]>();

  const selectMonth = (index: number) => {
    onChange(
      moment().month(index).year(displayedYear).toISOString(true).split(".")[0]
    );
    setSelected([index, displayedYear]);
    setTimeout(() => {
      setIsOpen(!isOpen);
    }, 100);
  };

  const previousMonth = () => {
    if (displayedYear > 2023 && displayedYear <= moment().year()) {
      setDisplayedYear(displayedYear - 1);
    }
  };

  const nextMonth = () => {
    if (displayedYear < moment().year()) {
      setDisplayedYear(displayedYear + 1);
    }
  };

  return (
    <div className="relative flex flex-col gap-2">
      <div
        className={`top-0 left-0  w-screen h-screen z-30 cursor-default ${isOpen ? "fixed " : "hidden "}`}
        onClick={() => setIsOpen(!isOpen)}
      />
      <div
        className={`cursor-pointer text-gray-strong input-container justify-between w-[150px] items-center h-9 border border-borderColor rounded p-2 flex flex-row gap-1`}
        onBlur={() => onBlur()}
        onClick={() => setIsOpen(!isOpen)}
      >
        <CalendarIcon className="h-6" />
        <p className="font-medium text-sm">
          {value ? moment(value).format("MMM YYYY") : moment().year()}
        </p>
        <ChevronDownIcon height={17} className="stroke-2" />
      </div>

      <div
        className={`${isOpen ? "" : "hidden"} p-2 absolute border border-borderColor rounded z-40 bg-white left-16 top-6`}
      >
        <div className="w-[198px] h-11 flex flex-row justify-between items-center p-2.5">
          <ChevronLeftIcon
            height={17}
            className={`cursor-pointer stroke-[3px] ${displayedYear > 2023 ? "text-primary-base" : "text-gray-mid"}`}
            onClick={() => previousMonth()}
          />
          <p className="font-semibold text-base text-gray-mid ">
            {displayedYear}
          </p>
          <ChevronRightIcon
            height={17}
            className={`cursor-pointer stroke-[3px] ${displayedYear < moment().year() ? "text-primary-base" : "text-gray-mid"}`}
            onClick={() => nextMonth()}
          />
        </div>
        <div className="grid grid-cols-4 gap-x-2.5 gap-y-2 py-1.5">
          {MONTHS.map((item, index) => {
            return (
              <div
                className={`${selected?.[0] === index && selected?.[1] === displayedYear ? "bg-[#E0E4E9] text-primary-base" : "text-gray-mid"} py-1 rounded px-2.5 font-semibold text-base cursor-pointer flex items-center justify-center hover:text-primary-base`}
                key={index}
                onClick={() => selectMonth(index)}
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export const BarChartComponent = ({
  control,
  startPeriod,
  endPeriod,
  onSubmit,
  handleSubmit,
  register,
  formState,
  reset,
  dataChartBar,
  dataBar,
  isPending,
}: Props) => {
  const { errors, isValid } = formState;
  return (
    <div className="flex flex-row w-full gap-6">
      <div className="w-full h-auto rounded bg-white shadow-layoutBorder p-4 flex flex-col gap-4 text-gray-strong">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1 items-start">
            <h6>
              Gasto {moment(startPeriod).format("MMM YYYY")} a{" "}
              {moment(endPeriod).format("MMM YYYY")}
            </h6>
            <p className="font-medium text-xs leading-5 text-gray-med ">
              *Mínimo de um mês e máximo de três meses
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-row gap-4 h-16 items-end">
              <div className="relative flex flex-col gap-2">
                <p>Mês de início</p>
                <Controller
                  control={control}
                  name="startDate"
                  render={({ field: { onChange, onBlur, value, ref } }) => (
                    <MonthPicker
                      onChange={onChange}
                      onBlur={onBlur}
                      value={value}
                    />
                  )}
                />
              </div>
              <div className="relative flex flex-col gap-2">
                <p>Mês de fim</p>
                <Controller
                  control={control}
                  name="endDate"
                  render={({ field: { onChange, onBlur, value, ref } }) => (
                    <MonthPicker
                      onChange={onChange}
                      onBlur={onBlur}
                      value={value}
                    />
                  )}
                />
              </div>

              <div className="flex flex-row gap-3">
                <div className="flex flex-row gap-4 h-16 items-end w-20">
                  <Button
                    customType="secondary"
                    borderRadius="mid"
                    disabled={!isValid}
                    className="pl-1 h-9"
                  >
                    <input
                      type="submit"
                      className={`body-small-semi ${
                        isValid ? "cursor-pointer" : ""
                      }`}
                      value="Filtrar"
                    />
                  </Button>
                </div>
                <div className="flex h-16 items-end">
                  <div
                    onClick={() => reset()}
                    className="cursor-pointer h-9 items-center flex flex-row text-primary-base gap-1"
                  >
                    <input
                      type="submit"
                      className="cursor-pointer hover:text-primary-dark"
                      value="Limpar"
                      onClick={() => handleSubmit(onSubmit)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              {errors ? (
                <p className="text-status-errorModal text-sm">
                  {errors.startDate?.message} {errors.endDate?.message}
                </p>
              ) : (
                <></>
              )}
            </div>
          </form>
        </div>

        <div className="flex w-full justify-start">
          {!isPending ? (
            <div className="flex w-full h-full justify-center">
              {!dataBar.length ? (
                <div className="flex w-full justify-center">
                  Não há registros de consumo nesse período
                </div>
              ) : (
                <div className="flex w-full h-[500px] justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      width={500}
                      height={300}
                      data={dataChartBar}
                      margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <TooltipRecharts />
                      <LegendRecharts display="Produtos" align="left" />
                      {dataBar.map((product: UsageByProduct, index: number) => {
                        return (
                          <BarRecharts
                            key={index}
                            name={`${product.displayName}`}
                            dataKey={`${product.product}`}
                            stackId="a"
                            fill={COLORS[index]}
                            barSize={150}
                          />
                        );
                      })}
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              )}
            </div>
          ) : (
            <div className="w-full gap-5 flex flex-col">
              <div className="flex flex-row h-5/6 align-center justify-center gap-10 items-end">
                <Skeleton width={100} className="h-[100px]" />
                <Skeleton width={100} className="h-[240px]" />
                <Skeleton width={100} className="h-[40px]" />
                <Skeleton width={100} className="h-[300px]" />
              </div>
              <div className="flex flex-row h-1/6 align-center gap-3">
                <Skeleton width={100} />
                <Skeleton width={100} />
                <Skeleton width={100} />
                <Skeleton width={100} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
