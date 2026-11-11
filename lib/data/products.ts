export type Product = {
  id: string;
  name: string;
  description: string;
  /**
   * Marca el contenido como provisional. Se mantiene hasta reemplazarlo con
   * el catálogo definitivo de la marca.
   */
  provisional?: boolean;
};

/**
 * Catálogo provisional de la tienda.
 * TODO: reemplazar con el catálogo real (nombres, descripciones, precios,
 * disponibilidad y fotografías oficiales).
 */
export const PRODUCTS: Product[] = [
  {
    id: "mesa-centro",
    name: "Mesa de centro",
    description:
      "Soluciones de superficie pensadas para acompañar el día a día con materiales nobles.",
    provisional: true,
  },
  {
    id: "estanteria-madera",
    name: "Estantería de madera",
    description:
      "Almacenamiento funcional que combina estructura sólida y estética atemporal.",
    provisional: true,
  },
  {
    id: "silla-comedor",
    name: "Silla de comedor",
    description:
      "Asientos diseñados para el descanso, la mesa y las historias familiares.",
    provisional: true,
  },
  {
    id: "modulo-cocina",
    name: "Módulo de cocina",
    description:
      "Módulos versátiles para organizar y cuidar el espacio de la cocina.",
    provisional: true,
  },
  {
    id: "cabecero-roble",
    name: "Cabecero de roble",
    description:
      "Cabeceros con presencia y construcción pensada para durar generaciones.",
    provisional: true,
  },
  {
    id: "taburete",
    name: "Taburete",
    description:
      "Piezas de apoyo que completan la experiencia del mobiliario.",
    provisional: true,
  },
];
