import Link from "next/link";
import { navigation, siteConfig } from "@/content/site";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-stone/70 bg-sand/30 py-10">
      <Container className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <h2 className="text-xl">{siteConfig.name}</h2>
          <p className="mt-3 text-sm text-ink/70">{siteConfig.description}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-ink/80">Навигация</h3>
          <ul className="mt-3 space-y-2">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-ink/75 hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-ink/80">Контакты</h3>
          <ul className="mt-3 space-y-2 text-sm text-ink/75">
            <li>{siteConfig.address}</li>
            <li>
              <a href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`}>{siteConfig.phone}</a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
