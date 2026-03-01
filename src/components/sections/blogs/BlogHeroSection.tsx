"use client";

import React from "react";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

export function BlogHeroSection() {
  return (
    <section className="relative w-full pt-32 pb-20 md:pt-40 md:pb-24 lg:pt-48 flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-black">
      {/* Decorative gradient blur */}
      <div className="absolute top-0 right-0 w-full h-[50vh] bg-indigo-50/40 dark:bg-indigo-900/10 blur-[100px] rounded-full z-0 pointer-events-none transform translate-x-1/3 -translate-y-1/3" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-[#1a1a1a] text-sm font-medium text-slate-600 dark:text-slate-300 mb-6 border border-slate-200 dark:border-slate-800">
          <span className="w-2 h-2 rounded-full bg-brand-blue/80 animate-pulse" />
          <span>Insights & Perspectives</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-center tracking-tight mb-6 text-slate-900 dark:text-white max-w-4xl">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Journal</span>
        </h1>
        
        <p className="mt-4 text-xl md:text-2xl text-slate-600 dark:text-slate-300 text-center max-w-3xl leading-relaxed mb-6">
          Deep dives into technology, design thinking, and engineering strategies driving the future of digital products.
        </p>

        <div className="w-full max-w-2xl h-[10vh] md:h-[15vh] mt-2 mb-4 relative opacity-40">
           <TextHoverEffect text="JOURNAL" duration={1} />
        </div>
      </div>
    </section>
  );
}
