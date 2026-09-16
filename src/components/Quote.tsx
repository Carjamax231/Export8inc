import { getTranslations } from "next-intl/server";
import QuoteForm from "@/components/QuoteForm";

export default async function Quote() {
  const t = await getTranslations("quote");

  return (
    <section id="quote" className="section-anchor bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="rounded-2xl bg-navy px-6 py-14 text-white md:px-16 md:py-20">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
              {t("eyebrow")}
            </p>
            <h2 className="mx-auto mt-3 max-w-2xl font-heading text-3xl font-semibold tracking-tight md:text-4xl">
              {t("title")}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-white/75 md:text-lg">
              {t("subtitle")}
            </p>
          </div>

          <QuoteForm />

          <p className="mt-6 text-center text-xs text-white/50">{t("note")}</p>
        </div>
      </div>
    </section>
  );
}
