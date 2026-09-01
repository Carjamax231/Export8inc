import { CheckCircle2 } from "lucide-react";
import { getTranslations } from "next-intl/server";
import SectionCta from "@/components/SectionCta";

export default async function About() {
  const t = await getTranslations("about");
  const points = t.raw("points") as string[];

  return (
    <section id="about" className="section-anchor bg-white py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-2 md:items-center md:gap-16 md:px-6">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
            {t("eyebrow")}
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-navy md:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
            {t("body")}
          </p>
          <div className="mt-8">
            <SectionCta href="#services" variant="outline">
              {t("cta")}
            </SectionCta>
          </div>
        </div>

        <ul className="space-y-4">
          {points.map((point) => (
            <li
              key={point}
              className="flex items-start gap-3 rounded-lg border-l-2 border-blue-600 bg-slate-50 px-4 py-4"
            >
              <CheckCircle2
                className="mt-0.5 shrink-0 text-blue-600"
                size={20}
                aria-hidden
              />
              <span className="text-sm font-medium text-navy md:text-base">
                {point}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
