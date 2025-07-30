"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <footer className="bg-black text-white py-16">
      <motion.div
        ref={ref}
        className="max-w-7xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Location & Contact */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.3 }}>
              <motion.h3
                className="font-playfair text-xl mb-4"
                whileHover={{ color: "#c0af9b" }}
                transition={{ duration: 0.3 }}
              >
                Location
              </motion.h3>
              <motion.p
                className="text-gray-300 leading-relaxed"
                whileHover={{ color: "#ffffff" }}
                transition={{ duration: 0.3 }}
              >
                Johor Bahru,
                <br />
                Johor, Malaysia
              </motion.p>
            </motion.div>

            <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.3 }}>
              <motion.h3
                className="font-playfair text-xl mb-4"
                whileHover={{ color: "#c0af9b" }}
                transition={{ duration: 0.3 }}
              >
                Contact
              </motion.h3>
              <motion.a
                href="mailto:hello@BuildUrWèb.com"
                className="text-gray-300 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05, color: "#ffffff" }}
                transition={{ duration: 0.3 }}
              >
                buildurwebapp@gmail.com
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Hours & Closure */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.3 }}>
              <motion.h3
                className="font-playfair text-xl mb-4"
                whileHover={{ color: "#c0af9b" }}
                transition={{ duration: 0.3 }}
              >
                Hours
              </motion.h3>
              <motion.div
                className="text-gray-300 space-y-2"
                whileHover={{ color: "#ffffff" }}
                transition={{ duration: 0.3 }}
              >
                <motion.p whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  Monday - Friday: 9am - 5pm
                </motion.p>
                <motion.p whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  Saturday: 10am - 2pm
                </motion.p>
              </motion.div>
            </motion.div>

            <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.3 }}>
              <motion.h3
                className="font-playfair text-xl mb-4"
                whileHover={{ color: "#c0af9b" }}
                transition={{ duration: 0.3 }}
              >
                Closure
              </motion.h3>
              <motion.div
                className="text-gray-300 leading-relaxed"
                whileHover={{ color: "#ffffff" }}
                transition={{ duration: 0.3 }}
              >
                <motion.p whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  Closed on Sundays & Public Holidays
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Get a Quote */}
          <motion.div variants={itemVariants}>
            <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.3 }}>
              <motion.h3
                className="font-playfair text-xl mb-4"
                whileHover={{ color: "#c0af9b" }}
                transition={{ duration: 0.3 }}
              >
                Start a Project
              </motion.h3>
              <motion.p
                className="text-gray-300 mb-6"
                whileHover={{ color: "#ffffff" }}
                transition={{ duration: 0.3 }}
              >
                Ready to bring your vision to life?
              </motion.p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => scrollToSection('get-a-quote')}
                  className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-3 transition-all duration-300"
                >
                  Contact Us →
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center"
          variants={itemVariants}
        >
          {/* Logo */}
          <motion.div
            className="font-playfair text-2xl tracking-widest mb-4 md:mb-0"
            whileHover={{
              scale: 1.1,
              color: "#c0af9b"
            }}
            transition={{ duration: 0.3 }}
          >
            BuildUrWèb
          </motion.div>

          {/* Social & Copyright */}
          <motion.div
            className="flex items-center space-x-6"
            variants={containerVariants}
          >
            <motion.a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity duration-300"
              whileHover={{
                scale: 1.2,
                rotate: 360
              }}
              transition={{ duration: 0.5 }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </motion.a>
            <motion.a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity duration-300"
              whileHover={{
                scale: 1.2,
                rotate: -360
              }}
              transition={{ duration: 0.5 }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </motion.a>
            <motion.span
              className="text-sm text-gray-400"
              whileHover={{ color: "#ffffff" }}
              transition={{ duration: 0.3 }}
            >
              Copyright © BuildUrWèb
            </motion.span>
          </motion.div>
        </motion.div>
      </motion.div>
    </footer>
  );
}