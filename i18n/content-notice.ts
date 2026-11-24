import type { Locale } from "./core";

const NOTICES: Record<Locale, Record<"en" | "nl", string>> = {
  en: { en: "This page is currently available in English only. Your language preference is kept for navigation and forms.", nl: "This regional page is currently available in Dutch only. Your language preference is kept for navigation and forms." },
  nl: { en: "Deze pagina is momenteel alleen in het Engels beschikbaar. Je taalvoorkeur blijft behouden voor navigatie en formulieren.", nl: "Deze regionale pagina is momenteel alleen in het Nederlands beschikbaar. Je taalvoorkeur blijft behouden voor navigatie en formulieren." },
  de: { en: "Diese Seite ist derzeit nur auf Englisch verfügbar. Ihre Sprachwahl bleibt für Navigation und Formulare erhalten.", nl: "Diese regionale Seite ist derzeit nur auf Niederländisch verfügbar. Ihre Sprachwahl bleibt für Navigation und Formulare erhalten." },
  fr: { en: "Cette page est actuellement disponible uniquement en anglais. Votre choix de langue est conservé pour la navigation et les formulaires.", nl: "Cette page régionale est actuellement disponible uniquement en néerlandais. Votre choix de langue est conservé pour la navigation et les formulaires." },
  es: { en: "Esta página solo está disponible en inglés por ahora. Tu idioma se conserva para la navegación y los formularios.", nl: "Esta página regional solo está disponible en neerlandés por ahora. Tu idioma se conserva para la navegación y los formularios." },
};
export function contentNotice(selected: Locale, content: Locale): string | null {
  if (selected === content) return null;
  return content === "nl" || content === "en" ? NOTICES[selected][content] : null;
}
