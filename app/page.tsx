import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { Section } from "@/components/ui/section";
import { homeData } from "@/data/home";
import { areas } from "@/data/areas";
import { faqItems } from "@/data/faq";
import { TopicCard } from "@/components/cards/topic-card";
import { FAQAccordion } from "@/components/sections/faq-accordion";
import { CTA } from "@/components/ui/cta";
import { CredentialsSection } from "@/components/sections/credentials-section";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Психолог в Таллине — индивидуальная психотерапия",
  description:
    "Анна Левина, психолог и психотерапевт в Таллине. Работа с тревогой, отношениями, внутренними конфликтами. Очно и онлайн."
};

export default function HomePage() {
  return (
    <>
      <Hero title={homeData.hero.title} subtitle={homeData.hero.subtitle} chips={homeData.hero.chips} />

      <Section
        title="С какими запросами я работаю"
        description="Темы, с которыми чаще всего приходят в индивидуальную терапию."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {areas.map((item) => (
            <TopicCard key={item.title} item={item} />
          ))}
        </div>
      </Section>

      <Section title="Как может помочь терапия" description={homeData.helpText}>
        <div />
      </Section>

      <Section title="Как я работаю" description="Базовая рамка индивидуальной работы.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Формат: очно в Таллине и онлайн",
            `Длительность: ${siteConfig.sessionDuration}`,
            "Регулярность: обычно 1 раз в неделю",
            "Язык: русский"
          ].map((item) => (
            <article key={item} className="rounded-xl border border-stone/80 bg-white p-5 text-sm text-ink/80 shadow-card">
              {item}
            </article>
          ))}
        </div>
      </Section>

      <Section title="О специалисте" description={homeData.intro}>
        <CredentialsSection />
      </Section>

      <Section title="Что важно знать перед началом">
        <ul className="grid gap-3 sm:grid-cols-2">
          {homeData.beforeStart.map((item) => (
            <li key={item} className="rounded-xl border border-stone/80 bg-white p-5 text-sm text-ink/80 shadow-card">
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section title={homeData.faqPreviewTitle}>
        <FAQAccordion items={faqItems} limit={5} />
      </Section>

      <Section className="pt-0" title="Если хотите обсудить возможность работы">
        <div className="flex flex-wrap gap-3">
          <CTA type="primary" />
          <CTA type="secondary" />
        </div>
      </Section>
    </>
  );
}
