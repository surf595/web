import Link from "next/link";
import { navigation } from "@/data/navigation";

export function MobileMenu() {
  return (
    <details className="md:hidden">
      <summary className="cursor-pointer list-none rounded-full border border-stone px-4 py-2 text-sm">Меню</summary>
      <nav aria-label="Мобильная навигация" className="mt-3 rounded-2xl border border-stone/70 bg-pearl p-3">
        <ul className="space-y-1">
          {navigation.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="block rounded-lg px-3 py-2 text-sm text-ink/85 hover:bg-sand/80">
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/политика-конфиденциальности" className="block rounded-lg px-3 py-2 text-sm text-ink/85 hover:bg-sand/80">
              Политика конфиденциальности
            </Link>
          </li>
          <li>
            <Link href="/политика-персональных-данных" className="block rounded-lg px-3 py-2 text-sm text-ink/85 hover:bg-sand/80">
              Политика обработки данных
            </Link>
          </li>
        </ul>
      </nav>
    </details>
  );
}
