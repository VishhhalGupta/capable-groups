"use client";

import React from "react";
import Image from "next/image";

export function AboutContentSection() {
  return (
    <section className="py-20 w-full bg-slate-50 dark:bg-[#0f0f11] relative z-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        
        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 mb-24">
          <div className="bg-white dark:bg-[#1a1a1a] rounded-3xl p-8 shadow-sm border border-slate-100 dark:border-slate-800">
            <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Our Mission</h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              To empower organizations globally by providing scalable, innovative, and cost-effective IT solutions and staffing services, bridging the gap between exceptional talent and ambitious companies.
            </p>
          </div>

          <div className="bg-white dark:bg-[#1a1a1a] rounded-3xl p-8 shadow-sm border border-slate-100 dark:border-slate-800">
             <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Our Vision</h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
               To be the world&apos;s most trusted strategic IT partner, renowned for driving digital transformation, fostering growth, and setting the standard for excellence in technology services.
            </p>
          </div>
        </div>

        {/* The Capable Difference */}
        <div className="mb-24">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-10 text-center">
            The Capable Difference
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white dark:bg-black p-8 rounded-2xl border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row gap-6 items-start">
               <div className="shrink-0 w-12 h-12 rounded-full bg-slate-50 dark:bg-slate-900 flex items-center justify-center font-bold text-brand-blue text-xl">
                 01
               </div>
               <div>
                 <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Global Expertise, Local Focus</h4>
                 <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                   Through our innovative iShore™ model, we provide the perfect balance of global talent pools and local market understanding. We speak your language, understand your business culture, and deliver solutions tailored to your specific regional needs.
                 </p>
               </div>
            </div>

             <div className="bg-white dark:bg-black p-8 rounded-2xl border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row gap-6 items-start">
               <div className="shrink-0 w-12 h-12 rounded-full bg-slate-50 dark:bg-slate-900 flex items-center justify-center font-bold text-brand-blue text-xl">
                 02
               </div>
               <div>
                 <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Holistic Approach</h4>
                 <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                   We don&apos;t just build software or fill roles; we build partnerships. Whether you need a simple website, a complex enterprise application, or a fully staffed technical team, our end-to-end capabilities ensure a cohesive strategy across all your IT initiatives.
                 </p>
               </div>
            </div>

            <div className="bg-white dark:bg-black p-8 rounded-2xl border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row gap-6 items-start">
               <div className="shrink-0 w-12 h-12 rounded-full bg-slate-50 dark:bg-slate-900 flex items-center justify-center font-bold text-brand-blue text-xl">
                 03
               </div>
               <div>
                 <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Uncompromising Quality</h4>
                 <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                   Quality isn&apos;t just a metric; it&apos;s our mindset. From initial code commits to final candidate placements, we adhere to strict quality assurance protocols. Our commitment to excellence guarantees robust, scalable solutions and top-tier talent.
                 </p>
               </div>
            </div>
          </div>
        </div>

        {/* Global Presence */}
        <div className="bg-brand-blue rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[size:20px_20px]" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Our Global Footprint</h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-10">
              Serving ambitious companies across continents. We bridge time zones and cultures to deliver round-the-clock excellence.
            </p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              <div>
                <p className="text-4xl font-black mb-2">USA</p>
                <p className="text-blue-200 text-sm tracking-wider uppercase font-medium">Headquarters</p>
              </div>
               <div>
                <p className="text-4xl font-black mb-2">India</p>
                <p className="text-blue-200 text-sm tracking-wider uppercase font-medium">Delivery Center</p>
              </div>
               <div>
                <p className="text-4xl font-black mb-2">UK & EMEA</p>
                <p className="text-blue-200 text-sm tracking-wider uppercase font-medium">Partnerships</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
