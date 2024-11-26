import Link from "next/link";
import Image from "next/image";
import { Typography } from "../TypographyComponent";

export const Footer = () => {
  return (
    <footer className="sm:pt-14 flex flex-col items-center justify-center w-full bg-primary-base static bottom-0">
      <div
        className="flex flex-col items-center w-full tb:w-full sm:w-screen sm:p-0 tb:p-0 py-10 px-20 gap-9"
        itemScope
      >
        <div className="flex flex-col w-fit gap-5 items-center">
          <Link href="/" className="flex justify-center items-center">
            <Image
              src="logo"
              alt="Logo"
              width={200}
              height={64}
            />
          </Link>

          <div className="h-fit w-fit gap-6 flex flex-row text-white font-semibold">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center"
              href=""
              passHref
              itemProp="Documentação"
            >
              Documentação
            </Link>
            <Link
              target="_blank"
              className="flex justify-center"
              href=""
              itemProp="Sobre"
            >
              Sobre
            </Link>
            <Link
              className="flex justify-center"
              href="/contato"
              itemProp="Contato"
            >
              Contato
            </Link>
          </div>
        </div>

        <div className="flex flex-row pt-8 w-full max-w-[1280px] sm:w-screen text-white border-t border-white">
          <div className="flex flex-row sm:flex-col tb:flex-col items-center w-full sm:gap-8 sm:pb-8 tb:gap-8 tb:pb-8 justify-between">
            <Typography
              as={"p"}
              text={"© 2024 Luiz Otávio Dias. Todos os direitos reservados."}
              textColor="white"
              size="medium"
              weight="normal"
            />

            <Link href="">
              <Typography
                as={"p"}
                text={"Termos e condições"}
                textColor="white"
                size="medium"
                weight="normal"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
