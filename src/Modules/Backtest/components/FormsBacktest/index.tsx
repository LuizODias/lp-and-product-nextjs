"use client";
import {
  Button,
  CheckBox,
  Select,
  TextInput,
  Typography,
  useDefaultContext,
} from "@/shared";
import { useBacktestForm } from "../../hooks/useBacktestForm";
import { InputFile } from "@/shared/Components/Inputs/FileInput";
import Link from "next/link";
import { modelsDefault } from "@/constants/models";
import { RegisterOptions, UseFormRegisterReturn } from "react-hook-form";

export const FormsBacktest = () => {
  const { form } = useBacktestForm();
  const { backtestFile } = useDefaultContext();
  const {
    register,
    reset,
    formState: { errors, isValid },
  } = form;

  return (
    <div className="w-full flex flex-col pl-6 justify-start text-primary-base gap-5">
      <div className="flex flex-col gap-2 w-[475px]">
        <Typography
          as={"p"}
          text={"Produtos"}
          size="xLarge"
          weight="semibold"
        />
      </div>
      <div className="flex flex-col gap-5">
        <form method="POST" className="flex flex-col gap-16">
          <div className="flex flex-col gap-1">
            <div className="w-[439px]">
              <TextInput
                placeholder="Nome do backtest"
                name={"name"}
                label="Defina um nome para o backtest"
                error={errors.name?.message}
                register={register}
                isValid={isValid}
                required
              />
              <Select
                name={"product"}
                label={"Quantas chamadas mensais você espera utilizar?"}
                error={errors.product?.message}
                register={register}
                placeholder="Selecione o modelo"
                options={modelsDefault.map((item) => {
                  return { label: item.title, value: item.url };
                })}
                required
              />
            </div>
            <InputFile
              title="Datasets"
              formatsAccepted={backtestFile.acceptedExtensions}
              description={
                <div className="flex flex-row">
                  <Typography
                    as={"p"}
                    text={"É necessário que o arquivo contenha"}
                    weight="medium"
                    size="xSmall"
                    textColor="strongerGray"
                  />
                  <Link href={""} className="ml-1">
                    <Typography
                      as={"p"}
                      text={" seguintes informações."}
                      weight="medium"
                      size="xSmall"
                      textColor="primary"
                    />
                  </Link>
                </div>
              }
              handleFile={backtestFile.handleFileChange}
              files={backtestFile.file ? [backtestFile.file] : []}
              inputRef={backtestFile.inputRef}
              errorNotification={backtestFile.errorNotification}
              handleDiscardNotification={backtestFile.handleDiscardNotification}
              handleDiscardSingleFile={backtestFile.handleDiscardSingleFile}
              modelLink={"/#"}
            />

            <CheckBox
              name={"terms"}
              label={""}
              options={[
                {
                  value: "true",
                  label: (
                    <div className="flex flex-row items-center text-black text-sm">
                      Concordo com os
                      <Link href={""} className="text-primary-base mx-1">
                        Termos e Condições
                      </Link>
                      de envio de informações.
                    </div>
                  ),
                },
              ]}
              register={register}
            />
          </div>
          <div className="flex flex-row justify-end gap-6">
            <Button
              onClick={() => reset}
              disabled={!isValid}
              customType="secondary"
              borderRadius="mid"
              size="normal"
            >
              Cancelar
            </Button>
            <Button
              onClick={() => {}}
              disabled={!isValid}
              customType="primary"
              borderRadius="mid"
              size="normal"
            >
              Enviar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
