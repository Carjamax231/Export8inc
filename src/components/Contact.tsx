import { Mail, MapPin, Phone, AtSign } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { CONTACT, SOCIAL } from "@/lib/constants";

export default async function Contact() {
  const t = await getTranslations("contact");

  return (
    <section id="contact" className="section-anchor bg-surface py-20 md:py-28">
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

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="border border-line bg-white p-5">
            <MapPin className="text-cyan-dark" size={20} aria-hidden />
            <p className="mt-3 text-xs font-bold uppercase tracking-wide text-muted">
              {t("addressLabel")}
            </p>
            <p className="mt-1 text-sm font-semibold text-navy">{CONTACT.address}</p>
          </div>
          <div className="border border-line bg-white p-5">
            <Mail className="text-cyan-dark" size={20} aria-hidden />
            <p className="mt-3 text-xs font-bold uppercase tracking-wide text-muted">
              {t("emailLabel")}
            </p>
            <a
              href={`mailto:${CONTACT.email}`}
              className="mt-1 block text-sm font-semibold text-navy hover:text-cyan-dark"
            >
              {CONTACT.email}
            </a>
          </div>
          <div className="border border-line bg-white p-5">
            <Phone className="text-cyan-dark" size={20} aria-hidden />
            <p className="mt-3 text-xs font-bold uppercase tracking-wide text-muted">
              {t("phoneLabel")}
            </p>
            <a
              href={`tel:${CONTACT.phone.replace(/[^\d+]/g, "")}`}
              className="mt-1 block text-sm font-semibold text-navy hover:text-cyan-dark"
            >
              {CONTACT.phone}
            </a>
          </div>
          <div className="border border-line bg-white p-5">
            <AtSign className="text-cyan-dark" size={20} aria-hidden />
            <p className="mt-3 text-xs font-bold uppercase tracking-wide text-muted">
              {t("socialLabel")}
            </p>
            <a
              href={SOCIAL.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 block text-sm font-semibold text-navy hover:text-cyan-dark"
            >
              @export8inc
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
