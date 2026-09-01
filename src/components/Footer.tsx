import Image from "next/image";
import { AtSign } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { CONTACT, SOCIAL } from "@/lib/constants";

export default async function Footer() {
  const t = await getTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-navy-deep text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-[1.4fr_1fr] md:px-6">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo-export8.png"
              alt="Export 8 Inc."
              width={48}
              height={48}
              className="h-12 w-12 object-contain"
            />
            <div>
              <p className="font-heading text-lg font-semibold">Export 8 Inc.</p>
              <p className="text-sm text-white/60">{t("tagline")}</p>
            </div>
          </div>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-white/55">
            {CONTACT.address}
            <br />
            {CONTACT.email}
            <br />
            {CONTACT.phonesUsa.join(" · ")}
            <br />
            {CONTACT.phonesVenezuela.join(" · ")}
          </p>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-400">
            {t("follow")}
          </p>
          <a
            href={SOCIAL.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white/85 transition-colors hover:text-blue-400"
          >
            <AtSign size={18} aria-hidden />
            @export8inc
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl px-4 py-5 text-xs text-white/45 md:px-6">
          © {year} Export 8 Inc. {t("rights")}
        </div>
      </div>
    </footer>
  );
}
