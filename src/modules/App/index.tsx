import { useState } from "react";
import { Layout, Button, Stepper } from "../../components";
import { PersonalInfo, ThankYou } from "../../steps";
import { useSteps } from "../../hooks";
import { ButtonType, content } from "../../constants";
import cn from "./App.module.sass";

const steps = content.map(({ label }) => label);

export const App = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { activeStep, goToNextStep, goToPrevStep } = useSteps();

  const handleConfirmForm = () => {
    setIsSubmitted(true);
  };

  return (
    <Layout>
      <div className={cn.steps}>
        <Stepper steps={steps} activeStep={activeStep} />
      </div>

      <div className={cn.card}>
        {isSubmitted ? <ThankYou /> : <PersonalInfo />}
      </div>

      {isSubmitted ? null : (
        <div className={cn.buttons}>
          {activeStep === steps.length - 1 ? (
            <Button type={ButtonType.SUBMIT} onClick={handleConfirmForm}>
              Confirm
            </Button>
          ) : (
            <Button type={ButtonType.PRIMARY} onClick={goToNextStep}>
              Next Step
            </Button>
          )}

          {activeStep !== 0 ? (
            <Button type={ButtonType.SECONDARY} onClick={goToPrevStep}>
              Go Back
            </Button>
          ) : null}
        </div>
      )}
    </Layout>
  );
};
