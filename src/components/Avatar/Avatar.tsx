import { Children, cloneElement, forwardRef } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

import {
  ComponentColor,
  ComponentShape,
  ComponentSize,
} from "@/components/@types";

export type AvatarProps = React.HTMLAttributes<HTMLDivElement> & {
  src?: string;
  letters?: string;
  size?: ComponentSize | number;
  shape?: ComponentShape;
  color?: ComponentColor;
  border?: boolean;
  borderColor?: ComponentColor;
  online?: boolean;
  offline?: boolean;
  children?: React.ReactNode;
};

const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      size = "md",
      src,
      letters,
      shape,
      color = "info",
      border,
      borderColor,
      online,
      offline,
      className,
      children,
      ...rest
    },
    ref
  ) => {
    const containerClass = twMerge(
      "avatar",
      className,
      clsx({
        online: online,
        offline: offline,
        placeholder: !src,
      })
    );
    const imgClasses = clsx({
      "ring ring-offset-base-100 ring-offset-2": border,
      [`ring-${borderColor}`]: borderColor,
      "rounded-btn": shape === "square",
      "rounded-full": shape === "circle",
      "w-32 h-32": size === "lg",
      "w-24 h-24": size === "md",
      "w-14 h-14": size === "sm",
      "w-10 h-10": size === "xs",
    });

    const placeholderClasses = clsx({
      "bg-neutral-focus": !color,
      "text-neutral-content": !color,
      [`bg-${color}`]: color,
      [`text-${color}-content`]: color,
      "ring ring-offset-base-100 ring-offset-2": border,
      [`ring-${borderColor}`]: borderColor,
      "rounded-btn": shape === "square",
      "rounded-full": shape === "circle",
      "w-32 h-32 text-3xl": size === "lg",
      "w-24 h-24 text-xl": size === "md",
      "w-14 h-14": size === "sm",
      "w-10 h-10": size === "xs",
    });

    const customImgDimension =
      typeof size === "number" ? { width: size, height: size } : {};

    const renderAvatarContents = () => {
      if (src) {
        return (
          <div
            className={imgClasses}
            style={customImgDimension}
          >
            <img src={src} />
          </div>
        );
      } else if (letters) {
        return (
          <div
            className={placeholderClasses}
            style={customImgDimension}
          >
            <span>{letters ? letters : children}</span>
          </div>
        );
      } else if (Children.count(children) === 1) {
        const firstChild = Children.only(children) as React.ReactElement;
        return cloneElement(firstChild, {
          className: twMerge(imgClasses, firstChild.props.className),
          style: { ...customImgDimension, ...firstChild.props.style },
        });
      }
      return (
        <div
          className={imgClasses}
          style={customImgDimension}
        >
          {children}
        </div>
      );
    };
    return (
      <div
        className={containerClass}
        ref={ref}
        {...rest}
      >
        {renderAvatarContents()}
      </div>
    );
  }
);

export default Avatar;
