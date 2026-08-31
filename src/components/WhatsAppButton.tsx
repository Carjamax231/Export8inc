"use client";

import { MessageCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import { WHATSAPP_NUMBER } from "@/lib/constants";

export default function WhatsAppButton() {
  const t = useTranslations("whatsapp");
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t("message"))}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("label")}
      className="animate-float-soft fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/25 transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
    >
      <MessageCircle size={26} aria-hidden />
    </a>
  );
}
