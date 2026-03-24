import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { Section } from "@/components/ui/section";
import { homeData } from "@/data/home";
import { areas } from "@/data/areas";
import { services } from "@/data/services";
import { faqItems } from "@/data/faq";
import { TrustSignals } from "@/components/sections/trust-signals";
import { ServiceCard } from "@/components/cards/service-card";
import { TopicCard } from "@/components/cards/topic-card";
import { FAQAccordion } from "@/components/sections/faq-accordion";
import { CTA } from "@/components/ui/cta";

export const metadata: Metadata = {
  title: "Главная",
  description: "Психологическая и психотерапевтическая помощь: индивидуально, для пар и в группе. Очно в Москве и онлайн."
};

export default function HomePage() {
  return (
    <>
      <Hero title={homeData.hero.title} description={homeData.hero.description} />

      <Section title={homeData.intro.title} description={homeData.intro.text}>
        <TrustSignals items={homeData.trustSignals} />
      </Section>

      <Section title="С чем я работаю" description="Краткий обзор тем, с которыми чаще всего приходят в терапию.">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {areas.slice(0, 6).map((topic) => (
            <TopicCard key={topic} title={topic} />
          ))}
        </ul>
      </Section>

      <Section title="Форматы помощи" description="Вы можете выбрать подходящий уровень глубины и регулярности работы.">
        <div className="grid gap-5 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Section>

      <Section title={homeData.faqPreviewTitle}>
        <FAQAccordion items={faqItems} limit={4} />
      </Section>

      <Section className="pt-0" title="Если вы чувствуете, что откликается" description="Можно начать с короткого сообщения — без обязательств и давления.">
        <div className="flex flex-wrap gap-3">
          <CTA type="primary" />
          <CTA type="secondary" />
        </div>
      </Section>
    </>
  );
}
