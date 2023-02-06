import { ReactNode } from "react";
import cns from "classnames";
import { CheckBoxField } from "../CheckBoxField";
import cn from "./CheckBoxGroupField.module.sass";

interface CheckBoxGroupFieldProps<T> {
  fields: T[];
  className?: string;
  children: (field: T) => ReactNode;
}

export const CheckBoxGroupField = ({
  fields,
  className = "",
  children,
}: CheckBoxGroupFieldProps<{ [key: string]: any; name: string }>) => (
  <div className={cns(cn.root, className)}>
    {fields.map((item) => (
      <CheckBoxField
        key={item.name}
        name={item.name}
        defaultChecked={item.defaultChecked}
      >
        {children(item)}
      </CheckBoxField>
    ))}
  </div>
);
