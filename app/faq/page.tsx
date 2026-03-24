import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { faqItems } from "@/content/pages";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Ответы на частые вопросы о психотерапии и формате работы."
};

export default function FaqPage() {
  return (
    <>
      <PageHero title="Частые вопросы" intro="Если вы не нашли нужный ответ, можно написать мне в контактах — спокойно обсудим ваш запрос." />
      <Section>
        <div className="space-y-4">
          {faqItems.map((item) => (
            <details key={item.question} className="group rounded-xl border border-stone/80 bg-white p-5 shadow-card">
              <summary className="cursor-pointer list-none text-lg marker:content-none">{item.question}</summary>
              <p className="mt-3 text-ink/75">{item.answer}</p>
            </details>
          ))}
        </div>
      </Section>
    </>
  );
}
