"use client"
import {
  Typography,
} from "@/shared";
import Link from "next/link";

export const Register = () => {
  return (
      <div className="flex flex-col h-[100vh] bg-[50%] bg-cover items-center py-[70px] sm:p-6 gap-20 bg-[url('')]">
        <img 
          alt="Pessoa preenchendo o formulário" 
          loading="lazy"
          decoding="async"
          src=""
          className="my-6 w-[200px]"
        />
        <div className="w-[50%] pt-[5%] text-center gap-[52px] flex flex-col items-center">
          <div className="sm:w-full text-center gap-4 flex flex-col">
            <Typography
              as={"h1"}
              text={"Verificação Completa!"}
              alignment="center"
              weight="bold"
              size="xxLarge"
            />
            <Typography
              as={"p"}
              text={
                "Sua conta foi verificada com sucesso e agora você tem acesso às nossas ferramentas."
              }
              alignment="center"
              weight="normal"
              size="xLarge"
            />
          </div>
          <Link
            href="/dashboard"
            className="flex flex-row text-center rounded-3xl dt:text-base tb:text-[13px] sm:text-xs text-[#2D71DF]"
          >
              <p className="text-lg leading-5 font-semibold">
                Voltar para a login
              </p>
          </Link>
        </div>
        <div className="text-center absolute pb-[30px] bottom-0">
          <Typography
            as={"p"}
            text={"© 2024 Luiz Otávio Dias Coutinho. Todos os direitos reservados."}
            alignment="center"
            weight="normal"
            size="small"
            textColor="textGrayBlue"
          />
        </div>
      </div>
  );
};
