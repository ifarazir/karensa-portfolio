"use client";

import { useTranslations } from "next-intl";
import Reveal from "./Reveal";
import WindowBar from "./WindowBar";

export default function Stats() {
  const t = useTranslations();

  const items = [
    { value: `70+`, label: t("stats.projects") },
    { value: "10+", label: t("stats.years") },
    { value: "20+", label: t("stats.tech") },
    { value: "30,000+", label: t("stats.commitment") },
  ];

  return (
    <section>
      <WindowBar label={t("windows.stats")} />
      <div className="grid grid-cols-2 divide-x divide-y divide-border rtl:divide-x-reverse md:grid-cols-4 md:divide-y-0">
        {items.map((item, i) => (
          <Reveal
            key={item.label}
            delay={i * 80}
            className="flex flex-col items-center justify-center px-4 py-10 text-center sm:py-14"
          >
            <span className="faNum text-4xl font-extrabold tracking-tight sm:text-5xl">
              {item.value}
            </span>
            <span className="mt-2 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
              {item.label}
            </span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
