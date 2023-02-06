import { Card, Title, Description } from "../../components";
import cn from "./PickAddons.module.sass";

export const PickAddons = () => (
  <Card>
    <Title>Pick add-ons</Title>

    <Description className={cn.description}>
      Add-ons help enhance your gaming experience.
    </Description>

    <div className={cn.fields}>FormFields</div>
  </Card>
);
