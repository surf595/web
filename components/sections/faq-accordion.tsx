import { FaqItem } from "@/lib/types";

type FAQAccordionProps = {
  items: FaqItem[];
  limit?: number;
};

export function FAQAccordion({ items, limit }: FAQAccordionProps) {
  const list = typeof limit === "number" ? items.slice(0, limit) : items;

  return (
    <div className="space-y-4">
      {list.map((item) => (
        <details key={item.question} className="rounded-xl border border-stone/80 bg-white p-5 shadow-card">
          <summary className="cursor-pointer list-none text-lg">{item.question}</summary>
          <p className="mt-3 text-ink/75">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
