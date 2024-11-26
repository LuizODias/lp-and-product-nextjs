import React, { useCallback } from 'react';
import { ClockIcon } from '../../Icons/ClockIcon';
import { LoadIcon } from '../../Icons/LoadIcon';
import { Paragraph, Span } from '../../Typography';

interface stepTypes {
  title: string;
  description: string;
}

export interface StepperWithDescriptionProps {
  steps: stepTypes[];
  actualStep: number;
}

export const StepperWithDescription = ({
  actualStep,
  steps,
}: StepperWithDescriptionProps) => {
  const handleState = useCallback(
    (step: number): state => {
      if (actualStep < step) return 'concluded';
      if (actualStep === step) return 'actual';
      return 'toBe';
    },
    [actualStep],
  );

  return (
    <ul className="flex flex-col gap-10">
      {steps.map((step, index) => {
        const state = handleState(index);
        return (
          <li key={index} className="flex flex-row gap-x-4 items-center">
            <div className="scale-[1.7]">
              <IconSelector state={state} />
            </div>
            <div className="flex flex-col">
              <Span size="large" text={step.title} weight="bold" />
              <Paragraph
                text={step.description}
                size="medium"
                weight="medium"
              />
            </div>
          </li>
        );
      })}
    </ul>
  );
};

type state = 'concluded' | 'actual' | 'toBe';

interface IconSelectorProps {
  state: state;
}

export const IconSelector = ({ state }: IconSelectorProps) => {
  if (state === 'toBe') return <ClockIcon />;
  if (state === 'actual') return <LoadIcon />;
  return <></>;
};
