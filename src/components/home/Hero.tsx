"use client";

import { useTranslations } from "next-intl";
import { ArrowRight, Sparkles } from "lucide-react";
import Reveal from "./Reveal";

export default function Hero() {
  const t = useTranslations();

  return (
    <section className="relative overflow-hidden">
      {/* background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid mask-fade-y opacity-[0.55]" />
      </div>

      <div className="container-x flex flex-col items-center pt-20 pb-16 text-center sm:pt-28 sm:pb-24">
        <Reveal>
          <span className="eyebrow">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-foreground/60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-foreground" />
            </span>
            {t("hero.badge")}
          </span>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-7 max-w-4xl text-balance text-5xl font-extrabold leading-[0.98] tracking-tighter sm:text-7xl lg:text-[5.25rem]">
            {t("hero.titleLead")}{" "}
            <span className="italic font-light">{t("hero.titleAccent")}</span>
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-6 max-w-2xl text-balance text-base leading-relaxed text-muted-foreground sm:text-lg">
            {t("hero.subtitle")}
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
            <a href="#contact" className="btn-primary px-6 py-3 text-base">
              {t("hero.ctaPrimary")}
              <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </a>
            <a href="#work" className="btn-ghost px-6 py-3 text-base">
              <Sparkles className="h-4 w-4" />
              {t("hero.ctaSecondary")}
            </a>
          </div>
        </Reveal>

        <Reveal delay={320}>
          <p className="mt-6 text-sm text-muted-foreground faNum">
            {t("hero.proof", { count: "70" })}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
