"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { motion } from "motion/react";

const ButtonCTA = ({
  text,
  className,
  href,
}: {
  text: string;
  href?: string | "#";
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut", delay: 0.2 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      role="button"
      aria-label={text}
      className="flex items-center gap-2 cursor-pointer "
    >
      <Link
        href={href ?? "#"}
        type="button"
        className={cn("border rounded-2xl py-2 px-5 text-white ", className)}
      >
        {text}
      </Link>
    </motion.div>
  );
};

export default ButtonCTA;
