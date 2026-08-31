import Image from "next/image";
import { MapPin } from "lucide-react";
import { getTranslations } from "next-intl/server";

export default async function GlobalNetwork() {
  const t = await getTranslations("network");
  const hubs = t.raw("hubs") as { city: string; role: string }[];

  return (
    <section
      id="network"
      className="section-anchor relative overflow-hidden bg-navy py-20 text-white md:py-28"
    >
      <div className="absolute inset-0 opacity-25">
        <Image
          src="/images/marketing.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-navy/85" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan">
            {t("eyebrow")}
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-base text-white/70 md:text-lg">{t("subtitle")}</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {hubs.map((hub) => (
            <div
              key={hub.city}
              className="border border-white/15 bg-white/5 px-6 py-8 backdrop-blur-sm"
            >
              <MapPin className="text-cyan" size={22} aria-hidden />
              <p className="mt-4 font-display text-2xl font-semibold">{hub.city}</p>
              <p className="mt-1 text-sm text-white/65">{hub.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
