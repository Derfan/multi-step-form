import { useState } from "react";
import {
  Layout,
  Button,
  Title,
  Description,
  Card,
  Stepper,
} from "../../components";
import { ThankYou } from "../../steps";
import { useSteps } from "../../hooks";
import { ButtonType, content } from "../../constants";
import cn from "./App.module.sass";

const steps = content.map(({ label }) => label);

export const App = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { activeStep, goToNextStep, goToPrevStep } = useSteps();

  const { title, description } = content[activeStep];

  const handleConfirmForm = () => {
    setIsSubmitted(true);
  };

  return (
    <Layout>
      <div className={cn.steps}>
        <Stepper steps={steps} activeStep={activeStep} />
      </div>

      <div className={cn.card}>
        {isSubmitted ? (
          <ThankYou />
        ) : (
          <Card>
            <Title>{title}</Title>
            <Description>{description}</Description>
          </Card>
        )}
      </div>

      {isSubmitted ? null : (
        <div className={cn.buttons}>
          {activeStep !== 0 ? (
            <Button type={ButtonType.SECONDARY} onClick={goToPrevStep}>
              Go Back
            </Button>
          ) : null}

          {activeStep === steps.length - 1 ? (
            <Button type={ButtonType.SUBMIT} onClick={handleConfirmForm}>
              Confirm
            </Button>
          ) : (
            <Button type={ButtonType.PRIMARY} onClick={goToNextStep}>
              Next Step
            </Button>
          )}
        </div>
      )}
    </Layout>
  );
};
