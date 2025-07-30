"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import zafranImage from '../images/zafran.png';

export default function AboutSection() {
  const [titleRef, titleInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [philosophyRef, philosophyInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [tiveneshRef, tiveneshInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [zafranRef, zafranInView] = useInView({ threshold: 0.2, triggerOnce: true });

  // TODO: Replace these placeholder image URLs with actual photos of the founders.
  const tiveneshImage = "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format&fit=crop";


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

  return (
    <section id="about" className="py-24 bg-white">
      {/* Main Philosophy */}
      <div className="max-w-6xl mx-auto px-6 text-center mb-24">
        <motion.h2
          ref={titleRef}
          className="font-playfair text-5xl md:text-7xl mb-12 florilege-text-dark tracking-wide"
          initial={{ opacity: 0, y: 50 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Where Design Meets Functionality
        </motion.h2>

        <motion.div
          ref={philosophyRef}
          className="space-y-6 text-lg md:text-xl florilege-text-brown max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={philosophyInView ? "visible" : "hidden"}
        >
          <motion.p variants={itemVariants}>
            At BuildUrWeb, we believe a great website is a seamless blend of art and engineering.
          </motion.p>
          <motion.p variants={itemVariants}>
            Founded by two idealist Computer Science students from UTM, our mission is to craft digital experiences that are not only visually captivating but also robust, intuitive, and powerful.
          </motion.p>
        </motion.div>
      </div>

      {/* Founders Section */}
      <div className="max-w-7xl mx-auto px-6 space-y-24">
        {/* Founder 1: Tivenesh */}
        <motion.div
          ref={tiveneshRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={tiveneshInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={tiveneshInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="relative h-96 lg:h-[500px] overflow-hidden rounded-lg group">
              <motion.img
                src={tiveneshImage}
                alt="Tivenesh, Co-founder of BuildUrWeb"
                className="w-full h-full object-cover"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={tiveneshInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <span className="font-playfair text-sm tracking-widest text-gray-500 uppercase">
              Tivenesh
            </span>
            <h3 className="font-playfair text-3xl md:text-4xl florilege-text-dark">
              Developer
            </h3>
            <p className="text-gray-600 leading-relaxed">
              As the technical architect of BuildUrWeb, Tivenesh transforms complex ideas into clean, efficient, and scalable code. His passion lies in building robust back-end systems and dynamic front-end interfaces that perform flawlessly.
            </p>
          </motion.div>
        </motion.div>

        {/* Founder 2: Zafran */}
        <motion.div
          ref={zafranRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={zafranInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            className="order-2 lg:order-1 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={zafranInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <span className="font-playfair text-sm tracking-widest text-gray-500 uppercase">
              Zafran Sakowi
            </span>
            <h3 className="font-playfair text-3xl md:text-4xl florilege-text-dark">
              Developer
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Zafran is the visionary designer behind our projects. With a keen eye for aesthetics and a deep understanding of user experience, he ensures every website is not only beautiful but also intuitive, engaging, and perfectly aligned with our client's brand.
            </p>
          </motion.div>

          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={zafranInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="relative h-96 lg:h-[500px] overflow-hidden rounded-lg group">
              <motion.img
                src={zafranImage.src}
                alt="Zafran Sakowi, Co-founder of BuildUrWeb"
                className="w-full h-full object-cover"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 