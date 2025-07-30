"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LoadingAnimation } from "@/components/animations/LoadingAnimation";

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Sets how long the loading screen is visible before it starts animating out.
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingAnimation />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.75, delay: isLoading ? 2.8 : 0 }} // Delays the fade-in until the loader is gone
      >
        {children}
      </motion.div>
    </>
  );
}