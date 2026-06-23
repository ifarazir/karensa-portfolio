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
import WindowBar from "./WindowBar";

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
    <section id="services" className="scroll-mt-16">
      <WindowBar label={t("windows.services")} />
      <div className="container-x py-20 sm:py-28">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-4xl font-extrabold tracking-tighter sm:text-5xl">
            {t("services.title")}
          </h2>
          <p className="mt-5 text-balance text-muted-foreground">
            {t("services.subtitle")}
          </p>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 gap-px border-t border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service, i) => {
          const Icon = service.icon;
          return (
            <Reveal
              key={service.key}
              delay={i * 60}
              className="group bg-background p-8 transition-colors duration-300 hover:bg-secondary/50"
            >
              <div className="flex items-center gap-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-card transition-colors group-hover:bg-foreground group-hover:text-background">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-bold tracking-tight">
                {t(`services.items.${service.key}.title`)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {t(`services.items.${service.key}.desc`)}
              </p>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
