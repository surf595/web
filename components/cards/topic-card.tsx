type TopicCardProps = {
  title: string;
};

export function TopicCard({ title }: TopicCardProps) {
  return <li className="rounded-xl border border-stone/80 bg-white p-5 text-ink/80 shadow-card">{title}</li>;
}
