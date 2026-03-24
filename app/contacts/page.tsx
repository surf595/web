import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Контакты",
  description: "Связаться для первичного знакомства и записи на консультацию."
};

export default function ContactsPage() {
  return (
    <>
      <PageHero
        title="Контакты"
        intro="Вы можете написать в удобном формате — я отвечу и предложу подходящее время для первой встречи."
      />
      <Section>
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <aside className="rounded-2xl border border-stone/80 bg-white p-6 shadow-card">
            <h2 className="text-2xl">Связаться напрямую</h2>
            <ul className="mt-4 space-y-3 text-ink/75">
              <li>
                <span className="block text-xs uppercase tracking-wider text-moss">Телефон</span>
                <a href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`}>{siteConfig.phone}</a>
              </li>
              <li>
                <span className="block text-xs uppercase tracking-wider text-moss">Email</span>
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </li>
              <li>
                <span className="block text-xs uppercase tracking-wider text-moss">Локация</span>
                {siteConfig.address}
              </li>
            </ul>
          </aside>
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
