import React, { ReactNode } from 'react';
import {
  TitleWithIcon,
  TitleWithIconProps,
} from '../../Typography/TitleWithIcon';
import { EllipsisVerticalIcon } from '../../Icons/EllipsisVerticalIcon';
import { Span } from '../../Typography';
import { CheckIcon } from '../../Icons/CheckIcon';
import { Spacing } from '../../Spacing';
import { EllipsisHorizontalIcon } from '../../Icons/EllipsisHorizontalIcon ';

export interface DefaultStepperProps {
  title: TitleWithIconProps;
  steps: string[];
  actualStep: number;
}

export const DefaultStepper = ({
  title,
  steps,
  actualStep,
}: DefaultStepperProps) => {
  return (
    <div className="w-full h-full py-8 px-4 border border-black rounded-lg">
      <TitleWithIcon {...title} />
      <Spacing size="medium" />
      <div className="flex flex-row lg:flex-col items-center lg:items-stretch justify-around ">
        {steps.map((step, index) => (
          <Step
            actualStep={actualStep}
            step={step}
            index={index}
            key={index}
            last={index + 1 < steps.length}
          />
        ))}
      </div>
    </div>
  );
};

interface StepProps {
  step: string;
  index: number;
  actualStep: number;
  last: boolean;
}

export const Step = ({ actualStep, index, step, last }: StepProps) => {
  return (
    <>
      <div className="">
        <div className="flex lg:flex-col  ">
          <div
            className={`flex gap-2  ${index < actualStep ? '' : 'px-2'} py-1`}
          >
            {index < actualStep ? (
              <CheckIcon />
            ) : (
              <Span
                text={index + 1}
                size="large"
                weight={actualStep === index ? 'bold' : 'medium'}
              />
            )}

            <Span
              text={step}
              size="large"
              weight={actualStep === index ? 'bold' : 'medium'}
            />
          </div>
          <div className="hidden lg:block">
            {index >= 0 && !!last && <EllipsisVerticalIcon />}
          </div>
        </div>
      </div>
      <div className="lg:hidden relative">
        {index >= 0 && !!last && <EllipsisHorizontalIcon />}
      </div>
    </>
  );
};
