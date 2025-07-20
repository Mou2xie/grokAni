"use client";

import { useLanguageStore } from "@/stores/useLanguageStore";
import { locales } from "@/config/locales";
import { H2 } from "./H2";
import Image from "next/image";

export const Index = () => {
  const { lang } = useLanguageStore();
  const t = locales[lang].index;

  return (
    <div className=" lg:mx-20 p-5 lg:p-10 my-10 text-slate-300 bg-purple-300/10 rounded-3xl shadow-lg flex flex-col lg:flex-row gap-5 lg:gap-10 ">
      <Image
        src="/ani-pic2.jpg"
        alt="Grok Ani"
        width={250}
        height={200}
        className="rounded-xl shadow-lg mx-auto"
      />
      <div className=" grow lg:text-right">
        <H2>{t.title}</H2>
        <ul className="list-none mt-10">
          {t.links.map((link) => (
            <li key={link.href} className="mb-3">
              <a
                href={link.href}
                className="text-pink-300 hover:text-pink-400 transition-colors no-underline"
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
