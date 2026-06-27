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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  if (locale === "fa") {
    return {
      title: "استودیو کارنسا",
      description: "پرتفولیو",
    };
  }

  return {
    title: "Karensa Studio",
    description: "Portfolio",
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
