import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { areas } from "@/content/pages";

export const metadata: Metadata = {
  title: "С чем работаю",
  description: "Темы и запросы, с которыми чаще всего обращаются в терапию."
};

export default function AreasPage() {
  return (
    <>
      <PageHero
        title="Сферы, с которыми я работаю"
        intro="Вы можете прийти как с четко сформулированным запросом, так и с общим ощущением, что нужна поддержка."
      />
      <Section>
        <ul className="grid gap-4 sm:grid-cols-2">
          {areas.map((topic) => (
            <li key={topic} className="rounded-xl border border-stone/80 bg-white p-5 text-ink/80 shadow-card">
              {topic}
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
