"use client";
import React from "react";
import { motion } from "framer-motion";

export const HoveredLink = ({
  children,
  href,
  className,
  ...rest
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
  [key: string]: any;
}) => {
  return (
    <a href={href} {...rest} className={`relative group inline-block ${className || ""}`}>
      <motion.div
        className="px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors"
        whileHover={{ x: 4 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
      <motion.div
        className="absolute bottom-1 left-1/2 -translate-x-1/2 h-[2px] bg-blue-600 w-0 group-hover:w-[calc(100%-1.5rem)] transition-all duration-300 pointer-events-none"
      />
    </a>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive?: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex items-center space-x-1 lg:space-x-2"
    >
      {children}
    </motion.div>
  );
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive?: (item: string | null) => void;
  active?: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className="relative"
      onMouseEnter={() => setActive && setActive(item)}
      onMouseLeave={() => setActive && setActive(null)}
    >
      <motion.button
        onClick={() => setActive && setActive(active === item ? null : item)}
        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
          active === item
            ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/20"
            : "text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {item}
      </motion.button>

      {active === item && children && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.2 }}
          className="absolute left-1/2 top-full mt-2 -translate-x-1/2 rounded-lg bg-white dark:bg-slate-900 shadow-xl border border-slate-200 dark:border-slate-800 p-4 z-50 min-w-max"
        >
          {children}
        </motion.div>
      )}
    </div>
  );
};

export const ProductItem = ({
  title,
  href,
  src,
  description,
}: {
  title: string;
  href: string;
  src?: string;
  description?: string;
}) => {
  return (
    <a href={href}>
      <motion.div
        whileHover={{ y: -4 }}
        className="block p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
      >
        {src && (
          <img
            src={src}
            alt={title}
            className="w-full h-24 object-cover rounded-md mb-2"
          />
        )}
        <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
          {title}
        </h4>
        {description && (
          <p className="text-xs text-slate-600 dark:text-slate-400">
            {description}
          </p>
        )}
      </motion.div>
    </a>
  );
};
