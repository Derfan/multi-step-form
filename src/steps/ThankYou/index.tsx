import { Card, Title, Description } from "../../components";
import { ReactComponent as ThankYouIcon } from "../../assets/images/icon-thank-you.svg";
import cn from "./ThankYou.module.sass";

export const ThankYou = () => (
  <Card className={cn.root}>
    <ThankYouIcon className={cn.icon} />
    <Title className={cn.title}>Thank you!</Title>
    <Description className={cn.description}>
      Thanks for confirming your subscription! We hope you have fun using our
      platform. If you ever need support, please feel free to email us at
      support@loremgaming.com.
    </Description>
  </Card>
);
