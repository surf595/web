import { credentials } from "@/data/credentials";

export function CredentialsSection() {
  return (
    <div className="space-y-6">
      <article className="rounded-2xl border border-stone/80 bg-white p-6 shadow-card">
        <h3 className="text-2xl">Профессиональная позиция</h3>
        <p className="mt-3 text-ink/75">{credentials.stance}</p>
      </article>

      <div className="grid gap-5 md:grid-cols-2">
        <article className="rounded-2xl border border-stone/80 bg-white p-6 shadow-card">
          <h3 className="text-xl">Образование</h3>
          <ul className="mt-3 space-y-2 text-ink/75">
            {credentials.education.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </article>

        <article className="rounded-2xl border border-stone/80 bg-white p-6 shadow-card">
          <h3 className="text-xl">Дополнительная подготовка</h3>
          <ul className="mt-3 space-y-2 text-ink/75">
            {credentials.additional.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </article>
      </div>

      <article className="rounded-2xl border border-stone/80 bg-white p-6 shadow-card">
        <h3 className="text-xl">Длительное обучение и профессиональная рамка</h3>
        <p className="mt-3 text-ink/75">{credentials.longTraining}</p>
        <p className="mt-3 text-ink/75">{credentials.development}</p>
      </article>
    </div>
  );
}
