import { forwardRef, ReactElement } from "react";
import { twMerge } from "tailwind-merge";

export type BreadcrumbsProps = React.HTMLAttributes<HTMLDivElement> & {
  children?:
    | ReactElement<BreadcrumbsItemProps>
    | ReactElement<BreadcrumbsItemProps>[];
  innerRef?: React.Ref<HTMLUListElement>;
  innerProps?: React.HTMLAttributes<HTMLUListElement>;
};

const Breadcrumbs = forwardRef<HTMLDivElement, BreadcrumbsProps>(
  (
    { children, className, innerProps, innerRef, ...props },
    ref
  ): JSX.Element => {
    const classes = twMerge("breadcrumbs", "text-sm", className);

    return (
      <div
        role="navigation"
        aria-label="Breadcrumbs"
        {...props}
        className={classes}
        ref={ref}
      >
        <ul {...innerProps} ref={innerRef}>
          {children}
        </ul>
      </div>
    );
  }
);

export type BreadcrumbsItemProps = React.LiHTMLAttributes<HTMLLIElement> & {
  href?: string;
};

const BreadcrumbsItem = forwardRef<HTMLLIElement, BreadcrumbsItemProps>(
  ({ children, href, ...props }, ref): JSX.Element => {
    return (
      <li role="link" {...props} ref={ref}>
        {href ? <a href={href}>{children}</a> : <>{children}</>}
      </li>
    );
  }
);

export default Object.assign(Breadcrumbs, { Item: BreadcrumbsItem });
