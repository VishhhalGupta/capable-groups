"use client";
import React from "react";
import { motion } from "framer-motion";
import { NoiseBackground } from "../ui/noise-background";

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
      },
    }),
  };

  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-[#fafafa] dark:bg-[#0a0a0a]">
      {/* Background Dots Pattern */}
      {/* Light Mode Dots */}
      <div 
        className="absolute inset-0 z-0 dark:hidden opacity-[0.4]"
        style={{
          backgroundImage: `radial-gradient(#94a3b8 1.5px, transparent 1.5px)`,
          backgroundSize: `32px 32px`
        }}
      />
      {/* Dark Mode Dots */}
      <div 
        className="absolute inset-0 z-0 hidden dark:block opacity-[0.3]"
        style={{
          backgroundImage: `radial-gradient(#ffffff 1.5px, transparent 1.5px)`,
          backgroundSize: `32px 32px`
        }}
      />

      {/* Main Content */}
      <motion.div
        className="relative z-10 max-w-[900px] mx-auto px-4 md:px-8 text-center mt-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Top Badge */}
        <motion.div
          custom={0}
          variants={itemVariants}
          className="inline-block mb-10"
        >
          <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-white dark:bg-[#1a1a1a] shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-black/5 dark:border-white/10">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
              Let’s Build What’s Next!
            </span>
            <svg className="w-3.5 h-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          custom={1}
          variants={itemVariants}
          className="text-5xl md:text-6xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight leading-[1.1]"
        >
          World-class Tech Partner
          <br />
          Engineering Your Digital Success
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          custom={2}
          variants={itemVariants}
          className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-medium"
        >
          We help startups & B2B enterprises move from vision to reality, and
          beyond. One hand on design, the other on development.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          custom={3}
          variants={itemVariants}
          className="flex justify-center mb-16"
        >
          <NoiseBackground
            containerClassName="w-fit p-[1px] rounded-full"
            gradientColors={["rgba(59,130,246,0.5)", "rgba(16,185,129,0.5)", "rgba(139,92,246,0.5)"]}
          >
            <a 
              href="#contact" 
              className="flex items-center gap-2 h-full w-full cursor-pointer rounded-full bg-[#111] dark:bg-[#222] px-8 py-4 text-base font-semibold text-white shadow-xl transition-all duration-100 active:scale-95"
            >
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center mr-1">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" /></svg>
              </div>
              Book a 30-Min call
            </a>
          </NoiseBackground>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          custom={4}
          variants={itemVariants}
          className="flex items-center justify-center gap-4"
        >
          {/* User Avatars */}
          <div className="flex -space-x-3 items-center">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full border-2 border-white dark:border-[#0a0a0a] overflow-hidden"
              >
                <img
                  src={`https://i.pravatar.cc/100?img=${i + 30}`}
                  alt={`User ${i}`}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
            <div className="w-10 h-10 rounded-full border-2 border-white dark:border-[#0a0a0a] bg-white dark:bg-slate-800 flex items-center justify-center text-slate-800 dark:text-white text-xs font-bold shadow-sm z-10">
              +30
            </div>
          </div>

          <div className="h-8 w-px bg-slate-200 dark:bg-slate-800 mx-2"></div>

          {/* Star Rating */}
          <div className="flex flex-col items-start">
            <div className="flex space-x-1 mb-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} className="w-4 h-4 text-slate-800 dark:text-slate-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
              From 30+ reviews
            </span>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Testimonial Cards */}
      <motion.div
        className="hidden lg:block absolute top-1/3 left-[5%] xl:left-[8%] w-[320px] -rotate-6 z-20"
        initial={{ opacity: 0, x: -50, y: 50, rotate: -15 }}
        animate={{ opacity: 1, x: 0, y: 0, rotate: -6 }}
        transition={{ delay: 0.8, duration: 0.8, type: "spring" }}
      >
        <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl p-6 shadow-2xl border border-black/5 dark:border-white/10">
          <svg className="w-6 h-6 text-slate-300 dark:text-slate-600 mb-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <p className="text-sm text-slate-700 dark:text-slate-300 mb-6 font-medium leading-relaxed">
            "We were close to giving up. Capable Groups rebuilt our confidence and delivered our fintech mobile app end-to-end."
          </p>
          <p className="text-sm font-bold text-slate-900 dark:text-white">
            - Mr Reddy, CEO, ABS
          </p>
        </div>
      </motion.div>

      <motion.div
        className="hidden lg:block absolute top-[30%] right-[5%] xl:right-[10%] w-[320px] rotate-6 z-20"
        initial={{ opacity: 0, x: 50, y: -50, rotate: 15 }}
        animate={{ opacity: 1, x: 0, y: 0, rotate: 6 }}
        transition={{ delay: 1, duration: 0.8, type: "spring" }}
      >
        <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl p-6 shadow-2xl border border-black/5 dark:border-white/10">
          <svg className="w-6 h-6 text-slate-300 dark:text-slate-600 mb-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <p className="text-sm text-slate-700 dark:text-slate-300 mb-6 font-medium leading-relaxed">
            "Capable Groups brought Flex Pro to life: an AI-powered English learning platform with personalized feedback."
          </p>
          <p className="text-sm font-bold text-slate-900 dark:text-white">
            - Sujith, CEO, Flex Pro
          </p>
        </div>
      </motion.div>
    </section>
  );
}
