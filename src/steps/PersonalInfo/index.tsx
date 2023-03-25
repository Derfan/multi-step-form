import { Card, Title, Description, TextField } from "../../components";
import { useFormCtx } from "../../contexts";
import { FieldName } from "../../types";
import cn from "./PersonalInfo.module.sass";

export const PersonalInfo = () => {
  const { methods } = useFormCtx();

  return (
    <Card>
      <Title>Personal info</Title>

      <Description className={cn.description}>
        Please provide your name, email address, and phone number.
      </Description>

      <div className={cn.fields}>
        <TextField
          {...methods.registerField(FieldName.Name)}
          label="Name"
          placeholder="e.g. Stephen King"
        />
        <TextField
          {...methods.registerField(FieldName.Email)}
          label="Email Address"
          placeholder="e.g. stephenking@lorem.com"
        />
        <TextField
          {...methods.registerField(FieldName.Phone)}
          name={FieldName.Phone}
          label="Phone Number"
          placeholder="e.g. +1 234 567 890"
        />
      </div>
    </Card>
  );
};
