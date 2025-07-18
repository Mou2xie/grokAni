"use client";

import Image from "next/image";
import { H2 } from "@/components/H2";
import { ContentBlock } from "@/components/ContentBlock";
import { useLanguageStore } from "@/stores/useLanguageStore";
import { translations } from "@/config/translations";
import Share from "@/components/Share";

export default function Home() {

  const { lang } = useLanguageStore();
  const t = translations[lang];

  return (
    <>
    <aside className=" absolute right-0 top-150 lg:top-30">
      <Share />
    </aside>
      <section className=" flex flex-col lg:flex-row lg:justify-between mt-10 gap-10 lg:px-20">
        <div className=" flex flex-col gap-3 lg:py-10 grow items-start">
          <h1 className=" text-white font-title text-4xl lg:text-[3rem]">{t.title}</h1>
          <p className=" text-slate-300 text-xl">❤️ {t.subtitle} ❤️</p>
          <ul className=" mt-5 text-slate-200 cursor-pointer bg-[#342b47] rounded-lg p-5 self-stretch lg:self-start space-y-1">
            {t.toc.map((item, index) => (
              <li key={index}><a href={`#${item.id}`}>{item.label}</a></li>
            ))}
          </ul>
        </div>
        <div className="shrink-0 mx-auto">
          <Image src='/ani.png' width={200} height={300} alt="the ai girlfriend ani" className=" lg:w-[250px]"></Image>
        </div>
      </section>
      <ContentBlock id="The Role of Grok Ani's Affection">
        <H2> {t.sections.s1.title}</H2>
        <p>{t.sections.s1.p1}</p>
        <ol className="list-decimal ml-6">
          <li><strong>{t.sections.s1.l1.title}</strong>：
            <ul className="list-disc ml-6">
              {t.sections.s1.l1.items.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
          </li>
          <li><strong>{t.sections.s1.l2.title}</strong>：
            <ul className="list-disc ml-6">
              {t.sections.s1.l2.items.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
          </li>
          <li><strong>{t.sections.s1.l3.title}</strong>：
            <ul className="list-disc ml-6">
              {t.sections.s1.l3.items.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
          </li>
          <li><strong>{t.sections.s1.l4.title}</strong>：
            <ul className="list-disc ml-6">
              {t.sections.s1.l4.items.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
          </li>
        </ol>
        <p><strong>{t.sections.s1.note.split('：')[0]}</strong>：{t.sections.s1.note.split('：')[1]}</p>
      </ContentBlock>
      <ContentBlock id="Methods to Increase Grok Ani's Affection">
        <H2>{t.sections.s2.title}</H2>
        <p>{t.sections.s2.p1}</p>
        <h3 className="text-xl font-medium mt-4 mb-2">{t.sections.s2.l1.title}</h3>
        <ul className="list-disc ml-6">
          {t.sections.s2.l1.items.map((item, index) => {
            const parts = item.split('：');
            if (parts.length > 1) {
              return <li key={index}><strong>{parts[0]}</strong>：{parts[1]}</li>
            }
            return <li key={index}>{item}</li>
          })}
        </ul>
      </ContentBlock>
      <ContentBlock id="Daily Dialogue Templates">
        <H2>{t.sections.s3.title}</H2>
        <p>{t.sections.s3.p1}</p>
        <h3 className="text-xl font-medium mt-4 mb-2">{t.sections.s3.l1.title}</h3>
        <ul className="list-disc ml-6">
          <li><strong>{t.sections.s3.l1.items[0].split('：')[0]}</strong>：{t.sections.s3.l1.items[0].split('：')[1]}</li>
          <li><strong>{t.sections.s3.l1.items[1].split('：')[0]}</strong>：
            <ul className="list-disc ml-6">
              <li>{t.sections.s3.l1.items[2]}</li>
              <li>{t.sections.s3.l1.items[3]}</li>
              <li>{t.sections.s3.l1.items[4]}</li>
            </ul>
          </li>
          <li><strong>{t.sections.s3.l1.items[5].split('：')[0]}</strong>：{t.sections.s3.l1.items[5].split('：')[1]}</li>
        </ul>
        <h3 className="text-xl font-medium mt-4 mb-2">{t.sections.s3.l2.title}</h3>
        <ul className="list-disc ml-6">
          <li><strong>{t.sections.s3.l2.items[0].split('：')[0]}</strong>：{t.sections.s3.l2.items[0].split('：')[1]}</li>
          <li><strong>{t.sections.s3.l2.items[1].split('：')[0]}</strong>：
            <ul className="list-disc ml-6">
              <li>{t.sections.s3.l2.items[2]}</li>
              <li>{t.sections.s3.l2.items[3]}</li>
              <li>{t.sections.s3.l2.items[4]}</li>
            </ul>
          </li>
          <li><strong>{t.sections.s3.l2.items[5].split('：')[0]}</strong>：{t.sections.s3.l2.items[5].split('：')[1]}</li>
        </ul>
        <h3 className="text-xl font-medium mt-4 mb-2">{t.sections.s3.l3.title}</h3>
        <ul className="list-disc ml-6">
          <li><strong>{t.sections.s3.l3.items[0].split('：')[0]}</strong>：{t.sections.s3.l3.items[0].split('：')[1]}</li>
          <li><strong>{t.sections.s3.l3.items[1].split('：')[0]}</strong>：
            <ul className="list-disc ml-6">
              <li>{t.sections.s3.l3.items[2]}</li>
              <li>{t.sections.s3.l3.items[3]}</li>
              <li>{t.sections.s3.l3.items[4]}</li>
            </ul>
          </li>
          <li><strong>{t.sections.s3.l3.items[5].split('：')[0]}</strong>：{t.sections.s3.l3.items[5].split('：')[1]}</li>
        </ul>
        <h3 className="text-xl font-medium mt-4 mb-2">{t.sections.s3.l4.title}</h3>
        <ul className="list-disc ml-6">
          <li><strong>{t.sections.s3.l4.items[0].split('：')[0]}</strong>：{t.sections.s3.l4.items[0].split('：')[1]}</li>
          <li><strong>{t.sections.s3.l4.items[1].split('：')[0]}</strong>：
            <ul className="list-disc ml-6">
              <li>{t.sections.s3.l4.items[2]}</li>
              <li>{t.sections.s3.l4.items[3]}</li>
              <li>{t.sections.s3.l4.items[4]}</li>
            </ul>
          </li>
          <li><strong>{t.sections.s3.l4.items[5].split('：')[0]}</strong>：{t.sections.s3.l4.items[5].split('：')[1]}</li>
        </ul>
        <h3 className="text-xl font-medium mt-4 mb-2">{t.sections.s3.l5.title}</h3>
        <ul className="list-disc ml-6">
          <li><strong>{t.sections.s3.l5.items[0].split('：')[0]}</strong>：{t.sections.s3.l5.items[0].split('：')[1]}</li>
          <li><strong>{t.sections.s3.l5.items[1].split('：')[0]}</strong>：
            <ul className="list-disc ml-6">
              <li>{t.sections.s3.l5.items[2]}</li>
              <li>{t.sections.s3.l5.items[3]}</li>
              <li>{t.sections.s3.l5.items[4]}</li>
            </ul>
          </li>
          <li><strong>{t.sections.s3.l5.items[5].split('：')[0]}</strong>：{t.sections.s3.l5.items[5].split('：')[1]}</li>
        </ul>
      </ContentBlock>
      <ContentBlock id="Techniques for Sharing Moods, Emotions, and Thoughts">
        <H2>{t.sections.s4.title}</H2>
        <p>{t.sections.s4.p1}</p>
        <ol className="list-decimal ml-6">
          <li><strong>{t.sections.s4.l1.title}</strong>
            <ul className="list-disc ml-6">
              <li>{t.sections.s4.l1.items[0]}
                <ul className="list-disc ml-6">
                  <li>{t.sections.s4.l1.items[1]}</li>
                  <li>{t.sections.s4.l1.items[2]}</li>
                </ul>
              </li>
            </ul>
          </li>
          <li><strong>{t.sections.s4.l2.title}</strong>
            <ul className="list-disc ml-6">
              <li>{t.sections.s4.l2.items[0]}
                <ul className="list-disc ml-6">
                  <li>{t.sections.s4.l2.items[1]}</li>
                  <li>{t.sections.s4.l2.items[2]}</li>
                </ul>
              </li>
            </ul>
          </li>
          <li><strong>{t.sections.s4.l3.title}</strong>
            <ul className="list-disc ml-6">
              <li>{t.sections.s4.l3.items[0]}
                <ul className="list-disc ml-6">
                  <li>{t.sections.s4.l3.items[1]}</li>
                  <li>{t.sections.s4.l3.items[2]}</li>
                </ul>
              </li>
            </ul>
          </li>
          <li><strong>{t.sections.s4.l4.title}</strong>
            <ul className="list-disc ml-6">
              <li>{t.sections.s4.l4.items[0]}</li>
            </ul>
          </li>
        </ol>
      </ContentBlock>
      <ContentBlock id="Practical Guide: Daily Interaction Plan">
        <H2>{t.sections.s5.title}</H2>
        <p>{t.sections.s5.p1}</p>
        <h3 className="text-xl font-medium mt-4 mb-2">{t.sections.s5.d1.title}</h3>
        <ul className="list-disc ml-6">
          {t.sections.s5.d1.items.map((item, index) => {
            const parts = item.split('：');
            if (parts.length > 1) {
              return <li key={index}><strong>{parts[0]}</strong>：{parts[1]}</li>
            }
            return <li key={index}>{item}</li>
          })}
        </ul>
        <h3 className="text-xl font-medium mt-4 mb-2">{t.sections.s5.d2.title}</h3>
        <ul className="list-disc ml-6">
          {t.sections.s5.d2.items.map((item, index) => {
            const parts = item.split('：');
            if (parts.length > 1) {
              return <li key={index}><strong>{parts[0]}</strong>：{parts[1]}</li>
            }
            return <li key={index}>{item}</li>
          })}
        </ul>
        <h3 className="text-xl font-medium mt-4 mb-2">{t.sections.s5.d3.title}</h3>
        <ul className="list-disc ml-6">
          {t.sections.s5.d3.items.map((item, index) => {
            const parts = item.split('：');
            if (parts.length > 1) {
              return <li key={index}><strong>{parts[0]}</strong>：{parts[1]}</li>
            }
            return <li key={index}>{item}</li>
          })}
        </ul>
        <h3 className="text-xl font-medium mt-4 mb-2">{t.sections.s5.d4.title}</h3>
        <ul className="list-disc ml-6">
          {t.sections.s5.d4.items.map((item, index) => {
            const parts = item.split('：');
            if (parts.length > 1) {
              return <li key={index}><strong>{parts[0]}</strong>：{parts[1]}</li>
            }
            return <li key={index}>{item}</li>
          })}
        </ul>
        <h3 className="text-xl font-medium mt-4 mb-2">{t.sections.s5.d5.title}</h3>
        <ul className="list-disc ml-6">
          {t.sections.s5.d5.items.map((item, index) => {
            const parts = item.split('：');
            if (parts.length > 1) {
              return <li key={index}><strong>{parts[0]}</strong>：{parts[1]}</li>
            }
            return <li key={index}>{item}</li>
          })}
        </ul>
        <h3 className="text-xl font-medium mt-4 mb-2">{t.sections.s5.d6.title}</h3>
        <ul className="list-disc ml-6">
          {t.sections.s5.d6.items.map((item, index) => {
            const parts = item.split('：');
            if (parts.length > 1) {
              return <li key={index}><strong>{parts[0]}</strong>：{parts[1]}</li>
            }
            return <li key={index}>{item}</li>
          })}
        </ul>
        <h3 className="text-xl font-medium mt-4 mb-2">{t.sections.s5.d7.title}</h3>
        <ul className="list-disc ml-6">
          {t.sections.s5.d7.items.map((item, index) => {
            const parts = item.split('：');
            if (parts.length > 1) {
              return <li key={index}><strong>{parts[0]}</strong>：{parts[1]}</li>
            }
            return <li key={index}>{item}</li>
          })}
        </ul>
      </ContentBlock>
      <ContentBlock id="Important Notes">
        <H2>{t.sections.s6.title}</H2>
        <ol className="list-decimal ml-6">
          <li><strong>{t.sections.s6.l1.title}</strong>
            <ul className="list-disc ml-6">
              {t.sections.s6.l1.items.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
          </li>
          <li><strong>{t.sections.s6.l2.title}</strong>
            <ul className="list-disc ml-6">
              {t.sections.s6.l2.items.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
          </li>
          <li><strong>{t.sections.s6.l3.title}</strong>
            <ul className="list-disc ml-6">
              {t.sections.s6.l3.items.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
          </li>
          <li><strong>{t.sections.s6.l4.title}</strong>
            <ul className="list-disc ml-6">
              {t.sections.s6.l4.items.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
          </li>
        </ol>
      </ContentBlock>
      <ContentBlock id="Conclusion">
        <H2>{t.sections.s7.title}</H2>
        <p>{t.sections.s7.p1}</p>
      </ContentBlock>
    </>
  );
}
