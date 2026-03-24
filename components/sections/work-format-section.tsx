import { workFormat } from "@/data/work-format";

export function WorkFormatSection() {
  return (
    <div className="space-y-6">
      <article className="rounded-2xl border border-stone/80 bg-white p-6 shadow-card">
        <h3 className="text-xl">Первичный контакт</h3>
        <p className="mt-3 text-ink/75">{workFormat.firstContact}</p>
      </article>

      <article className="rounded-2xl border border-stone/80 bg-white p-6 shadow-card">
        <h3 className="text-xl">Первая встреча</h3>
        <p className="mt-3 text-ink/75">{workFormat.firstSession}</p>
      </article>

      <article className="rounded-2xl border border-stone/80 bg-white p-6 shadow-card">
        <h3 className="text-xl">Что терапия может и чего не может</h3>
        <p className="mt-3 text-ink/75">
          <strong>Может:</strong> {workFormat.canAndCannot.can}
        </p>
        <p className="mt-3 text-ink/75">
          <strong>Не может:</strong> {workFormat.canAndCannot.cannot}
        </p>
      </article>

      <article className="rounded-2xl border border-stone/80 bg-white p-6 shadow-card">
        <h3 className="text-xl">Рамка работы</h3>
        <ul className="mt-3 space-y-2 text-ink/75">
          {workFormat.frame.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </article>
    </div>
  );
}
