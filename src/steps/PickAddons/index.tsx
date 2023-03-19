import {
  Card,
  Title,
  Description,
  CheckBoxGroupField,
  useFormCtx,
} from "../../components";
import { FieldName, Period } from "../../types";
import { AddonLabel } from "./AddonLabel";
import cn from "./PickAddons.module.sass";

const content = {
  onlineService: {
    description: "Access to multiplayer games",
    price: 1,
    period: Period.Monthly,
  },
  largerStorage: {
    description: "Extra 1TB of cloud save",
    price: 2,
    period: Period.Monthly,
  },
  customizableProfile: {
    description: "Custom theme on your profile",
    price: 2,
    period: Period.Monthly,
  },
};

const options = [
  { value: "onlineService", label: "Online service" },
  { value: "largerStorage", label: "Larger storage" },
  { value: "customizableProfile", label: "Customizable profile" },
];

export const PickAddons = () => {
  const {
    formValues: { addons },
  } = useFormCtx();

  return (
    <Card>
      <Title>Pick add-ons</Title>

      <Description className={cn.description}>
        Add-ons help enhance your gaming experience.
      </Description>

      <div className={cn.fields}>
        <CheckBoxGroupField
          name={FieldName.Addons}
          options={options}
          defaultChecked={addons}
        >
          {({ value, label }) => (
            <AddonLabel
              title={label}
              {...content[value as keyof typeof content]}
            />
          )}
        </CheckBoxGroupField>
      </div>
    </Card>
  );
};
