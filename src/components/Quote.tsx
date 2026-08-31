import { MessageCircle } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { WHATSAPP_NUMBER } from "@/lib/constants";

export default async function Quote() {
  const t = await getTranslations("quote");
  const tw = await getTranslations("whatsapp");
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(tw("message"))}`;

  return (
    <section id="quote" className="section-anchor bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="bg-navy px-6 py-14 text-center text-white md:px-16 md:py-20">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan">
            {t("eyebrow")}
          </p>
          <h2 className="mx-auto mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight md:text-4xl">
            {t("title")}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/70 md:text-lg">
            {t("subtitle")}
          </p>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2.5 rounded-md bg-cyan px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-navy-deep transition-colors hover:bg-cyan-dark hover:text-white"
          >
            <MessageCircle size={18} aria-hidden />
            {t("cta")}
          </a>
          <p className="mt-4 text-xs text-white/50">{t("note")}</p>
        </div>
      </div>
    </section>
  );
}
