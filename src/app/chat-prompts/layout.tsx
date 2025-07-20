import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grok AI Ani Affection Boost Topic Hub",
  description: "Ultimate conversation guide for Grok's AI companion Ani. Want to quickly boost Ani's affection? We provide over 140 dialogue topics tailored specifically for Ani to help you rapidly break through level 5 and unlock more spicy features.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
        </>
    )
}