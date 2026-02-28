"use client";

import { cn } from "@/lib/utils";
import React, { HTMLProps } from "react";

interface Props extends HTMLProps<HTMLDivElement> {
  containerClassName?: string;
  gradientColors?: string[];
  opacity?: number;
}

export const NoiseBackground = ({
  className,
  containerClassName,
  gradientColors = [
    "white",
    "#f3f4F6", // slate-100
    "#e5e7eb", // slate-200
  ],
  opacity = 1,
  children,
  ...props
}: Props) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden group/noise",
        containerClassName
      )}
    >
      <div
        className={cn(
          "absolute inset-0 z-0 bg-background mix-blend-overlay opacity-0 group-hover/noise:opacity-100 transition-opacity duration-500",
          className
        )}
        style={{
          background: `radial-gradient(circle at 50% 50%, ${gradientColors[0]} 0%, ${gradientColors[1]} 50%, ${gradientColors[2]} 100%)`,
          opacity: opacity,
        }}
        {...props}
      />
      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  );
};
