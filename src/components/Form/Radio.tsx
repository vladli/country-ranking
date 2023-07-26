import { forwardRef } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

import { ComponentColor, ComponentSize } from "@/components/@types";

export type RadioProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size"
> & {
  color?: ComponentColor;
  size?: ComponentSize;
};

const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ color, size, name, className, ...props }, ref): JSX.Element => {
    const classes = twMerge(
      "radio",
      className,
      clsx({
        [`radio-${size}`]: size,
        [`radio-${color}`]: color,
      })
    );

    return (
      <input
        {...props}
        className={classes}
        name={name}
        ref={ref}
        type="radio"
      />
    );
  }
);

Radio.displayName = "Radio";

export default Radio;
