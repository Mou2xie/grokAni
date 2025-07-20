'use client';

import { usePathname } from 'next/navigation'
import { LanguagePicker } from "./LanguagePicker"
import { useLanguageStore } from "@/stores/useLanguageStore";
import Link from "next/link";
import { AlignLeft } from 'lucide-react';
import { useState } from 'react';

const locales = {
    zh: {
        navbar: {
            guide: "指南",
            chat: "话题库",
            gallery: "图集"
        }
    },
    en: {
        navbar: {
            guide: "Guide",
            chat: "Topic Hub",
            gallery: "Gallery"
        }
    },
    ja: {
        navbar: {
            guide: "ガイド",
            chat: "トピック集",
            gallery: "ギャラリー"
        }
    }
};

export const NavaBar = () => {

    const pathname = usePathname();
    const { lang } = useLanguageStore();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className=" w-full h-18 flex justify-start lg:justify-center px-5 items-center relative">
            <ul className=" hidden lg:flex text-white gap-2 items-center font-title text-xl">
                <li className={` px-4 rounded-full hover:bg-pink-300 hover:text-pink-600 transition duration-200 ${pathname === '/' && 'text-pink-600 bg-pink-200'}`}><Link href='/'>{locales[lang].navbar.guide}</Link></li>
                <li className={` px-4 rounded-full hover:bg-pink-300 hover:text-pink-600 transition duration-200 ${pathname === '/chat-prompts' && 'text-pink-600 bg-pink-200'}`}><Link href='/chat-prompts'>{locales[lang].navbar.chat}</Link></li>
            </ul>
            <div className=' lg:hidden relative' onClick={() => setIsOpen(!isOpen)}>
                <AlignLeft className=' text-white w-8 h-8' />
                {
                    isOpen && (
                        <ul className=' absolute top-10 left-0 w-[150px] bg-white text-slate-800 p-5 rounded-lg space-y-2'>
                            <li><Link href='/'>{locales[lang].navbar.guide}</Link></li>
                            <li><Link href='/chat-prompts'>{locales[lang].navbar.chat}</Link></li>
                        </ul>
                    )
                }

            </div>
            <LanguagePicker />
        </nav>
    )
}