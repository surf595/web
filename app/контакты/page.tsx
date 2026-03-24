import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/page-intro";
import { Section } from "@/components/ui/section";
import { siteConfig } from "@/data/site";
import { contacts } from "@/data/contacts";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Контакты / запись",
  description: "Запись к психологу в Таллине: форма, email, телефон, мессенджер, адрес кабинета и порядок первичного контакта."
};

export default function ContactsPage() {
  return (
    <>
      <PageIntro
        title="Контакты / запись"
        intro="Можно написать короткое сообщение через форму, email или мессенджер. Я отвечу в рабочее время и предложу варианты первой встречи."
      />
      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <aside className="rounded-2xl border border-stone/80 bg-white p-6 shadow-card">
            <h2 className="text-2xl">Контактные данные</h2>
            <ul className="mt-4 space-y-3 text-ink/75">
              <li><strong>Телефон:</strong> <a href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`}>{siteConfig.phone}</a></li>
              <li><strong>Email:</strong> <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></li>
              <li><strong>Мессенджер:</strong> <a href={siteConfig.messenger}>Telegram (placeholder)</a></li>
              <li><strong>Адрес кабинета:</strong> {contacts.city}, {contacts.office}</li>
              <li><strong>Онлайн:</strong> {contacts.online}</li>
              <li><strong>Часы работы:</strong> {contacts.hours}</li>
            </ul>
            <p className="mt-5 text-sm text-ink/70">{contacts.firstContact}</p>
            <div className="mt-6 overflow-hidden rounded-xl border border-stone/80">
              <iframe
                title="Карта кабинета в Таллине"
                src="https://www.openstreetmap.org/export/embed.html?bbox=24.72%2C59.42%2C24.78%2C59.45&layer=mapnik"
                className="h-56 w-full"
                loading="lazy"
              />
            </div>
          </aside>
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
