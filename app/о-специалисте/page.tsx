import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/page-intro";
import { Section } from "@/components/ui/section";
import { CredentialsSection } from "@/components/sections/credentials-section";
import { credentials } from "@/data/credentials";
import { CTA } from "@/components/ui/cta";

export const metadata: Metadata = {
  title: "О специалисте",
  description:
    "Психолог и психотерапевт в Таллине: профессиональная позиция, подход к терапии, образование, дополнительная подготовка."
};

export default function AboutSpecialistPage() {
  return (
    <>
      <PageIntro title="О специалисте" intro={credentials.intro} />
      <Section title="Как я понимаю терапевтическую работу" description={credentials.usefulFor}>
        <CredentialsSection />
      </Section>
      <Section title="Для кого это может быть полезно" description="Для взрослых, которым важно не только временное облегчение, но и более глубокое понимание себя и своих отношений.">
        <div />
      </Section>
      <Section className="pt-0">
        <div className="flex flex-wrap gap-3">
          <CTA type="primary" />
          <CTA type="secondary" />
        </div>
      </Section>
    </>
  );
}
