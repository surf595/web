import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/page-intro";
import { Section } from "@/components/ui/section";
import { areas, referralNotice } from "@/data/areas";
import { TopicCard } from "@/components/cards/topic-card";
import { CTA } from "@/components/ui/cta";

export const metadata: Metadata = {
  title: "С чем работаю",
  description: "Основные темы запросов: тревога, отношения, кризисы, границы, самооценка, эмоциональная устойчивость."
};

export default function AreasPage() {
  return (
    <>
      <PageIntro
        title="С чем я работаю"
        intro="Вы можете прийти и с четким запросом, и с ощущением, что «что-то не так». Формулировка запроса может уточняться уже в процессе."
      />
      <Section>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((topic) => (
            <TopicCard key={topic} title={topic} />
          ))}
        </ul>
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
