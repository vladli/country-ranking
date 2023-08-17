"use client";
import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useLocale } from "next-intl";
import { useRouter } from "next-intl/client";
import Link from "next-intl/link";

import SwitchLanguage from "@/app/[lang]/Layout/SwitchLanguage";
import Button from "@/components/Button";
import { cn } from "@/lib/utils";

import Sidebar from "./Sidebar";

type Props = {
  className?: string;
};

function Header({ className }: Props) {
  const router = useRouter();
  const locale = useLocale();
  const [sideBar, setSideBar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleClick = (url: string) => {
    if (url === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.replaceState({}, "", locale === "en" ? "/" : locale);
      return;
    }
    router.replace(url);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const shouldChangeColor = scrollPosition > 0; // Change this condition as needed

      setIsScrolled(shouldChangeColor);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    function handleResize() {
      if (sideBar && window.innerWidth > 1024) {
        setSideBar(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header
      className={cn(
        "sticky flex w-full flex-col text-white",
        { "backdrop-blur": isScrolled },
        className
      )}
      style={{
        top: 0,
        zIndex: 100,
      }}
    ></header>
  );
}

export default Header;
