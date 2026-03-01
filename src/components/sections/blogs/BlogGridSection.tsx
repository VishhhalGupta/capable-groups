"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/lib/data/blogs";
import { cn } from "@/lib/utils";

const categories = ["All", "App Development", "Web Development", "UI/UX Design", "Industry Insight"];

export function BlogGridSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <section className="py-20 w-full bg-slate-50 dark:bg-[#0f0f11] relative z-20 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300",
                activeCategory === category
                  ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-md"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100 dark:bg-[#1a1a1a] dark:border-slate-800 dark:text-slate-400 dark:hover:bg-[#222]"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 border-t border-slate-200 dark:border-slate-800/50 pt-16">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <Link href={`/blogs/${post.slug}`} key={post.id} className="group flex flex-col h-full bg-white dark:bg-[#151518] rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800/50 hover:shadow-xl dark:hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300">
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <Image 
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-semibold bg-white/90 dark:bg-black/80 backdrop-blur-sm text-slate-900 dark:text-white rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs font-medium text-slate-500 dark:text-slate-400 mb-4">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-brand-blue dark:group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-400 mb-8 line-clamp-3 leading-relaxed flex-grow">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-3 mt-auto pt-6 border-t border-slate-100 dark:border-slate-800">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border border-slate-200 dark:border-slate-700">
                       <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">{post.author.name}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{post.author.role}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full py-20 text-center flex flex-col items-center justify-center">
              <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No posts found</h3>
              <p className="text-slate-500 dark:text-slate-400">Check back later for articles in this category.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
