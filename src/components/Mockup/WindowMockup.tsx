import React, { forwardRef } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

import { bgColors, brandColors, componentStatuses } from "@/components/@types";

export const windowMockupColors = [
  ...bgColors,
  ...brandColors,
  ...componentStatuses,
] as const;

type WindowMockupColors = (typeof windowMockupColors)[number];

export type WindowMockupProps = React.HTMLAttributes<HTMLDivElement> & {
  frameColor?: WindowMockupColors;
  backgroundColor?: WindowMockupColors;
  border?: boolean;
  borderColor?: WindowMockupColors;
};

const WindowMockup = forwardRef<HTMLDivElement, WindowMockupProps>(
  (
    {
      border,
      borderColor,
      backgroundColor,
      frameColor,
      className,
      children,
      ...props
    },
    ref
  ): JSX.Element => {
    const borderColorValue = borderColor
      ? borderColor
      : frameColor || "base-300";

    const classes = twMerge(
      "mockup-window",
      border && `border border-${borderColorValue}`,
      clsx({
        [`border-${borderColorValue}`]: borderColorValue,
        [`bg-${frameColor}`]: frameColor,
      }),
      className
    );

    const numChildren = React.Children.count(children);
    const firstChild = numChildren > 0 && React.Children.toArray(children)[0];

    const innerClasses = clsx(
      backgroundColor && `bg-${backgroundColor}`,
      border && `border- border-t${borderColorValue}`,
      "p-4"
    );

    const innerEl =
      firstChild && React.isValidElement(firstChild) ? (
        React.cloneElement(firstChild as React.ReactElement, {
          className: twMerge(innerClasses, firstChild.props.className),
        })
      ) : (
        <div className={innerClasses}>{children}</div>
      );

    return (
      <div
        aria-label="Window mockup"
        {...props}
        className={classes}
        ref={ref}
      >
        {innerEl}
      </div>
    );
  }
);

WindowMockup.displayName = "WindowMockup";

export default WindowMockup;
