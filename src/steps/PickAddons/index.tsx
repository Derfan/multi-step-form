import { Card, Title, Description, CheckBoxField } from "../../components";
import { AddonLabel } from "./AddonLabel";
import cn from "./PickAddons.module.sass";

export const PickAddons = () => (
  <Card>
    <Title>Pick add-ons</Title>

    <Description className={cn.description}>
      Add-ons help enhance your gaming experience.
    </Description>

    <div className={cn.fields}>
      <CheckBoxField name="onlineService" defaultChecked>
        <AddonLabel
          title="Online service"
          description="Access to multiplayer games"
          price={1}
          period="mo"
        />
      </CheckBoxField>
      <CheckBoxField name="largerStorage" defaultChecked>
        <AddonLabel
          title="Larger storage"
          description="Extra 1TB of cloud save"
          price={2}
          period="mo"
        />
      </CheckBoxField>
      <CheckBoxField name="customizableProfile">
        <AddonLabel
          title="Customizable profile"
          description="Custom theme on your profile"
          price={2}
          period="mo"
        />
      </CheckBoxField>
    </div>
  </Card>
);
