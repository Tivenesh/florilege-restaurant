"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ShoppingCart, Brush, Rocket } from "lucide-react";

const services = [
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "From boutique online stores to large-scale marketplaces, we build secure and scalable e-commerce platforms that drive sales and grow with your business."
  },
  {
    icon: Brush,
    title: "Custom Websites",
    description: "We create bespoke websites for any purpose—be it for fitness trainers, corporate portfolios, or personal brands—ensuring a unique and engaging online presence."
  },
  {
    icon: Rocket,
    title: "SEO & Performance",
    description: "Optimizing your site for search engines and ensuring lightning-fast load times to maximize your reach, engagement, and conversion rates."
  }
];

export default function ServicesSection() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

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
          onMouseLeave={() => setHoveredCard(null)}
        >
          {services.map((service) => {
            const Icon = service.icon;
            const isHovered = hoveredCard === service.title;
            return (
              <motion.div
                key={service.title}
                className="p-8 bg-white rounded-lg shadow-md"
                variants={itemVariants}
                onMouseEnter={() => setHoveredCard(service.title)}
                animate={{
                  scale: isHovered ? 1.05 : 1,
                  filter: hoveredCard && !isHovered ? "blur(4px)" : "blur(0px)",
                  transition: { duration: 0.4, ease: "easeInOut" },
                }}
              >
                <div className="flex justify-center mb-6">
                  <motion.div
                    className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center"
                    animate={{
                      rotate: isHovered ? 360 : 0,
                      transition: { duration: 0.5, ease: "easeInOut" },
                    }}
                  >
                    <Icon size={32} />
                  </motion.div>
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