import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/page-intro";
import { Section } from "@/components/ui/section";
import { WorkFormatSection } from "@/components/sections/work-format-section";
import { CTA } from "@/components/ui/cta";

export const metadata: Metadata = {
  title: "Как я работаю",
  description:
    "Как проходит первая встреча, как формируется запрос, зачем регулярность и чего можно ожидать от психотерапевтического процесса."
};

export default function WorkPage() {
  return (
    <>
      <PageIntro
        title="Как я работаю"
        intro="Эта страница нужна, чтобы заранее понять рамку процесса: что происходит на старте, как строится работа и почему изменения требуют времени."
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
