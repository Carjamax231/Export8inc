import { getTranslations } from "next-intl/server";
import { CONTACT, SITE_URL, SOCIAL } from "@/lib/constants";

const toE164 = (phone: string) => phone.replace(/[^+\d]/g, "");

export default async function StructuredData({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "meta" });
  const phones = [...CONTACT.phonesUsa, ...CONTACT.phonesVenezuela].map(toE164);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}/#organization`,
        name: "Export 8 Inc.",
        alternateName: ["Export8", "Export 8"],
        url: `${SITE_URL}/${locale}`,
        logo: `${SITE_URL}/images/logo-export8.png`,
        image: `${SITE_URL}/images/og-export8.jpg`,
        description: t("description"),
        foundingDate: "2005",
        email: CONTACT.email,
        telephone: phones[0],
        address: {
          "@type": "PostalAddress",
          streetAddress: "8440 NW 66TH ST",
          addressLocality: "Miami",
          addressRegion: "FL",
          postalCode: "33166",
          addressCountry: "US",
        },
        contactPoint: phones.map((telephone) => ({
          "@type": "ContactPoint",
          telephone,
          contactType: "customer service",
          availableLanguage: ["es", "en"],
        })),
        sameAs: Object.values(SOCIAL),
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: "Export 8 Inc.",
        alternateName: "Export8",
        url: `${SITE_URL}/`,
        inLanguage: locale,
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
