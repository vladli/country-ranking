"use client";
import React, { useEffect } from "react";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";

type Props = {
  from: number | string;
  to: number | string;
  duration?: number;
};

export default function Counter({ from, to, duration = 1 }: Props) {
  const fromValue = typeof from === "number" ? from : parseFloat(from);
  const toValue = typeof to === "number" ? to : parseFloat(to);

  const count = useMotionValue(fromValue);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, toValue, { duration: duration });
    return controls.stop;
  }, []);

  return <motion.span>{rounded}</motion.span>;
}
