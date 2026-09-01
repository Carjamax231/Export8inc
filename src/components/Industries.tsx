import { getTranslations } from "next-intl/server";
import IndustryCard from "@/components/IndustryCard";
import SectionCta from "@/components/SectionCta";

type IndustryItem = {
  title: string;
  description: string;
};

export default async function Industries() {
  const t = await getTranslations("industries");
  const items = t.raw("items") as IndustryItem[];

  return (
    <section id="industries" className="section-anchor overflow-visible bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
            {t("eyebrow")}
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-navy md:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-base text-muted md:text-lg">{t("subtitle")}</p>
        </div>

        <ul className="mt-12 grid gap-4 pt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {items.map((item, index) => (
            <IndustryCard
              key={item.title}
              id={String(index)}
              title={item.title}
              description={item.description}
            />
          ))}
        </ul>

        <div className="mt-10 flex justify-center">
          <SectionCta href="#quote">{t("cta")}</SectionCta>
        </div>
      </div>
    </section>
  );
}
