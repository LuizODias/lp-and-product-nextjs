"use client";
import { Button, DefaultLayout, Typography, useImageLoader } from "@/shared";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Product } from "./components";

const categorias = [
  { name: "Todos", status: true },
  { name: "Pessoa Jurídica", status: false },
  { name: "Pessoa Física", status: false },
  { name: "Integração", status: false },
];

const models = [
  {
    name: "Score Estabilidade Empregatícia",
    author: "Big Data Corp",
    image: "bigdatacorp.png",
    url: "score-de-estabilidade-empregatícia",
    description:
      "Uma ferramenta que classifica a chance de um determinado CPF mudar a situação emprego nos próximos 6 meses.",
    categories: ["Pessoa Física"],
    version: "1.0",
    launch: "15 ago. 2024",
  },
  {
    name: "Score Pessoa Física",
    author: "Big Data Corp",
    image: "bigdatacorp.png",
    url: "score-de-credito-pessoa-fisica",
    description:
      "Analisa uma ampla gama de informações financeiras e comportamentais para determinar o risco de inadimplência de um CPF.",
    categories: ["Pessoa Física"],
    version: "1.0",
    launch: "15 ago. 2024",
  },
  {
    name: "Score Pessoa Jurídica",
    author: "Big Data Corp",
    image: "bigdatacorp.png",
    url: "score-de-crédito-pessoa-juridica",
    description:
      "Analisa uma ampla gama de informações financeiras e comportamentais para determinar o risco de inadimplência de um CPF.",
    categories: ["Pessoa Jurídica"],
    version: "1.0",
    launch: "15 ago. 2024",
  },
  {
    name: "Score SCR",
    author: "Banco Central do Brasil",
    image: "bacen.png",
    url: "",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    categories: ["Pessoa Física", "Integração"],
    version: "1.0",
    launch: "15 ago. 2024",
  },
];

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

export const Products = () => {
  const { imageLoader } = useImageLoader();
  const boxRef = useRef<HTMLInputElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState<Product>();
  const [products, setProducts] = useState<Product[]>(models);
  const [selected, setSelected] = useState("Todos");

  useEffect(() => {
    if (selected === "Todos") {
      setProducts(models);
    } else {
      setProducts(
        models.filter((item) =>
          item.categories.some((category) => category === selected)
        )
      );
    }
  }, [selected]);

  return (
    <DefaultLayout>
      <title>Scores de Crédito - Produtos</title>
      <div className="flex flex-col py-8 px-6">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2 w-[475px]">
            <Typography
              as={"p"}
              text={"Produtos"}
              size="xLarge"
              weight="semibold"
            />
            <Typography
              as={"p"}
              text={
                "Explore, integre e administre diversas soluções de crédito, todas em um só lugar, com facilidade e eficiência."
              }
              size="medium"
              weight="semibold"
            />
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-row gap-2">
              {categorias.map((item, index) => {
                return (
                  <button
                    key={index}
                    className={`${item.name === selected ? "border-primary-base text-primary-base bg-secondary" : "border-[#647687] text-[#647687] cursor-pointer"} text-sm justify-center h-8 border px-3 rounded-3xl `}
                    onClick={() => setSelected(item.name)}
                  >
                    <p>{item.name}</p>
                  </button>
                );
              })}
            </div>
            <ul
              role="list"
              className="grid grid-cols-3 gap-x-4 gap-y-5 list-none ml-0 items-start"
            >
              {products.map((model, index) => (
                <li
                  key={index}
                  className="w-full h-auto col-span-1 divide-y divide-gray-200 rounded bg-white shadow-layoutBorder"
                >
                  <div className="flex w-full items-center justify-between space-x-6 p-4">
                    <div className="flex flex-col flex-1 truncate gap-4">
                      <div className="flex justify-between p-0.5">
                        <div className="w-[72px] h-[72px] shadow-layoutBorder rounded justify-center items-center flex">
                          <Image
                            loader={imageLoader}
                            className=""
                            src={model.image}
                            alt={"Autor"}
                            width={64}
                            height={64}
                          />
                        </div>
                        <div className="flex flex-col items-end gap-1">
                          {model.categories.map((category, index) => {
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
                      </div>
                      <div className="flex flex-col items-start">
                        <h5>{model.name}</h5>
                        <p>{model.author} </p>
                      </div>
                      <span className="text-sm font-medium whitespace-normal h-auto overflow-hidden w-auto text-ellipsis block">
                        {model.description}
                      </span>

                      <div>
                        <Button
                          customType="secondary"
                          size="full"
                          borderRadius="mid"
                          onClick={() => {
                            setIsOpen(true);
                            setProduct(model);
                          }}
                        >
                          <p className="body-small-semi">Ver detalhes</p>
                        </Button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          ref={boxRef}
          className={`py-2 flex fixed h-[110vh] top-14 z-40 w-full bg-white ease-in-out duration-300 ${
            isOpen ? "translate-x-0 left-[250px]" : "translate-x-full"
          }`} 
        >
          <div
            className="flex flex-col gap-6 w-[970px] text-darkTextColor"
            itemScope
          >
            <div
              className="w-full flex flex-row pl-6 p-2.5 justify-start items-center cursor-pointer text-primary-base gap-2"
              onClick={() => setIsOpen(false)}
            >
              <ArrowLeftIcon width={18} className="stroke-2" />
              <Typography
                as={"p"}
                text={"Voltar para Produtos"}
                weight="bold"
                size="xSmall"
                textColor="primary"
              />
            </div>
            {product ? <Product product={product} /> : <></>}
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};
