export const siteConfig = {
  name: "Частная практика психотерапии",
  description:
    "Бережная индивидуальная и групповая психотерапия для взрослых. Спокойное пространство, где можно услышать себя и найти устойчивые опоры.",
  url: "https://example-therapy.ru",
  phone: "+7 (999) 123-45-67",
  email: "hello@example-therapy.ru",
  address: "Москва, Тверской район · онлайн по всему миру",
  social: {
    telegram: "https://t.me/example",
    whatsapp: "https://wa.me/79991234567"
  }
};

export type NavigationItem = {
  href: string;
  label: string;
};

export const navigation: NavigationItem[] = [
  { href: "/", label: "Главная" },
  { href: "/about", label: "Обо мне" },
  { href: "/services", label: "Услуги" },
  { href: "/areas", label: "С чем работаю" },
  { href: "/faq", label: "FAQ" },
  { href: "/contacts", label: "Контакты" }
];
