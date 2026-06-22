"use client";

import { useTranslations } from "next-intl";
import { ArrowRight, Sparkles } from "lucide-react";
import Reveal from "./Reveal";
import { getProjectCount } from "@/lib/featured-projects";

const STACK = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Directus",
  "Odoo",
  "Python",
  "WordPress",
  "Framer Motion",
];

export default function Hero() {
  const t = useTranslations();
  const count = getProjectCount();

  return (
    <section className="relative overflow-hidden">
      {/* background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid mask-fade-y opacity-[0.55]" />
      </div>

      <div className="container-x flex flex-col items-center pt-20 pb-16 text-center sm:pt-28 sm:pb-24">
        <Reveal>
          <span className="eyebrow">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {t("hero.badge")}
          </span>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-6 max-w-4xl text-balance text-4xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
            {t("hero.titleLead")}{" "}
            <span className="italic">{t("hero.titleAccent")}</span>
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
            {t("hero.proof", { count })}
          </p>
        </Reveal>
      </div>

      {/* tech marquee */}
      <div className="pb-16 sm:pb-24">
        <Reveal className="container-x mb-6">
          <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            {t("hero.stackLabel")}
          </p>
        </Reveal>
        {/*
          Single-track seamless loop: 2 identical copies side-by-side.
          Animating from translateX(0) → translateX(-50%) shifts exactly
          one copy-width to the left, then loops invisibly to 0 again.
        */}
        <div className="relative overflow-hidden mask-fade-x">
          <div
            className="flex w-max gap-3 py-1"
            style={{ animation: "marquee 30s linear infinite", willChange: "transform" }}
          >
            {[...STACK, ...STACK].map((tech, i) => (
              <span
                key={i}
                className="whitespace-nowrap rounded-full border border-border bg-secondary/50 px-4 py-2 text-sm font-medium text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
