import { forwardRef } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

import { ComponentColor, ComponentSize } from "@/components/@types";

export type FileInputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size"
> & {
  size?: ComponentSize;
  color?: ComponentColor;
  bordered?: boolean;
};

const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
  ({ className, size, color, bordered, ...props }, ref): JSX.Element => {
    const classes = twMerge(
      "file-input",
      className,
      clsx({
        [`file-input-${size}`]: size,
        [`file-input-${color}`]: color,
        "file-input-bordered": bordered,
      })
    );
    return (
      <input
        {...props}
        className={classes}
        ref={ref}
        type="file"
      />
    );
  }
);

FileInput.displayName = "FileInput";

export default FileInput;
