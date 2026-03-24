import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/page-intro";
import { Section } from "@/components/ui/section";
import { CredentialsSection } from "@/components/sections/credentials-section";
import { CTA } from "@/components/ui/cta";

export const metadata: Metadata = {
  title: "Обо мне",
  description: "Профессиональная позиция, образование, этика и подход к психотерапевтической работе."
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        title="Обо мне"
        intro="Я ценю спокойный, уважительный и содержательный формат работы. В центре терапии — ваш опыт, ваш ритм и возможность постепенно возвращать внутреннюю устойчивость."
      />
      <Section>
        <CredentialsSection />
        <div className="mt-8 flex flex-wrap gap-3">
          <CTA type="primary" />
          <CTA type="secondary" />
        </div>
      </Section>
    </>
  );
}
