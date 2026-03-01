"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";

const processContent = [
  {
    title: "Discovery & Strategy",
    description: "We begin by deeply understanding your business goals, target audience, and current challenges. Through collaborative workshops, we define clear objectives and map out a strategic roadmap customized for your success. This phase ensures alignment before any code is written or designs are drafted.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      </div>
    ),
  },
  {
    title: "Design & Prototyping",
    description: "User experience is at the core of everything we build. Our design team creates intuitive, accessible, and visually stunning interfaces. We provide interactive prototypes that allow you to visualize the end product and gather valuable feedback early in the process.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] rounded-lg">
         <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      </div>
    ),
  },
  {
    title: "Agile Development",
    description: "Our engineering team brings designs to life using modern, scalable technologies. We employ agile methodologies, breaking the project into manageable sprints. This ensures regular updates, transparent communication, and the flexibility to adapt to evolving requirements.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--indigo-500))] rounded-lg">
         <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      </div>
    ),
  },
  {
    title: "Quality Assurance",
    description: "We maintain uncompromising standards through rigorous QA testing. Our process includes automated and manual testing across various devices and platforms to ensure security, performance, and a flawless user experience before launch.",
    content: (
       <div className="h-full w-full flex items-center justify-center text-white bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--pink-500))] rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      </div>
    ),
  },
  {
    title: "Launch & Continuous Evolution",
    description: "Launch is just the beginning. We manage a seamless deployment process and provide ongoing support, monitoring, and optimization. As your business grows, we're here to scale your solutions and iterate based on real user data.",
    content: (
       <div className="h-full w-full flex items-center justify-center text-white bg-[linear-gradient(to_bottom_right,var(--red-500),var(--rose-500))] rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
    ),
  },
];

export function ServicesProcessSection() {
  return (
    <section className="py-24 bg-white dark:bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 mb-16 max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-6 text-slate-900 dark:text-white">
          Our Proven <span className="text-brand-blue">Process</span>
        </h2>
        <p className="text-center text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
          We follow a meticulous, step-by-step approach to ensure every project is delivered on time, within budget, and exceeds expectations.
        </p>
      </div>
      <div className="p-10">
        <StickyScroll content={processContent} />
      </div>
    </section>
  );
}
