import { Span } from "@/shared";

interface StepProps {
  index: number;
}

export const StepFixed = ({ index }: StepProps) => {
  return (
    <div className="w-[42px] h-[42px]  rounded-full bg-secondary p-1">
      <div className="bg-white rounded-full w-full h-full p-[2px]">
        <div className="w-full h-full rounded-full bg-primary-base flex justify-center items-center">
          <Span text={index + 1} size="small" weight="bold" color="white" />
        </div>
      </div>
    </div>
  );
};
