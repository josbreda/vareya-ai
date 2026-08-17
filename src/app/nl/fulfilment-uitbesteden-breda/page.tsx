import type { Metadata } from "next";
import Link from "next/link";
import {
  CLAIM_PRIMARY_CTA,
  CLAIM_VOLUME,
  CLAIM_RETURNS,
  APPROVED_FACTS,
} from "@/content/claims";

export const metadata: Metadata = {
  title: "Fulfilment uitbesteden in Breda: stappenplan voor webshops | Vareya",
  description:
    "Stappenplan voor webshops die fulfilment willen uitbesteden in Breda: voorraad, software, pakketprofiel, onboarding en retouren.",
  alternates: { canonical: "https://vareya.ai/nl/fulfilment-uitbesteden-breda/" },
};

export default function NlUitbestedenPage() {
  return (
    <div className="container-site max-w-3xl py-14 sm:py-20">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-primary">
        Gids
      </p>
      <h1 className="text-3xl font-bold text-ink sm:text-4xl">
        Fulfilment uitbesteden in Breda: stappenplan voor webshops
      </h1>
      <p className="mt-5 text-lg leading-8 text-muted">
        Direct antwoord: uitbesteden verloopt in vijf stappen — kwalificatie, onboarding,
        inbound voorraad, pick/pack/verzending en evaluatie. Het belangrijkste: bevestig
        product fit vóór je voorraad naar het fulfilmentcentrum in Breda verhuist.
      </p>

      <div className="mt-12 space-y-10">
        {[
          ["1", "Kwalificatie",
            "Deel volume, productcategorie, verkoopkanalen en doelmarkten via de fulfilment scan. " + CLAIM_VOLUME + " Product fit wordt bevestigd tijdens de kwalificatie."],
          ["2", "Onboarding",
            "Koppel je verkoopkanaal en spreek de instroom van voorraad af met Vareya. Vareya gebruikt ShipHero als warehouse management systeem, volledig geïntegreerd met Shopify. " + APPROVED_FACTS.shopify + " " + APPROVED_FACTS.amazonFbm],
          ["3", "Inbound voorraad",
            "Stuur voorraad naar het fulfilmentcentrum aan " + APPROVED_FACTS.address + ". Spreek aanlevermomenten, SKU-labels en verpakkingsinstructies af."],
          ["4", "Pick, pack en verzending",
            "Orders worden gepickt, verpakt en overgedragen aan de relevante vervoerder. PostNL is de strategische partner en hoofdvervoerder binnen Nederland; DHL, Asendia, FedEx en Royal Mail verzorgen andere routes. " + CLAIM_RETURNS],
          ["5", "Evaluatie",
            "Bekijk uitzonderingen, voorraadverschillen en retouren tegen het afgesproken proces. Verbeteringen worden bewust en traceerbaar doorgevoerd."],
        ].map(([nr, title, body]) => (
          <section key={nr} aria-labelledby={`stap-${nr}`}>
            <p className="font-mono text-sm font-semibold tracking-[0.16em] text-accent">{nr}</p>
            <h2 id={`stap-${nr}`} className="mt-1 text-2xl font-bold text-ink">{title}</h2>
            <p className="mt-3 leading-8 text-muted">{body}</p>
          </section>
        ))}
      </div>

      <div className="mt-14 rounded-2xl border border-border bg-surface p-8">
        <h2 className="text-xl font-bold text-ink">Voorbereidingschecklist</h2>
        <ul className="mt-4 space-y-2 text-muted">
          <li>✓ Recente orderdata per markt</li>
          <li>✓ SKU-bestand met pakketkenmerken</li>
          <li>✓ Verkoopkanalen en gewenste koppelingen</li>
          <li>✓ Retourinstructies</li>
          <li>✓ Realistische startperiode</li>
        </ul>
      </div>

      <div className="mt-12 rounded-2xl bg-primary p-8 text-white">
        <h2 className="text-2xl font-bold">Start met de scan</h2>
        <p className="mt-3 leading-7 text-white/80">
          De fulfilment scan is de eerste stap van het stappenplan — hij verzamelt de
          informatie die de kwalificatie nodig heeft.
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
