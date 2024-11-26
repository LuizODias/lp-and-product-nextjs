"use client"
import {
  Button,
  FrameLayout,
  ListModels,
  Typography,
  useDefaultContext,
} from "@/shared";
import { useImageLoader } from "@/shared/hooks/useImageLoader";
import Image from "next/image";
import Link from "next/link";

export const Success = () => {
  const { models } = useDefaultContext();
  const { imageLoader } = useImageLoader();

  return (
    <FrameLayout>
      <div className="w-[1440px] flex flex-row items-center justify-center py-[70px] sm:p-6 px-20 gap-20  ">
        <div className="w-full dt:w-1/2 text-center gap-[52px] flex flex-col items-center">
          <div className="sm:w-full text-center gap-4 flex flex-col">
            <Typography
              as={"h3"}
              text={"Seu contato é importante para nós!"}
              alignment="center"
              weight="medium"
              size="xxLarge"
            />
            <Typography
              as={"h3"}
              text={
                "Recebemos suas informações e entraremos em contato o mais rápido possível."
              }
              alignment="center"
              weight="medium"
              size="xxLarge"
            />
          </div>
          <Link
            href="/"
            className="flex flex-row justify-end w-[381px] rounded-3xl dt:text-base tb:text-[13px] sm:text-xs"
          >
            <Button
              className="h-14"
              size="full"
              borderRadius="mid"
              customType="primary"
            >
              <p className="text-lg leading-5 font-semibold">
                Voltar para a home
              </p>
            </Button>
          </Link>
        </div>
        <div className="w-1/2 h-[700px] sm:hidden tb:hidden">
          <Image
            loader={imageLoader}
            className="my-6 rounded-2xl sm:hidden"
            src="contact.png"
            alt={"Pessoa preenchendo o formulário"}
            width={431}
            height={275}
          />
        </div>
      </div>
    </FrameLayout>
  );
};
