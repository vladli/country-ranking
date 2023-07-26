"use client";
import React from "react";
import { MdArrowBack } from "react-icons/md";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();
  return (
    <motion.div
      className="flex w-fit cursor-pointer items-center gap-2"
      onClick={() => router.back()}
      whileHover={{ opacity: 0.5, scale: 1.05 }}
    >
      <MdArrowBack />
      <span>Назад</span>
    </motion.div>
  );
}
