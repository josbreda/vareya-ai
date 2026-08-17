import type { Metadata } from "next";
import Link from "next/link";
import { CLAIM_PRIMARY_CTA, CLAIM_VOLUME, APPROVED_FACTS } from "@/content/claims";

export const metadata: Metadata = {
  title: "Wat kost fulfilment in Brabant? | Vareya",
  description:
    "De kostenfactoren van fulfilment in Brabant: orderaantal, pakketprofiel, bestemmingen, opslag, integraties en serviceniveaus. Zonder gegarandeerde tarieven.",
  alternates: { canonical: "https://vareya.ai/nl/wat-kost-fulfilment-brabant/" },
};

export default function NlKostenPage() {
  return (
    <div className="container-site max-w-3xl py-14 sm:py-20">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-primary">
        Gids
      </p>
      <h1 className="text-3xl font-bold text-ink sm:text-4xl">
        Wat kost fulfilment in Brabant?
      </h1>
      <p className="mt-5 text-lg leading-8 text-muted">
        Direct antwoord: er bestaat geen vast bedrag per order voor fulfilment in Brabant.
        De kosten hangen af van zes factoren — orderaantal, pakketprofiel, bestemmingen,
        opslag, integraties en serviceniveaus. Een serieuze offerte rekent met jouw
        gegevens, niet met een standaardprijs.
      </p>

      <div className="mt-12 space-y-10">
        {[
          ["1", "Orderaantal",
            "Het maandelijkse orderaantal bepaalt de schaal van de operatie. " + CLAIM_VOLUME],
          ["2", "Pakketprofiel",
            "Afmetingen en gewicht bepalen handling en vervoerskosten. " + APPROVED_FACTS.parcelSize],
          ["3", "Bestemmingen",
            "De verdeling van orders over landen bepaalt vervoerskeuzes en -kosten. Vareya verzendt binnen Nederland met PostNL als strategische partner en hoofdvervoerder; DHL, Asendia, FedEx en Royal Mail verzorgen andere routes."],
          ["4", "Opslag",
            "Het aantal pallets, het SKU-aantal en het aanvulritme bepalen de benodigde magazijnruimte in Breda."],
          ["5", "Integraties",
            "De webshop-koppeling bepaalt hoe orders, voorraad en retouren stromen. Vareya gebruikt ShipHero, volledig geïntegreerd met Shopify."],
          ["6", "Serviceniveaus",
            "Afspraken over cut-off tijden, weekendverwerking, SLA&apos;s en retouren beïnvloeden de tarieven. Weekend fulfilment (zaterdag- en zondagverwerking) is structureel beschikbaar bij Vareya."],
        ].map(([nr, title, body]) => (
          <section key={nr} aria-labelledby={`factor-${nr}`}>
            <p className="font-mono text-sm font-semibold tracking-[0.16em] text-accent">{nr}</p>
            <h2 id={`factor-${nr}`} className="mt-1 text-2xl font-bold text-ink">{title}</h2>
            <p className="mt-3 leading-8 text-muted">{body}</p>
          </section>
        ))}
      </div>

      <div className="mt-14 rounded-2xl border border-border bg-surface p-8">
        <h2 className="text-xl font-bold text-ink">All-in tarieven</h2>
        <p className="mt-3 leading-7 text-muted">
          De fulfilmenttarieven van Vareya zijn vast en all-in per overeenkomst — geen
          verborgen kosten bovenop wat de overeenkomst vastlegt. De scan toont bewust geen
          prijs: tarieven en servicelevels worden per klant afgesproken en product fit wordt
          bevestigd tijdens de kwalificatie.
        </p>
      </div>

      <div className="mt-12 rounded-2xl bg-primary p-8 text-white">
        <h2 className="text-2xl font-bold">Check jouw fulfilment fit</h2>
        <p className="mt-3 leading-7 text-white/80">
          De scan verzamelt precies de factoren die een offerte nodig heeft — zodat de
          fit-review start vanuit jouw echte operatie.
        </p>
        <Link
          href="/free-rate-scan/"
          className="mt-6 inline-flex min-h-12 items-center justify-center rounded-lg bg-white px-6 py-3 font-semibold text-primary transition-colors hover:bg-slate-100"
        >
          {CLAIM_PRIMARY_CTA}
        </Link>
      </div>
    </div>
  );
}
