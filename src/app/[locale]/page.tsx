"use client";

import { Logomark } from "@/components/Logo";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { projectsData } from "@/data/projects";
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function HomePage() {
  const t = useTranslations();
  const params = useParams();
  const locale = params.locale as string; // Get locale from URL params

  return (
    <div className="w-full">
      <header className="sticky top-0 flex h-16 items-center gap-4 bg-background mx-auto w-full max-w-screen-xl px-6 md:px-20 z-50">
        <nav className="hidden flex-col md:flex md:flex-row md:items-center md:justify-between w-full h-full border-b">
          <Link
            className="flex items-center gap-2 font-semibold"
            href={`/${locale}`}
          >
            <Logomark invert filled className={"h-8"} />
            <div className="flex flex-col ltr:flex-col-reverse">
              <p className="text-xs font-normal ltr:-mt-1">
                {t("studioInfo.name")}
              </p>
              <p className="text-xl font-bold rtl:-mt-1">
                {t("studioInfo.englishName")}
              </p>
            </div>
          </Link>
          <div className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:justify-between md:gap-5 md:text-sm lg:gap-6">
            <Link
              className="hover:text-foreground text-muted-foreground"
              href="https://karensastudio.com/"
            >
              {t("nav.website")}
            </Link>
            <Link
              className="hover:text-foreground text-muted-foreground"
              href="https://karensastudio.com/process"
            >
              {t("nav.process")}
            </Link>
            <Link
              className="hover:text-foreground text-muted-foreground"
              href="https://karensastudio.com/contact"
            >
              {t("nav.contact")}
            </Link>
            <LanguageSwitcher />
          </div>
        </nav>
      </header>

      <div className="mx-auto w-full max-w-screen-xl px-6 md:px-20 py-10 md:py-20">
        <div className="flex items-end justify-between mb-12">
          <div className="flex flex-col">
            <h2 className="text-4xl font-bold">{t("projects.title")}</h2>
            <p className="text-muted-foreground mt-1">
              {t("projects.subtitle")}
            </p>
          </div>

          <div className="flex gap-4 items-center"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData
            .sort((a, b) => a.index - b.index)
            .map((year, index) => (
              <React.Fragment key={index}>
                <div className="col-span-2 -mb-5">
                  <h3 className="text-3xl font-bold faNum">
                    {t(`years.${year.title}`)}
                  </h3>
                </div>
                {year.projects
                  .sort((a, b) => a.index - b.index)
                  .map((project, index2) => (
                    <div
                      className="col-span-2 md:col-span-1 rounded-lg border bg-card text-card-foreground shadow-sm h-full group"
                      key={index2}
                    >
                      <div className="p-4">
                        {project.link == "#" ? (
                          <div className="overflow-hidden rounded-lg">
                            <Image
                              src={project.image}
                              alt={project.title[locale as "fa" | "en"]}
                              width={1280}
                              height={832}
                              className="group-hover:scale-105 transition-all duration-500"
                            />
                          </div>
                        ) : (
                          <Link href={project.link} target="_blank">
                            <div className="overflow-hidden rounded-lg">
                              <Image
                                src={project.image}
                                alt={project.title[locale as "fa" | "en"]}
                                width={1280}
                                height={832}
                                className="group-hover:scale-105 transition-all duration-500"
                              />
                            </div>
                          </Link>
                        )}
                      </div>
                      <div className="flex flex-col space-y-1.5 p-6 pt-0 pb-3">
                        <h3 className="text-2xl font-bold leading-none tracking-tight">
                          <div className="flex gap-2 items-center justify-between">
                            {project.link == "#" ? (
                              <div className="flex items-start">
                                {project.title[locale as "fa" | "en"]}
                                {project.title_badge && (
                                  <span className="inline-flex tracking-widest items-center rounded-full border px-2 py-px -pb-0 scale-90 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground">
                                    {project.title_badge}
                                  </span>
                                )}
                              </div>
                            ) : (
                              <Link
                                href={project.link}
                                target="_blank"
                                className="flex items-start"
                              >
                                {project.title[locale as "fa" | "en"]}
                                {project.title_badge && (
                                  <span className="inline-flex tracking-widest items-center rounded-full border px-2 py-px -pb-0 scale-90 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground">
                                    {project.title_badge}
                                  </span>
                                )}
                              </Link>
                            )}

                            <div className="faNum inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                              {t(`years.${year.title}`)}
                            </div>
                          </div>
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {project.description[locale as "fa" | "en"]}
                        </p>
                      </div>
                      <div className="items-center p-6 pt-0 *:me-2 *:mb-2 flex flex-wrap">
                        {project.technologies.map((tech, indexTech) => (
                          <div
                            className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
                            key={indexTech}
                          >
                            {tech}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
              </React.Fragment>
            ))}
        </div>
      </div>
    </div>
  );
}
