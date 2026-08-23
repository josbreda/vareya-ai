import type { Metadata } from "next";
import Link from "next/link";
import {
  CLAIM_PRIMARY_CTA,
  CLAIM_VOLUME,
  CLAIM_RETURNS,
  CLAIM_POSTNL,
  CLAIM_SHIPHERO,
  CLAIM_CUSTOMS,
  CLAIM_WEEKEND,
  CLAIM_CARRIER_SELECTION,
  APPROVED_FACTS,
} from "@/content/claims";
import { FAQ } from "@/components/marketing/FAQ";
import { breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Fulfilmentcentrum Brabant | Vareya in Breda",
  description:
    "Vareya is een fulfilmentcentrum in Breda, Noord-Brabant. Ecommerce fulfilment voor webshops vanaf 500 orders per maand, met PostNL als hoofdvervoerder binnen Nederland. Check je fulfilment fit.",
  alternates: {
    canonical: "https://vareya.ai/nl/fulfilment-noord-brabant/",
    languages: {
      "nl-NL": "https://vareya.ai/nl/fulfilment-noord-brabant/",
      "en-GB": "https://vareya.ai/eu-fulfilment/",
    },
  },
  openGraph: {
    title: "Fulfilmentcentrum Brabant | Vareya in Breda",
    description:
      "Fulfilmentcentrum in Breda, Noord-Brabant. Ecommerce fulfilment voor webshops met PostNL als hoofdvervoerder binnen Nederland.",
    url: "https://vareya.ai/nl/fulfilment-noord-brabant/",
    type: "website",
    locale: "nl_NL",
  },
};

const FAQ_ITEMS = [
  {
    question: "Waar zit het fulfilmentcentrum van Vareya in Brabant?",
    answer:
      "Het fulfilmentcentrum van Vareya zit aan Bagven Park 6, 4838 EH Breda, in Noord-Brabant.",
  },
  {
    question: "Voor welke webshops is Vareya geschikt?",
    answer:
      CLAIM_VOLUME +
      " Vareya is gespecialiseerd in cosmetics, supplements, telefoonhoesjes, accessoires en andere kleinere pakketten.",
  },
  {
    question: "Met welke vervoerders werkt Vareya?",
    answer:
      CLAIM_POSTNL +
      " " +
      CLAIM_CARRIER_SELECTION,
  },
  {
    question: "Regelt Vareya ook douanezaken?",
    answer:
      CLAIM_CUSTOMS,
  },
  {
    question: "Wat kost fulfilment in Brabant?",
    answer:
      "De fulfilmenttarieven van Vareya zijn vast en all-in per overeenkomst. De scan geeft geen prijs weer; de tarieven worden per klant afgesproken en product fit wordt bevestigd tijdens de kwalificatie.",
  },
];

