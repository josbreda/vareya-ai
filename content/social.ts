/**
 * Official Vareya social accounts.
 *
 * Instagram handle corrected 15 October 2026 per owner input (Raymond):
 * @vareyabv is the old account; the current official account is
 * @vareya_ecommerce_fulfilment.
 *
 * TikTok, X and Pinterest accounts created by the owner 15 October 2026;
 * handles supplied via Jos. YouTube and Google Business follow later if the
 * owner starts them.
 */

export const SOCIAL_PROFILES = [
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/vareya/",
  },
  {
    id: "instagram",
    name: "Instagram",
    url: "https://www.instagram.com/vareya_ecommerce_fulfilment/",
  },
  {
    id: "facebook",
    name: "Facebook",
    url: "https://www.facebook.com/vareyaBV/",
  },
  {
    id: "tiktok",
    name: "TikTok",
    url: "https://www.tiktok.com/@vareya_fulfilment_eu",
  },
  {
    id: "x",
    name: "X",
    url: "https://x.com/VareYa_NL",
  },
  {
    id: "pinterest",
    name: "Pinterest",
    url: "https://www.pinterest.com/Vareya_Ecommerce_Fulfilment/",
  },
] as const;

/**
 * Organization.sameAs — the existing directory profiles plus the two verified
 * social accounts (Instagram, Facebook). Kept duplicate-free.
 */
export const SAME_AS = [
  "https://nl.linkedin.com/company/vareya",
  "https://www.fulfilmentshortlist.com/partijen/vareya",
  "https://www.crunchbase.com/organization/vareya",
  "https://www.creditsafe.com/business-index/en-gb/company/vareya-bv-nl04232551",
  "https://www.instagram.com/vareya_ecommerce_fulfilment/",
  "https://www.facebook.com/vareyaBV/",
  "https://www.tiktok.com/@vareya_fulfilment_eu",
  "https://x.com/VareYa_NL",
  "https://www.pinterest.com/Vareya_Ecommerce_Fulfilment/",
] as const;
