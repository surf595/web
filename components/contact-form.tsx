import { CTA } from "@/components/ui/cta";

export function ContactForm() {
  return (
    <form className="grid gap-4 rounded-2xl border border-stone/80 bg-white p-6 shadow-card" aria-label="Форма первичного контакта">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm text-ink/85">
          Имя
        </label>
        <input
          id="name"
          name="name"
          autoComplete="name"
          type="text"
          required
          className="w-full rounded-lg border border-stone bg-pearl px-3 py-2 text-sm"
          placeholder="Как к вам обращаться"
        />
      </div>
      <div>
        <label htmlFor="contact" className="mb-2 block text-sm text-ink/85">
          Email или телефон
        </label>
        <input
          id="contact"
          name="contact"
          autoComplete="email"
          type="text"
          required
          className="w-full rounded-lg border border-stone bg-pearl px-3 py-2 text-sm"
          placeholder="Как удобно ответить"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm text-ink/85">
          Короткое сообщение
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full rounded-lg border border-stone bg-pearl px-3 py-2 text-sm"
          placeholder="Пару строк о том, с чем хотите обратиться"
        />
      </div>
      <CTA type="primary" className="w-fit" />
      <p className="text-xs text-ink/60">Форма не предназначена для передачи чувствительной медицинской информации.</p>
    </form>
  );
}
