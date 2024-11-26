type CostByMonth = {
  month: number;
  year: number;
  cost: number;
};

type UsageByProduct = {
  costByMonth: CostByMonth[];
  displayName: string;
  product: string;
  version: string;
};

type PropsPieChart = {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
  index: number;
};

type MonthUsage = {
  product: string;
  displayName: string;
  version: string;
  calls: number;
  total: number;
  percentage: number;
};

export type { CostByMonth, MonthUsage, PropsPieChart, UsageByProduct }
