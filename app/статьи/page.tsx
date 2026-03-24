import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/ui/page-intro";
import { Section } from "@/components/ui/section";
import { articles } from "@/data/articles";

export const metadata: Metadata = {
  title: "Статьи",
  description: "Материалы о тревоге, отношениях, внутреннем конфликте и психотерапевтическом процессе."
};

export default function ArticlesPage() {
  return (
    <>
      <PageIntro
        title="Статьи"
        intro="Небольшой раздел с материалами о типичных переживаниях и о том, как их можно понимать в психотерапевтической работе."
      />
      <Section>
        <div className="grid gap-4">
          {articles.map((article) => (
            <article key={article.slug} className="rounded-2xl border border-stone/80 bg-white p-6 shadow-card">
              <h2 className="text-2xl">
                <Link href={`/статьи/${article.slug}`} className="hover:underline">
                  {article.title}
                </Link>
              </h2>
              <p className="mt-3 text-ink/75">{article.description}</p>
              <Link href={`/статьи/${article.slug}`} className="mt-4 inline-block text-sm text-moss underline underline-offset-4">
                Читать статью
              </Link>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
