import { Button, Typography, useImageLoader } from "@/shared";
import Link from "next/link";

export const CallToAction = () => {
  return (
    <section className="flex w-full bg-secondary justify-center">
      <div className="max-w-[1440px] sm:w-screen flex flex-row py-28 px-20 sm:py-28 sm:px-10 items-center">
        <div className="flex flex-col gap-9 py-5 items-center">
          <Typography
            as={"p"}
            text={"Interessado em Transformar sua Análise de Crédito?"}
            size="xxLarge"
            weight="semibold"
          />
          <Link
            href="/contato"
            className="flex flex-row justify-end w-[320px] rounded-3xl dt:text-base tb:text-[13px] sm:text-xs"
          >
            <Button
              className="h-10 px-0 dt:px-6"
              size="full"
              borderRadius="mid"
              customType="primary"
            >
              <Typography
                as={"p"}
                text={"Fale conosco"}
                size="large"
                textColor="white"
                weight="semibold"
              />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
