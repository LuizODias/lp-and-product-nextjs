import { Typography } from "@/shared";
import {
  ChartBarIcon,
  CurrencyDollarIcon,
  CursorArrowRippleIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";

interface Props {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}

const Benefit = ({ title, subtitle, icon }: Props) => {
  return (
    <div className="flex gap-2 items-center flex-col">
      <div className="bg-pastelFlyKite h-14 w-14 rounded-full flex justify-center items-center">
        <div className="flex justify-center text-primary-base items-center rounded-full bg-secondary h-12 w-12 border-[5px] border-primary-base/30">
          {icon}
        </div>
      </div>

      <div className="flex flex-col items-center">
        <Typography
          as={"p"}
          text={title}
          textColor="dark"
          size="large"
          weight="medium"
        />
        <Typography
          as={"p"}
          text={subtitle}
          textColor="midnightHaze"
          size="medium"
          weight="normal"
          alignment="center"
        />
      </div>
    </div>
  );
};

export const Features = () => {
  return (
    <section className="flex flex-col gap-[72px] py-32">
      <div className="flex flex-col items-center max-w-[1280px] sm:w-[380px] gap-5">
        <div className="flex flex-col gap-3 items-center">
          <Typography
            as={"p"}
            text={"Benefícios"}
            textColor="primary"
            size="xLarge"
            weight="medium"
          />
          <h2 className="text-darkTextColor text-center text-4xl font-semibold">
            Reduza riscos
          </h2>
        </div>

        <Typography
          as={"h4"}
          text={
            "Análise ágil com menor risco de inadimplência e maior previsibilidade"
          }
          textColor="midnightHaze"
          size="large"
          weight="normal"
          alignment="center"
        />
      </div>
      <div className="flex flew-row sm:flex-col justify-center pb-4 pl-1 max-w-[1280px] sm:w-[380px]">
        <div className="grid sm:grid-cols-1 grid-cols-2 items-center gap-y-16 gap-x-64">
          <Benefit
            title={"Qualidade e custo"}
            subtitle={"Análises confiáveis e valores mais acessíveis"}
            icon={<CurrencyDollarIcon width={22.75} height={22.75} />}
          />
          <Benefit
            title={"Facilidade e segurança"}
            subtitle={"Todos os modelos em apenas uma API"}
            icon={<LockClosedIcon width={19.25} />}
          />
          <Benefit
            title={"Simplicidade"}
            subtitle={"Integração descomplicada para seu desenvolvedor"}
            icon={<CursorArrowRippleIcon width={21} />}
          />
          <Benefit
            title={"Resultados precisos"}
            subtitle={"Scores em constante monitoramento"}
            icon={<ChartBarIcon width={21} />}
          />
        </div>
      </div>
    </section>
  );
};
