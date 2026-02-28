"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Global Reach, Local Expertise",
    description:
      "Our iShore™ model enables you to access specialized talent globally while maintaining localized competitive advantages. We understand the nuances of business in the USA, EMEA, and the Indian subcontinent, ensuring seamless integration and cultural alignment.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--color-brand-blue),var(--color-primary-600))] text-white p-6 text-center text-xl font-bold">
        Global Talent.<br/>Local Execution.
      </div>
    ),
  },
  {
    title: "Cost-Effective Solutions",
    description:
      "We provide top-tier talent and innovative IT services without the premium price tag. By optimizing our delivery models and leveraging intelligent shoring, we reduce your operational costs while maximizing the value of your IT investment.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--color-brand-yellow),#fb923c)] text-white p-6 text-center text-xl font-bold">
        Maximize ROI.<br/>Minimize Costs.
      </div>
    ),
  },
  {
    title: "End-to-End Capabilities",
    description:
      "From mobile app development to massive enterprise eCommerce solutions and targeted digital marketing. We handle every aspect of your digital transformation journey, acting as your comprehensive technology partner.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--color-neutral-800),var(--color-primary-900))] text-white p-6 text-center text-xl font-bold">
        End-to-End<br/>Transformation.
      </div>
    ),
  },
  {
    title: "Tailored Staffing Models",
    description:
      "Whether you need domestic staffing in India or specialized IT professionals for the US market, our rigorous vetting process ensures you get candidates who not only have the technical chops but also fit perfectly within your company culture.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--color-brand-blue),var(--color-brand-yellow))] text-white p-6 text-center text-xl font-bold">
        Precision<br/>Staffing.
      </div>
    ),
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="py-24 bg-white dark:bg-[#0a0a0a]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
            Why Choose Us?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Discover the Capable Groups advantage. We blend innovation, strategy, and talent to deliver unmatched value.
          </p>
        </div>
        
        <div className="w-full">
          <StickyScroll content={content} />
        </div>
      </div>
    </section>
  );
}
