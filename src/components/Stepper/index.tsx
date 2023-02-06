import cns from "classnames";
import cn from "./Stepper.module.sass";

interface StepperProps {
  steps: string[];
  activeStep: number;
  className?: string;
}

export const Stepper = ({ steps, activeStep, className }: StepperProps) => {
  return (
    <ul className={cns(cn.root, className)}>
      {steps.map((label, idx) => (
        <li
          key={label}
          className={cns(cn.item, { [cn.active]: idx === activeStep })}
        >
          {idx + 1}
        </li>
      ))}
    </ul>
  );
};
