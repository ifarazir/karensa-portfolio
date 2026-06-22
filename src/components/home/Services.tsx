"use client";

import { useTranslations } from "next-intl";
import {
  Code2,
  LayoutDashboard,
  Boxes,
  FileText,
  Smartphone,
  Camera,
} from "lucide-react";
import Reveal from "./Reveal";

const SERVICES = [
  { key: "web", icon: Code2 },
  { key: "apps", icon: LayoutDashboard },
  { key: "erp", icon: Boxes },
  { key: "cms", icon: FileText },
  { key: "mobile", icon: Smartphone },
  { key: "social", icon: Camera },
] as const;

export default function Services() {
  const t = useTranslations();

  return (
    <section id="services" className="container-x scroll-mt-20 py-20 sm:py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="eyebrow">{t("services.eyebrow")}</span>
        <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
          {t("services.title")}
        </h2>
        <p className="mt-4 text-balance text-muted-foreground">
          {t("services.subtitle")}
        </p>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service, i) => {
          const Icon = service.icon;
          return (
            <Reveal key={service.key} delay={i * 70}>
              <div className="group h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_12px_40px_-12px_hsl(var(--brand)/0.35)]">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-secondary/60 text-brand transition-colors group-hover:bg-brand group-hover:text-brand-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-tight">
                  {t(`services.items.${service.key}.title`)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {t(`services.items.${service.key}.desc`)}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
