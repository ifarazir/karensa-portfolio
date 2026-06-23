import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import WindowBar from "@/components/home/WindowBar";
import { locales, type Locale } from "@/i18n/request";
import {
  getAllProjects,
  getProjectBySlug,
} from "@/lib/featured-projects";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  const slugs = getAllProjects().map((p) => p.slug);
  return locales.flatMap((locale) =>
    slugs.map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  const loc = (locale === "fa" ? "fa" : "en") as "fa" | "en";
  return {
    title: `${project.title[loc]} — Karensa Studio`,
    description: project.description[loc],
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { locale, slug } = await params;
  if (!locales.includes(locale as Locale)) notFound();

  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const loc = (locale === "fa" ? "fa" : "en") as "fa" | "en";
  const t = await getTranslations({ locale });
  const hasLink = project.link !== "#";

  const more = getAllProjects()
    .filter((p) => p.slug !== project.slug)
    .slice(0, 3);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="framed">
          <WindowBar label={t("windows.caseStudy")} />

          <article className="container-x py-12 sm:py-16">
            <Link
              href={`/${locale}#work`}
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4 rtl:-scale-x-100" />
              {t("caseStudy.back")}
            </Link>

            <div className="mt-8 flex flex-col gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="faNum rounded-full bg-secondary px-3 py-0.5 text-xs font-medium text-muted-foreground">
                  {t(`years.${project.yearKey}`)}
                </span>
                {project.title_badge && (
                  <span className="rounded-full border border-border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                    {project.title_badge}
                  </span>
                )}
              </div>
              <h1 className="text-balance text-4xl font-extrabold tracking-tighter sm:text-6xl">
                {project.title[loc]}
              </h1>
            </div>

            {/* Cover */}
            <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-secondary/40">
              <Image
                src={project.image}
                alt={project.title[loc]}
                width={1600}
                height={1040}
                priority
                className="h-full w-full object-cover"
              />
            </div>

            {/* Body */}
            <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {t("caseStudy.overview")}
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-foreground/90">
                  {project.description[loc]}
                </p>
              </div>

              <aside className="lg:border-s lg:border-border lg:ps-10">
                <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {t("caseStudy.details")}
                </h2>

                <dl className="mt-5 flex flex-col gap-5 text-sm">
                  <div>
                    <dt className="text-muted-foreground">{t("caseStudy.year")}</dt>
                    <dd className="faNum mt-1 font-medium">
                      {t(`years.${project.yearKey}`)}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">{t("caseStudy.stack")}</dt>
                    <dd className="mt-2 flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-border px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </dd>
                  </div>
                </dl>

                {hasLink && (
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary mt-7 w-full"
                  >
                    {t("caseStudy.visit")}
                    <ArrowUpRight className="h-4 w-4 rtl:-scale-x-100" />
                  </Link>
                )}
              </aside>
            </div>
          </article>

          {/* More projects */}
          <div className="border-t border-border">
            <div className="container-x py-12 sm:py-16">
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {t("caseStudy.more")}
              </h2>
              <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3">
                {more.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/${locale}/work/${p.slug}`}
                    className="group overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-foreground/30"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-secondary/40">
                      <Image
                        src={p.image}
                        alt={p.title[loc]}
                        width={800}
                        height={520}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                    </div>
                    <div className="flex items-center justify-between gap-2 p-4">
                      <span className="font-semibold tracking-tight">
                        {p.title[loc]}
                      </span>
                      <span className="faNum shrink-0 text-xs text-muted-foreground">
                        {t(`years.${p.yearKey}`)}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
