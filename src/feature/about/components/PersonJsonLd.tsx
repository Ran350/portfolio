import { SITE_URL } from "@/lib/metadata";

import { accounts } from "../store/about";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ran350",
  url: SITE_URL,
  image: `${SITE_URL}/myicon.jpg`,
  sameAs: accounts.map((account) => account.url),
};

/** 検索エンジン向けの構造化データ (schema.org Person) */
export const PersonJsonLd = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
    }}
  />
);
