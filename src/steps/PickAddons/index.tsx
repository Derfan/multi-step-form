import { Card, Title, Description, CheckBoxGroupField } from "../../components";
import { FieldName } from "../../constants";
import { AddonLabel } from "./AddonLabel";
import cn from "./PickAddons.module.sass";

const fields = [
  {
    value: "onlineService",
    title: "Online service",
    description: "Access to multiplayer games",
    price: 1,
    period: "mo",
  },
  {
    value: "largerStorage",
    title: "Larger storage",
    description: "Extra 1TB of cloud save",
    price: 2,
    period: "mo",
  },
  {
    value: "customizableProfile",
    title: "Customizable profile",
    description: "Custom theme on your profile",
    price: 2,
    period: "mo",
  },
];

export const PickAddons = () => (
  <Card>
    <Title>Pick add-ons</Title>

    <Description className={cn.description}>
      Add-ons help enhance your gaming experience.
    </Description>

    <div className={cn.fields}>
      <CheckBoxGroupField name={FieldName.Addons} fields={fields}>
        {({ title, description, price, period }) => (
          <AddonLabel
            title={title}
            description={description}
            price={price}
            period={period}
          />
        )}
      </CheckBoxGroupField>
    </div>
  </Card>
);
