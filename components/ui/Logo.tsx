"use client";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`font-display text-2xl leading-none tracking-wide text-nogal ${className}`}>
      Herbik <span className="font-sans font-semibold">y Lauck</span>
    </span>
  );
}
