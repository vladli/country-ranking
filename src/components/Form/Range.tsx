import { forwardRef, useMemo } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

import { ComponentColor, ComponentSize } from "@/components/@types";

export type RangeProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size"
> & {
  color?: ComponentColor;
  size?: ComponentSize;
};

const Range = forwardRef<HTMLInputElement, RangeProps>(
  ({ color, size, step, className, ...props }, ref): JSX.Element => {
    const classes = twMerge(
      "range",
      className,
      clsx({
        [`range-${size}`]: size,
        [`range-${color}`]: color,
      })
    );

    const isNumeric = (n: any): n is number =>
      !isNaN(parseFloat(n)) && isFinite(n);

    const numSteps = useMemo(() => {
      const safeStep = Math.max(1, Number(step));
      return Math.ceil(100 / safeStep) ?? 1;
    }, [props.max, step]);

    return (
      <>
        <input
          {...props}
          className={classes}
          ref={ref}
          step={step}
          type="range"
        />
        {isNumeric(step) && (
          <div className="flex w-full justify-between px-2 text-xs">
            {[...Array(numSteps + 1)].map((_, i) => {
              return <span key={i}>|</span>;
            })}
          </div>
        )}
      </>
    );
  }
);

Range.displayName = "Range";

export default Range;
