import { forwardRef } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

import { ComponentColor, ComponentShape, ComponentSize } from "./@types";

type ButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "color"
> & {
  href?: string;
  shape?: ComponentShape;
  size?: ComponentSize;
  variant?: "outline" | "link";
  color?: ComponentColor;
  fullWidth?: boolean;
  responsive?: boolean;
  animation?: boolean;
  loading?: boolean;
  active?: boolean;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    children,
    href,
    shape,
    size,
    variant,
    color = "primary",
    leftIcon,
    rightIcon,
    fullWidth,
    responsive,
    animation = true,
    loading,
    active,
    disabled,
    className,
    type,
    ...rest
  } = props;
  const classes = twMerge(
    "btn gap-1",
    className,
    clsx({
      [`btn-${size}`]: size,
      [`btn-${shape}`]: shape,
      [`btn-${variant}`]: variant,
      [`btn-${color}`]: color,
      "btn-block": fullWidth,
      "btn-xs md:btn-sm lg:btn-md xl:btn-lg": responsive,
      "no-animation": !animation,
      "btn-active": active,
      "btn-disabled": disabled,
      loading: loading,
    })
  );
  return (
    <button
      className={classes}
      disabled={disabled}
      ref={ref}
      type={type}
      {...rest}
    >
      {leftIcon && leftIcon}
      {children}
      {rightIcon && rightIcon}
    </button>
  );
});

export default Button;
Button.displayName = "Button";
