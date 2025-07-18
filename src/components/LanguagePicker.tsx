'use client';

import { Languages } from 'lucide-react';
import { useLanguageStore } from "@/stores/useLanguageStore";
import { useState } from 'react';


export const LanguagePicker = () => {

    const { setLang } = useLanguageStore();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className=' absolute right-5 lg:right-10 cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
            <Languages className=' text-white hover:text-slate-200  w-7 h-7' />
            {
                isOpen && (
                    <ul className=' absolute bg-white right-[-10px] top-10 px-8 py-5 space-y-5 rounded-xl'>
                        <li className=' hover:text-slate-500' onClick={() => setLang('en')}>English</li>
                        <li className=' hover:text-slate-500' onClick={() => setLang('ja')}>日本語</li>
                        <li className=' hover:text-slate-500' onClick={() => setLang('zh')}>中文</li>
                    </ul>
                )
            }
        </div>
    );
}