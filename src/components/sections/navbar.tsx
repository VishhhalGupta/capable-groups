"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HoveredLink, Menu, MenuItem } from "../ui/navbar-menu";
import { useTheme } from "next-themes";
import { NoiseBackground } from "../ui/noise-background";
import { cn } from "@/lib/utils";

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  React.useEffect(() => setMounted(true), []);

  return (
    <div
      className={cn(
        "fixed top-4 inset-x-0 w-full px-8 mx-auto z-50 flex items-center justify-between",
        className
      )}
    >
      {/* Left - Logo */}
      <div className="flex-shrink-0 relative z-50">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Capable Groups Logo"
            width={160}
            height={40}
            className="h-8 w-auto object-contain dark:invert"
            priority
          />
        </Link>
      </div>

      {/* Middle - Floating Navigation Pill */}
      <div className="flex-1 flex justify-center mt-2 absolute left-1/2 transform -translate-x-1/2">
        <div className="bg-white/95 dark:bg-[#1a1a1a]/95 shadow-[0_4px_24px_rgba(0,0,0,0.04)] rounded-full px-3 py-2.5 border border-black/5 dark:border-white/10 backdrop-blur-md">
          <Menu setActive={setActive}>
            <div className="flex items-center space-x-2 lg:space-x-4 text-base font-medium">
              <HoveredLink href="#">Home</HoveredLink>
              <HoveredLink href="/services">Services</HoveredLink>
              <HoveredLink href="/our-work">Our Work</HoveredLink>
              <HoveredLink href="/achievements">Achievements</HoveredLink>
              <HoveredLink href="/faqs">FAQs</HoveredLink>
              <HoveredLink href="/contact">Contact</HoveredLink>
            </div>
          </Menu>
        </div>
      </div>

      {/* Right - CTA Button and Theme Toggle */}
      <div className="flex items-center gap-4 relative z-50">
        {mounted && (
          <button
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="p-2.5 rounded-full bg-black/5 hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10 transition-colors"
            aria-label="Toggle theme"
          >
            {resolvedTheme === "dark" ? (
            <svg
              className="w-4 h-4 text-yellow-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 18c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm0-10c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0-8c-.6 0-1 .4-1 1v2c0 .6.4 1 1 1s1-.4 1-1V1c0-.6-.4-1-1-1zm0 20c-.6 0-1 .4-1 1v2c0 .6.4 1 1 1s1-.4 1-1v-2c0-.6-.4-1-1-1zM4 12c0-.6-.4-1-1-1H1c-.6 0-1 .4-1 1s.4 1 1 1h2c.6 0 1-.4 1-1zm16 0c0-.6-.4-1-1-1h-2c-.6 0-1 .4-1 1s.4 1 1 1h2c.6 0 1-.4 1-1zM4.2 4.2c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l1.4 1.4c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4L4.2 4.2zm12.6 12.6c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l1.4 1.4c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4l-1.4-1.4zM4.2 19.8c-.4.4-.4 1 0 1.4.4.4 1 .4 1.4 0l1.4-1.4c.4-.4.4-1 0-1.4s-1-.4-1.4 0L4.2 19.8zm12.6-12.6c-.4.4-.4 1 0 1.4.4.4 1 .4 1.4 0l1.4-1.4c.4-.4.4-1 0-1.4s-1-.4-1.4 0l-1.4 1.4z" />
            </svg>
          ) : (
            <svg
              className="w-4 h-4 text-slate-800"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M21.64 13c-.77 1.93-2.34 3.29-4.04 3.29-2.59 0-4.71-2.12-4.71-4.71 0-1.79 1.04-3.29 2.53-4.03-1.72.25-3.35 1.16-4.37 2.53-1.78 2.15-2.24 5.18-.87 7.87.65 1.43 1.8 2.61 3.33 3.28 1.53.67 3.31.72 4.86.13 1.55-.59 2.84-1.63 3.61-3.06.77-1.43.72-3.06 0-4.36l-1.34.36zm0-4c.78-1.92 2.34-3.29 4.04-3.29 2.59 0 4.71 2.12 4.71 4.71 0 1.79-1.04 3.29-2.53 4.03 1.72-.25 3.35-1.16 4.37-2.53 1.78-2.15 2.24-5.18.87-7.87-.65-1.43-1.8-2.61-3.33-3.28-1.53-.67-3.31-.72-4.86-.13-1.55.59-2.84 1.63-3.61 3.06-.77 1.43-.72 3.06 0 4.36l1.34-.36z" />
            </svg>
          )}
        </button>
        )}

        <NoiseBackground
          containerClassName="w-fit p-[1px] rounded-full"
          gradientColors={["rgba(59,130,246,0.5)", "rgba(16,185,129,0.5)", "rgba(139,92,246,0.5)"]}
        >
          <a 
            href="#contact" 
            className="flex items-center gap-2 h-full w-full cursor-pointer rounded-full bg-[#111] dark:bg-[#222] px-6 py-2.5 text-sm font-medium text-white shadow-xl transition-all duration-100 active:scale-95"
          >
            Schedule a Call
            <svg 
              width="14" 
              height="14" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="mt-[1px]"
            >
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>
        </NoiseBackground>
      </div>
    </div>
  );
}