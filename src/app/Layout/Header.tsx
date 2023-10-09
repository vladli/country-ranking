"use client";
import React from "react";
import Image from "next/image";

function Header() {
  return (
    <header className="w-full">
      <div className="flex items-center justify-center pt-2">
        <Image
          alt=""
          className="h-28 w-28 rounded-full"
          height={256}
          priority
          quality={100}
          src="/logo.jpeg"
          width={256}
        />
      </div>
    </header>
  );
}

export default Header;
