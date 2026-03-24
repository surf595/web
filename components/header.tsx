import Link from "next/link";
import { navigation } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/container";
import { CTA } from "@/components/ui/cta";
import { MobileMenu } from "@/components/navigation/mobile-menu";

export function Header() {
  const topNav = navigation.filter((item) => item.label !== "Статьи");

  return (
    <header className="sticky top-0 z-50 border-b border-stone/70 bg-pearl/95 backdrop-blur">
      <Container className="flex items-center justify-between gap-4 py-4">
        <Link href="/" className="min-w-0">
          <p className="truncate text-sm font-medium sm:text-base">{siteConfig.name}</p>
          <p className="truncate text-xs text-ink/65">{siteConfig.role}</p>
        </Link>

        <nav aria-label="Основная навигация" className="hidden items-center gap-5 xl:flex">
          {topNav.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-ink/80 transition hover:text-ink">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <CTA type="primary" className="px-5 py-2.5 text-sm" />
        </div>

        <MobileMenu />
      </Container>
    </header>
  );
}
