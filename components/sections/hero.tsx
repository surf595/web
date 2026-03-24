import Image from "next/image";
import { CTA } from "@/components/ui/cta";
import { Container } from "@/components/ui/container";

type HeroProps = {
  title: string;
  description: string;
};

export function Hero({ title, description }: HeroProps) {
  return (
    <section className="border-b border-stone/70 bg-sand/40 py-16 sm:py-24">
      <Container className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.16em] text-moss">Частная психотерапевтическая практика</p>
          <h1 className="mt-4 max-w-4xl text-4xl sm:text-6xl">{title}</h1>
          <p className="mt-6 max-w-3xl text-lg text-ink/80">{description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CTA type="primary" />
            <CTA type="secondary" />
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl border border-stone/70 bg-white p-2 shadow-card">
          <Image
            src="/therapy-space.svg"
            alt="Светлый кабинет для психотерапии"
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
