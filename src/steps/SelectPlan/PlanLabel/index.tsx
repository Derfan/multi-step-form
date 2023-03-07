import { FunctionComponent } from "react";
import cn from "./PlanLabel.module.sass";

interface PlanLabelProps {
  title: string;
  icon: FunctionComponent;
  price: number;
  period: "mo" | "yr";
}

export const PlanLabel = ({
  title,
  icon: Icon,
  price,
  period,
}: PlanLabelProps) => (
  <div className={cn.root}>
    <Icon />

    <p className={cn.info}>
      <span className={cn.title}>{title}</span>
      <span className={cn.price}>
        ${price}/{period}
      </span>
    </p>
  </div>
);
