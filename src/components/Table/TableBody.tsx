import { forwardRef } from "react";

type Props = React.TableHTMLAttributes<HTMLTableSectionElement>;

const TableBody = forwardRef<HTMLTableSectionElement, Props>(
  ({ children, ...props }, ref) => {
    return (
      <tbody {...props} ref={ref}>
        {children}
      </tbody>
    );
  }
);
TableBody.displayName = "TableBody";
export default TableBody;
