import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

export type StackProps = React.HTMLAttributes<HTMLDivElement>;

const Stack = forwardRef<HTMLDivElement, StackProps>(
  ({ className, children, ...props }, ref): JSX.Element => {
    const classes = twMerge("stack", className);

    return (
      <div aria-label="Stack" {...props} ref={ref} className={classes}>
        {children}
      </div>
    );
  }
);

Stack.displayName = "Stack";

export default Stack;
