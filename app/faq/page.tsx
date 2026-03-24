import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/page-intro";
import { Section } from "@/components/ui/section";
import { faqItems } from "@/data/faq";
import { FAQAccordion } from "@/components/sections/faq-accordion";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Ответы на частые вопросы о формате встреч, длительности, онлайн-работе, переносах и первой записи."
};

export default function FAQPage() {
  return (
    <>
      <PageIntro title="FAQ" intro="Короткие ответы на вопросы, которые часто возникают перед началом терапии." />
      <Section>
        <FAQAccordion items={faqItems} />
      </Section>
    </>
  );
}
