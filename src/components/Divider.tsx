import clsx from "clsx";

type Props = {
  horizontal?: boolean;
  children?: string;
  className?: string;
};

const Divider = ({ horizontal, children, className }: Props) => {
  const classes = clsx(
    "divider",
    horizontal && "divider-horizontal",
    className
  );

  return <div className={classes}>{children}</div>;
};

export default Divider;
