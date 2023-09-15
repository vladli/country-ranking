"use client";
import React from "react";

import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

function Header({ className }: Props) {
  return (
    <header
      className={cn(" flex w-full flex-col text-white", className)}
      style={{
        top: 0,
        zIndex: 100,
      }}
    >
      <h2 className="m-4 text-center">Country App</h2>
    </header>
  );
}

export default Header;
