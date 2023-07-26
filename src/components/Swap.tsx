import { forwardRef } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

type Props = React.LabelHTMLAttributes<HTMLLabelElement> & {
  onElement: React.ReactNode | React.ReactNode[];
  offElement: React.ReactNode | React.ReactNode[];
  active?: boolean;
  rotate?: boolean;
  flip?: boolean;
  action?: any;
};

const Swap = forwardRef<HTMLLabelElement, Props>(
  (
    {
      onElement,
      offElement,
      active,
      rotate,
      flip,
      className,
      action,
      ...props
    },
    ref
  ) => {
    const classes = twMerge(
      "swap",
      className,
      clsx({
        "swap-active": active,
        "swap-rotate": rotate,
        "swap-flip": flip,
      })
    );
    return (
      <label
        {...props}
        className={classes}
        onClick={action}
        ref={ref}
      >
        <div className="swap-on">{onElement}</div>
        <div className="swap-off">{offElement}</div>
      </label>
    );
  }
);

Swap.displayName = "Swap";
export default Swap;
