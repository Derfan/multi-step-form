import { Card, Title, Description, TextInput } from "../../components";
import cn from "./PersonalInfo.module.sass";

export const PersonalInfo = () => (
  <Card>
    <Title>Personal info</Title>

    <Description className={cn.description}>
      Please provide your name, email address, and phone number.
    </Description>

    <div className={cn.fields}>
      <TextInput name="name" label="Name" placeholder="e.g. Stephen King" />
      <TextInput
        name="email"
        label="Email Address"
        placeholder="e.g. stephenking@lorem.com"
      />
      <TextInput
        name="phone"
        label="Phone Number"
        placeholder="e.g. +1 234 567 890"
      />
    </div>
  </Card>
);
