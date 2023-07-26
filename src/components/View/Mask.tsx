import clsx from "clsx";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

export type MaskProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  variant?:
    | "squircle"
    | "heart"
    | "hexagon"
    | "hexagon-2"
    | "decagon"
    | "pentagon"
    | "diamond"
    | "square"
    | "circle"
    | "parallelogram"
    | "parallelogram-2"
    | "parallelogram-3"
    | "parallelogram-4"
    | "star"
    | "star-2"
    | "triangle"
    | "triangle-2"
    | "triangle-3"
    | "triangle-4"
    | "half-1"
    | "half-2";
};

const Mask = forwardRef<HTMLImageElement, MaskProps>(
  ({ src, variant, className, ...props }, ref): JSX.Element => {
    const classes = twMerge(
      "mask",
      className,
      clsx({
        [`mask-${variant}`]: variant,
      })
    );

    return <img {...props} className={classes} src={src} ref={ref} />;
  }
);
export default Mask;
