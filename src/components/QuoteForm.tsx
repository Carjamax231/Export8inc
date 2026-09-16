"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";

const ROUTE_VALUES = [
  "usa-venezuela",
  "spain-venezuela",
  "online-shopping",
  "commercial-cargo",
] as const;

type RouteValue = (typeof ROUTE_VALUES)[number];

const ROUTE_PAYLOAD: Record<RouteValue, string> = {
  "usa-venezuela": "USA ➔ Venezuela",
  "spain-venezuela": "España ➔ Venezuela",
  "online-shopping": "Compras Online",
  "commercial-cargo": "Carga Comercial",
};

type Status = "idle" | "submitting" | "success" | "error";

export default function QuoteForm() {
  const t = useTranslations("quote.form");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [route, setRoute] = useState<RouteValue | "">("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!route) return;

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          route: ROUTE_PAYLOAD[route],
        }),
      });

      const data = (await response.json().catch(() => null)) as {
        success?: boolean;
        error?: string;
      } | null;

      if (!response.ok || !data?.success) {
        setStatus("error");
        setErrorMessage(data?.error || t("error"));
        return;
      }

      setName("");
      setEmail("");
      setPhone("");
      setRoute("");
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage(t("error"));
    }
  }

  const inputClass =
    "w-full rounded-lg border border-white/15 bg-navy-deep/60 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30";

  return (
    <form onSubmit={onSubmit} className="mx-auto mt-10 w-full max-w-xl text-left">
      <div className="grid gap-4">
        <div>
          <label htmlFor="quote-name" className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-white/70">
            {t("nameLabel")}
          </label>
          <input
            id="quote-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t("namePlaceholder")}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="quote-email" className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-white/70">
            {t("emailLabel")}
          </label>
          <input
            id="quote-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t("emailPlaceholder")}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="quote-phone" className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-white/70">
            {t("phoneLabel")}
          </label>
          <input
            id="quote-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder={t("phonePlaceholder")}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="quote-route" className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-white/70">
            {t("routeLabel")}
          </label>
          <select
            id="quote-route"
            name="route"
            required
            value={route}
            onChange={(e) => setRoute(e.target.value as RouteValue | "")}
            className={inputClass}
          >
            <option value="" disabled>
              {t("routePlaceholder")}
            </option>
            {ROUTE_VALUES.map((value) => (
              <option key={value} value={value} className="bg-navy text-white">
                {t(`routes.${value}`)}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-blue-900/30 transition-all duration-300 hover:bg-blue-700 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? t("submitting") : t("submit")}
      </button>

      {status === "success" && (
        <p className="mt-4 text-center text-sm font-medium text-emerald-300" role="status">
          {t("success")}
        </p>
      )}
      {status === "error" && (
        <p className="mt-4 text-center text-sm font-medium text-red-300" role="alert">
          {errorMessage || t("error")}
        </p>
      )}
    </form>
  );
}
