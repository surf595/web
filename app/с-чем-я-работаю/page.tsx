import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/page-intro";
import { Section } from "@/components/ui/section";
import { areas, referralNotice } from "@/data/areas";
import { TopicCard } from "@/components/cards/topic-card";
import { CTA } from "@/components/ui/cta";

export const metadata: Metadata = {
  title: "С чем я работаю",
  description:
    "Тревога, отношения, повторяющиеся сценарии, кризисы, самооценка, внутренние конфликты. Психолог в Таллине и онлайн."
};

export default function AreasPage() {
  return (
    <>
      <PageIntro
        title="С чем я работаю"
        intro="На этой странице описаны типичные переживания, с которыми приходят в терапию. Это не медицинская классификация, а ориентир для понимания вашего опыта."
      />
      <Section>
        <div className="grid gap-4 sm:grid-cols-2">
          {areas.map((item) => (
            <TopicCard key={item.title} item={item} />
          ))}
        </div>
      </Section>
      <Section title={referralNotice.title}>
        <div className="rounded-2xl border border-stone/80 bg-white p-6 text-ink/75 shadow-card">{referralNotice.text}</div>
        <div className="mt-8 flex flex-wrap gap-3">
          <CTA type="primary" />
          <CTA type="secondary" />
        </div>
      </Section>
    </>
  );
}
