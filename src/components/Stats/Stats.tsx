import clsx from "clsx";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

import Stat from "./Stat";

export type StatsProps = React.HTMLAttributes<HTMLDivElement> & {
  horizontal?: boolean;
  vertical?: boolean;
};

const Stats = forwardRef<HTMLDivElement, StatsProps>(
  (
    { horizontal, vertical, className, children, ...props },
    ref
  ): JSX.Element => {
    const classes = twMerge(
      "stats",
      className,
      clsx({
        "stats-horizontal": horizontal,
        "stats-vertical": vertical,
      })
    );

    return (
      <div {...props} ref={ref} className={classes}>
        {children}
      </div>
    );
  }
);

export default Object.assign(Stats, { Stat });
