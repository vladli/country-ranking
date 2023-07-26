import React, { forwardRef } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

import { ComponentColor } from "./@types";

export type ProgressProps = Omit<
  React.ProgressHTMLAttributes<HTMLProgressElement>,
  "color"
> & {
  color?: ComponentColor;
};

const Progress = forwardRef<HTMLProgressElement, ProgressProps>(
  ({ color, className, ...props }, ref): JSX.Element => {
    const classes = twMerge(
      "progress",
      className,
      clsx({
        [`progress-${color}`]: color,
      })
    );

    return <progress {...props} ref={ref} className={classes} />;
  }
);

Progress.displayName = "Progress";

export default Progress;
