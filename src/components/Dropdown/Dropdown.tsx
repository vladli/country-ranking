import React, { forwardRef, ReactNode } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

import DropdownItem from "./DropdownItem";
import DropdownMenu from "./DropdownMenu";
import DropdownToggle from "./DropdownToggle";

export type DropdownProps = React.HTMLAttributes<HTMLDivElement> & {
  item?: ReactNode;
  horizontal?: "left" | "center" | "right";
  vertical?: "top" | "middle" | "end";
  hover?: boolean;
  open?: boolean;
};

const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(
  (
    { children, className, item, horizontal, vertical, hover, open, ...props },
    ref
  ): JSX.Element => {
    const classes = twMerge(
      "dropdown",
      className,
      clsx({
        [`dropdown-${horizontal}`]: horizontal,
        [`dropdown-${vertical}`]: vertical,
        "dropdown-hover": hover,
        "dropdown-open": open,
      })
    );
    return (
      <div
        role="listbox"
        {...props}
        className={classes}
        ref={ref}
      >
        {children}
        <ul className="dropdown-content">{item}</ul>
      </div>
    );
  }
);

export default Object.assign(Dropdown, {
  Toggle: DropdownToggle,
  Menu: DropdownMenu,
  Item: DropdownItem,
});
