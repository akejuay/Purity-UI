"use client";

import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

interface AuthLoaderProps {
  text?: string;
}

export default function AuthLoader({
  text = "Signing you in...",
}: AuthLoaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/20 backdrop-blur-md"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col items-center"
      >
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-xl">
          <Loader2 className="h-9 w-9 animate-spin text-teal-400" />
        </div>

        <p className="mt-5 font-medium text-gray-800">{text}</p>
      </motion.div>
    </motion.div>
  );
}
