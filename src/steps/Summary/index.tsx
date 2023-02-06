import { Card, Title, Description } from "../../components";
import cn from "./Summary.module.sass";

export const Summary = () => (
  <Card>
    <Title>Finishing up</Title>

    <Description className={cn.description}>
      Double-check everything looks OK before confirming.
    </Description>

    <div className={cn.fields}>FormFields</div>
  </Card>
);
