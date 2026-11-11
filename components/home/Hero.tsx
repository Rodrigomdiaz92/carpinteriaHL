import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-title" className="scroll-mt-24 bg-nogal text-tiza">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-2 lg:px-10 lg:py-32">
        <div className="flex max-w-2xl flex-col items-start gap-8">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-arena">
            Carpintería artesanal · Diseño contemporáneo
          </p>
          <h1
            id="hero-title"
            className="font-display text-[clamp(2.75rem,6vw,4.75rem)] leading-[1.05] text-tiza"
          >
            Diseño que se vive. Muebles que perduran.
          </h1>
          <p className="max-w-xl font-sans text-lg leading-8 text-arena">
            Diseñamos y fabricamos muebles que combinan precisión, materiales nobles y
            oficio artesanal para acompañar cada espacio.
          </p>
          <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
            <Button href="#tienda" tone="dark" className="w-full sm:w-auto">
              Explorar la tienda
            </Button>
            <Button href="#personalizados" tone="dark" variant="secondary" className="w-full sm:w-auto">
              Muebles personalizados
            </Button>
          </div>
        </div>

        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-roble">
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <p className="text-center font-sans text-xs uppercase tracking-[0.2em] text-tiza/70">
              Fotografía principal de producto — Próximamente
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
