export type Option = {
  value: string;
  label: string;
};

export enum FieldName {
  Name = "name",
  Email = "email",
  Phone = "phone",
  Plan = "plan",
  Period = "period",
  Addons = "addons",
}

export enum ButtonType {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  SUBMIT = "submit",
}

export enum Period {
  Monthly = "mo",
  Yearly = "yr",
}
