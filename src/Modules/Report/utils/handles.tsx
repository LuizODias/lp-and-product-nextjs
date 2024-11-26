import { UseFormSetError } from "react-hook-form";
import { CostByMonth, PropsPieChart, UsageByProduct } from "./types";
import { SetStateAction } from "react";
import { ReportInputs } from "../hooks/useReportForm";
import moment from "moment";
import { MONTHS } from "./constants";

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}: PropsPieChart) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.45;
  const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
  const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      fontSize={12}
      fontWeight="bold"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const handleMonthByProduct = (usage: UsageByProduct[]) => {
  return usage
    .reduce((accMonth: CostByMonth[], objMonth: UsageByProduct) => {
      objMonth.costByMonth.forEach((m: CostByMonth) =>
        accMonth.find(
          (i: CostByMonth) => i.month === m.month && i.year === m.year
        )
          ? null
          : accMonth.push(m)
      );
      return accMonth;
    }, [])
    .map((month: CostByMonth) => {
      let auxMonth: any = { ...month };
      usage.forEach((product: UsageByProduct) => {
        const costProduct = product.costByMonth.find(
          (c: CostByMonth) => c.month === month.month && c.year === month.year
        );
        if (!costProduct) {
          return;
        }
        auxMonth[`${product.product}`] =
          costProduct.cost.toFixed(2);
      });
      return auxMonth;
    })
    .map((monthTest) => {
      let { cost, month, year, ...auxMonth }: any = { ...monthTest };
      auxMonth["name"] = MONTHS[month - 1] + year;
      return auxMonth;
    });
};

const formatNumber = new Intl.NumberFormat("pt-BR", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 3,
});

interface PropsValidate {
  setError: UseFormSetError<ReportInputs>;
  setStartPeriod: (value: SetStateAction<string>) => void;
  setEndPeriod: (value: SetStateAction<string>) => void;
  data: ReportInputs;
}

const validateDates = ({
  setError,
  setStartPeriod,
  setEndPeriod,
  data,
}: PropsValidate) => {
  if (data.endDate < data.startDate) {
    setError("endDate", {
      type: "manual",
      message: "Mês de fim deve ser mais tarde que o mês de início!",
    });
  } else if (
    data.endDate.getMonth() - data.startDate.getMonth() >= 3 &&
    data.endDate.getFullYear() == data.startDate.getFullYear()
  ) {
    setError("endDate", {
      type: "manual",
      message: "Período máximo de 3 meses!",
    });
  } else if (
    data.endDate.getMonth() - data.startDate.getMonth() > -10 &&
    data.endDate.getFullYear() != data.startDate.getFullYear()
  ) {
    setError("endDate", {
      type: "manual",
      message: "Período máximo de 3 meses!",
    });
  } else if (
    new Date(moment(data.endDate).subtract(3, "hours").toISOString(true)) >=
    new Date(moment().toISOString(true))
  ) {
    setError("endDate", {
      type: "manual",
      message: "Mês de fim deve ser antes do atual!",
    });
  } else {
    setStartPeriod(data.startDate.toISOString().split(".")[0]);
    setEndPeriod(data.endDate.toISOString().split(".")[0]);
  }
};

export {
  renderCustomizedLabel,
  handleMonthByProduct,
  formatNumber,
  validateDates,
};
