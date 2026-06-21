import React from "react";

interface LogoProps {
  className?: string;
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <img
      src="/logo.png"
      alt="RA Solutions Logo"
      className={`h-8 md:h-9 w-auto object-contain brightness-0 invert transition-opacity duration-200 hover:opacity-90 ${className}`}
    />
  );
}
