"use client";

import type { ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary";
export type ButtonTone = "light" | "dark";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  tone?: ButtonTone;
  className?: string;
};

const VARIANT_CLASSES: Record<
  ButtonVariant,
  Record<ButtonTone, string>
> = {
  primary: {
    light: "bg-nogal text-tiza hover:bg-roble",
    dark: "bg-tiza text-nogal hover:bg-arena",
  },
  secondary: {
    light: "border border-nogal text-nogal hover:bg-nogal hover:text-tiza",
    dark: "border border-tiza text-tiza hover:bg-tiza hover:text-nogal",
  },
};

export function Button({
  href,
  children,
  variant = "primary",
  tone = "light",
  className = "",
}: ButtonProps) {
  const toneClasses = VARIANT_CLASSES[variant][tone];
  const isExternal = href.startsWith("http");
  const focusOutline =
    tone === "dark"
      ? "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tiza"
      : "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nogal";

  return (
    <a
      href={href}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`inline-flex h-12 items-center justify-center rounded-full px-6 font-cta text-base transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 ${focusOutline} ${toneClasses} ${className}`}
    >
      {children}
    </a>
  );
}
