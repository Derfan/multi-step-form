import { Layout, Button, Title, Description, Card } from "../../components";
import { ButtonType } from "../../constants";
import cn from "./App.module.sass";

export const App = () => (
  <Layout>
    <div className={cn.steps}>steps</div>

    <div className={cn.card}>
      <Card>
        <Title>Personal info</Title>
        <Description>
          Please provide your name, email address, and phone number.
        </Description>
      </Card>
    </div>

    <div className={cn.buttons}>
      <Button type={ButtonType.SECONDARY}>Go Back</Button>
      <Button type={ButtonType.PRIMARY}>Next Step</Button>
    </div>
  </Layout>
);
