"use client";
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { MaskContainer } from "@/components/ui/svg-mask-effect";

const services = [
  {
    title: "Mobile App Development",
    description: "We Are The Innovators In The Part Of Top Mobile App Developers Just share your idea with us ...",
    icon: "/services/mobile.png"
  },
  {
    title: "E-Commerce Development",
    description: "E-Commerce websites transform businesses and help them to expand for the growth of the company.",
    icon: "/services/e-commerce.png"
  },
  {
    title: "Digital Marketing Services",
    description: "In today's world, digital marketing has evolved to become an integral part of advertising ...",
    icon: "/services/digital_marketing.png"
  },
  {
    title: "Website Designing",
    description: "At Capable Groups, we are a set of web designers in Bangalore involved in creating innovative ...",
    icon: "/services/web.png"
  },
  {
    title: "US IT Staffing",
    description: "US Staffing is a Talent Acquisition Industry which brings together HR Departments of the Clients ..",
    icon: "/services/staffing.png"
  },
  {
    title: "Domestic Staffing",
    description: "We provide wide-ranging industries with excellent domestic staffing solutions in India Avail New ...",
    icon: "/services/domestic-staffing.png"
  }
];

export function ServicesSection() {
  return (
    <section className="relative w-full py-24 flex flex-col items-center justify-center bg-white dark:bg-black overflow-hidden">
      <div className="relative z-20 container mx-auto px-4 max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 uppercase tracking-wider text-slate-900 dark:text-white">
          SERVICES
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <MaskContainer
              key={idx}
              revealSize={250}
              className="h-[22rem] w-full rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-[#0a0a0a] shadow-sm hover:shadow-xl transition-shadow duration-300"
              revealText={
                <div className="flex flex-col items-center justify-center h-full p-8 text-center">
                  <div className="w-14 h-14 relative mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                     <Image 
                       src={service.icon} 
                       alt={service.title} 
                       fill 
                       className="object-contain"
                       style={{ filter: "invert(55%) sepia(37%) saturate(878%) hue-rotate(175deg) brightness(95%) contrast(90%)" }} // approximate #4a96cb
                     />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <span className="text-brand-blue font-medium text-sm">
                    Read More
                  </span>
                </div>
              }
            >
              <div className="flex flex-col items-center justify-center h-full w-full p-8 text-center bg-brand-blue/90">
                 <div className="w-16 h-16 relative mb-4">
                     <Image 
                       src={service.icon} 
                       alt={service.title} 
                       fill 
                       className="object-contain brightness-0 invert" 
                     />
                 </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-100 mb-6 font-medium leading-relaxed">
                    {service.description}
                  </p>
                  <span className="text-brand-yellow font-bold text-sm tracking-wider uppercase">
                    Explore
                  </span>
              </div>
            </MaskContainer>
          ))}
        </div>
      </div>
    </section>
  );
}
