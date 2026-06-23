"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { ArrowUpRight, Plus, Minus } from "lucide-react";
import Reveal from "./Reveal";
import WindowBar from "./WindowBar";
import { projectsData, type Project } from "@/data/projects";
import {
  getFeaturedProjects,
  getProjectCount,
  slugify,
  type FlatProject,
} from "@/lib/featured-projects";

function ProjectCard({
  project,
  yearKey,
  locale,
}: {
  project: Project | FlatProject;
  yearKey: string;
  locale: "fa" | "en";
}) {
  const t = useTranslations();
  const slug = slugify(project.title.en);

  return (
    <Link
      href={`/${locale}/work/${slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-foreground/30 hover:shadow-[0_20px_50px_-24px_hsl(var(--foreground)/0.4)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-secondary/40">
        <Image
          src={project.image}
          alt={project.title[locale]}
          width={1280}
          height={832}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <span className="absolute end-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-background/80 text-foreground opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100">
          <ArrowUpRight className="h-4 w-4 rtl:-scale-x-100" />
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="flex items-center gap-2 text-lg font-semibold tracking-tight">
            {project.title[locale]}
            {project.title_badge && (
              <span className="rounded-full border border-border bg-secondary px-2 py-0.5 text-[10px] font-semibold tracking-wider text-muted-foreground">
                {project.title_badge}
              </span>
            )}
          </h3>
          <span className="faNum shrink-0 rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
            {t(`years.${yearKey}`)}
          </span>
        </div>

        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {project.description[locale]}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5 pt-1">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

export default function Work() {
  const t = useTranslations();
  const params = useParams();
  const locale = (params.locale as "fa" | "en") ?? "fa";
  const [showAll, setShowAll] = useState(false);

  const featured = getFeaturedProjects(6);
  const total = getProjectCount();

  return (
    <section id="work" className="scroll-mt-16">
      <WindowBar label={t("windows.work")} />
      <div className="container-x py-20 sm:py-28">
      <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div className="max-w-2xl">
          <h2 className="text-balance text-4xl font-extrabold tracking-tighter sm:text-5xl">
            {t("work.title")}
          </h2>
          <p className="mt-5 text-balance text-muted-foreground">
            {t("work.subtitle")}
          </p>
        </div>
      </Reveal>

      {!showAll ? (
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
            <Reveal key={`${project.yearKey}-${project.index}`} delay={i * 60}>
              <ProjectCard
                project={project}
                yearKey={project.yearKey}
                locale={locale}
              />
            </Reveal>
          ))}
        </div>
      ) : (
        <div className="mt-12 space-y-12">
          {projectsData
            .slice()
            .sort((a, b) => a.index - b.index)
            .map((year) => (
              <div key={year.title}>
                <h3 className="faNum mb-5 text-xl font-bold tracking-tight">
                  {t(`years.${year.title}`)}
                </h3>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {year.projects
                    .slice()
                    .sort((a, b) => a.index - b.index)
                    .map((project) => (
                      <ProjectCard
                        key={project.index}
                        project={project}
                        yearKey={year.title}
                        locale={locale}
                      />
                    ))}
                </div>
              </div>
            ))}
        </div>
      )}

      <div className="mt-12 flex justify-center">
        <button
          type="button"
          onClick={() => setShowAll((v) => !v)}
          className="btn-ghost px-6 py-3 text-base"
        >
          {showAll ? (
            <>
              <Minus className="h-4 w-4" />
              {t("work.showLess")}
            </>
          ) : (
            <>
              <Plus className="h-4 w-4" />
              {t("work.showAll", { count: total })}
            </>
          )}
        </button>
      </div>
      </div>
    </section>
  );
}
