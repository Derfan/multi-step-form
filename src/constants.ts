import { PersonalInfo, SelectPlan, PickAddons, Summary } from "./steps";

export const stepsContent = [
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
