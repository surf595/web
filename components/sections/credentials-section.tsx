import { credentials } from "@/data/credentials";

export function CredentialsSection() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <article className="rounded-2xl border border-stone/80 bg-white p-6 shadow-card lg:col-span-3">
        <h3 className="text-xl">Профессиональная позиция</h3>
        <p className="mt-3 text-ink/75">{credentials.identity}</p>
      </article>

      <article className="rounded-2xl border border-stone/80 bg-white p-6 shadow-card">
        <h3 className="text-xl">Образование и подготовка</h3>
        <ul className="mt-3 space-y-2 text-ink/75">
          {credentials.education.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </article>

      <article className="rounded-2xl border border-stone/80 bg-white p-6 shadow-card">
        <h3 className="text-xl">Этическая рамка</h3>
        <ul className="mt-3 space-y-2 text-ink/75">
          {credentials.ethics.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </article>

      <article className="rounded-2xl border border-stone/80 bg-white p-6 shadow-card">
        <h3 className="text-xl">Профессиональное сообщество</h3>
        <ul className="mt-3 space-y-2 text-ink/75">
          {credentials.memberships.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </article>
    </div>
  );
}
