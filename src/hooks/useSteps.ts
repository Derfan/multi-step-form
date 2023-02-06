import { useState } from "react";

export const useSteps = () => {
  const [activeStep, setActiveStep] = useState(2);

  const goToNextStep = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };
  const goToPrevStep = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  return { activeStep, goToNextStep, goToPrevStep };
};
