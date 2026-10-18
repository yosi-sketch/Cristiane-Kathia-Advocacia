"use client";

import type { ReactNode } from "react";

interface PrimaryButtonProps {
  children: ReactNode;
  href?: string;
  target?: string;
  onClick?: () => void;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function PrimaryButton({
  children,
  href,
  target,
  onClick,
  className = "",
  size = "md",
}: PrimaryButtonProps) {
  const sizeClasses = {
    sm: "px-5 py-3 text-xs uppercase tracking-[0.08em]",
    md: "px-6 py-3.5 text-sm",
    lg: "px-5 py-4 text-sm sm:px-7 sm:text-base",
  }[size];

  const classes =
    "primary-button inline-flex min-h-11 max-w-full items-center justify-center gap-2 rounded-none border border-brand-800 bg-brand-800 font-semibold text-white transition-colors duration-200 hover:border-brand-700 hover:bg-brand-700 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand-700 " +
    "select-none text-center " +
    sizeClasses +
    " " +
    className;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
