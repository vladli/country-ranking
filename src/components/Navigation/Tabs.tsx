import React, { cloneElement, ReactElement } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

import { ComponentSize } from "@/components/@types";

export type TabsProps<T> = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "onChange"
> & {
  children: ReactElement<TabProps<T>>[];
  value?: T;
  onChange?: (value: T) => void;
  variant?: "bordered" | "lifted";
  size?: ComponentSize;
  boxed?: boolean;
};

const TabsInner = <T extends string | number | undefined>(
  {
    children,
    value,
    onChange,
    variant,
    size,
    boxed,

    className,
    ...props
  }: TabsProps<T>,
  ref?: React.ForwardedRef<T>
): JSX.Element => {
  const classes = twMerge(
    "tabs",
    className,
    clsx({
      "tabs-boxed": boxed,
    })
  );

  return (
    <div
      ref={ref as React.ForwardedRef<HTMLDivElement>}
      role="tablist"
      {...props}
      className={classes}
    >
      {children.map((child, index) => {
        return cloneElement(child, {
          key: child.props.value,
          variant,
          size,
          activeValue: value,
          onClick: (value: T) => {
            onChange && onChange(value);
          },
        });
      })}
    </div>
  );
};

// Make forwardRef work with generic component
const Tabs = React.forwardRef(TabsInner) as <T>(
  props: TabsProps<T> & { ref?: React.ForwardedRef<HTMLDivElement> }
) => ReturnType<typeof TabsInner>;

export type TabProps<T> = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  "onClick"
> & {
  value: T;
  activeValue?: T;
  onClick?: (value: T) => void;
  size?: ComponentSize;
  variant?: "boxed" | "bordered" | "lifted";
  disabled?: boolean;
};

const TabInner = <T extends string | number | undefined>(
  {
    children,
    value,
    activeValue,
    onClick,
    size,
    variant,
    disabled,
    className,
    style,
    ...props
  }: TabProps<T>,
  ref?: React.ForwardedRef<T>
): JSX.Element => {
  const classes = twMerge(
    "tab",
    className,
    clsx({
      "tab-active": value != null && value === activeValue,
      "tab-disabled": disabled,
      "tab-lg": size === "lg",
      "tab-md": size === "md",
      "tab-sm": size === "sm",
      "tab-xs": size === "xs",
      "tab-bordered": variant === "bordered",
      "tab-lifted": variant === "lifted",
    })
  );

  return (
    <a
      role="tab"
      {...props}
      className={classes}
      onClick={() => onClick && onClick(value)}
      style={style}
    >
      {children}
    </a>
  );
};

// Make forwardRef work with generic component
const Tab = React.forwardRef(TabInner) as <T>(
  props: TabProps<T> & { ref?: React.ForwardedRef<HTMLAnchorElement> }
) => ReturnType<typeof TabInner>;

export default Object.assign(Tabs, { Tab });
