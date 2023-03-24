import { ReactNode } from "react";
import cns from "classnames";

import { Option } from "../../../types";
import { CheckBoxField } from "../CheckBoxField";
import cn from "./CheckBoxGroupField.module.sass";

interface CheckBoxGroupFieldProps {
  name: string;
  options: Option[];
  className?: string;
  defaultValue?: string[];
  children: (option: Option) => ReactNode;
}

export const CheckBoxGroupField = ({
  name,
  options,
  className = "",
  defaultValue = [],
  children,
}: CheckBoxGroupFieldProps) => (
  <div className={cns(cn.root, className)}>
    {options.map((option) => (
      <CheckBoxField
        key={option.value}
        name={name}
        value={option.value}
        defaultChecked={defaultValue.includes(option.value)}
      >
        {children(option)}
      </CheckBoxField>
    ))}
  </div>
);
