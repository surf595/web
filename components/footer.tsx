import Link from "next/link";
import { navigation } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-stone/70 bg-sand/30 py-12">
      <Container className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        <section>
          <h2 className="text-xl">{siteConfig.name}</h2>
          <p className="mt-3 text-sm text-ink/70">{siteConfig.description}</p>
          <p className="mt-4 text-sm text-ink/70">© {new Date().getFullYear()} · Частная практика</p>
        </section>

        <section>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-ink/80">Разделы</h3>
          <ul className="mt-3 space-y-2">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-ink/75 hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-ink/80">Контакты</h3>
          <address className="mt-3 not-italic text-sm text-ink/75">
            <p>{siteConfig.city}</p>
            <p>{siteConfig.office}</p>
            <p className="mt-2">
              <a href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`}>{siteConfig.phone}</a>
            </p>
            <p>
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </p>
          </address>
        </section>
      </Container>
    </footer>
  );
}
