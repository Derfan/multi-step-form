import { Card, Title, Description, CheckBoxGroupField } from "../../components";
import { AddonLabel } from "./AddonLabel";
import cn from "./PickAddons.module.sass";

const fields = [
  {
    name: "onlineService",
    title: "Online service",
    description: "Access to multiplayer games",
    price: 1,
    period: "mo",
  },
  {
    name: "largerStorage",
    title: "Larger storage",
    description: "Extra 1TB of cloud save",
    price: 2,
    period: "mo",
  },
  {
    name: "customizableProfile",
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
      <CheckBoxGroupField fields={fields}>
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
