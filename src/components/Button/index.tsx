import { ReactNode } from "react";
import cns from "classnames";
import { ButtonType } from "../../constants";
import cn from "./Button.module.sass";

interface ButtonProps {
  type: ButtonType;
  children: ReactNode;
  onClick?: () => void;
}

export const Button = ({ type, children, onClick }: ButtonProps) => (
  <button
    type={type === ButtonType.SECONDARY ? "button" : "submit"}
    className={cns(cn.root, cn[type])}
    onClick={onClick}
  >
    {children}
  </button>
);
