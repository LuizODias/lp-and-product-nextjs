import {
  CalendarIcon,
  ListBulletIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { TableReport } from "../TableReport";
import { Button, FeedbackInfo } from "@/shared";
import {
  DetailReportInputs,
  useDetailReportForm,
} from "../../hooks/useDetailReportForm";
import { SubmitHandler } from "react-hook-form";

export const DetailReport = () => {
  const tableHeader = [
    {
      text: "Relatório",
    },
    {
      text: "Data de solicitação",
    },
    {
      text: "Status",
    },
    {
      text: "",
    },
    {
      text: "Ações",
    },
    {
      text: "",
    },
  ];

  const tableRows = [
    [
      "18 jun 2023 - 31 dez 2023",
      "05 jan 24 | 14:37:22",
      "processing",
      "processing",
      "",
      "",
    ],
    [
      "01 jan 2023 - 31 dez 2023",
      "31 dez 23 | 14:37:22",
      "failed",
      "failed",
      "",
      "",
    ],
    [
      "15 out 2023 - 15 jan 2024",
      "22 dez 23 | 14:37:22",
      "ready",
      "ready",
      "",
      "",
    ],
  ];

  const { form } = useDetailReportForm();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = form;

  const onSubmit: SubmitHandler<DetailReportInputs> = (data) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-5">
          <h4> Relatórios detalhados </h4>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-row gap-2 items-end">
            <div className="flex flex-col gap-2">
              <p>Data de início</p>
              <div
                className={`input-container w-[150px] items-center h-9 shadow-inputBorder border border-borderColor rounded-[4px] py-2 px-3 outline-none appearance-none flex flex-row gap-1`}
              >
                <CalendarIcon className="h-5" />
                <input
                  type="date"
                  {...register("startDate")}
                  required
                  className="w-full h-full outline-none text-black font-medium placeholder:text-grayTextColor placeholder:text-sm text-sm"
                  aria-label="Date Picker"
                />
              </div>
            </div>
            <div className={`flex flex-col gap-2`}>
              <p>Data de fim</p>
              <div
                className={`input-container w-[150px] items-center h-9 shadow-inputBorder border border-borderColor rounded-[4px] py-2 px-3 outline-none appearance-none flex flex-row gap-1`}
              >
                <CalendarIcon className="h-5" />
                <input
                  type="date"
                  {...register("endDate")}
                  className="w-full h-full outline-none text-black font-medium placeholder:text-grayTextColor placeholder:text-sm text-sm"
                  aria-label="Date Picker"
                />
              </div>
            </div>
            <div className="flex h-16 items-end">
              <div
                onClick={() => reset()}
                className="cursor-pointer h-9 items-center flex flex-row text-primary-base gap-1 pr-4"
              >
                <XMarkIcon className="h-4" />
                <p>Limpar</p>
              </div>
            </div>
            <Button
              customType={"primary"}
              borderRadius="mid"
              className="w-[220px] h-9 flex items-center gap-1"
            >
              <ListBulletIcon height={16} />
              <input
                type="submit"
                className={`body-small-semi cursor-pointer`}
                value="Gerar relatório detalhado"
              />
            </Button>
          </div>
        </form>
      </div>

      <FeedbackInfo
        open={true}
        text={
          "Após solicitar a geração do relatório, recarregue a página para obter a atualização."
        }
      />

      <TableReport header={tableHeader} rows={tableRows} />
    </div>
  );
};
