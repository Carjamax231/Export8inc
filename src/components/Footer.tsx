import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { CONTACT, SOCIAL } from "@/lib/constants";
import InstagramIcon from "@/components/icons/InstagramIcon";

export default async function Footer() {
  const t = await getTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-navy-deep text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-[1.6fr_1fr] md:items-start md:gap-16 md:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
          <Image
            src="/images/logo-export8.png"
            alt="Export 8 Inc."
            width={800}
            height={238}
            className="h-16 w-auto object-contain sm:h-20 md:h-24"
            priority
          />
          <div className="min-w-0">
            <p className="font-heading text-lg font-semibold">Export 8 Inc.</p>
            <p className="mt-1 text-sm text-white/60">{t("tagline")}</p>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/55">
              {CONTACT.address}
              <br />
              {CONTACT.email}
              <br />
              {CONTACT.phonesUsa.join(" · ")}
              <br />
              {CONTACT.phonesVenezuela.join(" · ")}
            </p>
          </div>
        </div>

        <div className="md:justify-self-end md:text-right">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-400">
            {t("follow")}
          </p>
          <a
            href={SOCIAL.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white/85 transition-colors hover:text-blue-400 md:justify-end"
          >
            <InstagramIcon size={18} />
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
