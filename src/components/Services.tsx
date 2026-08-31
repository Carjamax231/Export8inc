import { Plane, Ship, ShoppingCart, Boxes } from "lucide-react";
import { getTranslations } from "next-intl/server";

const ICONS = [Plane, Ship, ShoppingCart, Boxes] as const;

export default async function Services() {
  const t = await getTranslations("services");
  const items = t.raw("items") as { title: string; description: string }[];

  return (
    <section id="services" className="section-anchor bg-surface py-20 md:py-28">
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

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => {
            const Icon = ICONS[index] ?? Boxes;
            return (
              <article
                key={item.title}
                className="border border-line bg-white p-6 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center bg-navy text-cyan">
                  <Icon size={22} aria-hidden />
                </div>
                <h3 className="font-display text-lg font-semibold text-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
