import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const YekanBakh = localFont({
  src: "../fonts/YekanBakh-VF.woff",
  variable: "--font-yekan-bakh",
  weight: "100 950",
});

export const metadata: Metadata = {
  title: "استودیو کارنسا",
  description: "پرتفولیو",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${YekanBakh.variable} font-sans antialiased dark`}
      >
        {children}
      </body>
    </html>
  );
}
