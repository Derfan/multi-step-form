import { PersonalInfo, SelectPlan, PickAddons, Summary } from "./steps";

export enum ButtonType {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  SUBMIT = "submit",
}

export const content = [
  {
    label: "Your Info",
    Component: PersonalInfo,
  },
  {
    label: "Select Plan",
    Component: SelectPlan,
  },
  {
    label: "Add-Ons",
    Component: PickAddons,
  },
  {
    label: "Summary",
    Component: Summary,
  },
];
