import cn from "./AddonLabel.module.sass";

interface AddonLabelProps {
  title: string;
  description: string;
  price: number;
  period: "mo" | "yr";
}

export const AddonLabel = ({
  title,
  description,
  price,
  period,
}: AddonLabelProps) => (
  <div className={cn.root}>
    <p className={cn.info}>
      <span className={cn.title}>{title}</span>
      <span className={cn.description}>{description}</span>
    </p>

    <span className={cn.price}>
      +${price}/{period}
    </span>
  </div>
);
