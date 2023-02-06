import cns from "classnames";
import cn from "./TextInput.module.sass";

interface TextInputProps {
  name: string;
  label: string;
  placeholder: string;
  error?: string;
  className?: string;
}

export const TextInput = ({
  name,
  label,
  placeholder,
  error = "",
  className = "",
}: TextInputProps) => (
  <div className={cns(cn.root, className)}>
    <div className={cn.label}>
      <label htmlFor={name} className={cn.labelText}>
        {label}
      </label>
      {error ? <p className={cn.errorText}>{error}</p> : null}
    </div>
    <input
      id={name}
      type="text"
      name={name}
      placeholder={placeholder}
      className={cns(cn.field, { [cn.error]: error })}
    />
  </div>
);
