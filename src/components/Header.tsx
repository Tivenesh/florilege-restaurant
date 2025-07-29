"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/90 backdrop-blur-sm'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <motion.div
            className="font-playfair text-2xl tracking-widest florilege-text-dark cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <button onClick={() => scrollToSection('home')} className="hover:opacity-70 elegant-transition">
              Florilège
            </button>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <motion.button
              onClick={() => scrollToSection('en')}
              className="font-inter text-sm tracking-wide hover:opacity-70 elegant-transition"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              English
            </motion.button>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => scrollToSection('reservations')}
                className="bg-black text-white rounded-full px-6 py-2 hover:bg-gray-800 elegant-transition"
              >
                Reservations →
              </Button>
            </motion.div>
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="font-inter text-sm tracking-wide hover:opacity-70 elegant-transition flex items-center space-x-2"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <span>Menu</span>
              <motion.div
                animate={{ rotate: isMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <Menu size={16} />
              </motion.div>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={{ rotate: isMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </motion.button>
        </div>
      </motion.header>

      {/* Navigation Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-40 flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Left side - Images */}
            <motion.div
              className="hidden lg:block w-1/2 relative overflow-hidden"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <motion.img
                src="https://ext.same-assets.com/1838283741/2047500388.jpeg"
                alt="Restaurant Interior"
                className="w-full h-full object-cover"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8 }}
              />
              <motion.div
                className="absolute inset-0 bg-black/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              />
            </motion.div>

            {/* Right side - Menu */}
            <motion.div
              className="w-full lg:w-1/2 p-12 flex flex-col justify-center"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <nav className="space-y-8">
                {[
                  { id: 'home', label: 'Home' },
                  { id: 'concept', label: 'Concept' },
                  { id: 'chef', label: 'Chef' },
                  { id: 'reservations', label: 'Reservations' },
                  { id: 'contact', label: 'Contact' }
                ].map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block text-2xl font-playfair hover:opacity-70 elegant-transition text-left"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ x: 20, scale: 1.05 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </nav>

              <motion.div
                className="mt-12 space-y-4 text-sm font-inter text-gray-600"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <p>フロリレージュ</p>
                <p>105-0001<br />東京都港区虎ノ門5-10-7<br />麻布台ヒルズ ガーデンプラザD 2F</p>
                <motion.p whileHover={{ scale: 1.05 }}>
                  <a href="tel:03-6435-8018" className="hover:opacity-70">03-6435-8018</a>
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
