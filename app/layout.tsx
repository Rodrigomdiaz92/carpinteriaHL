import type { Metadata } from "next";
import { Aldrich } from "next/font/google";
import { Montserrat } from "next/font/google";
import { Oxanium } from "next/font/google";
import "./globals.css";

const oxanium = Oxanium({
  subsets: ["latin"],
  weight: "400",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const aldrich = Aldrich({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Herbik y Lauck | Diseño y muebles a medida",
  description:
    "Descubrí los muebles de Herbik y Lauck. Diseño contemporáneo, carpintería artesanal y soluciones de mobiliario personalizado.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${oxanium.className} ${montserrat.variable} ${aldrich.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-tiza font-sans text-nogal">
        {children}
      </body>
    </html>
  );
}
