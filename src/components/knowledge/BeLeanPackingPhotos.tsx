import type { Locale } from "@/i18n/core";

const COPY: Record<Locale, { heading: string; intro: string; packagingAlt: string; packagingCaption: string; orderAlt: string; orderCaption: string }> = {
  en: {
    heading: "Packaging and a packed order",
    intro: "Additional photos supplied for this case. The BE-01 dimensions, weight and carrier details refer to the documented order profile, not measurements taken from these images.",
    packagingAlt: "White cardboard product packaging on a wooden surface",
    packagingCaption: "Supplied product packaging.",
    orderAlt: "Packed order in a padded envelope with the shipping label obscured",
    orderCaption: "A supplied example of a packed order. Shipping-label details have been obscured for privacy.",
  },
  nl: {
    heading: "Verpakking en verpakte order",
    intro: "Aanvullende foto's bij deze case. De afmetingen, het gewicht en de vervoerder van BE-01 horen bij het beschreven orderprofiel; ze zijn niet uit deze foto's afgeleid.",
    packagingAlt: "Witte kartonnen productverpakking op een houten ondergrond",
    packagingCaption: "Aangeleverde productverpakking.",
    orderAlt: "Verpakte order in een bubbelenvelop met afgeschermd verzendlabel",
    orderCaption: "Een aangeleverd voorbeeld van een verpakte order. De gegevens op het verzendlabel zijn afgeschermd voor de privacy.",
  },
  de: {
    heading: "Verpackung und verpackte Bestellung",
    intro: "Zusätzliche Fotos zu diesem Beispiel. Die Maße, das Gewicht und der Versanddienstleister von BE-01 beziehen sich auf das dokumentierte Bestellprofil und wurden nicht aus diesen Bildern abgeleitet.",
    packagingAlt: "Weiße Produktverpackung aus Karton auf einer Holzoberfläche",
    packagingCaption: "Bereitgestellte Produktverpackung.",
    orderAlt: "Verpackte Bestellung in einem Luftpolsterumschlag mit unkenntlich gemachtem Versandetikett",
    orderCaption: "Ein bereitgestelltes Beispiel einer verpackten Bestellung. Die Angaben auf dem Versandetikett wurden zum Schutz der Privatsphäre unkenntlich gemacht.",
  },
  fr: {
    heading: "Emballage et commande emballée",
    intro: "Photos complémentaires fournies pour cet exemple. Les dimensions, le poids et le transporteur de BE-01 correspondent au profil de commande documenté et ne sont pas déduits de ces images.",
    packagingAlt: "Emballage de produit en carton blanc sur une surface en bois",
    packagingCaption: "Emballage de produit fourni.",
    orderAlt: "Commande emballée dans une enveloppe à bulles avec l'étiquette d'expédition masquée",
    orderCaption: "Exemple fourni d'une commande emballée. Les informations de l'étiquette d'expédition ont été masquées pour protéger la vie privée.",
  },
  es: {
    heading: "Embalaje y pedido embalado",
    intro: "Fotos adicionales facilitadas para este ejemplo. Las dimensiones, el peso y el transportista de BE-01 corresponden al perfil de pedido documentado y no se han deducido de estas imágenes.",
    packagingAlt: "Embalaje de producto de cartón blanco sobre una superficie de madera",
    packagingCaption: "Embalaje de producto facilitado.",
    orderAlt: "Pedido embalado en un sobre acolchado con la etiqueta de envío ocultada",
    orderCaption: "Ejemplo facilitado de un pedido embalado. Los datos de la etiqueta de envío se han ocultado para proteger la privacidad.",
  },
};

export function BeLeanPackingPhotos({ locale }: { locale: Locale }) {
  const copy = COPY[locale];
  const photos = [
    { src: "/images/phase6/belean-packaging-20261106.webp", alt: copy.packagingAlt, caption: copy.packagingCaption, width: 960, height: 1280 },
    { src: "/images/phase6/belean-packed-order-redacted-20261106.webp", alt: copy.orderAlt, caption: copy.orderCaption, width: 1086, height: 1448 },
  ];
  return (
    <section className="container-site max-w-4xl pt-12" aria-labelledby="belean-packing-photos">
      <h2 id="belean-packing-photos" className="text-2xl font-bold text-ink sm:text-3xl">{copy.heading}</h2>
      <p className="mt-4 max-w-3xl leading-7 text-muted">{copy.intro}</p>
      <div className="mt-7 grid gap-6 sm:grid-cols-2">
        {photos.map((photo) => (
          <figure key={photo.src} className="min-w-0">
            {/* eslint-disable-next-line @next/next/no-img-element -- optimized static WebP, consistent with the existing article images */}
            <img src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} loading="lazy" decoding="async" className="aspect-[3/4] h-auto w-full rounded-2xl border border-border bg-surface object-contain" />
            <figcaption className="mt-3 text-sm leading-6 text-muted">{photo.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