export default function NlFulfilmentBrabantPage() {
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "https://vareya.ai/" },
    { name: "Fulfilment Noord-Brabant", url: "https://vareya.ai/nl/fulfilment-noord-brabant/" },
  ]);

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Vareya BV",
    description:
      "Fulfilmentcentrum in Breda, Noord-Brabant. Ecommerce fulfilment voor webshops, gespecialiseerd in cosmetics, supplements en andere kleinere pakketten.",
    url: "https://vareya.ai/",
    telephone: "+31 6 19 12 34 72",
    email: "info@vareya.ai",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Bagven Park 6",
      postalCode: "4838 EH",
      addressLocality: "Breda",
      addressRegion: "Noord-Brabant",
      addressCountry: "NL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.5666,
      longitude: 4.7273,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        data-schema="localbusiness"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        data-schema="breadcrumb"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      {/* Hero — direct antwoord */}
      <section className="bg-primary py-16 text-white sm:py-24">
        <div className="container-site">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-white/60">
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <span aria-current="page">Fulfilment Noord-Brabant</span>
          </nav>
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Fulfilmentcentrum in Breda, Noord-Brabant
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/85">
              Vareya is een fulfilmentoperator in Breda die ecommerce orders verwerkt voor
              webshops die verzenden door Europa en daarbuiten. Vareya werkt met Shopify- en
              Amazon FBM-verkopers en is gespecialiseerd in cosmetics, supplements,
              telefoonhoesjes, accessoires en andere kleinere pakketten.
            </p>
            <p className="mt-4 leading-7 text-white/75">{CLAIM_VOLUME}</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/free-rate-scan/"
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-white px-6 py-3 font-semibold text-primary transition-colors hover:bg-slate-100"
              >
                {CLAIM_PRIMARY_CTA}
              </Link>
              <Link
                href="/request-fulfilment-quote/"
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/30 px-6 py-3 font-medium transition-colors hover:bg-white/10"
              >
                Vraag een fulfilmentofferte aan
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Locatie + bewijs */}
      <section className="py-14 sm:py-20" aria-labelledby="locatie">
        <div className="container-site grid gap-10 lg:grid-cols-2">
          <div>
            <h2 id="locatie" className="text-2xl font-bold text-ink sm:text-3xl">
              Het fulfilmentcentrum in Breda
            </h2>
            <div className="mt-6 space-y-4 leading-7 text-muted">
              <p>
                Vareya opereert vanuit {APPROVED_FACTS.address}. Vanuit Breda verzendt Vareya
                orders naar bestemmingen in Europa, het Verenigd Koninkrijk, de Verenigde
                Staten en andere internationale markten.
              </p>
              <p>{CLAIM_POSTNL}</p>
              <p>
                Een locatie in Noord-Brabant is relevant voor webshops die vanuit Nederland
                Europese en internationale orders willen verwerken, dicht bij de
                grensregio&apos;s en met toegang tot meerdere vervoerders. Exacte
                levertijden en vervoerskosten worden bevestigd tijdens de kwalificatie.
              </p>
            </div>
            <address className="mt-6 rounded-xl border border-border bg-surface p-5 not-italic">
              <p className="font-semibold text-ink">Vareya BV</p>
              <p className="mt-1 text-muted">Bagven Park 6</p>
              <p className="text-muted">4838 EH Breda, Nederland</p>
              <p className="mt-3 text-muted">
                <a href="tel:+31619123472" className="hover:text-primary">+31 6 19 12 34 72</a>
                {" · "}
                <a href="mailto:info@vareya.ai" className="hover:text-primary">info@vareya.ai</a>
              </p>
            </address>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-ink sm:text-3xl">
              Voor wie is dit fulfilmentcentrum?
            </h2>
            <div className="mt-6 space-y-4 leading-7 text-muted">
              <p>{CLAIM_VOLUME}</p>
              <p>{APPROVED_FACTS.specialises}</p>
              <p>{APPROVED_FACTS.parcelSize}</p>
              <p>{CLAIM_RETURNS}</p>
              <p>
                Verwerkt Vareya ook orders in het weekend? Ja — {CLAIM_WEEKEND}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integraties + proces */}
      <section className="bg-surface py-14 sm:py-20" aria-labelledby="integraties">
        <div className="container-site">
          <h2 id="integraties" className="text-2xl font-bold text-ink sm:text-3xl">
            Integraties en werkwijze
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-border bg-white p-6">
              <h3 className="font-semibold text-ink">Webshop-koppelingen</h3>
              <p className="mt-3 text-sm leading-6 text-muted">
                {APPROVED_FACTS.shopify} {APPROVED_FACTS.amazonFbm}
              </p>
            </div>
            <div className="rounded-xl border border-border bg-white p-6">
              <h3 className="font-semibold text-ink">Warehouse-software</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{CLAIM_SHIPHERO}</p>
            </div>
            <div className="rounded-xl border border-border bg-white p-6">
              <h3 className="font-semibold text-ink">Verzending</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{CLAIM_CARRIER_SELECTION}</p>
            </div>
          </div>

          <h2 className="mt-14 text-2xl font-bold text-ink sm:text-3xl">
            Zo verloopt de samenwerking
          </h2>
          <ol className="mt-8 grid gap-4 md:grid-cols-4">
            {[
              ["1", "Kwalificatie", "Deel volume, productcategorie, verkoopkanalen en doelmarkten via de scan. Product fit wordt bevestigd tijdens de kwalificatie."],
              ["2", "Onboarding", "Koppel je verkoopkanaal en spreek de instroom van voorraad af met Vareya."],
              ["3", "Inbound voorraad", "Stuur voorraad naar het fulfilmentcentrum in Breda."],
              ["4", "Pick, pack en verzending", "Orders worden gepickt, verpakt en overgedragen aan de relevante vervoerder."],
            ].map(([nr, title, body]) => (
              <li key={nr} className="rounded-xl border border-border bg-white p-5">
                <p className="font-mono text-sm font-semibold text-accent">{nr}</p>
                <h3 className="mt-2 font-semibold text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Kosten */}
      <section className="py-14 sm:py-20" aria-labelledby="kosten">
        <div className="container-site max-w-4xl">
          <h2 id="kosten" className="text-2xl font-bold text-ink sm:text-3xl">
            Wat bepaalt de fulfilmentkosten?
          </h2>
          <div className="mt-6 space-y-4 leading-7 text-muted">
            <p>
              De kosten van fulfilment hangen af van het orderaantal, het pakketprofiel
              (afmetingen en gewicht), de verdeling van bestemmingen, de opslagbehoefte,
              de webshop-koppeling en de afgesproken serviceniveaus.
            </p>
            <p>
              Vareya&apos;s fulfilmenttarieven zijn vast en all-in per overeenkomst — geen
              verborgen kosten bovenop wat de overeenkomst vastlegt. De scan toont geen
              prijs; tarieven en servicelevels worden per klant afgesproken tijdens de
              kwalificatie.
            </p>
            <Link href="/knowledge/fulfilment-cost-drivers/" className="font-semibold text-primary hover:underline">
              Lees meer over de kostenfactoren van fulfilment →
            </Link>
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section className="bg-surface py-14 sm:py-20" aria-labelledby="checklist">
        <div className="container-site max-w-4xl">
          <h2 id="checklist" className="text-2xl font-bold text-ink sm:text-3xl">
            Checklist: kies je fulfilmentcentrum in Noord-Brabant
          </h2>
          <ul className="mt-8 space-y-3 rounded-2xl border border-border bg-white p-6 text-muted">
            {[
              "Ligt het fulfilmentcentrum op een echte locatie die je kunt verifiëren?",
              "Komen de webshop-integraties overeen met jouw platform?",
              "Welke vervoerders en bestemmingen worden ondersteund?",
              "Hoe zijn de tarieven opgebouwd — en wat is all-in?",
              "Hoe worden retouren afgehandeld?",
              "Wordt product fit vóór de start bevestigd?",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FAQ items={FAQ_ITEMS} />

      {/* CTA */}
      <section className="bg-primary py-16 text-white" aria-labelledby="cta">
        <div className="container-site max-w-3xl text-center">
          <h2 id="cta" className="text-3xl font-bold">
            Check of jouw webshop past bij Vareya
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/75">
            De fulfilment scan verzamelt de praktische informatie die Vareya nodig heeft
            voor een eerste fit-review. Product fit wordt bevestigd tijdens de kwalificatie.
          </p>
          <Link
            href="/free-rate-scan/"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-lg bg-white px-6 py-3 font-semibold text-primary transition-colors hover:bg-slate-100"
          >
            {CLAIM_PRIMARY_CTA}
          </Link>
        </div>
      </section>
    </>
  );
}
