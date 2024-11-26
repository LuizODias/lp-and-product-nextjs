import { Typography, useImageLoader } from "@/shared";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export const Documentation = () => {
  const { imageLoader } = useImageLoader();

  return (
    <section className="w-full max-w-[1440px] tb:flex-col sm:w-[381px] flex flex-row sm:flex-col sm:py-16 sm:px-0 px-[108px] py-20 gap-[138px] sm:gap-16 items-center">
      <div className="w-full max-w-[414px] sm:w-[381px] sm:items-center flex flex-col gap-2.5">
        <Typography
          as={"p"}
          text={"Documentação"}
          textColor="primary"
          size="xLarge"
          weight="medium"
        />
        <p className="font-semibold sm:text-center text-darkTextColor leading-[42px] text-[28px]">
          Documentação Detalhada para Integração Simplificada
        </p>
        <Typography
          as={"p"}
          text={
            "Explore nossa documentação completa e intuitiva, projetada para facilitar a integração da nossa API aos seus sistemas. Teste nossas APIs em um ambiente de desenvolvimento seguro e intuitivo, disponível em diversas linguagens de programação."
          }
          size="medium"
          textColor="midnightHaze"
          weight="normal"
        />
      </div>
      <Image
        loader={imageLoader}
        className="my-6 rounded-2xl sm:w-[360px]"
        src="home-documentation.png"
        alt={"Macbook com nossa documentação"}
        width={682}
        height={428}
      />
    </section>
  );
};
