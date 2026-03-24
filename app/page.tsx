import { Metadata } from "next";
import { ButtonLink } from "@/components/ui/button-link";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { hero, homeHighlights, processSteps } from "@/content/home";

export const metadata: Metadata = {
  title: "Главная",
  description: "Частная практика психотерапии: индивидуально, для пар и в группе."
};

export default function HomePage() {
  return (
    <>
      <section className="border-b border-stone/60 bg-sand/40 py-20 sm:py-28">
        <Container>
          <p className="text-sm uppercase tracking-[0.14em] text-moss">{hero.eyebrow}</p>
          <h1 className="mt-4 max-w-4xl text-4xl sm:text-6xl">{hero.title}</h1>
          <p className="mt-6 max-w-3xl text-lg text-ink/80">{hero.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={hero.ctas[0].href} label={hero.ctas[0].label} />
            <ButtonLink href={hero.ctas[1].href} label={hero.ctas[1].label} variant="secondary" />
          </div>
        </Container>
      </section>

      <Section title="Подход" description="Терапия как совместная работа: с уважением к вашему ритму, опыту и внутренней сложности.">
        <div className="grid gap-4 md:grid-cols-3">
          {homeHighlights.map((item) => (
            <article key={item.title} className="rounded-2xl border border-stone/80 bg-white p-6 shadow-card">
              <h3 className="text-xl">{item.title}</h3>
              <p className="mt-3 text-ink/75">{item.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Как начинается работа">
        <ol className="space-y-4 rounded-2xl border border-stone/80 bg-white p-6 shadow-card">
          {processSteps.map((step, index) => (
            <li key={step} className="flex gap-3">
              <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-stone text-sm">
                {index + 1}
              </span>
              <span className="text-ink/80">{step}</span>
            </li>
          ))}
        </ol>
      </Section>
    </>
  );
}
