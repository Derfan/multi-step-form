import { ChangeEvent, ReactNode, useState } from "react";
import cns from "classnames";

import { RadioField } from "../RadioField";
import cn from "./RadioGroupField.module.sass";

type Option = { value: string; label: string };

interface RadioGroupFieldProps {
  name: string;
  options: Option[];
  className?: string;
  defaultChecked?: Option["value"];
  children: (option: Option) => ReactNode;
}

export const RadioGroupField = ({
  name,
  options,
  className = "",
  defaultChecked = "",
  children,
}: RadioGroupFieldProps) => {
  const [value, setValue] = useState(defaultChecked);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className={cns(cn.root, className)}>
      {options.map((option) => (
        <RadioField
          key={option.value}
          name={name}
          value={option.value}
          checked={value === option.value}
          onChange={handleChange}
        >
          {children(option)}
        </RadioField>
      ))}
    </div>
  );
};
