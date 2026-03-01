"use client";
import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const allServicesData = [
  {
    id: "mobile-app",
    title: "Mobile App Development",
    shortDesc: "Native iOS and Android apps, or cross-platform solutions. We design and develop mobile applications that engage users and drive business growth.",
    longDesc: "In today's mobile-first world, your app is often the first touchpoint with customers. At Capable Groups, we develop native iOS and Android applications, as well as cross-platform solutions, that combine beautiful design with robust functionality. Our team leverages the latest technologies and best practices to deliver apps that users love.",
    icon: "/services/mobile.png",
    features: [
      "Native iOS (Swift) & Android (Kotlin)",
      "Cross-Platform (React Native, Flutter)",
      "App Design & UX",
      "Rigorous Testing & QA",
      "App Store Optimization"
    ]
  },
  {
    id: "ecommerce",
    title: "E-Commerce Development",
    shortDesc: "Custom e-commerce platforms that drive sales, streamline operations, and deliver exceptional shopping experiences across all devices.",
    longDesc: "We build scalable, secure, and feature-rich e-commerce solutions tailored to your unique business needs. From custom storefronts to complex marketplace platforms, our development team ensures your digital retail presence is optimized for conversions and growth.",
    icon: "/services/e-commerce.png",
    features: [
      "Custom Storefront Development",
      "Platform Migration & Upgrades",
      "Payment Gateway Integration",
      "Inventory Management Systems",
      "Performance Optimization"
    ]
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing Services",
    shortDesc: "Data-driven marketing strategies that increase visibility, attract qualified leads, and maximize your return on investment.",
    longDesc: "Our comprehensive digital marketing services are designed to elevate your brand's online presence. We employ a mix of SEO, content marketing, social media strategies, and targeted advertising to connect you with your ideal audience and accelerate business growth.",
    icon: "/services/digital_marketing.png",
    features: [
      "Search Engine Optimization (SEO)",
      "Pay-Per-Click Advertising (PPC)",
      "Social Media Management",
      "Content Strategy & Creation",
      "Analytics & Performance Tracking"
    ]
  },
  {
    id: "website-design",
    title: "Website Designing",
    shortDesc: "Stunning, responsive websites crafted to reflect your brand identity while providing intuitive user experiences.",
    longDesc: "Your website is your digital storefront. Our expert design team creates visually striking, highly functional websites that not only capture attention but also guide visitors seamlessly toward conversion. We focus on modern aesthetics, accessibility, and flawless performance.",
    icon: "/services/web.png",
    features: [
      "Responsive UI/UX Design",
      "Custom Web Applications",
      "CMS Integration",
      "Web Accessibility Compliance",
      "Ongoing Maintenance & Support"
    ]
  },
  {
    id: "us-staffing",
    title: "US IT Staffing",
    shortDesc: "Strategic talent acquisition connecting top-tier IT professionals with leading organizations across the United States.",
    longDesc: "Navigating the competitive US IT landscape requires a strategic partner. Our specialized staffing solutions bridge the gap between human resource needs and highly skilled tech talent, ensuring your projects are driven by industry experts who fit your company culture.",
    icon: "/services/staffing.png",
    features: [
      "Contract & Contract-to-Hire",
      "Direct Placement Services",
      "Executive Search",
      "Vetted Technical Screening",
      "Rapid Placement Turnaround"
    ]
  },
  {
    id: "domestic-staffing",
    title: "Domestic Staffing",
    shortDesc: "Comprehensive staffing solutions within India, providing businesses with reliable, scalable, and skilled workforces.",
    longDesc: "We understand the nuances of the local talent pool. Our domestic staffing division excels in sourcing and placing qualified professionals across various industries, helping you build strong, dynamic teams that drive operational success.",
    icon: "/services/domestic-staffing.png",
    features: [
      "Volume Hiring",
      "Specialized Skill Sourcing",
      "Payroll & Compliance Management",
      "Onboarding Support",
      "Flexible Workforce Solutions"
    ]
  }
];

export function AllServicesSection() {
  const [activeTab, setActiveTab] = useState(allServicesData[0].id);

  return (
    <section className="py-20 w-full bg-slate-50 dark:bg-[#0f0f11] relative z-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Sidebar Navigation */}
          <div className="w-full lg:w-1/3 flex flex-col space-y-2">
            <h3 className="text-sm font-bold tracking-widest text-slate-400 uppercase mb-4 pl-4">Our Expertise</h3>
            {allServicesData.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={cn(
                  "text-left px-6 py-4 rounded-xl transition-all duration-300 border border-transparent",
                  activeTab === service.id 
                    ? "bg-white dark:bg-[#1a1a1a] shadow-md border-slate-100 dark:border-slate-800 text-brand-blue" 
                    : "hover:bg-slate-100 dark:hover:bg-[#1a1a1a]/50 text-slate-600 dark:text-slate-400"
                )}
              >
                <span className="font-semibold text-lg flex items-center gap-3">
                  <div className={cn(
                    "w-2 h-2 rounded-full transition-colors duration-300",
                    activeTab === service.id ? "bg-brand-blue" : "bg-transparent"
                  )} />
                  {service.title}
                </span>
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="w-full lg:w-2/3 bg-white dark:bg-[#151518] rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 dark:border-slate-800/50 min-h-[500px]">
             {allServicesData.map((service) => (
                <div 
                  key={`content-${service.id}`}
                  className={cn(
                    "transition-all duration-500",
                    activeTab === service.id ? "opacity-100 block animate-in fade-in slide-in-from-bottom-4" : "opacity-0 hidden"
                  )}
                >
                  <div className="flex items-center gap-6 mb-8 pb-8 border-b border-slate-100 dark:border-slate-800">
                    <div className="w-20 h-20 relative shrink-0 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-2xl">
                       <Image 
                         src={service.icon} 
                         alt={service.title} 
                         fill 
                         className="object-contain p-4"
                         style={{ filter: "invert(55%) sepia(37%) saturate(878%) hue-rotate(175deg) brightness(95%) contrast(90%)" }}
                       />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{service.title}</h2>
                      <p className="text-slate-500 dark:text-slate-400 font-medium">{service.shortDesc}</p>
                    </div>
                  </div>

                  <div className="prose prose-slate dark:prose-invert max-w-none mb-10">
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                      {service.longDesc}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">Key Offerings</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {service.features.map((feature, idx) => (
                         <div key={idx} className="flex items-start gap-3">
                           <svg className="w-6 h-6 text-brand-blue shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                           </svg>
                           <span className="text-slate-700 dark:text-slate-300 font-medium">{feature}</span>
                         </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-800">
                     <a href="/contact" className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-white bg-slate-900 dark:bg-white dark:text-slate-900 rounded-full hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors">
                        Discuss Your Project
                     </a>
                  </div>
                </div>
             ))}
          </div>

        </div>
      </div>
    </section>
  );
}
