import { ProductCard } from "@/components/shop/ProductCard";
import { PRODUCTS } from "@/lib/data/products";

export function ShopSection() {
  return (
    <section id="tienda" className="scroll-mt-24 bg-tiza py-24 lg:py-32">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-roble">
            Tienda
          </p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] leading-tight text-nogal">
            Muebles de madera para cada espacio
          </h2>
          <p className="mt-6 font-sans text-lg leading-8 text-nogal/80">
            Una selección de piezas disponibles en taller, pensadas para habitar y
            construidas para perdurar.
          </p>
        </div>

        <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
