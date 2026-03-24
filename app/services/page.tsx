import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/page-intro";
import { Section } from "@/components/ui/section";
import { services } from "@/data/services";
import { ServiceCard } from "@/components/cards/service-card";

export const metadata: Metadata = {
  title: "Услуги",
  description: "Индивидуальная консультация, психотерапия и групповая терапия: формат, длительность, ожидания и стоимость."
};

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        title="Услуги"
        intro="Здесь можно выбрать формат работы: от первичной консультации до регулярной психотерапии и группового процесса."
      />
      <Section>
        <div className="grid gap-5 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Section>
    </>
  );
}
