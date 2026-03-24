import Link from "next/link";
import { navigation, siteConfig } from "@/content/site";
import { Container } from "@/components/ui/container";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-stone/60 bg-pearl/95 backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="text-sm font-medium tracking-wide text-ink sm:text-base">
          {siteConfig.name}
        </Link>
        <nav aria-label="Основная навигация" className="hidden items-center gap-6 md:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-ink/80 transition hover:text-ink">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contacts"
          className="rounded-full border border-stone px-4 py-2 text-xs font-medium text-ink transition hover:bg-sand sm:text-sm"
        >
          Связаться
        </Link>
      </Container>
      <nav aria-label="Мобильная навигация" className="border-t border-stone/60 md:hidden">
        <Container className="flex gap-4 overflow-x-auto py-3 text-sm">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="whitespace-nowrap text-ink/80">
              {item.label}
            </Link>
          ))}
        </Container>
      </nav>
    </header>
  );
}
