import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { Values } from "@/components/home/Values";
import { ShopSection } from "@/components/shop/ShopSection";
import { CustomSection } from "@/components/custom/CustomSection";
import { ContactSection } from "@/components/contact/ContactSection";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-tiza text-nogal">
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Hero />
        <About />
        <Values />
        <ShopSection />
        <CustomSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton tone="light" variant="floating" />
    </div>
  );
}
