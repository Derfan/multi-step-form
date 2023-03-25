import { FunctionComponent } from "react";

import { Period } from "../../../types";
import cn from "./PlanLabel.module.sass";

interface PlanLabelProps {
  title: string;
  icon: FunctionComponent;
  price: number;
  period: Period;
  additionalInfo?: string;
}

export const PlanLabel = ({
  title,
  icon: Icon,
  price,
  period,
  additionalInfo = "",
}: PlanLabelProps) => (
  <div className={cn.root}>
    <Icon />

    <p className={cn.info}>
      <span className={cn.title}>{title}</span>
      <span className={cn.price}>
        ${price}/{period}
      </span>
      {additionalInfo ? (
        <span className={cn.additionalInfo}>{additionalInfo}</span>
      ) : null}
    </p>
  </div>
);
