"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Carousel Component
function ImageCarousel({ images, alt }: { images: string[], alt: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative h-96 lg:h-[500px] overflow-hidden rounded-lg group">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={alt}
          className="w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* Navigation Arrows */}
      <motion.button
        onClick={prevImage}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronLeft size={20} />
      </motion.button>

      <motion.button
        onClick={nextImage}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronRight size={20} />
      </motion.button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function ConceptSection() {
  const [titleRef, titleInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [philosophyRef, philosophyInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [plantBasedRef, plantBasedInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [tableDhoteRef, tableDhoteInView] = useInView({ threshold: 0.2, triggerOnce: true });

  const plantBasedImages = [
    "https://ext.same-assets.com/1838283741/1059180129.jpeg",
    "https://ext.same-assets.com/1838283741/2975734209.jpeg",
    "https://ext.same-assets.com/1838283741/751646894.jpeg",
    "https://ext.same-assets.com/1838283741/3010651588.jpeg"
  ];

  const tableDhoteImages = [
    "https://ext.same-assets.com/1838283741/2392409149.jpeg",
    "https://ext.same-assets.com/1838283741/3506662421.jpeg",
    "https://ext.same-assets.com/1838283741/2047500388.jpeg",
    "https://ext.same-assets.com/1838283741/1351088548.jpeg"
  ];

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
    <section id="concept" className="py-24 bg-white">
      {/* Main Philosophy */}
      <div className="max-w-6xl mx-auto px-6 text-center mb-24">
        <motion.h2
          ref={titleRef}
          className="font-playfair text-5xl md:text-7xl mb-12 florilege-text-dark tracking-wide"
          initial={{ opacity: 0, y: 50 }}
          animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {"To Balance A with B".split(" ").map((word, index) => (
            <motion.span
              key={index}
              className="inline-block mr-4"
              initial={{ opacity: 0, y: 50 }}
              animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h2>

        <motion.div
          ref={philosophyRef}
          className="space-y-6 text-lg md:text-xl florilege-text-brown max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={philosophyInView ? "visible" : "hidden"}
        >
          {[
            "大切なことは、",
            "お客さまとともに自分も楽しんでいかれるよう、レストランとしてバランスをとること。",
            "今の想いを料理を通じて表現すればするほど、",
            "より野菜を使った料理に行きつきました。",
            "誰もが知っている野菜の新しい一面をぜひお楽しみください。"
          ].map((text, index) => (
            <motion.p key={index} variants={itemVariants}>
              {text}
            </motion.p>
          ))}
        </motion.div>

        <motion.p
          className="font-playfair text-xl mt-12 florilege-text-dark italic"
          initial={{ opacity: 0, y: 30 }}
          animate={philosophyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Hiroyasu Kawate
        </motion.p>
      </div>

      {/* Concept Blocks */}
      <div className="max-w-7xl mx-auto px-6 space-y-24">
        {/* Plant Based */}
        <motion.div
          ref={plantBasedRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={plantBasedInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={plantBasedInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <ImageCarousel images={plantBasedImages} alt="Plant Based Cuisine" />
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={plantBasedInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.span
              className="font-playfair text-sm tracking-widest text-gray-500 uppercase"
              whileHover={{ scale: 1.05 }}
            >
              Plant Based
            </motion.span>
            <motion.h3
              className="font-playfair text-3xl md:text-4xl florilege-text-dark"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              誰もが知っている野菜を想像したことのない味わいで
            </motion.h3>
            <motion.p
              className="text-gray-600 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={plantBasedInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              サスティナビリティの一つの方向性として、肉や魚、乳製品のウェイトを減らした、野菜中心のコース。誰でも知っている日常で接点の多い身近な野菜を、想像したことのない味わいでもてなします。
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Table d'hôte */}
        <motion.div
          ref={tableDhoteRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={tableDhoteInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            className="order-2 lg:order-1 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={tableDhoteInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <motion.span
              className="font-playfair text-sm tracking-widest text-gray-500 uppercase"
              whileHover={{ scale: 1.05 }}
            >
              Table d'hôte
            </motion.span>
            <motion.h3
              className="font-playfair text-3xl md:text-4xl florilege-text-dark"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              ゲスト全員で大テーブルを囲む「ターブルドット」スタイル
            </motion.h3>
            <motion.p
              className="text-gray-600 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={tableDhoteInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              レセプションからアプローチを抜けると目の前に広がる13mの大テーブル。シェフ川手寛康が夢として構想を温めてきた、ゲスト・スタッフみんなで一つの大きなテーブルを囲む、ターブルドットスタイルのフレンチレストランです。<br /><br />
              美しい料理とワインと共に、シェフやスタッフとも話を弾ませながら、都心のレジデンスに招かれたようなひとときをお愉しみください。
            </motion.p>
          </motion.div>

          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={tableDhoteInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <ImageCarousel images={tableDhoteImages} alt="Table d'hôte Style" />
          </motion.div>
        </motion.div>

        {/* Pagination with animation */}
        <motion.div
          className="flex justify-center items-center space-x-4 pt-12"
          initial={{ opacity: 0 }}
          animate={tableDhoteInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.span
            className="text-sm text-gray-500"
            whileHover={{ scale: 1.1 }}
          >
            01 / 02
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
}
