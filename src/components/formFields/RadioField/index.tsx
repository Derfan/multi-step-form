import { ChangeEvent, ReactNode } from "react";
import cns from "classnames";

import cn from "./RadioField.module.sass";

interface RadioFieldProps {
  name: string;
  value: string;
  children: ReactNode;
  checked: boolean;
  className?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const RadioField = ({
  name,
  value,
  children,
  checked,
  className = "",
  onChange,
}: RadioFieldProps) => (
  <label className={cns(cn.root, { [cn.checked]: checked }, className)}>
    <input
      type="radio"
      name={name}
      value={value}
      className={cn.field}
      checked={checked}
      onChange={onChange}
    />

    <div className={cn.label}>{children}</div>
  </label>
);
