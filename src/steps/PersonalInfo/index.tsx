import {
  Card,
  Title,
  Description,
  TextField,
  useFormCtx,
} from "../../components";
import { FieldName } from "../../types";
import cn from "./PersonalInfo.module.sass";

export const PersonalInfo = () => {
  const { formValues } = useFormCtx();

  return (
    <Card>
      <Title>Personal info</Title>

      <Description className={cn.description}>
        Please provide your name, email address, and phone number.
      </Description>

      <div className={cn.fields}>
        <TextField
          name={FieldName.Name}
          label="Name"
          placeholder="e.g. Stephen King"
          defaultValue={formValues[FieldName.Name]}
        />
        <TextField
          name={FieldName.Email}
          label="Email Address"
          placeholder="e.g. stephenking@lorem.com"
          defaultValue={formValues[FieldName.Email]}
        />
        <TextField
          name={FieldName.Phone}
          label="Phone Number"
          placeholder="e.g. +1 234 567 890"
          defaultValue={formValues[FieldName.Phone]}
        />
      </div>
    </Card>
  );
};
