import { Typography, useImageLoader } from "@/shared";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export const Discover = () => {
  const { imageLoader } = useImageLoader();

  return (
    <section className="flex w-full bg-secondary justify-center">
      <div className="max-w-[1440px] sm:w-screen flex flex-row sm:flex-col tb:flex-col sm:px-6 p-20 gap-[138px] sm:gap-8 items-center py-20">
        <Image
          loader={imageLoader}
          className="my-6 rounded-lg"
          src="home-discover.png"
          alt={"Cliente analisando solução de crédito"}
          width={632}
          height={411}
        />
        <div className="max-w-[500px] sm:w-[380px] flex flex-col gap-2.5">
          <p className="font-semibold sm:text-center text-darkTextColor leading-[42px] text-[28px]">
            Descubra como nossas soluções de análise de crédito podem
            revolucionar suas decisões financeiras
          </p>
          <Typography
            as={"p"}
            text={
              "Oferecemos ferramentas robustas e personalizadas para avaliar tanto pessoas físicas quanto jurídicas, garantindo mais segurança e precisão nas suas análises."
            }
            size="medium"
            textColor="midnightHaze"
            weight="normal"
          />
          <Link
            href={`/contato`}
            className="w-fit sm:w-full sm:justify-center text-primary-base flex flex-row items-center gap-2.5"
            itemProp="Saiba mais"
          >
            <Typography
              as={"p"}
              text={"Comece agora"}
              size="medium"
              textColor="primary"
              weight="semibold"
            />
            <ChevronRightIcon height={18} width={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};
