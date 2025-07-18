import {create} from 'zustand';

interface ILanguageState {
    lang: 'en' | 'ja' | 'zh';
    setLang: (lang: 'en' | 'ja' | 'zh') => void;
}

export const useLanguageStore = create<ILanguageState>((set) => ({
    lang: 'en',
    setLang: (lang) => set({lang}),
}));
