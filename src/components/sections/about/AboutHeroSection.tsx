"use client";

import React from "react";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

export function AboutHeroSection() {
  return (
    <section className="relative w-full pt-32 pb-20 md:pt-40 md:pb-24 lg:pt-48 flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-black">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-center tracking-tight mb-6 text-slate-900 dark:text-white max-w-4xl">
          Who We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Are</span>
        </h1>
        
        <p className="mt-4 text-xl md:text-2xl text-slate-600 dark:text-slate-300 text-center max-w-3xl leading-relaxed mb-6">
          We are a strategic technology partner dedicated to unlocking your business&apos;s full potential through innovative digital solutions and exceptional talent.
        </p>

        <div className="w-full max-w-2xl h-[10vh] md:h-[15vh] mt-2 mb-4 relative opacity-40">
           <TextHoverEffect text="ABOUT" duration={1} />
        </div>
      </div>
    </section>
  );
}
