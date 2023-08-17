"use client";
import React from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

import { getMenu } from "@/config/menu";

type Props = {
  setSideBar: React.Dispatch<React.SetStateAction<boolean>>;
};

function Sidebar({ setSideBar }: Props) {
  const t = useTranslations("BASE");
  const locale = useLocale();
  const menu = getMenu(locale);
  return (
    <motion.div
      animate={{ x: 0 }}
      className={clsx(
        "fixed left-0 top-0 z-40 h-screen w-80 select-none overflow-y-auto bg-gradient-to-r from-slate-600 via-slate-700 to-[110%] p-4"
      )}
      exit={{ x: "-100vw" }}
      initial={{ x: "-100vw" }}
      transition={{ type: "keyframes" }}
    >
      <h5
        className="text-base font-semibold uppercase text-white"
        id="drawer-navigation-label"
      >
        {t("Menu")}
      </h5>
      <button
        className="absolute right-2.5 top-2.5 inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-white hover:bg-white/10"
        onClick={() => setSideBar(false)}
      >
        <svg
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            fillRule="evenodd"
          ></path>
        </svg>
      </button>
      <div className="overflow-y-auto py-4">
        <ul className="space-y-2 font-medium">
          {menu.map(({ icon: Icon, title, url }) => (
            <li
              key={title}
              onClick={() => setSideBar(false)}
            >
              <Link
                className="flex items-center rounded-lg p-2 text-white hover:bg-gradient-to-r hover:from-slate-700 hover:via-slate-800 hover:to-slate-900"
                href={url}
              >
                <Icon />
                <span className="ml-3">{title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default Sidebar;
