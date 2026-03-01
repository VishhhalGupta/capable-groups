"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section className="relative w-full pt-32 pb-20 md:pt-40 md:pb-24 flex flex-col items-center justify-center bg-slate-50 dark:bg-[#0a0a0a]">
       <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-slate-100 to-transparent dark:from-[#111] dark:to-transparent pointer-events-none" />

       <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
            Let&apos;s Build <span className="text-brand-blue">Together</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Ready to transform your business? Reach out to schedule a consultation, request a proposal, or simply start a conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 bg-white dark:bg-[#111] rounded-[2.5rem] p-4 shadow-xl border border-slate-100 dark:border-slate-800/50">
          
          {/* Contact Info Sidebar */}
           <div className="lg:col-span-2 bg-slate-900 text-white rounded-[2rem] p-8 md:p-12 relative overflow-hidden flex flex-col justify-between">
              {/* Decorative circles */}
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute top-12 -left-12 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-2">Get in Touch</h3>
                <p className="text-slate-300 mb-12">We&apos;d love to hear from you. Our friendly team is always here to chat.</p>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="mt-1">
                      <svg className="w-6 h-6 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-100 mb-1">Email</h4>
                      <p className="text-slate-400 text-sm">support@capablegroups.com</p>
                    </div>
                  </div>

                   <div className="flex items-start gap-4">
                    <div className="mt-1">
                      <svg className="w-6 h-6 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-100 mb-1">Phone</h4>
                      <p className="text-slate-400 text-sm">+1 (555) 123-4567</p>
                      <p className="text-slate-400 text-sm">+91 98765 43210</p>
                    </div>
                  </div>

                   <div className="flex items-start gap-4">
                    <div className="mt-1">
                      <svg className="w-6 h-6 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-100 mb-1">Offices</h4>
                      <p className="text-slate-400 text-sm mb-2"><strong>USA:</strong> 123 Tech Avenue, Silicon Valley, CA 94025</p>
                      <p className="text-slate-400 text-sm"><strong>India:</strong> 456 Innovation Hub, Bangalore 560001</p>
                    </div>
                  </div>
                </div>
              </div>

               <div className="relative z-10 mt-12 pt-8 border-t border-slate-800 flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-blue transition-colors group">
                     <svg className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-blue transition-colors group">
                     <svg className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
               </div>
           </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 p-8 md:p-12 lg:pl-16">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Send us a message</h3>
            
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-in fade-in zoom-in duration-500">
                 <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                 </div>
                 <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Message Sent!</h4>
                 <p className="text-slate-600 dark:text-slate-400">Thank you for reaching out. We will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-slate-700 dark:text-slate-300">First Name</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      required
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#1a1a1a] border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-colors text-slate-900 dark:text-white placeholder:text-slate-400"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-slate-700 dark:text-slate-300">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      required
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#1a1a1a] border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-colors text-slate-900 dark:text-white placeholder:text-slate-400"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#1a1a1a] border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-colors text-slate-900 dark:text-white placeholder:text-slate-400"
                    placeholder="john@company.com"
                  />
                </div>

                 <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-medium text-slate-700 dark:text-slate-300">Service of Interest</label>
                  <select 
                    id="service" 
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#1a1a1a] border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-colors text-slate-900 dark:text-white appearance-none"
                  >
                    <option value="" disabled selected>Select a service</option>
                    <option value="mobile">Mobile App Development</option>
                    <option value="ecommerce">E-Commerce Development</option>
                    <option value="marketing">Digital Marketing</option>
                    <option value="web">Website Designing</option>
                    <option value="staffing-us">US IT Staffing</option>
                    <option value="staffing-dom">Domestic Staffing</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#1a1a1a] border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-colors text-slate-900 dark:text-white placeholder:text-slate-400 resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-200 text-white dark:text-slate-900 font-semibold transition-all dark:active:bg-slate-300 active:bg-slate-700 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
       </div>
    </section>
  );
}
