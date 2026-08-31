import { getTranslations } from "next-intl/server";

export default async function Industries() {
  const t = await getTranslations("industries");
  const items = t.raw("items") as string[];

  return (
    <section id="industries" className="section-anchor bg-surface py-20 md:py-28">
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

        <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <li
              key={item}
              className="border border-line bg-white px-5 py-4 text-sm font-semibold text-navy"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
