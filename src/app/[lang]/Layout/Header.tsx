"use client";
import React from "react";
import { useLocale } from "next-intl";
import { useRouter } from "next-intl/client";

import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

function Header({ className }: Props) {
  const router = useRouter();
  const locale = useLocale();

  return (
    <header
      className={cn(" flex w-full flex-col text-white", className)}
      style={{
        top: 0,
        zIndex: 100,
      }}
    >
      <h2 className="m-4 text-center">vWiki</h2>
    </header>
  );
}

export default Header;
