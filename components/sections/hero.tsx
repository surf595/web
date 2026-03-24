import Image from "next/image";
import { CTA } from "@/components/ui/cta";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/data/site";

type HeroProps = {
  title: string;
  subtitle: string;
  chips: string[];
};

export function Hero({ title, subtitle, chips }: HeroProps) {
  return (
    <section className="border-b border-stone/70 bg-sand/40 py-16 sm:py-24">
      <Container className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.16em] text-moss">{siteConfig.name}</p>
          <h1 className="mt-4 max-w-4xl text-4xl sm:text-6xl">{title}</h1>
          <p className="mt-3 text-lg text-ink/80">{siteConfig.role}</p>
          <p className="mt-5 max-w-3xl text-lg text-ink/80">{subtitle}</p>
          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Ключевые параметры практики">
            {chips.map((chip) => (
              <li key={chip} className="rounded-full border border-stone/80 bg-white px-3 py-1 text-sm text-ink/75">
                {chip}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <CTA type="primary" />
            <CTA type="secondary" />
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl border border-stone/70 bg-white p-2 shadow-card">
          <Image
            src="/therapy-space.svg"
            alt="Кабинет для индивидуальной психотерапии в Таллине"
            width={800}
            height={1000}
            className="h-auto w-full rounded-xl"
            priority
          />
        </div>
      </Container>
    </section>
  );
}
