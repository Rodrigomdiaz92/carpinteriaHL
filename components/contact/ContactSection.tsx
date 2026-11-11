import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { WHATSAPP_MESSAGES } from "@/lib/config/whatsapp";

export function ContactSection() {
  return (
    <section id="contacto" className="scroll-mt-24 bg-tiza py-24 lg:py-32">
      <div className="mx-auto flex max-w-3xl flex-col items-center px-6 text-center lg:px-10">
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-roble">
          Contacto
        </p>
        <h2 className="mt-4 font-display text-[clamp(2.25rem,4.5vw,3.5rem)] leading-tight text-nogal">
          Hablemos de tu próximo proyecto
        </h2>
        <p className="mt-6 max-w-xl font-sans text-lg leading-8 text-nogal/80">
          Contanos tu idea y el espacio que querés transformar. Te respondemos para
          coordinar una consulta con el equipo de diseño y taller.
        </p>
        <div className="mt-10">
          <WhatsAppButton
            tone="light"
            variant="primary"
            message={WHATSAPP_MESSAGES.customProject()}
            label="Escribinos por WhatsApp"
            className="w-full sm:w-auto"
          />
        </div>
      </div>
    </section>
  );
}
