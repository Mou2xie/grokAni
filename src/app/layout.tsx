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
  title: "Grok AI Companion Ani Affection Guide - NSFW Mode Unlock Tutorial",
  description: "Boost affection with Grok AI Ani Companion using proven tips. Follow our guide book to reach Level 5 and deepen your virtual bond quickly and easily.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8107883456107875"
          crossOrigin="anonymous">
        </script>
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
