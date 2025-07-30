"use client";

import { motion } from "framer-motion";

export function LoadingAnimation() {
  return (
    <motion.div
      key="loading-screen"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
      initial={{ y: "0%" }}
      exit={{ y: "-100%" }}
      transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Centered content, styled for a white background */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center text-gray-900">
        <div className="mb-8">
          {/* This div now animates the rotation */}
          <motion.div
            className="w-20 h-20 border-2 border-gray-900 rounded-full flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <svg width="40" height="40" viewBox="0 0 40 40" className="text-gray-900 fill-current">
              <circle cx="20" cy="20" r="3" />
              <circle cx="20" cy="10" r="2" />
              <circle cx="20" cy="30" r="2" />
              <circle cx="10" cy="20" r="2" />
              <circle cx="30" cy="20" r="2" />
              <circle cx="14" cy="14" r="1.5" />
              <circle cx="26" cy="26" r="1.5" />
              <circle cx="26" cy="14" r="1.5" />
              <circle cx="14" cy="26" r="1.5" />
            </svg>
          </motion.div>
        </div>

        <h1 className="font-playfair text-5xl md:text-7xl tracking-widest mb-8">
          BuildUrWèb
        </h1>

        <p className="font-inter text-lg md:text-xl tracking-wide text-gray-600">
          We Build It. You Own It. We Rock It.
        </p>
      </div>
    </motion.div>
  );
}