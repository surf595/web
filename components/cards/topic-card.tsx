import { AreaItem } from "@/lib/types";

type TopicCardProps = {
  item: AreaItem;
};

export function TopicCard({ item }: TopicCardProps) {
  return (
    <article className="rounded-2xl border border-stone/80 bg-white p-5 shadow-card">
      <h3 className="text-xl">{item.title}</h3>
      <p className="mt-3 text-sm text-ink/75">
        <strong>Как переживается:</strong> {item.experience}
      </p>
      <p className="mt-2 text-sm text-ink/75">
        <strong>Как проявляется:</strong> {item.manifestations}
      </p>
      <p className="mt-2 text-sm text-ink/75">
        <strong>Как может помочь терапия:</strong> {item.therapyHelp}
      </p>
    </article>
  );
}
