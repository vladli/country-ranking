import { forwardRef } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

import { ComponentColor } from "@/components/@types";

export type StepsProps = React.HTMLAttributes<HTMLUListElement> & {
  vertical?: boolean;
  horizontal?: boolean;
};

const Steps = forwardRef<HTMLUListElement, StepsProps>(
  (
    { children, className, vertical, horizontal, ...props },
    ref
  ): JSX.Element => {
    const classes = twMerge(
      "steps",
      className,
      clsx({
        ["steps-vertical"]: vertical,
        ["steps-horizontal"]: horizontal,
      })
    );

    return (
      <ul
        aria-label="Steps"
        role="group"
        {...props}
        className={classes}
        ref={ref}
      >
        {children}
      </ul>
    );
  }
);

export type StepProps = Omit<
  React.LiHTMLAttributes<HTMLLIElement>,
  "value" | "color"
> & {
  value?: string;
  color?: "neutral" | ComponentColor;
};

const Step = forwardRef<HTMLLIElement, StepProps>(
  ({ children, value, color, className, ...props }, ref): JSX.Element => {
    const classes = twMerge(
      "step",
      className,
      clsx({
        [`step-${color}`]: color,
      })
    );

    return (
      <li
        aria-label="Step"
        {...props}
        className={classes}
        data-content={value}
        ref={ref}
      >
        {children}
      </li>
    );
  }
);

export default Object.assign(Steps, { Step });
