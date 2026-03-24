import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/page-intro";
import { Section } from "@/components/ui/section";
import { faqItems } from "@/data/faq";
import { FAQAccordion } from "@/components/sections/faq-accordion";
import { CTA } from "@/components/ui/cta";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Ответы на частые вопросы о начале работы, регулярности встреч, онлайн-формате и организационной рамке."
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer
    }
  }))
};

export default function FAQPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <PageIntro title="FAQ" intro="Короткие ответы на вопросы, которые часто возникают перед первым обращением." />
      <Section>
        <FAQAccordion items={faqItems} />
        <div className="mt-8 flex flex-wrap gap-3">
          <CTA type="primary" />
          <CTA type="secondary" />
        </div>
      </Section>
    </>
  );
}
