"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { LoadingAnimation } from "./animations/LoadingAnimation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      setIsMenuOpen(false);
    }
  };

  const handleLogoClick = () => {
    setShowLoading(true);
    // Close menu if it's open
    setIsMenuOpen(false);

    // Hide loading animation after 3 seconds (2 seconds rotation + 1 second exit)
    setTimeout(() => {
      setShowLoading(false);
    }, 3000);
  };

  return (
    <>
      {/* Main Header - hides when menu is open */}
      <AnimatePresence>
        {!isMenuOpen && (
          <motion.header
            className="fixed top-0 left-0 right-0 z-50 transition-all duration-700"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="max-w-7xl mx-auto px-8 lg:px-12 py-6 flex justify-between items-center">
              {/* Logo */}
              <motion.div
                className={`font-serif text-2xl lg:text-3xl tracking-[0.2em] transition-colors duration-500 text-gray-900 cursor-pointer`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <button
                  onClick={handleLogoClick}
                  className="hover:opacity-80 transition-opacity duration-300"
                >
                  {"BuildUrWèb".split("").map((letter, index) => (
                    <span
                      key={index}
                      className="inline-block hover:scale-110 transition-transform duration-200"
                      style={{ transitionDelay: `${index * 20}ms` }}
                    >
                      {letter}
                    </span>
                  ))}
                </button>
              </motion.div>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-12">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    onClick={() => scrollToSection('get-a-quote')}
                    className={`font-light text-sm tracking-[0.1em] rounded-full px-8 py-2.5 border transition-all duration-300 bg-gray-900 text-white border-gray-900 hover:bg-gray-800`}
                  >
                    Contact Us →
                  </Button>
                </motion.div>

                <motion.button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className={`font-light text-sm tracking-[0.15em] uppercase flex items-center space-x-3 transition-all duration-300 text-gray-700 hover:text-gray-900`}
                  whileHover={{ y: -1 }}
                  transition={{ duration: 0.2 }}
                >
                  <span>Menu</span>
                  <motion.div
                    animate={{ rotate: isMenuOpen ? 180 : 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <Menu size={18} strokeWidth={1} />
                  </motion.div>
                </motion.button>
              </div>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`lg:hidden transition-colors duration-300 text-gray-900`}
                whileTap={{ scale: 0.95 }}
              >
                <Menu size={24} strokeWidth={1.5} />
              </motion.button>
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      {/* Menu Header - appears when menu is open */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.header
            className="fixed top-0 left-0 right-0 z-50"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          >
            <div className="max-w-7xl mx-auto px-8 lg:px-12 py-6 flex justify-end items-center">
              {/* Buttons Container */}
              <div className="flex items-center space-x-12">
                {/* Quote Button */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                >
                  <Button
                    onClick={() => scrollToSection('get-a-quote')}
                    className="font-light text-sm tracking-[0.1em] rounded-full px-8 py-2.5 border transition-all duration-300 bg-gray-900 text-white border-gray-900 hover:bg-gray-800"
                  >
                    Contact Us →
                  </Button>
                </motion.div>

                {/* Close Button */}
                <motion.button
                  onClick={() => setIsMenuOpen(false)}
                  className="font-light text-sm tracking-[0.15em] uppercase flex items-center space-x-3 transition-all duration-300 text-gray-700 hover:text-gray-900"
                  whileHover={{ y: -1 }}
                  transition={{ duration: 0.2 }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Close</span>
                  <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 180 }}
                    transition={{ duration: 0.4, ease: "easeInOut", delay: 0.2 }}
                  >
                    <X size={18} strokeWidth={1} />
                  </motion.div>
                </motion.button>
              </div>
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      {/* Navigation Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-40 flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Logo Animation Section - replaces the image */}
            <motion.div
              className="hidden lg:flex w-1/2 items-center justify-center bg-black"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex flex-col items-center text-white text-center text-gray-900">
                {/* Animated Logo Circle */}
                <motion.div
                  className="mb-12"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                >
                  <motion.div
                    className="w-24 h-24 border-2 border-white-900 rounded-full flex items-center justify-center"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <svg width="48" height="48" viewBox="0 0 40 40" className="text-white-900 fill-current">
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
                </motion.div>

                {/* Animated Company Name */}
                <motion.h1
                  className="font-playfair text-4xl md:text-6xl tracking-widest mb-6"
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  BuildUrWèb
                </motion.h1>

                {/* Animated Tagline */}
                <motion.p
                  className="font-inter text-base md:text-lg tracking-wide text-white-600"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  We Build It. You Own It. We Rock It.
                </motion.p>
              </div>
            </motion.div>
            <motion.div
              className="w-full lg:w-1/2 p-16 flex flex-col justify-center"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <nav className="space-y-12">
                {[
                  { id: 'home', label: 'Home' },

                  { id: 'services', label: 'Services' },
                  { id: 'about', label: 'About Us' },
                  { id: 'get-a-quote', label: 'Contact Us' }
                ].map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block text-3xl lg:text-4xl font-light tracking-[0.05em] hover:opacity-70 transition-all duration-300 text-left text-gray-900"
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                    whileHover={{ x: 12, scale: 1.02 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </nav>

              <motion.div
                className="mt-16 space-y-6 text-sm font-light text-gray-500 leading-relaxed"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                <p className="text-lg tracking-[0.1em]">BuildUrWèb</p>
                <div className="space-y-2">
                  <p>Digital Craftsmanship</p>
                  <p>Johor Bahru, Malaysia</p>
                </div>
                <motion.p
                  whileHover={{ scale: 1.02 }}
                  className="pt-4"
                >
                  <a href="mailto:hello@BuildUrWèb.com" className="hover:opacity-70 transition-opacity duration-300">
                    buildurwebapp@gmail.com
                  </a>
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Loading Animation */}
      <AnimatePresence>
        {showLoading && <LoadingAnimation />}
      </AnimatePresence>
    </>
  );
}