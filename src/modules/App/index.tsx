import {
  Layout,
  Button,
  Title,
  Description,
  Card,
  Stepper,
} from "../../components";
import { useSteps } from "../../hooks";
import { ButtonType } from "../../constants";
import cn from "./App.module.sass";

const content = [
  {
    label: "Your Info",
    title: "Personal info",
    description: "Please provide your name, email address, and phone number.",
  },
  {
    label: "Select Plan",
    title: "Select your plan",
    description: "You have the option of monthly or yearly billing.",
  },
  {
    label: "Add-Ons",
    title: "Pick add-ons",
    description: "Add-ons help enhance your gaming experience.",
  },
  {
    label: "Summary",
    title: "Finishing up",
    description: "Double-check everything looks OK before confirming.",
  },
];

const steps = content.map(({ label }) => label);

export const App = () => {
  const { activeStep, goToNextStep, goToPrevStep } = useSteps();

  const { title, description } = content[activeStep];

  const handleConfirmForm = () => {};

  return (
    <Layout>
      <div className={cn.steps}>
        <Stepper steps={steps} activeStep={activeStep} />
      </div>

      <div className={cn.card}>
        <Card>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Card>
      </div>

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
    </Layout>
  );
};
