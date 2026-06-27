import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales, type Locale } from "@/i18n/request";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";

const YekanBakh = localFont({
  src: "../../fonts/YekanBakh-VF.woff",
  variable: "--font-yekan-bakh",
  weight: "100 950",
});

const Tahrir = localFont({
  src: [
    { path: "../../fonts/tahrir/TahrirBook.woff2", weight: "300", style: "normal" },
    { path: "../../fonts/tahrir/TahrirRegular.woff2", weight: "400", style: "normal" },
    { path: "../../fonts/tahrir/TahrirMedium.woff2", weight: "500", style: "normal" },
    { path: "../../fonts/tahrir/TahrirBold.woff2", weight: "700", style: "normal" },
    { path: "../../fonts/tahrir/TahrirExtraBold.woff2", weight: "800", style: "normal" },
    { path: "../../fonts/tahrir/TahrirBlack.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-tahrir",
});

type Props = {
  params: Promise<{ locale: string }>;
};

const SITE_URL = "https://karensastudio.com";

const SEO = {
  fa: {
    title: "استودیو کارنسا | طراحی و توسعه وب‌سایت، اپلیکیشن و سیستم ERP",
    template: "%s | استودیو کارنسا",
    description:
      "استودیوی نرم‌افزار کارنسا؛ طراحی و توسعه‌ی وب‌سایت، وب‌اپلیکیشن، اپلیکیشن موبایل و سیستم‌های ERP. بیش از ۱۰ سال تجربه و بیش از ۳۰ پروژه‌ی موفق، از ایده تا محصول نهایی.",
    keywords: [
      "استودیو کارنسا",
      "طراحی سایت",
      "طراحی وب‌سایت",
      "توسعه وب",
      "وب اپلیکیشن",
      "اپلیکیشن موبایل",
      "نرم‌افزار سفارشی",
      "سیستم ERP",
      "Next.js",
      "ری‌اکت",
      "طراحی فروشگاه اینترنتی",
    ],
    locale: "fa_IR",
  },
  en: {
    title: "Karensa Studio | Websites, Web Apps & ERP Systems",
    template: "%s | Karensa Studio",
    description:
      "Karensa is a software studio designing and building websites, web apps, mobile apps and ERP systems. 10+ years of experience and 30+ shipped projects — from the first idea to production.",
    keywords: [
      "Karensa Studio",
      "software studio",
      "web design",
      "web development",
      "web applications",
      "mobile apps",
      "ERP systems",
      "Next.js agency",
      "React development",
      "custom software",
    ],
    locale: "en_US",
  },
} as const;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isFa = locale === "fa";
  const seo = isFa ? SEO.fa : SEO.en;

  return {
    metadataBase: new URL(SITE_URL),
    title: { default: seo.title, template: seo.template },
    description: seo.description,
    keywords: [...seo.keywords],
    applicationName: "Karensa Studio",
    authors: [{ name: "Karensa Studio", url: SITE_URL }],
    creator: "Karensa Studio",
    publisher: "Karensa Studio",
    alternates: {
      canonical: `${SITE_URL}/${locale}`,
      languages: {
        en: `${SITE_URL}/en`,
        fa: `${SITE_URL}/fa`,
        "x-default": `${SITE_URL}/fa`,
      },
    },
    openGraph: {
      type: "website",
      siteName: "Karensa Studio",
      url: `${SITE_URL}/${locale}`,
      title: seo.title,
      description: seo.description,
      locale: seo.locale,
      alternateLocale: isFa ? "en_US" : "fa_IR",
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    formatDetection: { telephone: true, email: true, address: false },
  };
}

function structuredData(locale: string) {
  const isFa = locale === "fa";
  const orgName = isFa ? "استودیو کارنسا" : "Karensa Studio";
  const description = isFa ? SEO.fa.description : SEO.en.description;

  const organization = {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: orgName,
    alternateName: "Karensa Studio",
    url: SITE_URL,
    logo: `${SITE_URL}/icon`,
    image: `${SITE_URL}/${locale}/opengraph-image`,
    description,
    email: "info@karensastudio.com",
    foundingDate: "2015",
    areaServed: "Worldwide",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tehran",
      addressCountry: "IR",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+989392676126",
      email: "info@karensastudio.com",
      contactType: "customer service",
      availableLanguage: ["fa", "en"],
    },
    sameAs: [SITE_URL],
  };

  const website = {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: `${SITE_URL}/${locale}`,
    name: orgName,
    description,
    inLanguage: isFa ? "fa-IR" : "en-US",
    publisher: { "@id": `${SITE_URL}/#organization` },
  };

  return {
    "@context": "https://schema.org",
    "@graph": [organization, website],
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  // Providing all messages to the client side is the easiest way to get started
  const messages = await getMessages({ locale });

  const isRTL = locale === "fa";

  return (
    <html lang={locale} dir={isRTL ? "rtl" : "ltr"} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{if(localStorage.getItem('theme')==='dark'){document.documentElement.classList.add('dark')}}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData(locale)),
          }}
        />
      </head>
      <body className={`${YekanBakh.variable} ${Tahrir.variable} font-sans antialiased`}>
        <Analytics />
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
      <GoogleAnalytics gaId="G-F9K2JNY2MN" />
      {isRTL && (
        <Script
          id="goftino-widget"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(){var i="DHQHJr",a=window,d=document;function g(){var g=d.createElement("script"),s="https://www.goftino.com/widget/"+i,l=localStorage.getItem("goftino_"+i);g.async=!0,g.src=l?s+"?o="+l:s;d.getElementsByTagName("head")[0].appendChild(g);}"complete"===d.readyState?g():a.attachEvent?a.attachEvent("onload",g):a.addEventListener("load",g,!1);}();`,
          }}
        />
      )}
    </html>
  );
}
