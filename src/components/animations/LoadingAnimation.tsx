"use client";

import { motion } from "framer-motion";
import { WebLogo } from "@/components/ui/web-logo";

export function LoadingAnimation() {
  return (
    <motion.div
      key="loading-screen"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
      initial={{ y: "0%" }}
      exit={{ y: "-100%" }}
      transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="text-center space-y-6"
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex justify-center">
          <div className="w-24 h-24 border-2 border-gray-900 rounded-full flex items-center justify-center">
            <WebLogo className="w-12 h-12 text-gray-900" />
          </div>
        </div>
        <h1 className="font-playfair text-4xl md:text-5xl font-light tracking-widest text-gray-900">
          BuildUrWeb
        </h1>
        <p className="font-inter text-sm tracking-wide text-gray-600 font-light">
          Where design meets function
        </p>
      </motion.div>
    </motion.div>
  );
}