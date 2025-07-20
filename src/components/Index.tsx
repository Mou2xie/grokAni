"use client";

import { useLanguageStore } from "@/stores/useLanguageStore";
import { locales } from "@/config/locales";
import { H2 } from "./H2";

export const Index = () => {
  const { lang } = useLanguageStore();
  const t = locales[lang].index;

  return (
    <div className=" lg:mx-20 p-10 my-10 text-slate-300 bg-purple-300/10 rounded-3xl shadow-lg ">
      <H2>{t.title}</H2>
      <ul className="list-none p-0 m-0">
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
  );
};
