import type { Metadata } from "next";
import "./globals.css";
import { Outfit } from "next/font/google";
import { Inter } from "next/font/google";
import Script from "next/script";

import { NavaBar } from "@/components/NavBar";
import { Main } from "@/components/Main";
import { Footer } from "@/components/Footer";

import { Analytics } from "@vercel/analytics/next"

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Grok Ani Affection Guide - Complete NSFW Mode Unlock Tutorial",
  description: "Complete Grok Ani affection boost guide with daily dialogue templates, emotional sharing techniques, and 7-day action plan. Learn effective interactions to quickly unlock NSFW mode and enhance virtual companion experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8107883456107875"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-KW4NB978FT"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-KW4NB978FT');
          `}
        </Script>
      </head>
      <body>
        <NavaBar />
        <Main>
          {children}
        </Main>
        <Footer />

        <Analytics />
      </body>
    </html>
  );
}
