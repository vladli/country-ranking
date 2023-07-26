import { forwardRef } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

import { ComponentColor, ComponentPosition } from "./@types";

export type TooltipProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "color"
> & {
  message: string;
  open?: boolean;
  color?: ComponentColor;
  position?: ComponentPosition;
};

const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  (
    {
      message,
      children,
      open,
      color,
      position,

      className,
      ...props
    },
    ref
  ): JSX.Element => {
    const classes = twMerge(
      "tooltip",
      className,
      clsx({
        "tooltip-open": open,
        [`tooltip-${color}`]: color,
        "tooltip-top": position === "top",
        "tooltip-bottom": position === "bottom",
        "tooltip-left": position === "left",
        "tooltip-right": position === "right",
      })
    );

    return (
      <div
        role="tooltip"
        {...props}
        ref={ref}
        data-tip={message}
        className={classes}
      >
        {children}
      </div>
    );
  }
);

Tooltip.displayName = "Tooltip";

export default Tooltip;
