import { useState } from "react";

export const useSteps = (defaultStep = 0) => {
  const [activeStep, setActiveStep] = useState(defaultStep);

  const goToNextStep = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };
  const goToPrevStep = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  return { activeStep, goToNextStep, goToPrevStep };
};
