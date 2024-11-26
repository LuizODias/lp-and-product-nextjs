import {
  BellAlertIcon,
  BookOpenIcon,
  ClipboardDocumentCheckIcon,
  CubeIcon,
  CursorArrowRaysIcon,
  ExclamationCircleIcon,
  LockClosedIcon,
  PencilSquareIcon,
  PlusCircleIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const StepOneOnboarding = () => {
  return (
    <div className="flex flex-col gap-5 pt-6">
      <div className="flex flex-row gap-3 py-1 items-center">
        <div className="w-[30px] h-[30px] rounded-full bg-secondary flex justify-center items-center">
          <CubeIcon
            width={16}
            height={16}
            className="text-primary-base stroke-2"
          />
        </div>
        <div className="w-[800px]">
          <p className="text-sm font-medium text-black ">
            Na seção de Credenciais de Sandbox, você encontra as chaves Client
            ID e Client Secret. Essas chaves são necessárias para testar e
            experimentar nossas APIs&nbsp;
            <Link
              target="_blank"
              href=""
              className="text-primary-base"
            >
              em um ambiente seguro.
            </Link>
          </p>
        </div>
      </div>
      <div className="flex flex-row gap-3 py-1 items-center">
        <div className="w-[30px] h-[30px] rounded-full bg-secondary flex justify-center items-center">
          <BookOpenIcon
            width={16}
            height={16}
            className="text-primary-base stroke-2"
          />
        </div>
        <div className="w-[800px]">
          <p className="text-sm font-medium text-black ">
            Envie o Client ID e o Client Secret para seu desenvolvedor, ele
            utilizará essas informações para testar a integração dos scores
            conforme a documentação.&nbsp;
            <Link
              target="_blank"
              href=""
              className="text-primary-base"
            >
              Ver documentação.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

const StepTwoOnboarding = () => {
  return (
    <div className="flex flex-col gap-5 pt-6">
      <div className="flex flex-row gap-3 py-1 items-center">
        <div className="w-[30px] h-[30px] rounded-full bg-secondary flex justify-center items-center">
          <LockClosedIcon
            width={16}
            height={16}
            className="text-primary-base stroke-2"
          />
        </div>
        <div className="w-[800px]">
          <p className="text-sm font-medium text-black ">
            Se você ainda não tem acesso à criação de credenciais de produção,
            entre em contato com o setor comercial através do email&nbsp;
            <a
              href=""
              className="text-primary-base"
            >
            </a>
            &nbsp; e solicite a liberação.
          </p>
        </div>
      </div>
    </div>
  );
};

const StepThreeOnboarding = () => {
  return (
    <div className="flex flex-col gap-5 pt-6">
      <div className="flex flex-row gap-3 py-1 items-center">
        <div className="w-[30px] h-[30px] rounded-full bg-secondary flex justify-center items-center">
          <PlusCircleIcon
            width={16}
            height={16}
            className="text-primary-base stroke-2"
          />
        </div>
        <div className="w-[800px]">
          <p className="text-sm font-medium text-black ">
            Para ligar seu sistema à nossa API, você deve criar uma credencial
            de produção. Essas credenciais (Client ID e Client Secret) são
            usadas pelo desenvolvedor para habilitar o uso da API em sua
            aplicação.
          </p>
        </div>
      </div>

      <div className="flex flex-row gap-3 py-1 items-center">
        <div className="w-[30px] h-[30px] rounded-full bg-secondary flex justify-center items-center">
          <PencilSquareIcon
            width={16}
            height={16}
            className="text-primary-base stroke-2"
          />
        </div>
        <div className="w-[800px]">
          <p className="text-sm font-medium text-black ">
            Vá em Nova Credencial para criar sua credencial de produção.
            Adicione um nome e descrição para a nova credencial.
          </p>
        </div>
      </div>

      <div className="flex flex-row gap-3 py-1 items-center">
        <div className="w-[30px] h-[30px] rounded-full bg-secondary flex justify-center items-center">
          <CursorArrowRaysIcon
            width={16}
            height={16}
            className="text-primary-base stroke-2"
          />
        </div>
        <div className="w-[800px]">
          <p className="text-sm font-medium text-black ">
            Selecione qual o score você quer utilizar com essa credencial.
          </p>
        </div>
      </div>

      <div className="flex flex-row gap-3 py-1 items-center">
        <div className="w-[30px] h-[30px] rounded-full bg-secondary flex justify-center items-center">
          <SparklesIcon
            width={16}
            height={16}
            className="text-primary-base stroke-2"
          />
        </div>
        <div className="w-[800px]">
          <p className="text-sm font-medium text-black ">
            Gere o Client ID e Client Secret para a nova credencial.
          </p>
        </div>
      </div>
    </div>
  );
};

const StepFourOnboarding = () => {
  return (
    <div className="flex flex-col gap-5 pt-6">
      <div className="flex flex-row gap-3 py-1 items-center">
        <div className="w-[30px] h-[30px] rounded-full bg-secondary flex justify-center items-center">
          <ClipboardDocumentCheckIcon
            width={16}
            height={16}
            className="text-primary-base stroke-2"
          />
        </div>
        <div className="w-[800px]">
          <p className="text-sm font-medium text-black ">
            Copie o Client ID e o Client Secret da nova credencial e envie-os
            para o seu desenvolvedor para que ele integre a API ao seu sistema.
          </p>
        </div>
      </div>
      <div className="flex flex-row gap-3 py-1 items-center">
        <div className="w-[30px] h-[30px] rounded-full bg-secondary flex justify-center items-center">
          <ExclamationCircleIcon
            width={16}
            height={16}
            className="text-primary-base stroke-2"
          />
        </div>
        <div className="w-[800px]">
          <p className="text-sm font-medium text-black ">
            Lembre-se de que há um limite de credenciais que podem ser geradas
            por aplicação.
          </p>
        </div>
      </div>
    </div>
  );
};

export {
  StepOneOnboarding,
  StepTwoOnboarding,
  StepThreeOnboarding,
  StepFourOnboarding,
};
