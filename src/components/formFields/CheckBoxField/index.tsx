import { ReactNode, useState } from "react";
import cns from "classnames";
import { ReactComponent as CheckIcon } from "../../../assets/images/icon-checkmark.svg";
import cn from "./CheckBoxField.module.sass";

interface CheckBoxFieldProps {
  name: string;
  children: ReactNode;
  defaultChecked?: boolean;
  className?: string;
}

export const CheckBoxField = ({
  name,
  children,
  defaultChecked = false,
  className = "",
}: CheckBoxFieldProps) => {
  const [isChecked, setIsChecked] = useState(defaultChecked);

  const handleChange = () => {
    setIsChecked((prevState) => !prevState);
  };

  return (
    <label className={cns(cn.root, { [cn.checked]: isChecked }, className)}>
      <div className={cns(cn.box, { [cn.checked]: isChecked })}>
        <CheckIcon />
      </div>

      <input
        type="checkbox"
        name={name}
        className={cn.field}
        onChange={handleChange}
        defaultChecked={defaultChecked}
      />

      <div className={cn.label}>{children}</div>
    </label>
  );
};
