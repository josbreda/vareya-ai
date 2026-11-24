import type { Metadata } from "next";
import { ProductFitCheck } from "@/components/forms/ProductFitCheck";
import { getT } from "@/i18n/server";
import { localizePageMetadata } from "@/i18n/localize-metadata";
import { buildMetadata } from "@/lib/seo";
export async function generateMetadata(): Promise<Metadata> {return localizePageMetadata(buildMetadata("/product-fit-check/"),"/product-fit-check/");}
export default async function Page(){const t=await getT();return <><section className="photo-green bg-primary py-14 text-white"><div className="container-site max-w-3xl"><p className="mb-3 text-sm font-semibold">{t("PRODUCT FIT")}</p><h1 className="text-4xl font-bold">{t("Check Your Product Fit")}</h1><p className="mt-4 text-lg">{t("Find out whether your packed order looks compatible with Vareya’s compact fulfilment focus.")}</p></div></section><section className="py-12"><div className="container-site max-w-3xl"><ProductFitCheck/></div></section></>;}
