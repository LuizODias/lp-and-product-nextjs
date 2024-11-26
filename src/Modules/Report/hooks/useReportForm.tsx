import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import moment from "moment";

const schema = yup.object().shape({
  startDate: yup.date().required("Data de início inválida").typeError('Mês de início obrigatório'),
  endDate: yup.date().required("Data de fim inválida").typeError('Mês de fim obrigatório'),
});

export interface ReportInputs {
  startDate: Date,
  endDate: Date,
}

const defaultStartDate = new Date(moment().subtract(1,'months').startOf('month').format())
const defaultEndDate = new Date(moment().format())

export const useReportForm = () => {
  const form = useForm<ReportInputs>({
    resolver: yupResolver(schema),
    reValidateMode: "onChange",
    mode: "onBlur",
    defaultValues: {
      startDate: defaultStartDate,
      endDate: defaultEndDate,
    }
  });

  return { form };
};
