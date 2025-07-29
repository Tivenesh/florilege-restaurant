"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ChefSection() {
  const [nameRef, nameInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [contentRef, contentInView] = useInView({ threshold: 0.2, triggerOnce: true });

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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
    <section id="chef" className="py-24 florilege-bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        {/* Chef Name with letter animation */}
        <div className="text-center mb-16" ref={nameRef}>
          <motion.h2 className="font-playfair text-6xl md:text-8xl florilege-text-dark">
            <motion.div
              className="block mb-4"
              initial="hidden"
              animate={nameInView ? "visible" : "hidden"}
              variants={containerVariants}
            >
              {"Hiroyasu".split("").map((letter, index) => (
                <motion.span
                  key={`hiroyasu-${index}`}
                  className="inline-block"
                  variants={letterVariants}
                  whileHover={{
                    scale: 1.1,
                    color: "#846754",
                    transition: { duration: 0.2 }
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              className="block"
              initial="hidden"
              animate={nameInView ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.8
                  }
                }
              }}
            >
              {"Kawate".split("").map((letter, index) => (
                <motion.span
                  key={`kawate-${index}`}
                  className="inline-block"
                  variants={letterVariants}
                  whileHover={{
                    scale: 1.1,
                    color: "#846754",
                    transition: { duration: 0.2 }
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>
          </motion.h2>
        </div>

        {/* Chef Profile */}
        <motion.div
          ref={contentRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
          initial={{ opacity: 0, y: 50 }}
          animate={contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Biography */}
          <motion.div
            className="space-y-6 text-gray-700 leading-relaxed"
            variants={containerVariants}
            initial="hidden"
            animate={contentInView ? "visible" : "hidden"}
          >
            <motion.p variants={itemVariants}>
              1978年生まれ、東京都出身。両親や親戚が料理人であり、幼い頃から料理人になること以外は考えられなかったほど料理が身近な環境で育つ。西麻布「ル ブルギニオン」、フランス・モンペリエ「ジャルダン・デ・サンス」、白金台「カンテサンス」にて研鑽を積む。
            </motion.p>

            <motion.p variants={itemVariants}>
              2009年、南青山にて「フロリレージュ」をオープン。2015年、神宮前に移転。2016年、Asia's 50 Best RestaurantsでOne to Watchに選ばれ、翌年よりランクイン。 2018年ミシュラン二つ星を獲得。サスティナブルな活動にも積極的に参加し、トルコや岩手などの世界料理学会に登壇している。
            </motion.p>

            <motion.p variants={itemVariants}>
              2023年7月に神宮前の店舗での営業を終え、同年9月より、麻布台ヒルズに移転オープン。
            </motion.p>

            {/* Awards with hover effects */}
            <motion.div
              className="pt-8 space-y-2 font-medium"
              variants={containerVariants}
            >
              <motion.p
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  x: 10,
                  transition: { duration: 0.2 }
                }}
                className="cursor-default"
              >
                The MICHELIN Guide Tokyo 2024 **
              </motion.p>
              <motion.p
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  x: 10,
                  transition: { duration: 0.2 }
                }}
                className="cursor-default"
              >
                The World's 50 Best Restaurants 2024 21位
              </motion.p>
              <motion.p
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  x: 10,
                  transition: { duration: 0.2 }
                }}
                className="cursor-default"
              >
                Asia's 50 Best Restaurants 2025 17位
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Chef Photo with interactive effects */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={contentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            <motion.div
              className="aspect-[4/5] overflow-hidden rounded-lg relative group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <motion.img
                src="https://ext.same-assets.com/1838283741/4196784100.jpeg"
                alt="Chef Hiroyasu Kawate"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              />

              {/* Overlay with chef's philosophy */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <motion.div
                  className="p-6 text-white"
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                >
                  <p className="text-sm italic">
                    "野菜の新しい一面を<br />ぜひお楽しみください"
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Floating decoration elements */}
            <motion.div
              className="absolute -top-4 -left-4 w-8 h-8 border-2 border-gray-400 rounded-full"
              animate={{
                rotate: 360,
                scale: [1, 1.2, 1]
              }}
              transition={{
                rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
            />

            <motion.div
              className="absolute -bottom-4 -right-4 w-6 h-6 bg-gray-400 rounded-full"
              animate={{
                y: [0, -10, 0],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
