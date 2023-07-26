import { forwardRef } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export type ArtboardProps = React.HTMLAttributes<HTMLDivElement> & {
  size?: 1 | 2 | 3 | 4 | 5 | 6;
  horizontal?: boolean;
};

const Artboard = forwardRef<HTMLDivElement, ArtboardProps>(
  ({ children, size, horizontal, className, ...props }, ref): JSX.Element => {
    const classes = twMerge(
      "artboard",
      "artboard-demo",
      className,
      clsx({
        [`phone-${size}`]: size,
        horizontal: horizontal,
      })
    );

    return (
      <div aria-label="Artboard" {...props} ref={ref} className={classes}>
        {children}
      </div>
    );
  }
);

Artboard.displayName = "Artboard";

export default Artboard;
