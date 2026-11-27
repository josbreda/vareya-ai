/* eslint-disable @next/next/no-html-link-for-pages -- Full document navigation keeps the English case study and localized page layouts in sync. */
import Image from "next/image";
import { getRequestI18n } from "@/i18n/server";

const copy = {
  en: ["Customer story · VegaMelts", "VegaMelts grew. The packages didn’t have to.", "Discover how compact packaging and the Boxable fulfilment model supported 300% order growth.", "Read the case study (English)"],
  nl: ["Klantverhaal · VegaMelts", "VegaMelts groeide. De pakketten hoefden niet mee te groeien.", "Lees hoe compacte verpakkingen en Boxable fulfilment een ordergroei van 300% ondersteunden.", "Lees de casestudy (Engels)"],
  de: ["Kundengeschichte · VegaMelts", "VegaMelts wuchs. Die Pakete mussten nicht mitwachsen.", "Erfahren Sie, wie kompakte Verpackungen und Boxable Fulfilment ein Bestellwachstum von 300 % unterstützten.", "Fallstudie lesen (Englisch)"],
  fr: ["Témoignage client · VegaMelts", "VegaMelts a grandi. Pas besoin d’agrandir les colis.", "Découvrez comment des emballages compacts et le modèle Boxable ont accompagné une hausse de 300 % du volume de commandes.", "Lire l’étude de cas (anglais)"],
  es: ["Caso de cliente · VegaMelts", "VegaMelts creció. Sus paquetes no tuvieron que hacerlo.", "Descubre cómo los envases compactos y el modelo Boxable acompañaron un crecimiento del 300 % en los pedidos.", "Leer el caso de estudio (inglés)"],
};

export async function VegaMeltsCaseCard() {
  const { locale } = await getRequestI18n();
  const [label, title, body, cta] = copy[locale];
  return (
    <section className="bg-surface py-14 sm:py-20" aria-labelledby="vegamelts-story-title">
      <div className="container-site grid items-center gap-8 md:grid-cols-2 md:gap-14">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-stone-200">
          <Image src="/images/vegamelts/products.png" alt="Compact supplement tins on a wooden surface" fill sizes="(max-width: 767px) 100vw, 560px" className="object-cover" />
        </div>
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">{label}</p>
          <h2 id="vegamelts-story-title" className="text-3xl sm:text-4xl">{title}</h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-muted">{body}</p>
          <a href="/case-studies/vegamelts/" className="mt-7 inline-flex min-h-12 items-center gap-3 rounded-lg bg-primary px-6 py-3 font-semibold text-white hover:bg-primary-dark">{cta}<span aria-hidden="true">→</span></a>
        </div>
      </div>
    </section>
  );
}
