import { Typography } from "@/shared";
import Skeleton from "react-loading-skeleton";

export const SkeletonClientFields = () => {
  return (
    <div className="w-full h-7">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-1 w-full">
          <Typography as={"p"} text={"Status"} weight="medium" size="medium" />
          <Skeleton className="h-6 rounded-md" />
        </div>
        <div className="flex flex-col gap-1 w-full">
          <Typography as={"p"} text={"Nome"} weight="medium" size="medium" />
          <Skeleton className="h-6 rounded-md" />
        </div>
        <div className="flex flex-col gap-1 w-full">
          <Typography as={"p"} text={"Email"} weight="medium" size="medium" />
          <Skeleton className="h-6 rounded-md" />
        </div>
        <div className="flex flex-col gap-1 w-full">
          <Typography as={"p"} text={"CNPJ"} weight="medium" size="medium" />
          <Skeleton className="h-6 rounded-md" />
        </div>
        <div className="flex flex-col gap-1 w-full">
          <Typography
            as={"p"}
            text={"Criação da conta"}
            weight="medium"
            size="medium"
          />
          <Skeleton className="h-6 rounded-md" />
        </div>
        <div className="flex flex-col gap-1 w-full">
          <Typography as={"p"} text={"Sub"} weight="medium" size="medium" />
          <Skeleton className="h-6 rounded-md" />
        </div>
      </div>
    </div>
  );
};
