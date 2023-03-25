import { ChangeEvent } from "react";
import cns from "classnames";

import cn from "./SwitchField.module.sass";

interface SwitchFieldProps {
  name: string;
  checked: boolean;
  offValue?: string;
  onValue?: string;
  offLabel?: string;
  onLabel?: string;
  className?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const SwitchField = ({
  name,
  checked,
  offValue = "off",
  onValue = "on",
  offLabel = "Off",
  onLabel = "On",
  className = "",
  onChange,
}: SwitchFieldProps) => (
  <div className={cns(cn.root, { [cn.checked]: checked }, className)}>
    <span className={cns(cn.label, cn.off)}>{offLabel}</span>

    <label className={cn.switch}>
      <input
        type="checkbox"
        name={name}
        className={cn.input}
        checked={checked}
        value={checked ? onValue : offValue}
        onChange={onChange}
      />
      <span className={cn.slider} />
    </label>

    <span className={cns(cn.label, cn.on)}>{onLabel}</span>
  </div>
);
