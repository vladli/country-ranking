import React from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

import { ComponentColor, ComponentSize } from "@/components/@types";

export type TextareaProps = Omit<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  "color"
> & {
  color?: ComponentColor;
  size?: ComponentSize;
  bordered?: boolean;
  borderOffset?: boolean;
};

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    { bordered = true, borderOffset, color, size, className, ...props },
    ref
  ): JSX.Element => {
    const classes = twMerge(
      "textarea",
      className,
      clsx({
        [`textarea-${color}`]: color,
        [`textarea-${size}`]: size,
        [`focus:outline-offset-0`]: !borderOffset,
        "textarea-bordered": bordered,
      })
    );

    return (
      <textarea
        {...props}
        className={classes}
        ref={ref}
      />
    );
  }
);

export default Textarea;
