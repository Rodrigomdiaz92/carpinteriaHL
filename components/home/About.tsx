import { Button } from "@/components/ui/Button";

export function About() {
  return (
    <section id="nosotros" className="scroll-mt-24 bg-tiza py-24 lg:py-32">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-10">
        <div className="flex flex-col items-start gap-6">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-roble">
            Quiénes somos
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] leading-tight text-nogal">
            Una carpintería que nace de la fusión entre diseño moderno y oficio tradicional
          </h2>
          <p className="font-sans text-lg leading-8 text-nogal/80">
            Una carpintería que nace de la fusión entre el diseño moderno y el oficio
            tradicional. Cada pieza que creamos refleja una mirada precisa sobre el espacio
            y la vida cotidiana: muebles pensados para durar, para habitar y para acompañar
            historias reales.
          </p>
          <p className="font-sans text-base leading-7 text-nogal/60">
            Con un enfoque arquitectónico y artesanal, la marca apuesta por una estética
            sobria, materiales honestos y un compromiso absoluto con la calidad.
          </p>
          <Button href="#tienda" className="mt-2">
            Conocer la tienda
          </Button>
        </div>

        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-arena">
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <p className="text-center font-sans text-xs uppercase tracking-[0.2em] text-nogal/60">
              Fotografía de la marca — Próximamente
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
