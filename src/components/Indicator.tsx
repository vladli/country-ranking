import clsx from "clsx";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  item?: React.ReactNode;
  horizontal?: "start" | "center" | "end";
  vertical?: "top" | "middle" | "bottom";
};

const Indicator = forwardRef<HTMLDivElement, Props>(
  (
    {
      children,
      item,
      horizontal = "end",
      vertical = "top",
      className,
      ...rest
    },
    ref
  ) => {
    const classes = twMerge(
      "indicator-item",
      className,
      clsx({
        [`indicator-${horizontal}`]: horizontal,
        [`indicator-${vertical}`]: vertical,
      })
    );
    return (
      <div className="indicator" ref={ref}>
        <div className={classes} ref={ref} {...rest}>
          {item}
        </div>
        {children}
      </div>
    );
  }
);

export default Indicator;
