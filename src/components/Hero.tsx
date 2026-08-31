"use client";

import Image from "next/image";
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
      <Image
        src="/images/hero-logistics.jpg"
        alt=""
        fill
        priority
        className="object-cover object-center animate-fade-in"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-navy-deep/40" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-20 pt-32 md:px-6 md:pb-28 md:pt-36">
        <p className="animate-fade-up font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
          {t("brand")}
        </p>
        <h1 className="animate-fade-up mt-4 max-w-3xl font-display text-xl font-medium leading-snug text-white/95 sm:text-2xl md:text-3xl [animation-delay:120ms]">
          {t("title")}
        </h1>
        <p className="animate-fade-up mt-4 max-w-xl text-base leading-relaxed text-white/75 md:text-lg [animation-delay:220ms]">
          {t("subtitle")}
        </p>
        <div className="animate-fade-up mt-8 [animation-delay:320ms]">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-md bg-cyan px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-navy-deep transition-colors hover:bg-cyan-dark hover:text-white"
          >
            <MessageCircle size={18} aria-hidden />
            {t("cta")}
          </a>
        </div>
      </div>
    </section>
  );
}
