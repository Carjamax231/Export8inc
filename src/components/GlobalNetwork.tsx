import { MapPin } from "lucide-react";
import { getTranslations } from "next-intl/server";
import SectionCta from "@/components/SectionCta";
import {
  FlagSpain,
  FlagUSA,
  FlagVenezuela,
} from "@/components/icons/Flags";

const HUB_FLAGS = [FlagUSA, FlagSpain, FlagVenezuela] as const;

export default async function GlobalNetwork() {
  const t = await getTranslations("network");
  const hubs = t.raw("hubs") as { city: string; role: string }[];

  return (
    <section
      id="network"
      className="section-anchor bg-navy py-20 text-white md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
            {t("eyebrow")}
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight md:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-base text-white/75 md:text-lg">{t("subtitle")}</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {hubs.map((hub, index) => {
            const Flag = HUB_FLAGS[index] ?? FlagVenezuela;
            return (
              <div
                key={hub.city}
                className="rounded-xl border border-white/15 bg-navy-deep px-6 py-8"
              >
                <div className="flex items-center gap-3">
                  <Flag className="h-5 w-8 shrink-0" />
                  <MapPin className="text-blue-400" size={20} aria-hidden />
                </div>
                <p className="mt-4 font-heading text-2xl font-semibold">
                  {hub.city}
                </p>
                <p className="mt-1 text-sm text-white/70">{hub.role}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <SectionCta href="#contact" variant="light">
            {t("cta")}
          </SectionCta>
        </div>
      </div>
    </section>
  );
}
