import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { PageIntro } from "@/components/ui/page-intro";
import { articles } from "@/data/articles";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    return { title: "Статья" };
  }

  return {
    title: article.title,
    description: article.description
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <PageIntro title={article.title} intro={article.description} />
      <Section>
        <article className="space-y-8 rounded-2xl border border-stone/80 bg-white p-6 shadow-card">
          {article.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-2xl">{section.heading}</h2>
              <div className="mt-3 space-y-4 text-ink/80">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </article>
        <div className="mt-8">
          <Link href="/статьи" className="text-sm text-moss underline underline-offset-4">
            Вернуться к списку статей
          </Link>
        </div>
      </Section>
    </>
  );
}
