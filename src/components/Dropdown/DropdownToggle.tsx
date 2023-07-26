import React from "react";

import { ComponentColor, ComponentSize } from "@/components/@types";

import Button from "../Button";

export type DropdownToggleProps = Omit<
  React.LabelHTMLAttributes<HTMLLabelElement>,
  "color"
> & {
  color?: ComponentColor;
  size?: ComponentSize;
  button?: boolean;
  disabled?: boolean;
};

const DropdownToggle = ({
  children,
  color,
  size,
  button = true,
  className,
  disabled,
  ...props
}: DropdownToggleProps) => {
  return (
    <label
      className={className}
      tabIndex={0}
      {...props}
    >
      {button ? (
        <Button
          color={color}
          disabled={disabled}
          size={size}
          type="button"
        >
          {children}
        </Button>
      ) : (
        children
      )}
    </label>
  );
};

export default DropdownToggle;
