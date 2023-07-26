import { forwardRef } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

import { ComponentSize } from "./@types";

export type KbdProps = React.HTMLAttributes<HTMLElement> & {
  size?: ComponentSize;
};

const Kbd = forwardRef<HTMLElement, KbdProps>(
  ({ children, size, className, ...props }, ref): JSX.Element => {
    const classes = twMerge(
      "kbd",
      className,
      clsx({
        [`kbd-${size}`]: size,
      })
    );

    return (
      <kbd {...props} className={classes} ref={ref}>
        {children}
      </kbd>
    );
  }
);

export default Kbd;
