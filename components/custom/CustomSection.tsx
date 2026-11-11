import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { WHATSAPP_MESSAGES } from "@/lib/config/whatsapp";

const PLACEHOLDER_CATEGORIES = [
  { id: "mesas-escritorios", label: "Mesas y escritorios" },
  { id: "bibliotecas-estanterias", label: "Bibliotecas y estanterías" },
  { id: "muebles-guardado", label: "Muebles de guardado" },
  { id: "dormitorios", label: "Dormitorios" },
  { id: "living", label: "Living y espacios" },
];

export function CustomSection() {
  return (
    <section id="personalizados" className="scroll-mt-24 bg-nogal text-tiza">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-2 lg:px-10 lg:py-32">
        <div className="flex flex-col items-start gap-6">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-arena">
            Muebles personalizados
          </p>
          <h2 className="font-display text-[clamp(2.25rem,4.5vw,3.5rem)] leading-[1.08] text-tiza">
            Diseñamos muebles para tu espacio.
          </h2>
          <p className="max-w-xl font-sans text-lg leading-8 text-arena">
            Cada ambiente tiene sus necesidades. Creamos muebles a medida que combinan
            funcionalidad, materiales nobles y diseño, cuidando cada detalle desde la idea
            inicial hasta la pieza terminada.
          </p>
          <WhatsAppButton
            tone="dark"
            variant="primary"
            message={WHATSAPP_MESSAGES.customProject()}
            label="Contanos tu idea"
            className="mt-2"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          {PLACEHOLDER_CATEGORIES.map((category) => (
            <div key={category.id} className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-roble">
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <p className="text-center font-sans text-xs uppercase tracking-[0.2em] text-tiza/70">
                  Proyecto — {category.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
