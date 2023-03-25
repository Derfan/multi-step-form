import { createContext, ReactNode, useContext } from "react";
import { FieldName, Period } from "../../types";

type FormValues = {
  [FieldName.Name]: string;
  [FieldName.Email]: string;
  [FieldName.Phone]: string;
  [FieldName.Plan]: string;
  [FieldName.Period]: Period;
  [FieldName.Addons]: string[];
};

const initialValues = {
  [FieldName.Name]: "",
  [FieldName.Email]: "",
  [FieldName.Phone]: "",
  [FieldName.Plan]: "",
  [FieldName.Period]: Period.Monthly,
  [FieldName.Addons]: [],
};

interface ContextValue {
  formValues: FormValues;
  methods: {
    registerField: <FormValuesKey extends keyof FormValues>(
      fieldName: FormValuesKey
    ) => {
      name: FormValuesKey;
      defaultValue: FormValues[FormValuesKey];
    };
  };
}

const FormCtx = createContext<ContextValue>({
  formValues: initialValues,
  methods: {
    registerField: (name) => ({ name, defaultValue: initialValues[name] }),
  },
});

export const useFormCtx = () => useContext(FormCtx);

interface FormProviderProps extends ContextValue {
  children: ReactNode;
}

export const FormProvider = ({ children, ...props }: FormProviderProps) => (
  <FormCtx.Provider value={props}>{children}</FormCtx.Provider>
);
