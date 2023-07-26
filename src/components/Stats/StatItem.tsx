import clsx from "clsx";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

export type StatItemProps = React.HTMLAttributes<HTMLDivElement> & {
  variant: "title" | "value" | "desc" | "figure";
};

const StatItem = forwardRef<HTMLDivElement, StatItemProps>(
  ({ variant, className, ...props }, ref): JSX.Element => {
    const classes = twMerge(
      className,
      clsx({
        [`stat-${variant}`]: variant,
      })
    );

    return <div {...props} className={classes} ref={ref} />;
  }
);

export default StatItem;
