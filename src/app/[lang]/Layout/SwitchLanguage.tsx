"use client";
import React, { useEffect, useRef, useState } from "react";
import { useLocale } from "next-intl";
import { usePathname } from "next-intl/client";
import Link from "next-intl/link";

import Dropdown from "@/components/Dropdown/Dropdown";
import { cn } from "@/lib/utils";

const locales = [
  {
    value: "en",
    flag: "🇺🇸",
  },
  {
    value: "kr",
    flag: "🇰🇷",
  },
  {
    value: "ru",
    flag: "🇷🇺",
  },
];

export default function SwitchLanguage() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const locale = useLocale();
  const defaultLanguage = locales
    .filter(({ value }) => value === locale)
    .map(({ flag }) => flag);
  const dropdownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: { target: any }) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <Dropdown
      className="my-auto mr-2"
      open={open}
      ref={dropdownRef}
    >
      <Dropdown.Toggle
        color="ghost"
        onClick={() => setOpen(!open)}
      >
        {defaultLanguage}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {locales.map(({ value, flag }) => (
          <Link
            href={pathname}
            key={value}
            locale={value}
          >
            <li className="cursor-pointer rounded-lg p-2 hover:bg-slate-700">
              {flag}
            </li>
          </Link>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}
