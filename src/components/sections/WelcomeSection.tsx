"use client";
import React from "react";
import Image from "next/image";
import { CanvasText } from "../ui/canvas-text";
import { TextRevealCard, TextRevealCardTitle, TextRevealCardDescription } from "../ui/text-reveal-card";
import { motion } from "framer-motion";

export function WelcomeSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative py-20 bg-white dark:bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Left Side - Image / Illustration / Aceternity Effect */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div className="w-full">
              <TextRevealCard
                text="You know the destination."
                revealText="We build the path."
                className="w-full shadow-xl shadow-blue-900/5"
              >
                <TextRevealCardTitle>
                  Capable Groups & iShore™
                </TextRevealCardTitle>
                <TextRevealCardDescription>
                  Hover or touch to reveal the underlying vision. We connect diversified brilliance with robust execution.
                </TextRevealCardDescription>
              </TextRevealCard>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full lg:w-1/2 flex flex-col space-y-6"
          >
            <motion.div variants={itemVariants}>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
                WELCOME TO <br className="hidden md:block" />
                <CanvasText
                  text="Capable Groups"
                  backgroundClassName="bg-blue-600 dark:bg-blue-700"
                  colors={[
                    "rgba(0, 153, 255, 1)",
                    "rgba(0, 153, 255, 0.8)",
                    "rgba(0, 153, 255, 0.6)",
                  ]}
                  lineGap={4}
                  animationDuration={20}
                />
              </h1>
            </motion.div>

            <motion.p variants={itemVariants} className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Capable Groups is a leading conglomerate based with diversified interests. Blending brilliance of experienced team and best of the breed technology, the company offers a wide spectrum of IT, Non-IT and Real Estate & Infrastructure solutions among others. Our portfolio comprises of many services, enabling customers in optimally utilizing digital medium in accomplishing their strategic objectives.
            </motion.p>
          </motion.div>
        </div>

        {/* Bottom Features Row */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
        >
          {/* Card 1 */}
          <motion.div variants={itemVariants} className="flex flex-col items-start bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 mb-4 relative">
              <Image src="/grow2.png" alt="Our Vision" fill className="object-contain dark:invert" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Our Vision</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 flex-grow">
              To be a trusted partner in providing skilled professionals and delivering cost effective solutions.
            </p>
            <a href="#" className="inline-flex items-center text-sm font-medium text-slate-900 dark:text-white px-4 py-2 border border-blue-500 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
              Read More
            </a>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={itemVariants} className="flex flex-col items-start bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 mb-4 relative">
              <Image src="/goal.png" alt="Mission Statement" fill className="object-contain dark:invert" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Mission Statement</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 flex-grow">
              To provide localised IT service capability through our iShoreTM model to enable success.
            </p>
            <a href="#" className="inline-flex items-center text-sm font-medium text-slate-900 dark:text-white px-4 py-2 border border-blue-500 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
              Read More
            </a>
          </motion.div>

          {/* Card 3 */}
          <motion.div variants={itemVariants} className="flex flex-col items-start bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 mb-4 relative">
              <Image src="/bookmark.png" alt="One Stop Shop" fill className="object-contain dark:invert" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">One Stop Shop</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 flex-grow">
              Your entire technology requirement like design, development & online marketing in one place.
            </p>
            <a href="#" className="inline-flex items-center text-sm font-medium text-slate-900 dark:text-white px-4 py-2 border border-blue-500 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
              Read More
            </a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
