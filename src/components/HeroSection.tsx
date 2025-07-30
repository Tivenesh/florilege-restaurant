"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();

  // Parallax transformations
  const imageY = useTransform(scrollY, [0, 1000], [0, -200]);
  const contentY = useTransform(scrollY, [0, 1000], [0, -100]);
  const overlayOpacity = useTransform(scrollY, [0, 300], [0.2, 0.6]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section id="home" className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://ext.same-assets.com/1838283741/2047500388.jpeg"
            alt="BuildUrWeb Abstract Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      </section>
    );
  }

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 flex justify-center items-center "
        style={{ y: imageY }


        }
      >
        <motion.img
          src="https://ext.same-assets.com/1838283741/2047500388.jpeg"
          alt="Modern restaurant interior"
          className="w-[90%] h-[70%] object-cover rounded-xl"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <motion.div
          className="absolute inset-0 rounded-xl"
          style={{ opacity: overlayOpacity }}
          initial={{ opacity: 0.2 }}
        />
      </motion.div>

      {/* Content Overlay with Parallax */}
      <motion.div
        className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white"
        style={{ y: contentY }}
      >
        {/* Logo Symbol - animated entrance */}
        <motion.div
          className="mb-8"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          <motion.div
            className="w-20 h-20 border-2 border-white rounded-full flex items-center justify-center"
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.8 }}
          >
            <svg width="40" height="40" viewBox="0 0 40 40" className="text-white fill-current">
              <motion.circle
                cx="20" cy="20" r="3"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              />
              <motion.circle
                cx="20" cy="10" r="2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.1, duration: 0.5 }}
              />
              <motion.circle
                cx="20" cy="30" r="2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              />
              <motion.circle
                cx="10" cy="20" r="2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.3, duration: 0.5 }}
              />
              <motion.circle
                cx="30" cy="20" r="2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.4, duration: 0.5 }}
              />
              <motion.circle
                cx="14" cy="14" r="1.5"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
              />
              <motion.circle
                cx="26" cy="26" r="1.5"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.6, duration: 0.5 }}
              />
              <motion.circle
                cx="26" cy="14" r="1.5"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.7, duration: 0.5 }}
              />
              <motion.circle
                cx="14" cy="26" r="1.5"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.8, duration: 0.5 }}
              />
            </svg>
          </motion.div>
        </motion.div>

        {/* Main Logo Text with staggered animation */}
        <motion.h1
          className="font-playfair text-5xl md:text-7xl tracking-widest mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
        >
          {"BuildUrWèb".split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
              className="inline-block cursor-pointer"
              whileHover={{ scale: 1.2, y: -10, color: "#a7f3d0" }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.h1>

        {/* Updated the subtitle to the company tagline */}
        <motion.p
          className="font-inter text-lg md:text-xl tracking-wide opacity-90"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 0.9, y: 0 }}
          transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
        >
          We Build It. You Own It. We Rock It.
        </motion.p>
      </motion.div>

      {/* Scroll Indicators with hover animations */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <motion.div
          className="w-12 h-12 border border-white/30 rounded-full flex items-center justify-center cursor-pointer"
          whileHover={{ scale: 1.1, borderColor: "rgba(255,255,255,0.8)" }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-white text-xs font-bold">50</span>
        </motion.div>
        <motion.div
          className="w-12 h-12 border border-white/30 rounded-full flex items-center justify-center cursor-pointer"
          whileHover={{ scale: 1.1, borderColor: "rgba(255,255,255,0.8)" }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-white text-lg">★★</span>
        </motion.div>
        <motion.div
          className="w-8 h-12 border border-white/30 rounded-full flex items-center justify-center cursor-pointer"
          whileHover={{ scale: 1.1, borderColor: "rgba(255,255,255,0.8)" }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-white text-xs">🌿</span>
        </motion.div>
      </motion.div>

      {/* Bottom Right Logos with entrance animation */}
      <motion.div
        className="absolute bottom-8 right-8 flex space-x-4 opacity-80"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 0.8, x: 0 }}
        transition={{ duration: 1, delay: 2.2 }}
      >
        <motion.div
          className="text-white text-xs text-center"
          whileHover={{ scale: 1.1 }}
        >
          <div className="text-lg font-bold">50</div>
          <div className="text-[10px]">BEST</div>
        </motion.div>
        <motion.div
          className="flex space-x-1"
          whileHover={{ scale: 1.1 }}
        >
          <span className="text-white text-sm">★★</span>
        </motion.div>
      </motion.div>

      {/* Floating scroll indicator */}
      <motion.div
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}