import { forwardRef } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

type Props = React.TableHTMLAttributes<HTMLTableRowElement> & {
  children?: React.ReactElement[];
  active?: boolean;
  hover?: boolean;
};

const TableRow = forwardRef<HTMLTableRowElement, Props>((props, ref) => {
  const { children, className, active, hover, ...rest } = props;
  const classes = twMerge(
    className,
    clsx({
      active: active,
      hover: hover,
    })
  );
  return (
    <tr
      {...rest}
      className={classes}
      ref={ref}
    >
      {children?.map((child, i) =>
        i < 1 ? <th key={i}>{child}</th> : <td key={i}>{child}</td>
      )}
    </tr>
  );
});

export default TableRow;
