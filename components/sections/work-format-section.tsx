import { workFormat } from "@/data/work-format";

export function WorkFormatSection() {
  const cards = [
    { title: "Как проходит первая встреча", text: workFormat.firstSession },
    { title: "Как формируется запрос", text: workFormat.requestForming },
    { title: "Почему важна регулярность", text: workFormat.regularity },
    { title: "Почему изменения не всегда быстрые", text: workFormat.pace },
    { title: "Краткосрочная и длительная работа", text: workFormat.shortLong },
    { title: "Что можно ожидать от процесса", text: workFormat.expectations }
  ];

  return (
    <>
      <article className="rounded-2xl border border-stone/80 bg-white p-6 shadow-card">
        <h3 className="text-xl">Первичный контакт</h3>
        <p className="mt-3 text-ink/75">{workFormat.firstContact}</p>
      </article>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {cards.map((card) => (
          <article key={card.title} className="rounded-2xl border border-stone/80 bg-white p-5 shadow-card">
            <h3 className="text-xl">{card.title}</h3>
            <p className="mt-3 text-ink/75">{card.text}</p>
          </article>
        ))}
      </div>
    </>
  );
}
