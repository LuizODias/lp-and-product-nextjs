import { useMonthlyReport, useQuarterReport } from "@/shared";
import { useEffect, useState } from "react";
import { ReportInputs, useReportForm } from "../../hooks/useReportForm";
import { SubmitHandler } from "react-hook-form";
import { validateDates, handleMonthByProduct } from "../../utils/handles";
import { MonthUsage, UsageByProduct } from "../../utils/types";
import { PieChartComponent } from "../PieChart";
import { BarChartComponent } from "../BarChart";
import moment from "moment";
import "moment/locale/pt-br";

export const GeneralView = () => {
  moment().locale("pt");
  const { form } = useReportForm();
  const { register, handleSubmit, reset, control, setError, formState } = form;

  const [dataPie, setDataPie] = useState([]);
  const [dataBar, setDataBar] = useState<any>([]);
  const [dataChartBar, setDataChartBar] = useState<any>([]);
  const [startPeriod, setStartPeriod] = useState(
    moment().subtract(1,'months').startOf('month').toISOString(true).split(".")[0]
  );
  const [endPeriod, setEndPeriod] = useState(
    moment().toISOString(true).split(".")[0]
  );

  const { status: statusMonthly, loading: loadingMonthly } = useMonthlyReport();
  const { status: statusQuarter, loading: loadingQuarter } = useQuarterReport({startPeriod, endPeriod});

  useEffect(() => {
    try {
      if (!loadingMonthly && !!statusMonthly) {
        const usage = statusMonthly.percentageByProduct.map(
          (item: MonthUsage) => {
            return item;
          }
        );
        setDataPie(
          usage.map((item: MonthUsage) => {
            return { name: item.displayName, value: item.percentage };
          })
        );
      }
    } catch (error) {
      setDataPie([]);
    }
  }, [statusMonthly, loadingMonthly]);

  useEffect(() => {
    try {
      if (!loadingQuarter && !!statusQuarter) {
        const usage: UsageByProduct[] = statusQuarter.usageByProduct;
        setDataBar(usage);
        setDataChartBar(handleMonthByProduct(usage));
      }
    } catch (error) {
      setDataChartBar([]);
    }
  }, [loadingQuarter, statusQuarter]);

  const onSubmit: SubmitHandler<ReportInputs> = (data) => {
    validateDates({ setError, setStartPeriod, setEndPeriod, data });
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-5">
        <h4> Consumo mensal </h4>
        <PieChartComponent
          monthly={statusMonthly}
          isPending={loadingMonthly}
          dataPie={dataPie}
        />
      </div>

      <div className="flex flex-col gap-5">
        <h4> Gasto por período </h4>
        <BarChartComponent
          control={control}
          startPeriod={startPeriod}
          endPeriod={endPeriod}
          onSubmit={onSubmit}
          handleSubmit={handleSubmit}
          register={register}
          formState={formState}
          reset={reset}
          dataChartBar={dataChartBar}
          dataBar={dataBar}
          isPending={loadingQuarter}
        />
      </div>
    </div>
  );
};
