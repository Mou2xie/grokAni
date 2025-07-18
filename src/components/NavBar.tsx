import { LanguagePicker } from "./LanguagePicker"

export const NavaBar = ()=>{
    return (
        <nav className=" w-full h-18 flex justify-center items-center relative">
            <div className=" font-title text-5xl font-bold text-white">
                ANI
            </div>
            <LanguagePicker />
        </nav>
    )
}