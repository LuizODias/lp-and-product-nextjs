import { Typography } from "@/shared";
import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useState } from "react";

interface Props {
  accordionContent: AccordionContent[];
}

const AccordionFlush = ({ accordionContent }: Props) => {
  const [activeElement, setActiveElement] = useState("");

  const handleClick = (value: string) => {
    if (value === activeElement) {
      setActiveElement("");
    } else {
      setActiveElement(value);
    }
  };

  return (
    <>
      {accordionContent.map((item, index) => {
        return (
          <div
            key={index}
            className={`flex flex-row justify-between w-full cursor-pointer gap-6 pt-6
            ${index === 0 ? "" : "border-t border-solitude"} `}
            onClick={() => handleClick(`accordion-${index}`)}
          >
            <div className="flex flex-col gap-2">
              <Typography
                as={"p"}
                text={item.title}
                textColor="dark"
                size="large"
                weight="semibold"
              />
              <div
                className={`transition-opacity origin-top ease-in duration-300 ${activeElement === `accordion-${index}`
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-0 h-0"
                  }`}
              >
                <Typography
                  as={"p"}
                  text={item.content}
                  textColor="midnightHaze"
                  size="medium"
                  weight="normal"
                />
              </div>
            </div>

            <div className="flex flex-col">
              {activeElement === `accordion-${index}` ? (
                <MinusCircleIcon
                  width={26}
                  height={26}
                  className="text-primary-base stroke-2"
                />
              ) : (
                <PlusCircleIcon
                  width={26}
                  height={26}
                  className="text-primary-base stroke-2"
                />
              )}
            </div>
          </div>
        );
      })}
    </>
  );
};

interface AccordionContent {
  title: string;
  content: string;
}

export const FAQ = () => {
  const accordionContent: AccordionContent[] = [
    {
      title: "Como funciona a consulta de score de crédito?",
      content:
        "A consulta de score de crédito analisa o histórico financeiro do consumidor, gerando uma pontuação que reflete a probabilidade de pagamento.",
    },
    {
      title:
        "De que forma a análise de risco pode ajudar a identificar potenciais clientes inadimplentes?",
      content:
        "Através da análise de diversos indicadores financeiros, a análise de risco pode identificar padrões de comportamento de pagamento inconsistentes ou indicativos de risco, permitindo que a empresa antecipe possíveis inadimplências e tome medidas preventivas para reduzir perdas financeiras.",
    },
    {
      title: "Como interpretar os resultados de um teste de score?",
      content:
        "A interpretação dos resultados de um teste de score depende do contexto específico e dos objetivos do teste. Geralmente, os resultados são avaliados com base em métricas como precisão, sensibilidade, especificidade e valor preditivo. É importante entender como essas métricas se relacionam com os objetivos de negócio para tomar decisões informadas.",
    },
    {
      title: "As consultas e relatórios são confidenciais?",
      content:
        "Sim, garantimos a total confidencialidade das informações coletadas e processadas.",
    },
  ];

  return (
    <section className="flex w-full max-w-[1440px] sm:pb-10 sm:w-[350px] sm:p-0 flex-col gap-16 py-24 px-20 items-center justify-center">
      <div className="flex flex-col gap-5 items-center justify-center">
        <Typography
          as={"h3"}
          text={"Perguntas Frequentes sobre Análise de Risco Financeiro"}
          textColor="dark"
          size="xxLarge"
          weight="semibold"
        />
        <div className="dt:w-[650px] w-full">
          <Typography
            as={"p"}
            text={
              "Saiba mais sobre como a análise de risco pode impulsionar sua empresa e tomar decisões financeiras mais inteligentes."
            }
            textColor="midnightHaze"
            size="large"
            weight="normal"
            alignment="center"
          />
        </div>
      </div>

      <div className="flex flex-col w-full max-w-[950px] sm:w-[350px] gap-8">
        <AccordionFlush accordionContent={accordionContent} />
      </div>
    </section>
  );
};
