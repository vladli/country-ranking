import { forwardRef, ReactNode } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

import { ComponentStatus } from "./@types";

export type AlertProps = React.HTMLAttributes<HTMLDivElement> & {
  icon?: ReactNode;
  status?: ComponentStatus;
  innerClassName?: string;
};

const Alert = forwardRef<HTMLDivElement, AlertProps>(
  (
    { children, icon, status, className, innerClassName, ...props },
    ref
  ): JSX.Element => {
    const classes = twMerge(
      "alert",
      className,
      clsx({
        [`alert-${status}`]: status,
      })
    );

    return (
      <div role="alert" {...props} ref={ref} className={classes}>
        <div className={twMerge("flex-1", innerClassName)}>
          {icon}
          {children}
        </div>
      </div>
    );
  }
);

Alert.displayName = "Alert";

export default Alert;
