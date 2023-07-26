import { Children, cloneElement, forwardRef, ReactElement } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

import { ComponentSize } from "@/components/@types";

export type RatingProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "onChange"
> & {
  size?: ComponentSize;
  half?: boolean;
  hidden?: boolean;
  value: number;
  onChange?: (newRating: number) => void;
};

const Rating = forwardRef<HTMLDivElement, RatingProps>(
  (
    { children, size, half, hidden, className, value, onChange, ...props },
    ref
  ): JSX.Element => {
    const classes = twMerge(
      "rating",
      className,
      clsx({
        [`rating-${size}`]: size,
        "rating-half": half,
        "rating-hidden": hidden || value === 0,
      })
    );

    return (
      <div
        aria-label="Rating"
        {...props}
        className={classes}
        ref={ref}
      >
        {value === 0 && (
          <RatingItem
            checked
            className={clsx(classes, "hidden")}
            readOnly
          />
        )}
        {Children.map(children, (child, index) => {
          const childComponent = child as ReactElement<RatingItemProps>;
          return cloneElement(childComponent, {
            key: index + value,
            checked: value === index + 1,
            readOnly: onChange == null,
            onChange: () => {
              onChange?.(index + 1);
            },
          });
        })}
      </div>
    );
  }
);

export type RatingItemProps = React.InputHTMLAttributes<HTMLInputElement>;

const RatingItem = ({ ...props }: RatingItemProps): JSX.Element => {
  return (
    <input
      {...props}
      type="checkbox"
    />
  );
};

export default Object.assign(Rating, { Item: RatingItem });
