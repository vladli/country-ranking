"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function Header() {
  return (
    <header className="w-full">
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-center pt-2"
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
      >
        <Image
          alt=""
          className="h-28 w-28 rounded-full"
          height={256}
          priority
          quality={100}
          src="/logo.jpeg"
          width={256}
        />
      </motion.div>
    </header>
  );
}

export default Header;
