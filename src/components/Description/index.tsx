import { ReactNode } from "react";
import cns from "classnames";
import cn from "./Description.module.sass";

interface DescriptionProps {
  children: ReactNode;
  className?: string;
}

export const Description = ({ children, className = "" }: DescriptionProps) => (
  <p className={cns(cn.root, className)}>{children}</p>
);
