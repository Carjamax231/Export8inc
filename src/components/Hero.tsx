"use client";

import { MessageCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import { WHATSAPP_NUMBER } from "@/lib/constants";

export default function Hero() {
  const t = useTranslations("hero");
  const tw = useTranslations("whatsapp");

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(tw("message"))}`;

  return (
    <section
      id="home"
      className="section-anchor relative flex min-h-[100svh] items-end overflow-hidden bg-navy-deep"
    >
      <div
        className="absolute right-0 top-0 h-full w-1/3 bg-blue-600/10"
        aria-hidden
      />
      <div
        className="absolute bottom-0 left-0 h-1 w-full bg-blue-600"
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-20 pt-32 md:px-6 md:pb-28 md:pt-36">
        <p className="animate-fade-up font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
          {t("brand")}
        </p>
        <h1 className="animate-fade-up mt-4 max-w-3xl font-heading text-xl font-medium leading-snug text-white/95 sm:text-2xl md:text-3xl [animation-delay:120ms]">
          {t("title")}
        </h1>
        <p className="animate-fade-up mt-4 max-w-xl text-base leading-relaxed text-white/80 md:text-lg [animation-delay:220ms]">
          {t("subtitle")}
        </p>
        <div className="animate-fade-up mt-8 [animation-delay:320ms]">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-lg bg-blue-600 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-colors duration-300 hover:bg-blue-700"
          >
            <MessageCircle size={18} aria-hidden />
            {t("cta")}
          </a>
        </div>
      </div>
    </section>
  );
}
