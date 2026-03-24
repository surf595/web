import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/page-intro";
import { Section } from "@/components/ui/section";
import { WorkFormatSection } from "@/components/sections/work-format-section";
import { CTA } from "@/components/ui/cta";

export const metadata: Metadata = {
  title: "Как я работаю",
  description: "Структура первой встречи, рамка терапии, регулярность, формат и организационные договоренности."
};

export default function HowIWorkPage() {
  return (
    <>
      <PageIntro
        title="Как я работаю"
        intro="Эта страница помогает заранее понять, как строится процесс, какие есть границы и чего можно ожидать от первой встречи."
      />
      <Section>
        <WorkFormatSection />
        <div className="mt-8 flex flex-wrap gap-3">
          <CTA type="primary" />
          <CTA type="secondary" />
        </div>
      </Section>
    </>
  );
}
