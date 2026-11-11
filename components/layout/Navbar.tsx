"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

const NAV_ITEMS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Tienda", href: "#tienda" },
  { label: "Personalizados", href: "#personalizados" },
  { label: "Contacto", href: "#contacto" },
];

function BurgerIcon() {
  return (
    <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-arena/60 bg-tiza/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
        <a
          href="#inicio"
          onClick={closeMenu}
          className="flex items-center"
          aria-label="Herbik y Lauck - Inicio"
        >
          <Logo />
        </a>

        <nav className="hidden lg:block" aria-label="Navegación principal">
          <ul className="flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="font-sans text-sm font-medium text-nogal transition-colors hover:text-roble"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden lg:block">
            <WhatsAppButton tone="light" variant="primary" className="h-11 px-5 text-sm" />
          </div>
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-nogal/20 text-nogal transition-colors hover:bg-arena/40 lg:hidden"
          >
            {open ? <CloseIcon /> : <BurgerIcon />}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-navigation"
          className="border-t border-arena/60 bg-tiza lg:hidden"
          aria-label="Navegación móvil"
        >
          <ul className="flex flex-col">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={closeMenu}
                  className="block border-b border-arena/50 px-6 py-5 font-display text-2xl text-nogal last:border-b-0"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="px-6 py-4">
              <WhatsAppButton tone="light" variant="primary" label="Escribinos por WhatsApp" className="w-full" />
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
