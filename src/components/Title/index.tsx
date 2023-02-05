import { ReactNode } from "react";
import cns from "classnames";
import cn from "./Title.module.sass";

interface TitleProps {
  children: ReactNode;
  className?: string;
}

export const Title = ({ children, className = "" }: TitleProps) => (
  <h2 className={cns(cn.root, className)}>{children}</h2>
);
