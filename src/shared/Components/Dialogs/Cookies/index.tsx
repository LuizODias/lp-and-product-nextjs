"use client";
import { Button } from "../../Buttons";
import Link from "next/link";
import { hasCookie, setCookie } from "cookies-next";
import { useEffect, useState } from "react";
import { Typography } from "@/shared";

export const CookiesConsent = () => {
  const [showConsent, setShowConsent] = useState(true);

  useEffect(() => {
    setShowConsent(hasCookie("localConsent"));
  }, []);

  const acceptCookie = () => {
    setShowConsent(true);
    setCookie("localConsent", "true", {});
  };

  if (showConsent) {
    return null;
  }

  return (
    <div className="fixed right-9 bottom-9 w-[408px] h-48 rounded p-6 bg-white shadow-cookies">
      <div className="flex flex-col w-full h-full justify-between">
        <div className="flex flex-col w-full gap-2">
          <p className="text-darkMode-primarySofter text-[15px] leading-4 font-bold">
            Sua Experiência Importa: Aceite o Uso de Cookies
          </p>
          <p className="text-gray-med text-sm leading-[22px] font-normal">
            Usamos cookies para garantir a melhor experiência na plataforma.
            Para continuar navegando, é necessário aceitar o uso deles.
          </p>
        </div>
        <div className="flex flex-row w-full justify-end gap-3">
          <Button
            onClick={() => acceptCookie()}
            status="normal"
            customType="primary"
            borderRadius="mid"
            className="w-24 h-10"
          >
            <Typography
              as={"p"}
              text={"Concordo"}
              weight="semibold"
              size="small"
              textColor="white"
            />
          </Button>
          <Link
            target="_blank"
            href={""}
          >
            <Button
              onClick={() => {}}
              customType="secondary"
              borderRadius="mid"
              className="w-[177px] h-10"
            >
              <Typography
                as={"p"}
                text={"Política de Privacidade"}
                weight="semibold"
                size="small"
                textColor="primary"
              />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
