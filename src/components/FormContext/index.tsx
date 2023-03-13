import { createContext, ReactNode, useContext } from "react";

interface ContextValue {
  formValues: {
    name: string;
    email: string;
    phone: string;
  };
  methods: {};
}

const FormCtx = createContext<ContextValue>({
  formValues: { name: "", email: "", phone: "" },
  methods: {},
});

export const useFormCtx = () => useContext(FormCtx);

interface FormProviderProps extends ContextValue {
  children: ReactNode;
}

export const FormProvider = ({ children, ...props }: FormProviderProps) => (
  <FormCtx.Provider value={props}>{children}</FormCtx.Provider>
);
