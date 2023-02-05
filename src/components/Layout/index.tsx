import { ReactNode } from "react";
import cn from "./Layout.module.sass";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => (
  <div className={cn.root}>{children}</div>
);
