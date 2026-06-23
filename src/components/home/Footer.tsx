"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { Logomark } from "@/components/Logo";

export default function Footer() {
  const t = useTranslations();
  const params = useParams();
  const locale = params.locale as string;
  const year = new Date().getFullYear();

  const pageLinks = [
    { href: `/${locale}#services`, label: t("nav.services") },
    { href: `/${locale}#work`, label: t("nav.work") },
    { href: `/${locale}#contact`, label: t("nav.contact") },
  ];

  const studioLinks = [
    { href: "https://karensastudio.com/", label: t("nav.website") },
    { href: "https://karensastudio.com/process", label: t("nav.process") },
    { href: "https://karensastudio.com/contact", label: t("nav.contact") },
  ];

  return (
    <footer className="border-t border-border">
      <div className="container-x py-14">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          <div className="col-span-2">
            <Link href={`/${locale}`} className="flex items-center gap-2.5">
              <Logomark
                filled
                className="h-7 [&_rect]:fill-slate-950 [&_use]:stroke-slate-950 dark:[&_rect]:fill-white dark:[&_use]:stroke-white"
              />
              <span className="text-base font-bold tracking-tight">
                {t("studioInfo.englishName")}
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {t("footer.tagline")}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold">{t("footer.explore")}</h4>
            <ul className="mt-4 flex flex-col gap-3">
              {pageLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold">{t("footer.studio")}</h4>
            <ul className="mt-4 flex flex-col gap-3">
              {studioLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    target="_blank"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p className="faNum">
            © {year} {t("studioInfo.englishName")}. {t("footer.rights")}
          </p>
          <p>{t("footer.madeWith")}</p>
        </div>
      </div>
    </footer>
  );
}
