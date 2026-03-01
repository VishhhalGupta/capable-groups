"use client";

import React from "react";
import Image from "next/image";
import { NoiseBackground } from "@/components/ui/noise-background";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

export function ServicesHeroSection() {
  return (
    <section className="relative w-full py-24 md:py-32 lg:py-40 flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-black">
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[60vh] bg-blue-50/50 dark:bg-blue-900/5 blur-[120px] rounded-full z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-0" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-center tracking-tight mb-6 text-slate-900 dark:text-white max-w-4xl">
          Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">IT Solutions</span> for the Modern Era
        </h1>
        
        <p className="mt-4 text-xl md:text-2xl text-slate-600 dark:text-slate-300 text-center max-w-3xl leading-relaxed mb-10">
          Transforming ideas into digital reality through cutting-edge technology and unparalleled expertise. Discover our diverse range of services designed to accelerate your growth.
        </p>

        <div className="w-full max-w-3xl h-[12vh] md:h-[18vh] -mt-4 mb-4 relative opacity-60">
           <TextHoverEffect text="SERVICES" duration={1.2} />
        </div>
      </div>
    </section>
  );
}
