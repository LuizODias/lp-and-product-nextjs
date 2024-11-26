import { useImageLoader } from "@/shared";
import { CheckBenefit } from "./benefit";
import { IconContent } from "./icon-content";
import Image from "next/image";

interface Props {
  benefit: {
    icon: React.ReactNode;
    reverse: boolean;
    title: string;
    score: string;
    firstContent: string;
    secondContent: string;
    benefits: string[];
    image: string;
    imageAlt: string;
  }
}

export const BenefitSection = ({ benefit }: Props) => {
  const { imageLoader } = useImageLoader();

  return (
    <div
      className={`max-w-[1440px] w-full flex flex-col ${benefit.reverse ? "dt:flex-row-reverse" : "dt:flex-row dt:pl-20 p-0"} dt:gap-[138px] gap-8 items-center`}
    >
      <div className="dt:w-1/2 w-full flex flex-col gap-8">
        <div className="flex flex-col gap-6 ">
          <IconContent icon={benefit.icon} />

          <div className="flex flex-col gap-4 dt:w-[560px] w-full">
            <p className="font-semibold text-darkTextColor leading-[42px] text-[28px]">
              {benefit.title}
            </p>
            <p className="font-normal text-lg text-midnightHaze">
              {benefit.firstContent}
              <span className="font-bold text-lg text-midnightHaze">
                &nbsp;{benefit.score}&nbsp;
              </span>
              {benefit.secondContent}
            </p>
          </div>
        </div>

        {benefit.benefits.map((benefit, index) => {
          return (
            <div key={index} className="flex flex-col gap-5 pl-4">
              <div className="flex flex-row gap-3">
                <CheckBenefit />
                <p className="text-lg text-midnightHaze">{benefit}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="dt:w-1/2 w-full flex justify-center">
        <Image
          loader={imageLoader}
          className={`${benefit.reverse ? "dt:rounded-r-xl dt:rounded-l-none" : "dt:rounded-l-xl dt:rounded-r-none"} rounded-r-xl rounded-l-xl w-[768px] sm:w-full`}
          src={benefit.image}
          alt={benefit.imageAlt}
          width={768}
          height={512}
        />
      </div>
    </div>
  );
};
