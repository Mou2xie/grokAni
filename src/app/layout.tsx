import type { Metadata } from "next";
import "./globals.css";
import { Outfit } from "next/font/google";
import { Inter } from "next/font/google";

import { NavaBar } from "@/components/NavBar";
import { Main } from "@/components/Main";
import { Footer } from "@/components/Footer";

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
      <body>
        <NavaBar />
        <Main>
          {children}
        </Main>
        <Footer />
      </body>
    </html>
  );
}
