type TrustSignalsProps = {
  items: string[];
};

export function TrustSignals({ items }: TrustSignalsProps) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4" aria-label="Профессиональные ориентиры и доверительные сигналы">
      {items.map((item) => (
        <li key={item} className="rounded-xl border border-stone/80 bg-white px-4 py-4 text-sm text-ink/80 shadow-card">
          {item}
        </li>
      ))}
    </ul>
  );
}
