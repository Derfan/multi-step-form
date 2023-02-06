import { Card, Title, Description } from "../../components";
import cn from "./SelectPlan.module.sass";

export const SelectPlan = () => (
  <Card>
    <Title>Select your plan</Title>

    <Description className={cn.description}>
      You have the option of monthly or yearly billing.
    </Description>

    <div className={cn.fields}>FormFields</div>
  </Card>
);
