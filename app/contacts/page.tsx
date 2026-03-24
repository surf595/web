import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/page-intro";
import { Section } from "@/components/ui/section";
import { siteConfig } from "@/data/site";
import { contacts } from "@/data/contacts";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Контакты",
  description: "Контакты, форма первичного обращения, город приема, часы работы и следующий шаг для записи."
};

export default function ContactsPage() {
  return (
    <>
      <PageIntro
        title="Контакты"
        intro="Свяжитесь удобным способом: через форму, email или мессенджер. Я отвечу и предложу варианты первой встречи."
      />
      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="rounded-2xl border border-stone/80 bg-white p-6 shadow-card">
            <h2 className="text-2xl">Как связаться</h2>
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
                <span className="block text-xs uppercase tracking-wider text-moss">Город и кабинет</span>
                {contacts.city}, {contacts.office}
              </li>
              <li>
                <span className="block text-xs uppercase tracking-wider text-moss">Онлайн</span>
                {contacts.online}
              </li>
              <li>
                <span className="block text-xs uppercase tracking-wider text-moss">Часы работы</span>
                {contacts.hours}
              </li>
            </ul>
            <p className="mt-6 text-sm text-ink/70">{contacts.nextStep}</p>
          </aside>
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
