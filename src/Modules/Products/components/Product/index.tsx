"use client";
import { Flags, Typography, useDefaultContext, useImageLoader } from "@/shared";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowTopRightOnSquareIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import { useUser } from "@auth0/nextjs-auth0/client";

interface Product {
  name: string;
  author: string;
  image: string;
  url: string;
  description: string;
  categories: string[];
  version: string;
  launch: string;
}

interface Props {
  product: Product;
}

export const Product = ({ product }: Props) => {
  const { imageLoader } = useImageLoader();
  const { openBacktest } = useDefaultContext();
  const { user } = useUser();
  let flags;

  if (user) {
    flags = user.flags as Flags;
  }

  const mytests_tab = flags?.mytests_tab;

  return (
    <div className="gap-5 flex flex-col pl-6">
      <div className="w-full flex flex-row justify-between items-center">
        <Typography
          as={"p"}
          text={product.name}
          weight="semibold"
          size="xLarge"
          textColor="dark"
        />
        {mytests_tab ? (
          <Link href={"/dashboard/testes"} onClick={() => openBacktest()}>
            <span
              className={`cursor-pointer inline-flex justify-center gap-1.5 h-9 w-fit flex-shrink-0 items-center text-primary-base bg-[#E6EDFB] rounded-full px-3 py-2`}
            >
              <PlusIcon width={12} />
              <Typography
                as={"p"}
                text={"Solicite um backtest"}
                weight="semibold"
                size="medium"
                textColor="primary"
              />
            </span>
          </Link>
        ) : (
          <></>
        )}
      </div>
      <div className="shadow-layoutBorder p-5 flex flex-row rounded justify-between">
        <div className="flex flex-col gap-6 w-[600px]">
          <h5>Informações Gerais</h5>
          <div className="flex flex-col gap-1">
            <Typography
              as={"p"}
              text={"Descrição"}
              weight="medium"
              size="xSmall"
              textColor="strongGray"
            />
            <Typography
              as={"p"}
              text={product.description}
              weight="semibold"
              size="small"
              textColor="strongGray"
            />
          </div>

          <ul
            role="list"
            className="grid grid-cols-3 gap-x-4 gap-y-5 list-none ml-0 items-start"
          >
            <li className="flex flex-col gap-1">
              <Typography
                as={"p"}
                text={"Versão"}
                weight="medium"
                size="xSmall"
                textColor="strongGray"
              />
              <Typography
                as={"p"}
                text={product.version}
                weight="semibold"
                size="small"
                textColor="strongGray"
              />
            </li>
            <li className="flex flex-col gap-1">
              <Typography
                as={"p"}
                text={"Data de lançamento"}
                weight="medium"
                size="xSmall"
                textColor="strongGray"
              />
              <Typography
                as={"p"}
                text={product.launch}
                weight="semibold"
                size="small"
                textColor="strongGray"
              />
            </li>
          </ul>

          <ul
            role="list"
            className="grid grid-cols-3 gap-x-4 gap-y-5 list-none ml-0 items-start"
          >
            <li className="flex flex-col gap-1">
              <Typography
                as={"p"}
                text={"Documentação"}
                weight="medium"
                size="xSmall"
                textColor="strongGray"
              />
              <div>
                <Link
                  target="_blank"
                  className="flex flex-row gap-1 text-primary-base w-fit items-center"
                  href={``}
                  itemProp="Acessar documentação"
                >
                  <ArrowTopRightOnSquareIcon width={16} />
                  <Typography
                    as={"p"}
                    text={"Acessar Documentação"}
                    weight="semibold"
                    size="small"
                    textColor="primary"
                  />
                </Link>
              </div>
            </li>
            <li className="flex flex-col gap-1">
              <Typography
                as={"p"}
                text={"Testar API"}
                weight="medium"
                size="xSmall"
                textColor="strongGray"
              />
              <div>
                <Link
                  target="_blank"
                  className="flex flex-row gap-1 text-primary-base w-fit items-center"
                  href={``}
                  itemProp="Acessar Sandbox"
                >
                  <ArrowTopRightOnSquareIcon width={16} />
                  <Typography
                    as={"p"}
                    text={"Acessar Sandbox"}
                    weight="semibold"
                    size="small"
                    textColor="primary"
                  />
                </Link>
              </div>
            </li>
            <li>
              <Typography
                as={"p"}
                text={"Tipo"}
                weight="medium"
                size="xSmall"
                textColor="strongGray"
              />
              <div className="flex flex-row items-start gap-1">
                {product.categories.map((category, index) => {
                  return (
                    <span
                      className={`inline-flex justify-center gap-1 h-6 w-fit flex-shrink-0 items-center rounded-full category-${category
                        .toLowerCase()
                        .replace(/\s/g, "")
                        .normalize("NFD")
                        .replace(
                          /[\u0300-\u036f]/g,
                          ""
                        )} px-3 py-0.5 text-xs font-medium`}
                      key={index}
                    >
                      <p className="text-xs font-semibold flex-auto">
                        {category}
                      </p>
                    </span>
                  );
                })}
              </div>
            </li>
          </ul>
        </div>
        <div className="w-[140px] h-[140px] flex items-center justify-center shadow-layoutBorder rounded">
          <Image
            loader={imageLoader}
            className=""
            src={product.image}
            alt={"Autor"}
            width={132}
            height={132}
          />
        </div>
      </div>
    </div>
  );
};
