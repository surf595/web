import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/page-intro";
import { Section } from "@/components/ui/section";
import { formatPricing } from "@/data/format-pricing";
import { CTA } from "@/components/ui/cta";

export const metadata: Metadata = {
  title: "Формат и стоимость",
  description: "Индивидуальная встреча 50 минут: очно в Таллине и онлайн. Стоимость, оплата, перенос и организационная рамка."
};

export default function FormatPricingPage() {
  return (
    <>
      <PageIntro
        title="Формат и стоимость"
        intro="Организационная ясность — важная часть терапевтической работы. Ниже собраны основные параметры встреч."
      />
      <Section>
        <dl className="grid gap-4 sm:grid-cols-2">
          {[
            ["Формат", formatPricing.session],
            ["Длительность", formatPricing.duration],
            ["Очно/онлайн", formatPricing.mode],
            ["Стоимость", formatPricing.price],
            ["Оплата", formatPricing.payment],
            ["Отмена / перенос", formatPricing.cancellation],
            ["Город", formatPricing.city],
            ["Язык", formatPricing.language]
          ].map(([term, value]) => (
            <div key={term} className="rounded-xl border border-stone/80 bg-white p-5 shadow-card">
              <dt className="text-xs uppercase tracking-wider text-moss">{term}</dt>
              <dd className="mt-2 text-ink/85">{value}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-6 rounded-xl border border-stone/80 bg-white p-5 text-ink/75 shadow-card">{formatPricing.note}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <CTA type="primary" />
          <CTA type="secondary" />
        </div>
      </Section>
    </>
  );
}
