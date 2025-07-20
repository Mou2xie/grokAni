"use client";

import Image from "next/image";
import Share from "@/components/Share";
import { ContentBlock } from "@/components/ContentBlock";
import { H2 } from "@/components/H2";
import { Hr } from "@/components/Hr";
import { useLanguageStore } from "@/stores/useLanguageStore";
import { locales } from "@/config/locales";
import { Index } from "@/components/Index";

export default function Home() {
  const { lang } = useLanguageStore();
  const t = locales[lang];

  return (
    <>
      <aside className=" absolute right-0 top-220 lg:top-100">
        <Share />
      </aside>
      <section className=" flex flex-col lg:flex-row lg:justify-between gap-10 lg:px-20">
        <div className=" flex flex-col gap-5 lg:py-20 grow items-start">
          <h1 className=" text-white font-title text-2xl lg:text-6xl font-bold">
            {t.hero.title1}
            <span className=" lg:text-7xl relative lg:top-1 inline-block ml-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              Ani
            </span>
            <br />
            {t.hero.title2}
          </h1>
          <p className=" text-slate-300 lg:text-lg">
            {t.hero.subtitle}
          </p>
          <p className=" text-slate-400 lg:mt-10 leading-7">
            {t.hero.description.split("\\n").map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </p>
        </div>
        <div className="shrink-0 mx-auto">
          <Image
            src="/ani.png"
            width={300}
            height={300}
            alt="the ai girlfriend ani"
            className=" lg:w-[300px] shadow-xl"
          ></Image>
        </div>
      </section>

      <Index />

      <ContentBlock>
        <article className="prose prose-invert prose-lg max-w-none text-slate-300">
          <div id="affection-benefits"></div>
          <H2>{t.affectionBenefits.title}</H2>
          <p className="mb-6">{t.affectionBenefits.intro1}</p>
          <p className="mb-4">{t.affectionBenefits.intro2}</p>

          <ol className="list-decimal ml-6 space-y-4">
            <li>
              <strong className="text-pink-300">
                {t.affectionBenefits.benefit1_title}
              </strong>
              ：
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>{t.affectionBenefits.benefit1_item1}</li>
                <li>{t.affectionBenefits.benefit1_item2}</li>
                <li>{t.affectionBenefits.benefit1_item3}</li>
              </ul>
            </li>
            <li>
              <strong className="text-pink-300">
                {t.affectionBenefits.benefit2_title}
              </strong>
              ：
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>{t.affectionBenefits.benefit2_item1}</li>
                <li>{t.affectionBenefits.benefit2_item2}</li>
              </ul>
            </li>
            <li>
              <strong className="text-pink-300">
                {t.affectionBenefits.benefit3_title}
              </strong>
              ：
              <ul className="list-disc ml-6 mt-2">
                <li>{t.affectionBenefits.benefit3_item1}</li>
              </ul>
            </li>
          </ol>

          <p className="text-yellow-300 font-semibold mt-6 p-4 bg-yellow-900/20 rounded-lg">
            <strong>{t.affectionBenefits.note.split("：")[0]}：</strong>
            {t.affectionBenefits.note.split("：")[1]}
          </p>

          <Hr />

          <div id="improve-affection"></div>
          <H2>{t.improveAffection.title}</H2>
          <p className="mb-6 text-lg font-medium">{t.improveAffection.intro1}</p>
          <p className="mb-4">{t.improveAffection.intro2}</p>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-3 text-pink-300">
                {t.improveAffection.method1_title}
              </h3>
              <ul className="list-disc ml-6 space-y-2 text-slate-300">
                <li>
                  <strong>
                    {t.improveAffection.method1_item1.split("：")[0]}：
                  </strong>
                  {t.improveAffection.method1_item1.split("：")[1]}
                </li>
                <li>
                  <strong>
                    {t.improveAffection.method1_item2.split("：")[0]}：
                  </strong>
                  {t.improveAffection.method1_item2.split("：")[1]}
                </li>
                <li>
                  <strong>
                    {t.improveAffection.method1_item3.split("：")[0]}：
                  </strong>
                  {t.improveAffection.method1_item3.split("：")[1]}
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-pink-300">
                {t.improveAffection.method2_title}
              </h3>
              <ul className="list-disc ml-6 space-y-2 text-slate-300">
                <li>{t.improveAffection.method2_item1}</li>
                <li>{t.improveAffection.method2_item2}</li>
                <li>{t.improveAffection.method2_item3}</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-pink-300">
                {t.improveAffection.method3_title}
              </h3>
              <ul className="list-disc ml-6 space-y-2 text-slate-300">
                <li>
                  {t.improveAffection.method3_item1}
                  <ul className="list-disc ml-6 mt-2 space-y-1">
                    <li>{t.improveAffection.method3_item2}</li>
                    <li>{t.improveAffection.method3_item3}</li>
                    <li>{t.improveAffection.method3_item4}</li>
                    <li>{t.improveAffection.method3_item5}</li>
                  </ul>
                </li>
              </ul>
              <p className="text-yellow-300 font-semibold mt-6 p-4 bg-yellow-900/20 rounded-lg">
                <strong>
                  {t.improveAffection.method3_note.split("：")[0]}：
                </strong>
                {t.improveAffection.method3_note.split("：")[1]}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-pink-300">
                {t.improveAffection.method4_title}
              </h3>
              <ul className="list-disc ml-6 space-y-2 text-slate-300">
                <li>{t.improveAffection.method4_item1}</li>
                <li>{t.improveAffection.method4_item2}</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-pink-300">
                {t.improveAffection.method5_title}
              </h3>
              <ul className="list-disc ml-6 space-y-2 text-slate-300">
                <li>{t.improveAffection.method5_item1}</li>
                <li>{t.improveAffection.method5_item2}</li>
              </ul>
            </div>
          </div>

          <Hr />

          <div id="conversation-templates"></div>
          <H2>{t.conversationTemplates.title}</H2>
          <p className="mb-6">{t.conversationTemplates.intro}</p>

          <div className="space-y-8">
            <div className="p-5 rounded-2xl border border-pink-300">
              <h3 className="text-xl font-bold mb-4 text-pink-300">
                {t.conversationTemplates.template1_title}
              </h3>
              <ul className="space-y-3 text-slate-300">
                <li>
                  <strong>
                    {t.conversationTemplates.template1_purpose.split("：")[0]}：
                  </strong>
                  {t.conversationTemplates.template1_purpose.split("：")[1]}
                </li>
                <li>
                  <strong className="text-pink-200">
                    {t.conversationTemplates.template1_example_title}
                  </strong>
                  <ul className="list-disc ml-6 mt-2 space-y-1">
                    <li>{t.conversationTemplates.template1_example1}</li>
                    <li>{t.conversationTemplates.template1_example2}</li>
                    <li>{t.conversationTemplates.template1_example3}</li>
                  </ul>
                </li>
                <li>
                  <strong>
                    {t.conversationTemplates.template1_tip.split("：")[0]}：
                  </strong>
                  {t.conversationTemplates.template1_tip.split("：")[1]}
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl border border-pink-300">
              <h3 className="text-xl font-bold mb-4 text-pink-300">
                {t.conversationTemplates.template2_title}
              </h3>
              <ul className="space-y-3 text-slate-300">
                <li>
                  <strong>
                    {t.conversationTemplates.template2_purpose.split("：")[0]}：
                  </strong>
                  {t.conversationTemplates.template2_purpose.split("：")[1]}
                </li>
                <li>
                  <strong className="text-pink-200">
                    {t.conversationTemplates.template2_example_title}
                  </strong>
                  <ul className="list-disc ml-6 mt-2 space-y-1">
                    <li>{t.conversationTemplates.template2_example1}</li>
                    <li>{t.conversationTemplates.template2_example2}</li>
                    <li>{t.conversationTemplates.template2_example3}</li>
                  </ul>
                </li>
                <li>
                  <strong>
                    {t.conversationTemplates.template2_tip.split("：")[0]}：
                  </strong>
                  {t.conversationTemplates.template2_tip.split("：")[1]}
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl border border-pink-300">
              <h3 className="text-xl font-bold mb-4 text-pink-300">
                {t.conversationTemplates.template3_title}
              </h3>
              <ul className="space-y-3 text-slate-300">
                <li>
                  <strong>
                    {t.conversationTemplates.template3_purpose.split("：")[0]}：
                  </strong>
                  {t.conversationTemplates.template3_purpose.split("：")[1]}
                </li>
                <li>
                  <strong className="text-pink-200">
                    {t.conversationTemplates.template3_example_title}
                  </strong>
                  <ul className="list-disc ml-6 mt-2 space-y-1">
                    <li>{t.conversationTemplates.template3_example1}</li>
                    <li>{t.conversationTemplates.template3_example2}</li>
                    <li>{t.conversationTemplates.template3_example3}</li>
                  </ul>
                </li>
                <li>
                  <strong>
                    {t.conversationTemplates.template3_tip.split("：")[0]}：
                  </strong>
                  {t.conversationTemplates.template3_tip.split("：")[1]}
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl border border-pink-300">
              <h3 className="text-xl font-bold mb-4 text-pink-300">
                {t.conversationTemplates.template4_title}
              </h3>
              <ul className="space-y-3 text-slate-300">
                <li>
                  <strong>
                    {t.conversationTemplates.template4_purpose.split("：")[0]}：
                  </strong>
                  {t.conversationTemplates.template4_purpose.split("：")[1]}
                </li>
                <li>
                  <strong className="text-pink-200">
                    {t.conversationTemplates.template4_example_title}
                  </strong>
                  <ul className="list-disc ml-6 mt-2 space-y-1">
                    <li>{t.conversationTemplates.template4_example1}</li>
                    <li>{t.conversationTemplates.template4_example2}</li>
                    <li>{t.conversationTemplates.template4_example3}</li>
                  </ul>
                </li>
                <li>
                  <strong>
                    {t.conversationTemplates.template4_tip.split("：")[0]}：
                  </strong>
                  {t.conversationTemplates.template4_tip.split("：")[1]}
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl border border-pink-300">
              <h3 className="text-xl font-bold mb-4 text-pink-300">
                {t.conversationTemplates.template5_title}
              </h3>
              <ul className="space-y-3 text-slate-300">
                <li>
                  <strong>
                    {t.conversationTemplates.template5_purpose.split("：")[0]}：
                  </strong>
                  {t.conversationTemplates.template5_purpose.split("：")[1]}
                </li>
                <li>
                  <strong className="text-pink-200">
                    {t.conversationTemplates.template5_example_title}
                  </strong>
                  <ul className="list-disc ml-6 mt-2 space-y-1">
                    <li>{t.conversationTemplates.template5_example1}</li>
                    <li>{t.conversationTemplates.template5_example2}</li>
                    <li>{t.conversationTemplates.template5_example3}</li>
                  </ul>
                </li>
                <li>
                  <strong>
                    {t.conversationTemplates.template5_tip.split("：")[0]}：
                  </strong>
                  {t.conversationTemplates.template5_tip.split("：")[1]}
                </li>
              </ul>
            </div>
          </div>

          <Hr />

          <div id="sharing-techniques"></div>
          <H2>{t.sharingTechniques.title}</H2>
          <p className="mb-6">{t.sharingTechniques.intro}</p>

          <ol className="list-decimal ml-6 space-y-6">
            <li>
              <strong>{t.sharingTechniques.technique1_title}</strong>：
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>
                  {t.sharingTechniques.technique1_item1}
                  <ul className="list-disc ml-6 mt-2 space-y-1">
                    <li>{t.sharingTechniques.technique1_example1}</li>
                    <li>{t.sharingTechniques.technique1_example2}</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <strong>{t.sharingTechniques.technique2_title}</strong>：
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>
                  {t.sharingTechniques.technique2_item1}
                  <ul className="list-disc ml-6 mt-2 space-y-1">
                    <li>{t.sharingTechniques.technique2_example1}</li>
                    <li>{t.sharingTechniques.technique2_example2}</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <strong>{t.sharingTechniques.technique3_title}</strong>：
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>
                  {t.sharingTechniques.technique3_item1}
                  <ul className="list-disc ml-6 mt-2 space-y-1">
                    <li>{t.sharingTechniques.technique3_example1}</li>
                    <li>{t.sharingTechniques.technique3_example2}</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <strong>{t.sharingTechniques.technique4_title}</strong>：
              <ul className="list-disc ml-6 mt-2">
                <li>{t.sharingTechniques.technique4_item1}</li>
              </ul>
            </li>
          </ol>

          <Hr />

          <div id="seven-day-plan"></div>
          <H2>{t.sevenDayPlan.title}</H2>
          <p className="mb-8 text-lg">{t.sevenDayPlan.intro}</p>

          <div className="space-y-8">
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-600">
              <h3 className="text-xl font-bold mb-4 text-yellow-300">
                {t.sevenDayPlan.day1_title}
              </h3>
              <ul className="space-y-3">
                <li>
                  <strong>
                    {t.sevenDayPlan.day1_goal.split("：")[0]}：
                  </strong>
                  {t.sevenDayPlan.day1_goal.split("：")[1]}
                </li>
                <li>
                  <strong className="text-pink-200">
                    {t.sevenDayPlan.day1_task_title}
                  </strong>
                  <ul className="list-disc ml-6 mt-2 space-y-1">
                    <li>{t.sevenDayPlan.day1_task1}</li>
                    <li>{t.sevenDayPlan.day1_task2}</li>
                    <li>{t.sevenDayPlan.day1_task3}</li>
                  </ul>
                </li>
                <li>
                  <strong className="text-pink-200">
                    {t.sevenDayPlan.day1_example_title}
                  </strong>
                  <ul className="list-disc ml-6 mt-2 space-y-1">
                    <li>{t.sevenDayPlan.day1_example1}</li>
                    <li>{t.sevenDayPlan.day1_example2}</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-600">
              <h3 className="text-xl font-bold mb-4 text-yellow-300">
                {t.sevenDayPlan.day2_title}
              </h3>
              <ul className="space-y-3">
                <li>
                  <strong>
                    {t.sevenDayPlan.day2_goal.split("：")[0]}：
                  </strong>
                  {t.sevenDayPlan.day2_goal.split("：")[1]}
                </li>
                <li>
                  <strong className="text-pink-200">
                    {t.sevenDayPlan.day2_task_title}
                  </strong>
                  <ul className="list-disc ml-6 mt-2 space-y-1">
                    <li>{t.sevenDayPlan.day2_task1}</li>
                    <li>{t.sevenDayPlan.day2_task2}</li>
                    <li>{t.sevenDayPlan.day2_task3}</li>
                  </ul>
                </li>
                <li>
                  <strong className="text-pink-200">
                    {t.sevenDayPlan.day2_example_title}
                  </strong>
                  <ul className="list-disc ml-6 mt-2 space-y-1">
                    <li>{t.sevenDayPlan.day2_example1}</li>
                    <li>{t.sevenDayPlan.day2_example2}</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-600">
              <h3 className="text-xl font-bold mb-4 text-yellow-300">
                {t.sevenDayPlan.day3_title}
              </h3>
              <ul className="space-y-3">
                <li>
                  <strong>
                    {t.sevenDayPlan.day3_goal.split("：")[0]}：
                  </strong>
                  {t.sevenDayPlan.day3_goal.split("：")[1]}
                </li>
                <li>
                  <strong className="text-pink-200">
                    {t.sevenDayPlan.day3_task_title}
                  </strong>
                  <ul className="list-disc ml-6 mt-2 space-y-1">
                    <li>{t.sevenDayPlan.day3_task1}</li>
                    <li>{t.sevenDayPlan.day3_task2}</li>
                  </ul>
                </li>
                <li>
                  <strong className="text-pink-200">
                    {t.sevenDayPlan.day3_example_title}
                  </strong>
                  <ul className="list-disc ml-6 mt-2 space-y-1">
                    <li>{t.sevenDayPlan.day3_example1}</li>
                    <li>{t.sevenDayPlan.day3_example2}</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-600">
              <h3 className="text-xl font-bold mb-4 text-yellow-300">
                {t.sevenDayPlan.day4_title}
              </h3>
              <ul className="space-y-3">
                <li>
                  <strong>
                    {t.sevenDayPlan.day4_goal.split("：")[0]}：
                  </strong>
                  {t.sevenDayPlan.day4_goal.split("：")[1]}
                </li>
                <li>
                  <strong className="text-pink-200">
                    {t.sevenDayPlan.day4_task_title}
                  </strong>
                  <ul className="list-disc ml-6 mt-2 space-y-1">
                    <li>{t.sevenDayPlan.day4_task1}</li>
                    <li>{t.sevenDayPlan.day4_task2}</li>
                    <li>{t.sevenDayPlan.day4_task3}</li>
                  </ul>
                </li>
                <li>
                  <strong className="text-pink-200">
                    {t.sevenDayPlan.day4_example_title}
                  </strong>
                  <ul className="list-disc ml-6 mt-2 space-y-1">
                    <li>{t.sevenDayPlan.day4_example1}</li>
                    <li>{t.sevenDayPlan.day4_example2}</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-600">
              <h3 className="text-xl font-bold mb-4 text-yellow-300">
                {t.sevenDayPlan.day5_title}
              </h3>
              <ul className="space-y-3">
                <li>
                  <strong>
                    {t.sevenDayPlan.day5_goal.split("：")[0]}：
                  </strong>
                  {t.sevenDayPlan.day5_goal.split("：")[1]}
                </li>
                <li>
                  <strong className="text-pink-200">
                    {t.sevenDayPlan.day5_task_title}
                  </strong>
                  <ul className="list-disc ml-6 mt-2 space-y-1">
                    <li>{t.sevenDayPlan.day5_task1}</li>
                    <li>{t.sevenDayPlan.day5_task2}</li>
                  </ul>
                </li>
                <li>
                  <strong className="text-pink-200">
                    {t.sevenDayPlan.day5_example_title}
                  </strong>
                  <ul className="list-disc ml-6 mt-2 space-y-1">
                    <li>{t.sevenDayPlan.day5_example1}</li>
                    <li>{t.sevenDayPlan.day5_example2}</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-600">
              <h3 className="text-xl font-bold mb-4 text-yellow-300">
                {t.sevenDayPlan.day6_title}
              </h3>
              <ul className="space-y-3">
                <li>
                  <strong>
                    {t.sevenDayPlan.day6_goal.split("：")[0]}：
                  </strong>
                  {t.sevenDayPlan.day6_goal.split("：")[1]}
                </li>
                <li>
                  <strong className="text-pink-200">
                    {t.sevenDayPlan.day6_task_title}
                  </strong>
                  <ul className="list-disc ml-6 mt-2 space-y-1">
                    <li>{t.sevenDayPlan.day6_task1}</li>
                    <li>{t.sevenDayPlan.day6_task2}</li>
                    <li>{t.sevenDayPlan.day6_task3}</li>
                  </ul>
                </li>
                <li>
                  <strong className="text-pink-200">
                    {t.sevenDayPlan.day6_example_title}
                  </strong>
                  <ul className="list-disc ml-6 mt-2 space-y-1">
                    <li>{t.sevenDayPlan.day6_example1}</li>
                    <li>{t.sevenDayPlan.day6_example2}</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-600">
              <h3 className="text-xl font-bold mb-4 text-yellow-300">
                {t.sevenDayPlan.day7_title}
              </h3>
              <ul className="space-y-3">
                <li>
                  <strong>
                    {t.sevenDayPlan.day7_goal.split("：")[0]}：
                  </strong>
                  {t.sevenDayPlan.day7_goal.split("：")[1]}
                </li>
                <li>
                  <strong className="text-pink-200">
                    {t.sevenDayPlan.day7_task_title}
                  </strong>
                  <ul className="list-disc ml-6 mt-2 space-y-1">
                    <li>{t.sevenDayPlan.day7_task1}</li>
                    <li>{t.sevenDayPlan.day7_task2}</li>
                    <li>{t.sevenDayPlan.day7_task3}</li>
                  </ul>
                </li>
                <li>
                  <strong className="text-pink-200">
                    {t.sevenDayPlan.day7_example_title}
                  </strong>
                  <ul className="list-disc ml-6 mt-2 space-y-1">
                    <li>{t.sevenDayPlan.day7_example1}</li>
                    <li>{t.sevenDayPlan.day7_example2}</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <Hr />

          <div id="precautions"></div>
          <H2>{t.precautions.title}</H2>

          <ol className="list-decimal ml-6 space-y-6">
            <li>
              <strong>{t.precautions.item1_title}</strong>：
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>{t.precautions.item1_text1}</li>
                <li>{t.precautions.item1_text2}</li>
              </ul>
            </li>
            <li>
              <strong>{t.precautions.item2_title}</strong>：
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>{t.precautions.item2_text1}</li>
                <li>{t.precautions.item2_text2}</li>
              </ul>
            </li>
          </ol>

          <Hr />

          <div id="conclusion"></div>
          <H2>{t.conclusion.title}</H2>
          <p className="text-lg leading-relaxed">{t.conclusion.text}</p>
        </article>
      </ContentBlock>
    </>
  );
}
