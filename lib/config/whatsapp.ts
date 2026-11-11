/**
 * Configuración centralizada de canales de WhatsApp.
 *
 * TODO: reemplazar WHATSAPP_NUMBER con el número oficial de la marca
 * (formato internacional, sin el signo "+" y sin separadores).
 */
export const WHATSAPP_NUMBER = "5490000000000";

export const WHATSAPP_MESSAGES = {
  product: (productName: string) =>
    `Hola, quisiera consultar por el producto ${productName}. ¿Podrían brindarme más información?`,
  customProject: () =>
    "Hola, quisiera consultar por un proyecto de mobiliario a medida. Me gustaría contarles mi idea y conocer las posibilidades.",
} as const;

export function getWhatsAppHref(message: string): string {
  const url = new URL("https://wa.me/" + WHATSAPP_NUMBER);
  url.searchParams.set("text", message);
  return url.toString();
}
