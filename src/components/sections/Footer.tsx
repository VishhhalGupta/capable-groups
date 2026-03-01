"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

export function Footer() {
  const { theme, resolvedTheme } = useTheme();

  return (
    <footer className="w-full border-t border-slate-200 dark:border-white/10 bg-white dark:bg-[#0a0a0a] pt-16 pb-8">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo and About */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logo.png"
                alt="Capable Groups Logo"
                width={180}
                height={45}
                className="h-10 w-auto object-contain dark:invert"
              />
            </Link>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
              Empowering businesses through our iShore™ model with top-tier talent and innovative IT solutions across the USA, EMEA, and Indian subcontinent.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-slate-900 dark:text-white font-bold mb-6 text-lg">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link href="#" className="text-slate-600 dark:text-slate-400 hover:text-brand-blue dark:hover:text-brand-yellow font-medium text-sm transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-slate-600 dark:text-slate-400 hover:text-brand-blue dark:hover:text-brand-yellow font-medium text-sm transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-slate-600 dark:text-slate-400 hover:text-brand-blue dark:hover:text-brand-yellow font-medium text-sm transition-colors">Services</Link></li>
              <li><Link href="/careers" className="text-slate-600 dark:text-slate-400 hover:text-brand-blue dark:hover:text-brand-yellow font-medium text-sm transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="text-slate-600 dark:text-slate-400 hover:text-brand-blue dark:hover:text-brand-yellow font-medium text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-slate-900 dark:text-white font-bold mb-6 text-lg">Services</h3>
            <ul className="space-y-4">
              <li><Link href="/services/mobile-app-development" className="text-slate-600 dark:text-slate-400 hover:text-brand-blue dark:hover:text-brand-yellow font-medium text-sm transition-colors">Mobile App Development</Link></li>
              <li><Link href="/services/ecommerce-development" className="text-slate-600 dark:text-slate-400 hover:text-brand-blue dark:hover:text-brand-yellow font-medium text-sm transition-colors">E-Commerce Development</Link></li>
              <li><Link href="/services/digital-marketing" className="text-slate-600 dark:text-slate-400 hover:text-brand-blue dark:hover:text-brand-yellow font-medium text-sm transition-colors">Digital Marketing Services</Link></li>
              <li><Link href="/services/website-designing" className="text-slate-600 dark:text-slate-400 hover:text-brand-blue dark:hover:text-brand-yellow font-medium text-sm transition-colors">Website Designing</Link></li>
              <li><Link href="/services/us-it-staffing" className="text-slate-600 dark:text-slate-400 hover:text-brand-blue dark:hover:text-brand-yellow font-medium text-sm transition-colors">US IT Staffing</Link></li>
              <li><Link href="/services/domestic-staffing" className="text-slate-600 dark:text-slate-400 hover:text-brand-blue dark:hover:text-brand-yellow font-medium text-sm transition-colors">Domestic Staffing</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-slate-900 dark:text-white font-bold mb-6 text-lg">Contact Us</h3>
            <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-3 text-brand-blue dark:text-brand-yellow shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <span>Global HQ: Address goes here, City, Country, ZIP</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-brand-blue dark:text-brand-yellow shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <a href="mailto:info@capablegroups.com" className="hover:text-brand-blue dark:hover:text-brand-yellow transition-colors">info@capablegroups.com</a>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-brand-blue dark:text-brand-yellow shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                <a href="tel:+1234567890" className="hover:text-brand-blue dark:hover:text-brand-yellow transition-colors">+1 (234) 567-890</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-200 dark:border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500 font-medium">
            © {new Date().getFullYear()} Capable Groups. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm font-medium">
            <Link href="/privacy" className="text-slate-500 hover:text-brand-blue dark:hover:text-brand-yellow transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-slate-500 hover:text-brand-blue dark:hover:text-brand-yellow transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
