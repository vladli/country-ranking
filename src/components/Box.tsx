import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

function Box({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={twMerge("w-full p-4", className)}>{children}</div>;
}

export default Box;
