import { ArrowRight, PackageCheck, FileCheck2 } from "lucide-react";
import { getTranslations } from "next-intl/server";

const ICONS = [ArrowRight, PackageCheck, FileCheck2] as const;

export default async function Solutions() {
  const t = await getTranslations("solutions");
  const items = t.raw("items") as { title: string; description: string }[];

  return (
    <section id="solutions" className="section-anchor bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-dark">
            {t("eyebrow")}
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy md:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-base text-muted md:text-lg">{t("subtitle")}</p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {items.map((item, index) => {
            const Icon = ICONS[index] ?? ArrowRight;
            return (
              <div key={item.title} className="border-t-2 border-cyan pt-6">
                <Icon className="text-navy" size={24} aria-hidden />
                <h3 className="mt-4 font-display text-xl font-semibold text-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
