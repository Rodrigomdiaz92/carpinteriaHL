import { Logo } from "@/components/ui/Logo";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { WHATSAPP_MESSAGES } from "@/lib/config/whatsapp";

export function Footer() {
  const year = 2026;

  return (
    <footer className="bg-nogal text-tiza">
      <div className="mx-auto w-full max-w-7xl px-6 py-14 lg:px-10 lg:py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <Logo className="text-tiza" />
            <p className="mt-5 font-sans text-base leading-7 text-arena">
              Una carpintería que fusiona el diseño moderno con el oficio tradicional,
              creando muebles funcionales, duraderos y personalizados.
            </p>
          </div>

          <nav aria-label="Navegación del pie de página">
            <div className="flex flex-col gap-3">
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-tiza/60">
                Secciones
              </p>
              <ul className="flex flex-col gap-2">
                <li>
                  <a href="#inicio" className="font-sans text-base text-tiza transition-colors hover:text-arena">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="#tienda" className="font-sans text-base text-tiza transition-colors hover:text-arena">
                    Tienda
                  </a>
                </li>
                <li>
                  <a href="#personalizados" className="font-sans text-base text-tiza transition-colors hover:text-arena">
                    Personalizados
                  </a>
                </li>
                <li>
                  <a href="#contacto" className="font-sans text-base text-tiza transition-colors hover:text-arena">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <div className="flex flex-col gap-4">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-tiza/60">
              Contacto
            </p>
            <WhatsAppButton
              tone="dark"
              variant="primary"
              message={WHATSAPP_MESSAGES.customProject()}
              label="Escribinos por WhatsApp"
              className="w-fit"
            />
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-tiza/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-sans text-sm text-tiza/70">
            © {year} Herbik y Lauck. Todos los derechos reservados.
          </p>
          <p className="font-sans text-sm text-tiza/70">Diseño y fabricación artesanal</p>
        </div>
      </div>
    </footer>
  );
}
