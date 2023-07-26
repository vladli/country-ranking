import { forwardRef } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  vertical?: boolean;
};

const Join = forwardRef<HTMLDivElement, Props>(
  ({ vertical, className, children, ...rest }, ref) => {
    const classes = twMerge(
      "join",
      className,
      clsx({
        "join-vertical": vertical,
        "join-horizontal": !vertical,
      })
    );
    return (
      <div
        {...rest}
        className={classes}
        ref={ref}
      >
        {children}
      </div>
    );
  }
);
export default Join;
