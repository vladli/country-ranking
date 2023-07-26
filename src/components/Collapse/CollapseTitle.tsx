import { twMerge } from "tailwind-merge";

export type CollapseTitleProps = React.HTMLAttributes<HTMLDivElement>;

const CollapseTitle = ({
  children,
  className,
  ...props
}: CollapseTitleProps): JSX.Element => {
  const classes = twMerge("collapse-title", className);

  return (
    <div
      {...props}
      className={classes}
    >
      {children}
    </div>
  );
};

export default CollapseTitle;
