#!/bin/bash
for u in \
  "https://vareya.ai/european-fulfilment-for-australian-brands/" \
  "https://vareya.ai/european-fulfilment-for-new-zealand-brands/" \
  "https://vareya.ai/shipping-from-europe-to-australia-new-zealand/"; do
  echo "=== $u ==="
  html=$(curl -s --max-time 30 "$u")
  echo "title: $(echo "$html" | grep -o '<title>[^<]*' | head -1 | cut -c8-70)"
  echo "canonical: $(echo "$html" | grep -o 'rel="canonical" href="[^"]*"' | head -1)"
  echo "H1: $(echo "$html" | grep -o '<h1[^>]*>[^<]*</h1>' | head -1 | sed 's/<[^>]*>//g' | cut -c1-70)"
  echo "FAQPage-schema: $(echo "$html" | grep -c 'FAQPage')"
  echo "zichtbare-FAQ-kop: $(echo "$html" | grep -c 'Frequently asked questions')"
  echo "scan-CTAs: $(echo "$html" | grep -o '/free-rate-scan/' | wc -l)"
  echo "OG-title: $(echo "$html" | grep -c 'property="og:title"')"
  echo "placeholder-check: $(echo "$html" | grep -icE 'lorem ipsum|\[todo\]|TODO-PLACEHOLDER')"
done
echo "=== SITEMAP ==="
curl -s https://vareya.ai/sitemap.xml | grep -c "european-fulfilment-for-australian-brands\|european-fulfilment-for-new-zealand-brands\|shipping-from-europe-to-australia-new-zealand"
echo "=== LLMS.TXT ==="
curl -s https://vareya.ai/llms.txt | grep -c "european-fulfilment-for-australian-brands\|european-fulfilment-for-new-zealand-brands\|shipping-from-europe-to-australia-new-zealand"
