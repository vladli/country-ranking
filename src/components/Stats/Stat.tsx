import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

import StatItem from "./StatItem";

export type StatProps = React.HTMLAttributes<HTMLDivElement>;

const Stat = forwardRef<HTMLDivElement, StatProps>(
  ({ className, ...props }, ref): JSX.Element => {
    const classes = twMerge("stat", className);

    return <div {...props} className={classes} ref={ref} />;
  }
);

export default Object.assign(Stat, { Item: StatItem });
