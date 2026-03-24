import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { ButtonLink } from "@/components/ui/button-link";
import { Section } from "@/components/ui/section";
import { services } from "@/content/pages";

export const metadata: Metadata = {
  title: "Услуги",
  description: "Индивидуальная, парная и групповая психотерапия в очном и онлайн-формате."
};

export default function ServicesPage() {
  return (
    <>
      <PageHero title="Форматы работы" intro="Выбираем подходящий формат в зависимости от запроса, графика и уровня поддержки, который вам нужен." />
      <Section>
        <div className="grid gap-5 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="flex h-full flex-col rounded-2xl border border-stone/80 bg-white p-6 shadow-card">
              <h2 className="text-2xl">{service.title}</h2>
              <p className="mt-2 text-sm text-moss">{service.duration} · {service.format}</p>
              <p className="mt-4 flex-1 text-ink/75">{service.description}</p>
              <div className="mt-6">
                <ButtonLink href="/contacts" label="Обсудить формат работы" variant="secondary" />
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
