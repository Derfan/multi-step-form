import { Card, Title, Description, RadioGroupField } from "../../components";
import { Period, FieldName } from "../../types";

import { ReactComponent as IconArcade } from "../../assets/images/icon-arcade.svg";
import { ReactComponent as IconAdvanced } from "../../assets/images/icon-advanced.svg";
import { ReactComponent as IconPro } from "../../assets/images/icon-pro.svg";

import { PlanLabel } from "./PlanLabel";
import cn from "./SelectPlan.module.sass";

const content = {
  arcade: { icon: IconArcade, price: 9, period: Period.Monthly },
  advanced: { icon: IconAdvanced, price: 12, period: Period.Monthly },
  pro: { icon: IconPro, price: 15, period: Period.Monthly },
};

const options = [
  { value: "arcade", label: "Arcade" },
  { value: "advanced", label: "Advanced" },
  { value: "pro", label: "Pro" },
];

export const SelectPlan = () => (
  <Card>
    <Title>Select your plan</Title>

    <Description className={cn.description}>
      You have the option of monthly or yearly billing.
    </Description>

    <div className={cn.fields}>
      <RadioGroupField
        name={FieldName.Plan}
        options={options}
        defaultChecked={options[0].value}
      >
        {({ value, label }) => (
          <PlanLabel
            title={label}
            {...content[value as keyof typeof content]}
          />
        )}
      </RadioGroupField>
    </div>
  </Card>
);
