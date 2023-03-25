import { useState } from "react";
import {
  Card,
  Title,
  Description,
  RadioGroupField,
  SwitchField,
} from "../../components";
import { useFormCtx } from "../../contexts";
import { Period, FieldName } from "../../types";

import { ReactComponent as IconArcade } from "../../assets/images/icon-arcade.svg";
import { ReactComponent as IconAdvanced } from "../../assets/images/icon-advanced.svg";
import { ReactComponent as IconPro } from "../../assets/images/icon-pro.svg";

import { PlanLabel } from "./PlanLabel";
import cn from "./SelectPlan.module.sass";

const content = {
  arcade: {
    icon: IconArcade,
    price: { [Period.Monthly]: 9, [Period.Yearly]: 90 },
  },
  advanced: {
    icon: IconAdvanced,
    price: { [Period.Monthly]: 12, [Period.Yearly]: 120 },
  },
  pro: { icon: IconPro, price: { [Period.Monthly]: 15, [Period.Yearly]: 150 } },
};

const options = [
  { value: "arcade", label: "Arcade" },
  { value: "advanced", label: "Advanced" },
  { value: "pro", label: "Pro" },
];

export const SelectPlan = () => {
  const { methods, formValues } = useFormCtx();
  const [period, setPeriod] = useState(formValues.period || Period.Monthly);

  function handleChangePeriod() {
    setPeriod((prevPeriod) =>
      prevPeriod === Period.Monthly ? Period.Yearly : Period.Monthly
    );
  }

  return (
    <Card>
      <Title>Select your plan</Title>
      <Description className={cn.description}>
        You have the option of monthly or yearly billing.
      </Description>

      <div className={cn.fields}>
        <RadioGroupField
          {...methods.registerField(FieldName.Plan)}
          options={options}
        >
          {({ value, label }) => {
            const { icon, price } = content[value as keyof typeof content];

            return (
              <PlanLabel
                title={label}
                icon={icon}
                price={price[period]}
                period={period}
                additionalInfo={period === Period.Yearly ? "2 months free" : ""}
              />
            );
          }}
        </RadioGroupField>
      </div>

      <div className={cn.period}>
        <SwitchField
          {...methods.registerField(FieldName.Period)}
          checked={period === Period.Yearly}
          offValue={Period.Monthly}
          onValue={Period.Yearly}
          offLabel="Monthly"
          onLabel="Yearly"
          onChange={handleChangePeriod}
        />
      </div>
    </Card>
  );
};
