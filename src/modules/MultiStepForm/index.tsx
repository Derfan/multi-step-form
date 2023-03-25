import { useState } from "react";
import { Layout, Button, Stepper } from "../../components";
import { FormProvider } from "../../contexts";
import { ThankYou } from "../../steps";
import { useSteps, useForm, useStoredData } from "../../hooks";
import { stepsContent } from "../../constants";
import { FieldName, ButtonType } from "../../types";
import cn from "./MultiStepForm.module.sass";

const steps = stepsContent.map(({ label }) => label);

type FormValues = {
  [FieldName.Name]: string;
  [FieldName.Email]: string;
  [FieldName.Phone]: string;
  [FieldName.Plan]: string;
  [FieldName.Addons]: string[];
};

const initialValues = {
  [FieldName.Name]: "",
  [FieldName.Email]: "",
  [FieldName.Phone]: "",
  [FieldName.Plan]: "",
  [FieldName.Addons]: [],
};

export const MultiStepForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { updateStoredData, getStoredData } =
    useStoredData<FormValues>("ms-form-content");
  const { activeStep, goToNextStep, goToPrevStep } = useSteps(0);
  const form = useForm<FormValues>({
    initialValues: {
      ...initialValues,
      ...getStoredData(),
    },
  });
  const { methods } = form;

  const { Component: StepComponent } = stepsContent[activeStep];

  const onSubmit = (data: FormValues) => {
    if (activeStep === steps.length - 1) {
      setIsSubmitted(true);
    } else {
      updateStoredData(data);
      goToNextStep();
    }
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Layout>
          <div className={cn.steps}>
            <Stepper steps={steps} activeStep={activeStep} />
          </div>

          <div className={cn.card}>
            {isSubmitted ? <ThankYou /> : <StepComponent />}
          </div>

          {isSubmitted ? null : (
            <div className={cn.buttons}>
              {activeStep === steps.length - 1 ? (
                <Button type={ButtonType.SUBMIT}>Confirm</Button>
              ) : (
                <Button type={ButtonType.PRIMARY}>Next Step</Button>
              )}

              {activeStep !== 0 ? (
                <Button type={ButtonType.SECONDARY} onClick={goToPrevStep}>
                  Go Back
                </Button>
              ) : null}
            </div>
          )}
        </Layout>
      </form>
    </FormProvider>
  );
};
