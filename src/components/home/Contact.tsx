"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Mail, Phone, Globe, MapPin, ArrowRight, Check, Loader2 } from "lucide-react";
import Reveal from "./Reveal";
import WindowBar from "./WindowBar";

const CONTACT_EMAIL = "info@karensastudio.com";
const CONTACT_PHONE = "+989392676126";
const STUDIO_URL = "https://karensastudio.com/";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const t = useTranslations();
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  const fieldClass =
    "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-brand focus:ring-2 focus:ring-brand/20";

  return (
    <section id="contact" className="scroll-mt-16">
      <WindowBar label={t("windows.contact")} />
      <div className="container-x py-20 sm:py-28">
      <div className="overflow-hidden rounded-3xl border border-border bg-secondary/30">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Info panel */}
          <Reveal className="relative flex flex-col justify-between gap-10 p-8 sm:p-12">
            <div className="pointer-events-none absolute inset-0 -z-10 bg-dots opacity-40" />
            <div>
              <h2 className="text-balance text-4xl font-extrabold tracking-tighter sm:text-5xl">
                {t("contact.title")}
              </h2>
              <p className="mt-4 max-w-md text-balance text-muted-foreground">
                {t("contact.subtitle")}
              </p>
            </div>

            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="group flex items-center gap-3 text-sm font-medium transition-colors hover:text-brand"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background text-brand">
                    <Mail className="h-5 w-5" />
                  </span>
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT_PHONE}`}
                  className="group flex items-center gap-3 text-sm font-medium transition-colors hover:text-brand"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background text-brand">
                    <Phone className="h-5 w-5" />
                  </span>
                  <span dir="ltr" className="faNum">
                    {t("contact.phone")}
                  </span>
                </a>
              </li>
              <li>
                <Link
                  href={STUDIO_URL}
                  target="_blank"
                  className="group flex items-center gap-3 text-sm font-medium transition-colors hover:text-brand"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background text-brand">
                    <Globe className="h-5 w-5" />
                  </span>
                  karensastudio.com
                </Link>
              </li>
              <li className="flex items-center gap-3 text-sm font-medium text-muted-foreground">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background text-brand">
                  <MapPin className="h-5 w-5" />
                </span>
                {t("contact.location")}
              </li>
            </ul>
          </Reveal>

          {/* Form panel */}
          <Reveal delay={120} className="border-t border-border bg-card p-8 sm:p-12 lg:border-s lg:border-t-0">
            {status === "success" ? (
              <div className="flex h-full min-h-[320px] flex-col items-center justify-center text-center">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-foreground text-background">
                  <Check className="h-7 w-7" />
                </span>
                <h3 className="mt-5 text-xl font-semibold">
                  {t("contact.form.successTitle")}
                </h3>
                <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                  {t("contact.form.success")}
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="btn-ghost mt-6"
                >
                  {t("contact.form.again")}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-sm font-medium">
                      {t("contact.form.name")}
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      autoComplete="name"
                      placeholder={t("contact.form.namePlaceholder")}
                      className={fieldClass}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-sm font-medium">
                      {t("contact.form.email")}
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder={t("contact.form.emailPlaceholder")}
                      className={fieldClass}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className="text-sm font-medium">
                    {t("contact.form.phone")}
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder={t("contact.form.phonePlaceholder")}
                    className={fieldClass}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="subject" className="text-sm font-medium">
                    {t("contact.form.subject")}
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    placeholder={t("contact.form.subjectPlaceholder")}
                    className={fieldClass}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-sm font-medium">
                    {t("contact.form.message")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder={t("contact.form.messagePlaceholder")}
                    className={`${fieldClass} resize-none`}
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm text-destructive">
                    {t("contact.form.error")}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-primary mt-1 px-6 py-3 text-base disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      {t("contact.form.sending")}
                    </>
                  ) : (
                    <>
                      {t("contact.form.submit")}
                      <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                    </>
                  )}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
      </div>
    </section>
  );
}
