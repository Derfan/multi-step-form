import { Card, Title, Description, CheckBoxGroupField } from "../../components";
import { useFormCtx } from "../../contexts";
import { FieldName, Period } from "../../types";
import { AddonLabel } from "./AddonLabel";
import cn from "./PickAddons.module.sass";

const content = {
  onlineService: {
    description: "Access to multiplayer games",
    price: {
      [Period.Monthly]: 1,
      [Period.Yearly]: 10,
    },
  },
  largerStorage: {
    description: "Extra 1TB of cloud save",
    price: {
      [Period.Monthly]: 2,
      [Period.Yearly]: 20,
    },
  },
  customizableProfile: {
    description: "Custom theme on your profile",
    price: {
      [Period.Monthly]: 2,
      [Period.Yearly]: 20,
    },
  },
};

const options = [
  { value: "onlineService", label: "Online service" },
  { value: "largerStorage", label: "Larger storage" },
  { value: "customizableProfile", label: "Customizable profile" },
];

export const PickAddons = () => {
  const { methods, formValues } = useFormCtx();

  return (
    <Card>
      <Title>Pick add-ons</Title>

      <Description className={cn.description}>
        Add-ons help enhance your gaming experience.
      </Description>

      <div className={cn.fields}>
        <CheckBoxGroupField
          {...methods.registerField(FieldName.Addons)}
          options={options}
        >
          {({ value, label }) => {
            const { price, description } =
              content[value as keyof typeof content];

            return (
              <AddonLabel
                title={label}
                description={description}
                period={formValues.period}
                price={price[formValues.period]}
              />
            );
          }}
        </CheckBoxGroupField>
      </div>
    </Card>
  );
};
