import { forwardRef } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

import { ComponentColor, ComponentSize } from "@/components/@types";

export type Props = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size" | "color"
> & {
  bordered?: boolean;
  borderOffset?: boolean;
  size?: ComponentSize;
  color?: ComponentColor;
  name: string;
  register?: any;
  labeled?: boolean;
  label?: string | null;
  required?: boolean;
};

const Input = forwardRef<HTMLInputElement, Props>(
  (
    {
      name,
      register,
      required,
      labeled = false,
      label,
      bordered = true,
      borderOffset,
      size,
      color,
      className,
      ...rest
    },
    ref
  ) => {
    const classes = twMerge(
      "input",
      className,
      clsx({
        [`input-${size}`]: size,
        [`input-${color}`]: color,
        [`focus:outline-offset-0`]: !borderOffset,
        "input-bordered": bordered,
      })
    );
    return (
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text">
            {label} {required ? <span className="text-red-500">*</span> : null}
          </span>
        </label>
        <input
          className={classes}
          id={name}
          ref={ref}
          {...(register && register(name, { required }))}
          {...rest}
        />
      </div>
    );
  }
);

export default Input;
