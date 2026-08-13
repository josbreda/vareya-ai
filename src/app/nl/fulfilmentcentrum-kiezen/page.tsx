import type { Metadata } from "next";
import Link from "next/link";
import { CLAIM_PRIMARY_CTA, CLAIM_VOLUME } from "@/content/claims";

export const metadata: Metadata = {
  title: "Hoe kies je een fulfilmentcentrum in Noord-Brabant? | Vareya",
  description:
    "Een praktisch stappenplan voor webshops die een fulfilmentcentrum in Noord-Brabant willen kiezen: locatie, integraties, vervoerders, tarieven en retouren.",
  alternates: { canonical: "https://vareya.ai/nl/fulfilmentcentrum-kiezen/" },
};

export default function NlKiezenPage() {
  return (
    <div className="container-site max-w-3xl py-14 sm:py-20">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-primary">
        Gids
      </p>
      <h1 className="text-3xl font-bold text-ink sm:text-4xl">
        Hoe kies je een fulfilmentcentrum in Noord-Brabant?
      </h1>
      <p className="mt-5 text-lg leading-8 text-muted">
        Direct antwoord: vergelijk fulfilmentcentra op zes punten — echte locatie,
        webshop-integraties, vervoerders en bestemmingen, tariefopbouw, retouren en
        product fit. Een goed fulfilmentcentrum bevestigt de operationele fit vóór je
        voorraad verhuist, niet erna.
      </p>

      <div className="mt-12 space-y-10">
        {[
          ["1", "Check de echte locatie",
            "Een fulfilmentcentrum heeft een verifieerbaar adres. Kijk of het pand echt een magazijn is, wie er opereert en of de locatie klopt met wat er gecommuniceerd wordt. Vareya opereert vanuit Bagven Park 6, 4838 EH Breda, Noord-Brabant."],
          ["2", "Vergelijk de webshop-integraties",
            "Koppelt het fulfilmentcentrum met jouw platform? Vareya biedt een Shopify-integratie en Amazon FBM-fulfilment, en gebruikt ShipHero als warehouse management systeem, volledig geïntegreerd met Shopify."],
          ["3", "Check vervoerders en bestemmingen",
            "Welke vervoerders gebruikt het centrum en naar welke landen wordt verzonden? Vareya werkt met PostNL als strategische partner en hoofdvervoerder binnen Nederland, met DHL, Asendia, FedEx en Royal Mail voor andere routes. Het verzendsysteem kan automatisch een passende vervoerder selecteren op basis van bestemming en pakketkenmerken."],
          ["4", "Lees de tariefopbouw",
            "Zijn de tarieven all-in of komen er verborgen kosten bij? De fulfilmenttarieven van Vareya zijn vast en all-in per overeenkomst — geen verborgen kosten bovenop wat de overeenkomst vastlegt."],
          ["5", "Vraag naar retouren",
            "Hoe worden retouren afgehandeld? Returns handling is beschikbaar bij Vareya; neem contact op om het gewenste retourenproces te bespreken."],
          ["6", "Bevestig product fit",
            CLAIM_VOLUME + " Vareya is gespecialiseerd in cosmetics, supplements, telefoonhoesjes, accessoires en andere kleinere pakketten. Product fit wordt bevestigd tijdens de kwalificatie."],
        ].map(([nr, title, body]) => (
          <section key={nr} aria-labelledby={`stap-${nr}`}>
            <p className="font-mono text-sm font-semibold tracking-[0.16em] text-accent">{nr}</p>
            <h2 id={`stap-${nr}`} className="mt-1 text-2xl font-bold text-ink">{title}</h2>
            <p className="mt-3 leading-8 text-muted">{body}</p>
          </section>
        ))}
      </div>

      <div className="mt-14 rounded-2xl border border-border bg-surface p-8">
        <h2 className="text-xl font-bold text-ink">Checklist bij je vergelijking</h2>
        <ul className="mt-4 space-y-2 text-muted">
          <li>✓ Echt adres geverifieerd</li>
          <li>✓ Integratie met jouw webshop-platform</li>
          <li>✓ Vervoerders en bestemmingen helder</li>
          <li>✓ All-in tariefstructuur zonder verrassingen</li>
          <li>✓ Retourenproces afgesproken</li>
          <li>✓ Product fit vóór de start bevestigd</li>
        </ul>
      </div>

      <div className="mt-12 rounded-2xl bg-primary p-8 text-white">
        <h2 className="text-2xl font-bold">Check jouw fit met Vareya</h2>
        <p className="mt-3 leading-7 text-white/80">
          De fulfilment scan verzamelt de praktische informatie die Vareya nodig heeft voor
          een eerste fit-review — zonder verkoopgesprek als eerste stap.
        </p>
        <Link
          href="/fulfilment-scan/"
          className="mt-6 inline-flex min-h-12 items-center justify-center rounded-lg bg-white px-6 py-3 font-semibold text-primary transition-colors hover:bg-slate-100"
        >
          {CLAIM_PRIMARY_CTA}
        </Link>
      </div>
    </div>
  );
}
