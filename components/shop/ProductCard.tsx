import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import type { Product } from "@/lib/data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="flex flex-col gap-5">
      <div className="relative aspect-square w-full overflow-hidden rounded-sm bg-arena">
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <p className="text-center font-sans text-xs uppercase tracking-[0.2em] text-nogal/60">
            Fotografía de producto — Próximamente
          </p>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-2">
        <h3 className="font-sans text-lg font-semibold text-nogal">{product.name}</h3>
        <p className="font-sans text-base leading-7 text-roble">{product.description}</p>
      </div>

      <WhatsAppButton
        productName={product.name}
        tone="light"
        variant="primary"
        className="mt-auto w-full"
      />
    </article>
  );
}
