import { Children, cloneElement, forwardRef } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

import { ComponentStatus } from "@/components/@types";

export type CodeMockupProps = React.HTMLAttributes<HTMLDivElement>;
const CodeMockup = forwardRef<HTMLDivElement, CodeMockupProps>(
  ({ className, children, ...props }, ref): JSX.Element => {
    const classes = twMerge("mockup-code", className);

    return (
      <div
        aria-label="Code mockup"
        {...props}
        className={classes}
        ref={ref}
      >
        {Children.map(children, (child, index) => {
          const childComponent =
            child as React.ReactElement<CodeMockupLineProps>;
          return cloneElement(childComponent, {
            key: index,
          });
        })}
      </div>
    );
  }
);

export type CodeMockupLineProps = React.HTMLAttributes<HTMLPreElement> & {
  dataPrefix?: string | boolean;
  status?: ComponentStatus;
  innerProps?: React.HTMLAttributes<HTMLElement>;
  innerRef?: React.Ref<HTMLElement>;
};

export const CodeMockupLine = forwardRef<HTMLPreElement, CodeMockupLineProps>(
  (
    { dataPrefix, status, className, children, innerProps, innerRef, ...props },
    ref
  ): JSX.Element => {
    const classes = twMerge(
      clsx({
        [`bg-${status}`]: status,
        [`text-${status}-content`]: status,
      }),
      className
    );

    const allProps = {
      ...props,
      className: classes,
      ...(dataPrefix !== false && { "data-prefix": dataPrefix || ">" }),
    } as Record<string, any>;

    return (
      <pre
        {...allProps}
        className={classes}
        ref={ref}
      >
        <code
          {...innerProps}
          ref={innerRef}
        >
          {children}
        </code>
      </pre>
    );
  }
);

CodeMockup.displayName = "CodeMockup";
const CodeMockupNamespace = Object.assign(CodeMockup, { Line: CodeMockupLine });

export { CodeMockupNamespace as CodeMockup };
