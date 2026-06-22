"use client";

import { useTranslations } from "next-intl";
import Reveal from "./Reveal";
import { getProjectCount } from "@/lib/featured-projects";

export default function Stats() {
  const t = useTranslations();
  const count = getProjectCount();

  const items = [
    { value: `${count}+`, label: t("stats.projects") },
    { value: "10+", label: t("stats.years") },
    { value: "20+", label: t("stats.tech") },
    { value: "100%", label: t("stats.commitment") },
  ];

  return (
    <section className="container-x">
      <Reveal>
        <div className="grid grid-cols-2 divide-x divide-border rounded-3xl border border-border bg-secondary/30 rtl:divide-x-reverse md:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center justify-center px-4 py-8 text-center sm:py-10"
            >
              <span className="faNum text-3xl font-bold tracking-tight sm:text-4xl">
                {item.value}
              </span>
              <span className="mt-2 text-sm text-muted-foreground">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
