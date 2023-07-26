import { forwardRef } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

import { ComponentColor, ComponentSize } from "./@types";

type Props = Omit<React.HtmlHTMLAttributes<HTMLDivElement>, "color"> & {
  variant?: "outline";
  size?: ComponentSize;
  color?: ComponentColor;
  responsive?: boolean;
};

const Badge = forwardRef<HTMLDivElement, Props>(
  ({ children, variant, size, color, responsive, className, ...rest }, ref) => {
    const classes = twMerge(
      "badge",
      className,
      clsx({
        [`badge-${size}`]: size,
        [`badge-${color}`]: color,
        [`badge-${variant}`]: variant,
        "badge-xs md:badge-sm lg:badge-lg xl:badge-xl": responsive,
      })
    );
    return (
      <div
        className={classes}
        ref={ref}
      >
        {children}
      </div>
    );
  }
);

export default Badge;
