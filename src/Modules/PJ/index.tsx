"use client"
import {
  Button,
  FrameLayout,
  ListModels,
  Typography,
  useDefaultContext,
  useImageLoader,
} from "@/shared";
import Image from "next/image";
import Link from "next/link";
import {
  CloudIcon,
  CurrencyDollarIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";
import { CallToAction } from "../Home/components";
import { useEffect, useRef, useState } from "react";
import GoTop from "../Home/components/GoTop";
import { BenefitSection } from "./components/benefit-section";

const BENEFITS = [
  {
    icon: <CurrencyDollarIcon width={22.75} height={22.75} />,
    reverse: false,
    title: "Desvendando a Esteira de Crédito: Do Início ao Fim",
    score: "Score de Crédito Pessoa Jurídica",
    firstContent:
      "Uma esteira de crédito bem estruturada é essencial para garantir decisões financeiras precisas e ágeis. Desde a coleta de dados até a aprovação final, cada etapa exige atenção aos detalhes e integração eficiente de tecnologias. O",
    secondContent:
      "entra em cena como uma ferramenta crucial para otimizar esse processo.",
    benefits: [
      "Análise de risco robusta e confiável",
      "Acesso a dados públicos e relevantes",
      "Preparação dos dados para análise",
    ],
    image: "pj-benefits-1.png",
    imageAlt: "Cliente analisando dados",
  },
  {
    icon: <CloudIcon width={22.75} height={22.75} />,
    reverse: true,
    title: "Transformando Dados em Insights",
    score: "Score de Crédito Pessoa Jurídica",
    firstContent: "Na hora de avaliar o risco de inadimplência das empresas, o",
    secondContent:
      "analisa o CNPJ fornecido, considerando fatores como setor, tamanho e histórico jurídico, retornando um score que ajuda a medir o risco com precisão. Esse score pode ser facilmente integrado à sua esteira de crédito, agilizando a tomada de decisões.",
    benefits: [
      "Integração fácil e eficiente na esteira",
      "Utilizando a API para avaliação de risco",
      "Redução de riscos com insights precisos",
    ],
    image: "pj-benefits-2.png",
    imageAlt: "Pessoa no notebook com uma xícara de café",
  },
  {
    icon: <RocketLaunchIcon width={22.75} height={22.75} />,
    reverse: false,
    title: "Utilizando o Score PJ para Mitigar Riscos",
    score: "Score de Crédito Pessoa Jurídica",
    firstContent:
      "Com o risco devidamente avaliado, o próximo passo é tomar decisões de crédito informadas.",
    secondContent:
      "permite que você identifique potenciais riscos e mitigue-os antes de avançar para a aprovação. Esse passo é crucial para garantir que sua esteira de crédito seja não apenas eficiente, mas também segura e confiável.",
    benefits: [
      "Redução do tempo de análise",
      "Minimização de fraudes",
      "Melhor controle e organização de custos por consulta",
    ],
    image: "pj-benefits-3.png",
    imageAlt: "Cliente analisando gráficos",
  },
];

export const PJ = () => {
  const [showGoTop, setshowGoTop] = useState("hidden");
  const [scrollPosition, setSrollPosition] = useState(0);
  const refScrollUp = useRef<HTMLInputElement>(null);

  const { imageLoader } = useImageLoader();
  const { models } = useDefaultContext();

  useEffect(() => {
    window.addEventListener("scroll", handleVisibleButton);
  });

  const handleVisibleButton = () => {
    const position = window.scrollY;
    setSrollPosition(position);

    if (scrollPosition > 200) {
      return setshowGoTop(
        "fixed w-8 h-8 bg-[#AEC8F3] rounded-full right-8 bottom-8"
      );
    } else if (scrollPosition < 50) {
      return setshowGoTop("hidden");
    }
  };

  const handleScrollUp = () => {
    refScrollUp?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <FrameLayout>
      <div ref={refScrollUp} />
      <section className="flex w-full bg-secondary justify-center h-[754px] overflow-hidden">
        <div className="max-w-[1440px] w-full flex dt:flex-row dt:justify-between justify-center flex-col dt:gap-[138px] gap-8 items-center dt:pl-20 p-0">
          <div className="max-w-[500px] w-full min-w-[380px] flex flex-col gap-9">
            <div className="flex flex-col gap-6">
              <p className="font-semibold dt:text-left text-center text-darkTextColor leading-[42px] text-[28px]">
                Revolucione a Avaliação de Crédito da Sua Empresa
              </p>
              <Typography
                as={"p"}
                text={
                  "Entenda como nosso Score de Crédito avalia o risco de inadimplência das empresas utilizando o CNPJ, considerando fatores como setor de atuação e histórico jurídico."
                }
                size="medium"
                textColor="midnightHaze"
                weight="normal"
              />
            </div>
            <Link
              href={`/contato`}
              className="dt:w-fit w-full justify-center text-primary-base flex flex-row items-center gap-2.5"
              itemProp="Descubra os benefícios"
            >
              <Button
                className=""
                customType="primary"
                size="lg"
                borderRadius="mid"
              >
                <h6 className="text-lg leading-5 font-semibold">
                  Descubra os benefícios
                </h6>
              </Button>
            </Link>
          </div>
          <Image
            loader={imageLoader}
            className="hidden dt:flex"
            src="pj-discover.jpeg"
            alt={"Pessoa sorrindo com notebook nas mãos"}
            width={672}
            height={672}
          />
        </div>
      </section>

      <section className="flex flex-col gap-[72px] max-w-[1440px] w-full items-center dt:py-24 py-16 overflow-hidden">
        <div className="flex flex-col items-center w-full min-w-[380px] gap-5 justify-between">
          <div className="flex flex-col gap-3 items-center">
            <Typography
              as={"p"}
              text={"Benefícios"}
              textColor="primary"
              size="xLarge"
              weight="medium"
            />
            <h2 className="text-darkTextColor text-center text-4xl font-semibold">
              Transforme Sua Análise de Crédito
            </h2>
          </div>

          <Typography
            as={"h4"}
            text={"Transforme Sua Análise de Crédito"}
            textColor="midnightHaze"
            size="large"
            weight="normal"
            alignment="center"
          />
        </div>

        <div className="flex flex-col items-center w-full min-w-[380px] dt:gap-24 gap-12 px-4">
          {BENEFITS.map((benefit, index) => {
            return <BenefitSection key={index} benefit={benefit} />;
          })}
        </div>
      </section>

      <ListModels models={models} />
      <CallToAction />
      <GoTop showGoTop={showGoTop} scrollUp={handleScrollUp} />
    </FrameLayout>
  );
};
