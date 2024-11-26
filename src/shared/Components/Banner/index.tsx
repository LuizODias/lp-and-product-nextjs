import Link from "next/link";
import { Button } from "../Buttons";
import { Typography } from "@/shared";

export const Banner = () => {
  return (
    <div className="flex flex-row w-full bg-aliceBlue min-h-[532px] items-center justify-center text-center sm:relative overflow-hidden">
      <div className="flex flex-col max-w-[1440px] sm:w-[350px] sm:w items-center z-20 gap-9 py-[190px]">
        <div className="flex flex-col items-center max-w-[900px] sm:w-[350px] gap-6">
          <h1 className="font-bold text-primary-base text-[42px]/[62px] text-center sm:text-[36px]/[44px]">
            Potencialize Suas Decisões Financeiras com as Nossas Soluções de Análise de Risco
          </h1>
          <h3 className="text-2xl/5 sm:text-base/5 font-normal text-center text-mediumGrayTextColor">
            Integração descomplicada com a precisão
          </h3>
        </div>

        <div className="flex justify-center">
          <Link href="/contato" className="right">
            <Button
              className=""
              customType="primary"
              size="lg"
              borderRadius="mid"
            >
              <h6 className="text-lg leading-5 font-semibold">Solicite agora</h6>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
