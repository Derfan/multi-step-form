import { ReactNode } from "react";
import cns from "classnames";
import cn from "./Card.module.sass";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card = ({ children, className = "" }: CardProps) => (
  <div className={cns(cn.root, className)}>{children}</div>
);
