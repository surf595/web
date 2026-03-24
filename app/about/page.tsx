import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button-link";
import { aboutPage } from "@/content/pages";

export const metadata: Metadata = {
  title: "Обо мне",
  description: "Профессиональный путь, принципы работы и образование психотерапевта."
};

export default function AboutPage() {
  return (
    <>
      <PageHero title={aboutPage.title} intro={aboutPage.intro} />
      <Section title="Профессиональные ориентиры">
        <ul className="space-y-3">
          {aboutPage.credentials.map((item) => (
            <li key={item} className="rounded-xl border border-stone/70 bg-white p-5 text-ink/80 shadow-card">
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <ButtonLink href="/contacts" label="Связаться" />
        </div>
      </Section>
    </>
  );
}
