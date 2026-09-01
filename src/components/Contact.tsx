import { Mail, MapPin, Phone } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { CONTACT, SOCIAL } from "@/lib/constants";
import { getGmailComposeUrl } from "@/lib/email";
import SectionCta from "@/components/SectionCta";
import InstagramIcon from "@/components/icons/InstagramIcon";

export default async function Contact() {
  const t = await getTranslations("contact");
  const gmailHref = getGmailComposeUrl(t("emailSubject"), t("emailBody"));

  return (
    <section id="contact" className="section-anchor bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
            {t("eyebrow")}
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-navy md:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-base text-muted md:text-lg">{t("subtitle")}</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <MapPin className="text-blue-600" size={20} aria-hidden />
            <p className="mt-3 text-xs font-bold uppercase tracking-wide text-muted">
              {t("addressLabel")}
            </p>
            <p className="mt-1 text-sm font-semibold leading-relaxed text-navy">
              {CONTACT.address}
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <Mail className="text-blue-600" size={20} aria-hidden />
            <p className="mt-3 text-xs font-bold uppercase tracking-wide text-muted">
              {t("emailLabel")}
            </p>
            <a
              href={gmailHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 block text-sm font-semibold text-navy hover:text-blue-600"
            >
              {CONTACT.email}
            </a>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <Phone className="text-blue-600" size={20} aria-hidden />
            <p className="mt-3 text-xs font-bold uppercase tracking-wide text-muted">
              {t("phoneUsaLabel")}
            </p>
            <ul className="mt-1 space-y-1">
              {CONTACT.phonesUsa.map((phone) => (
                <li key={phone}>
                  <a
                    href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                    className="block text-sm font-semibold text-navy hover:text-blue-600"
                  >
                    {phone}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs font-bold uppercase tracking-wide text-muted">
              {t("phoneVeLabel")}
            </p>
            <ul className="mt-1 space-y-1">
              {CONTACT.phonesVenezuela.map((phone) => (
                <li key={phone}>
                  <a
                    href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                    className="block text-sm font-semibold text-navy hover:text-blue-600"
                  >
                    {phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <InstagramIcon size={20} className="text-blue-600" />
            <p className="mt-3 text-xs font-bold uppercase tracking-wide text-muted">
              {t("socialLabel")}
            </p>
            <a
              href={SOCIAL.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 block text-sm font-semibold text-navy hover:text-blue-600"
            >
              @export8inc
            </a>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <SectionCta href={gmailHref}>{t("ctaEmail")}</SectionCta>
        </div>
      </div>
    </section>
  );
}
