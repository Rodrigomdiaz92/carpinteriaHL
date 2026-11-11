const VALUES = [
  {
    id: "01",
    title: "Precisión",
    description:
      "Cada unión, cada corte, cada acabado está pensado con exactitud. La calidad constructiva acompaña cada pieza.",
  },
  {
    id: "02",
    title: "Cercanía",
    description:
      "Promovemos un trato humano, honesto y personalizado. Escuchamos a cada cliente para crear piezas con valor emocional y funcional.",
  },
  {
    id: "03",
    title: "Autenticidad",
    description:
      "Utilizamos materiales nobles y diseños que respetan su esencia. Nada está disfrazado: lo que ves, es lo que es.",
  },
];

export function Values() {
  return (
    <section aria-labelledby="values-title" className="bg-arena py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 md:grid-cols-3">
          {VALUES.map((value) => (
            <div
              key={value.id}
              className="flex flex-col gap-4 border-t-2 border-nogal pt-6"
            >
              <span className="font-display text-4xl text-nogal">{value.id}</span>
              <h3 className="font-sans text-xl font-semibold text-nogal">{value.title}</h3>
              <p className="font-sans text-base leading-7 text-nogal/80">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
