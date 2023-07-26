import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  children: React.ReactNode;
  className?: string;
};
function Container({ children, className }: Props) {
  return (
    <div
      className={twMerge(
        "m-auto my-10 max-w-[90vw] bg-white p-4 shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5",
        className
      )}
    >
      {children}
    </div>
  );
}

export default Container;
