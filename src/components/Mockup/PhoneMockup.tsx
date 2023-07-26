import { forwardRef } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

import { ComponentColor } from "@/components/@types";

export type PhoneMockupProps = React.HTMLAttributes<HTMLDivElement> & {
  color?: Omit<ComponentColor, "ghost">;
  innerProps?: React.HTMLAttributes<HTMLDivElement>;
  innerRef?: React.Ref<HTMLDivElement>;
};

const PhoneMockup = forwardRef<HTMLDivElement, PhoneMockupProps>(
  (
    { color, className, children, innerRef, innerProps, ...props },
    ref
  ): JSX.Element => {
    const classes = twMerge(
      "mockup-phone",
      clsx({
        [`border-${color}`]: color,
      }),
      className
    );

    return (
      <div
        aria-label="Phone mockup"
        {...props}
        className={classes}
        ref={ref}
      >
        <div className="camera" />
        <div className="display">
          <div
            {...innerProps}
            className={twMerge(
              "phone-1 artboard artboard-demo",
              innerProps?.className
            )}
            ref={innerRef}
          >
            {children}
          </div>
        </div>
      </div>
    );
  }
);

PhoneMockup.displayName = "PhoneMockup";

export default PhoneMockup;
