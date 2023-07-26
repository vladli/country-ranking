import clsx from "clsx";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

export type FooterProps = React.HTMLAttributes<HTMLDivElement> & {
  center?: boolean;
};

const Footer = forwardRef<HTMLDivElement, FooterProps>(
  ({ center, className, ...props }, ref) => {
    const classes = twMerge(
      "footer",
      className,
      clsx({
        "footer-center": center,
      })
    );

    return <div role="contentinfo" {...props} className={classes} ref={ref} />;
  }
);

export type FooterTitleProps = React.HTMLAttributes<HTMLSpanElement>;

const FooterTitle = forwardRef<HTMLSpanElement, FooterTitleProps>(
  ({ className, ...props }, ref) => {
    const classes = twMerge("footer-title", className);

    return <span {...props} className={classes} ref={ref} />;
  }
);

export default Object.assign(Footer, { Title: FooterTitle });
