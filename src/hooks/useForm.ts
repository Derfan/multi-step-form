import { FormEvent, useState } from "react";

interface IFormSettings<T> {
  initialValues: T;
}

export const useForm = <T extends { [name: string]: string | string[] }>({
  initialValues,
}: IFormSettings<T>) => {
  const [formValues, setFormValues] = useState(initialValues);

  const registerField = <Key extends keyof T>(name: Key) => ({
    name,
    defaultValue: initialValues[name],
  });

  const handleSubmit =
    (onSubmit: (data: T) => void) => (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const formData = new FormData(event.target as HTMLFormElement);

      const data = Object.keys(initialValues).reduce((acc, name) => {
        const isArray = Array.isArray(initialValues[name]);
        const value = isArray ? formData.getAll(name) : formData.get(name);

        if (!value || (isArray && (value as string[])?.length === 0)) {
          return acc;
        }

        return { ...acc, [name]: value };
      }, {});

      setFormValues((prevValues) => {
        const updatedData = { ...prevValues, ...data };

        onSubmit(updatedData);

        return updatedData;
      });
    };

  return {
    formValues,
    methods: { registerField, handleSubmit },
  };
};
