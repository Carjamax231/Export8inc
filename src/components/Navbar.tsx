"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";

const NAV_ITEMS = [
  { href: "#home", key: "home" as const },
  { href: "#about", key: "about" as const },
  { href: "#services", key: "services" as const },
  { href: "#solutions", key: "solutions" as const },
  { href: "#network", key: "network" as const },
  { href: "#industries", key: "industries" as const },
  { href: "#quote", key: "quote" as const },
  { href: "#contact", key: "contact" as const },
];

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const otherLocale = locale === "es" ? "en" : "es";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-navy/95 shadow-lg shadow-navy/20 backdrop-blur-md"
          : "bg-navy/80 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <a href="#home" className="flex shrink-0 items-center gap-2.5">
          <Image
            src="/images/logo-diamond.jpg"
            alt="Export 8 Inc."
            width={36}
            height={36}
            className="h-9 w-9 rounded-sm object-cover"
            priority
          />
          <span className="font-display text-sm font-semibold tracking-wide text-white md:text-base">
            Export 8 Inc.
          </span>
        </a>

        <nav className="hidden items-center gap-1 xl:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="rounded-md px-2.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-white/80 transition-colors hover:bg-white/10 hover:text-white"
            >
              {t(item.key)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={pathname}
            locale={otherLocale}
            className="inline-flex items-center gap-1 rounded-md border border-cyan/40 bg-cyan/10 px-2.5 py-1.5 text-xs font-bold tracking-wide text-cyan transition-colors hover:bg-cyan hover:text-navy-deep"
            aria-label={`Switch to ${otherLocale.toUpperCase()}`}
          >
            <span className={locale === "en" ? "text-white" : "opacity-60"}>
              EN
            </span>
            <span className="opacity-40">/</span>
            <span className={locale === "es" ? "text-white" : "opacity-60"}>
              ES
            </span>
          </Link>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-white xl:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? t("closeMenu") : t("openMenu")}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div
        className={`border-t border-white/10 bg-navy xl:hidden ${
          open ? "block animate-fade-in" : "hidden"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.key}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/5 py-3 text-sm font-semibold uppercase tracking-wide text-white/90"
            >
              {t(item.key)}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
