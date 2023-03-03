import { ReactNode } from "react";
import cns from "classnames";
import { CheckBoxField } from "../CheckBoxField";
import cn from "./CheckBoxGroupField.module.sass";

interface CheckBoxGroupFieldProps<T> {
  name: string;
  fields: T[];
  className?: string;
  children: (field: T) => ReactNode;
}

export const CheckBoxGroupField = ({
  name,
  fields,
  className = "",
  children,
}: CheckBoxGroupFieldProps<{ [key: string]: any }>) => (
  <div className={cns(cn.root, className)}>
    {fields.map((item) => (
      <CheckBoxField
        key={item.value}
        name={name}
        value={item.value}
        defaultChecked={item.defaultChecked}
      >
        {children(item)}
      </CheckBoxField>
    ))}
  </div>
);
