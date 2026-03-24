export type CTAType = "primary" | "secondary";

export type NavItem = {
  href: string;
  label: string;
};

export type ServiceItem = {
  slug: string;
  title: string;
  audience: string;
  format: string;
  duration: string;
  mode: string;
  expectation: string;
  price: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};
