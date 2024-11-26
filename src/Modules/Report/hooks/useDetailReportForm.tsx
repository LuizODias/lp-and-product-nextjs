import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import moment from "moment";

const schema = yup.object().shape({
  startDate: yup.date().required("Data de início inválida"),
  endDate: yup.date().required("Data de fim inválida"),
});

export interface DetailReportInputs {
  startDate: Date,
  endDate: Date,
}

const defaultDate = new Date(moment().format('DD MMM YYYY'))

export const useDetailReportForm = () => {
  const form = useForm<DetailReportInputs>({
    resolver: yupResolver(schema),
    reValidateMode: "onChange",
    mode: "onBlur",
    defaultValues: {
      startDate: defaultDate,
      endDate: defaultDate
    }
  });

  return { form };
};
