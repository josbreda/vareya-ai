import Link from "@/i18n/Link";
import { getT } from "@/i18n/server";

export async function WarehouseMedia({ compact = false }: { compact?: boolean }) {
  const t = await getT();
  return <section className="border-y border-border bg-surface py-14 sm:py-20" aria-labelledby="warehouse-media-heading">
    <div className="container-site">
      <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">{t("Inside VareYa")}</p>
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <h2 id="warehouse-media-heading" className="max-w-2xl text-3xl font-bold text-ink">{t("From your stock to a packed order")}</h2>
        <Link href="/knowledge/norwegian-lab-belean-letterbox-example/" className="font-semibold text-primary underline underline-offset-4">{t("See the BeLean packing example")}</Link>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <figure className="overflow-hidden rounded-2xl border border-border bg-white">
          <video controls playsInline preload="none" poster="/videos/warehouse-breda-poster.jpg" width="1280" height="720" className="aspect-video w-full bg-slate-950 object-contain" aria-label={t("Warehouse video from Breda, without sound")}>
            <source src="/videos/warehouse-breda.mp4" type="video/mp4" />
            <a href="/videos/warehouse-breda.mp4">{t("Watch the warehouse video")}</a>
          </video>
          <figcaption className="p-5"><h3 className="text-lg font-semibold">{t("A look inside the warehouse")}</h3><p className="mt-2 text-sm text-muted">{t("Pallet storage and warehouse aisles in Breda. Original warehouse footage; no sound.")}</p></figcaption>
        </figure>
        <figure className="overflow-hidden rounded-2xl border border-border bg-white">
          <video controls playsInline preload="none" poster="/videos/vareya-introduction-en-poster.jpg" width="1280" height="720" className="aspect-video w-full bg-slate-950 object-contain" aria-label={t("VareYa introduction animation, English narration")}>
            <source src="/videos/vareya-introduction-en.mp4" type="video/mp4" />
            <a href="/videos/vareya-introduction-en.mp4">{t("Watch the VareYa introduction")}</a>
          </video>
          <figcaption className="p-5"><h3 className="text-lg font-semibold">{t("Meet VareYa in 87 seconds")}</h3><p className="mt-2 text-sm text-muted">{t("Brand introduction with English narration. Your products, routes and handling requirements are confirmed before onboarding.")}</p></figcaption>
        </figure>
      </div>
      {!compact && <figure className="mt-6 overflow-hidden rounded-2xl border border-border bg-white">
        {/* eslint-disable-next-line @next/next/no-img-element -- original owner-supplied artwork without cropping */}
        <img src="/images/p1/fulfilment-since-2016.jpg" alt="VareYa — eCommerce Fulfilment and Shipping since 2016" width={1280} height={853} loading="lazy" className="h-auto w-full object-contain" />
      </figure>}
      {!compact && <div className="mt-6 grid gap-6 sm:grid-cols-3">
        {[
          ["/images/p1/warehouse-racks-20261112.webp", "Numbered pallet-storage racks, supplied by VareYa"],
          ["/images/phase6/warehouse-packing.jpg", "Packing area with equipment and materials in the VareYa warehouse"],
          ["/images/phase6/warehouse-loading.jpg", "Warehouse loading area and stored cartons"],
        ].map(([src, alt]) => <figure key={src} className="overflow-hidden rounded-xl border border-border bg-white">
          {/* eslint-disable-next-line @next/next/no-img-element -- supplied warehouse photographs */}
          <img src={src} alt={t(alt)} width={1280} height={853} loading="lazy" decoding="async" className="aspect-[4/3] w-full object-cover" />
        </figure>)}
      </div>}
    </div>
  </section>;
}
