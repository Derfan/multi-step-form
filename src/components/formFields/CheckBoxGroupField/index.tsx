import { ReactNode } from "react";
import cns from "classnames";
import { CheckBoxField } from "../CheckBoxField";
import cn from "./CheckBoxGroupField.module.sass";

type Option = {
  value: string;
  label: string;
  defaultChecked?: boolean;
};

interface CheckBoxGroupFieldProps {
  name: string;
  options: Option[];
  className?: string;
  children: (option: Option) => ReactNode;
}

export const CheckBoxGroupField = ({
  name,
  options,
  className = "",
  children,
}: CheckBoxGroupFieldProps) => (
  <div className={cns(cn.root, className)}>
    {options.map((option) => (
      <CheckBoxField
        key={option.value}
        name={name}
        value={option.value}
        defaultChecked={option.defaultChecked}
      >
        {children(option)}
      </CheckBoxField>
    ))}
  </div>
);
