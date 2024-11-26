"use client"
import {
  Button,
  CheckBox,
  FrameLayout,
  TextInput,
  Typography,
  useImageLoader,
} from "@/shared";
import { useContactForm } from "./hooks/useContactForm";
import { Models } from "./constants";
import Image from "next/image";

export const ContactForm = () => {
  const { form } = useContactForm();
  const { imageLoader } = useImageLoader();
  const {
    register,
    formState: { errors, isValid },
  } = form;

  return (
    <FrameLayout>
      <div className="w-full max-w-[1440px] dt:py-[70px] dt:px-[80px] flex flex-row sm:justify-center gap-20 px-8 py-0">
        <div className="dt:w-1/2 w-full flex flex-col gap-8 justify-center sm:pb-20">
          <div className="flex w-full">
            <Typography
              as={"h1"}
              text={
                "Preencha o formulário e a nossa equipe entrará em contato."
              }
              size="xxLarge"
              textColor="black"
              weight="bold"
            />
          </div>

          <form
            action=""
            method="POST"
            className="flex flex-col gap-8"
          >
            <div className="flex flex-col gap-1">
              <TextInput
                placeholder="Nome"
                name={"name"}
                label="Nome"
                error={errors.name?.message}
                register={register}
                isValid={isValid}
                required
              />
              <TextInput
                placeholder="email@email.com"
                name={"email"}
                label="Email"
                register={register}
                error={errors.email?.message}
                isValid={isValid}
                required
                pattern={/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i}
              />
              <TextInput
                placeholder="(DDD) 9 9999-9999"
                name={"phoneNumber"}
                label="Telefone"
                maxLength={12}
                isValid={isValid}
                error={errors.phoneNumber?.message}
                register={register}
                required
              />
            </div>
            <div className="flex flex-row justify-end">
              <Button
                onClick={() => {}}
                disabled={!isValid}
                status="normal"
                customType="primary"
                borderRadius="mid"
                className="w-full h-14"
              >
                <h6> Solicitar contato </h6>
              </Button>
            </div>
          </form>
        </div>
        <div className="flex items-center justify-center w-1/2 sm:hidden tb:hidden">
          <div className="h-[731px] w-auto items-center overflow-hidden rounded-2xl">
            <Image
              loader={imageLoader}
              className="rounded-2xl dt:flex hidden"
              src="contact.png"
              alt={"Pessoa preenchendo o formulário"}
              width={600}
              height={731}
            />
          </div>
        </div>
      </div>
    </FrameLayout>
  );
};
