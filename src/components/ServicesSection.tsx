"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Brush, Code, Rocket } from "lucide-react";

const services = [
  {
    icon: Brush,
    title: "UI/UX Design",
    description: "Crafting intuitive and beautiful user interfaces that provide a seamless user experience from the first click."
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Building robust, scalable, and high-performance websites using the latest technologies and best practices."
  },
  {
    icon: Rocket,
    title: "SEO & Performance",
    description: "Optimizing your site for search engines and ensuring lightning-fast load times to maximize reach and engagement."
  }
];

export default function ServicesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          ref={ref}
          className="font-playfair text-5xl md:text-7xl mb-16 florilege-text-dark tracking-wide"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Our Services
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                className="p-8 bg-white rounded-lg shadow-md"
                variants={itemVariants}
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center">
                    <Icon size={32} />
                  </div>
                </div>
                <h3 className="font-playfair text-2xl mb-4 florilege-text-dark">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}