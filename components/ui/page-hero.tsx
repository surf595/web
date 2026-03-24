import { Container } from "@/components/ui/container";

type PageHeroProps = {
  title: string;
  intro: string;
};

export function PageHero({ title, intro }: PageHeroProps) {
  return (
    <section className="border-b border-stone/60 bg-sand/40 py-16 sm:py-20">
      <Container>
        <h1 className="max-w-4xl text-4xl text-ink sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-3xl text-lg text-ink/80">{intro}</p>
      </Container>
    </section>
  );
}
