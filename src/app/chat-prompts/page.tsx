'use client';

import { useState, useEffect, useRef } from "react";
import { ContentBlock } from "@/components/ContentBlock";
import { useLanguageStore } from "@/stores/useLanguageStore";
import { promptsData } from "@/config/prompts";
import { H2 } from "@/components/H2";
import { translations } from "@/config/translations";

export default function ChatPrompts() {

    const { lang } = useLanguageStore();
    const [copiedPrompt, setCopiedPrompt] = useState<string | null>(null);
    const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);
    const navRef = useRef<HTMLElement>(null);

    const handleCopy = (promptText: string) => {
        navigator.clipboard.writeText(promptText).then(() => {
            setCopiedPrompt(promptText);
            setTimeout(() => setCopiedPrompt(null), 2000); // Reset after 2 seconds
        });
    };

    const handleMenuToggle = (index: number) => {
        setOpenMenuIndex(prevIndex => (prevIndex === index ? null : index));
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                setOpenMenuIndex(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const t = translations[lang];


    return (
        <>
            <ContentBlock>
                <h1 className=" text-white font-title text-3xl lg:text-6xl font-bold text-center lg:mt-20">
                    Grok
                    <span className=" mx-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                        Ani
                    </span>
                    {t.title}
                </h1>
                <p className=" text-slate-300 text-center mt-5 text-lg">
                    {t.description}
                </p>
            </ContentBlock>

            <nav ref={navRef} className=" sticky top-2 lg:w-[40vw] mx-auto mb-10 backdrop-blur-sm bg-purple-300/10 rounded-full z-20">
                <ul className="flex justify-around text-pink-300 font-title lg:text-lg font-semibold py-4">
                    {promptsData.map((category, catIndex) => (
                        <li key={catIndex} className="relative">
                            <button onClick={() => handleMenuToggle(catIndex)} className="hover:text-pink-400 cursor-pointer flex items-center space-x-1 px-4">
                                <span>{category.title[lang].replace(/^\d+\.\s*/, '')}</span>
                                <svg className={`hidden lg:block w-4 h-4 fill-current transition-transform duration-200 ${openMenuIndex === catIndex ? 'transform rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                            </button>
                            <div className={`absolute ${openMenuIndex === catIndex ? 'block' : 'hidden'} pt-2 w-48 z-30 left-1/2 -translate-x-1/2`}>
                                <ul className="bg-slate-800/90 backdrop-blur-lg rounded-xl shadow-lg border border-slate-700">
                                    {category.subCategories.map((subCategory, subCatIndex) => (
                                        <li key={subCatIndex}>
                                            <a href={`#subcategory-${catIndex}-${subCatIndex}`} onClick={() => setOpenMenuIndex(null)} className="block text-center px-4 py-3 text-sm text-slate-300 hover:bg-slate-700 hover:text-pink-400 transition-colors rounded-xl">
                                                {subCategory.title[lang].replace(/^\d+\.\d+\s*/, '')}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                    ))}
                </ul>
            </nav>


            <div className="mt-10 max-w-7xl mx-auto">
                {promptsData.map((category, catIndex) => (
                    <div key={catIndex} id={`category-${catIndex}`} className="mb-12 scroll-mt-24">
                        <H2><span className=" text-center inline-block w-full">{category.title[lang].replace(/^\d+\.\s*/, '')}</span></H2>
                        {category.subCategories.map((subCategory, subCatIndex) => (
                            <div key={subCatIndex} id={`subcategory-${catIndex}-${subCatIndex}`} className="mb-8 scroll-mt-24">
                                <h3 className="text-2xl font-bold my-10 text-pink-300 text-center"> ❤️ {subCategory.title[lang].replace(/^\d+\.\d+\s*/, '')} ❤️</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                                    {subCategory.prompts.map((prompt, promptIndex) => (
                                        <div key={promptIndex} className=" felx flex-col bg-slate-800/50 rounded-xl p-5 border border-slate-700 hover:border-pink-500/50 hover:bg-slate-800 transition-all duration-200 transform hover:-translate-y-1 shadow-lg hover:shadow-pink-500/20 flex">
                                            <p className="text-slate-300 text-base leading-relaxed flex-grow">{prompt[lang]}</p>
                                            <button
                                                onClick={() => handleCopy(prompt[lang])}
                                                className=" bg-slate-700/50 text-slate-300 self-end text-xs px-2 py-1 rounded-md hover:bg-pink-500/50 hover:text-white transition-all duration-200 mt-4"
                                            >
                                                {copiedPrompt === prompt[lang] ? t.copied : t.copy}
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </>
    );
}