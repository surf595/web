export function ContactForm() {
  return (
    <form className="grid gap-4 rounded-2xl border border-stone/80 bg-white p-6 shadow-card" aria-label="Форма обратной связи">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm text-ink/85">
          Имя
        </label>
        <input
          id="name"
          name="name"
          type="text"
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
          type="text"
          className="w-full rounded-lg border border-stone bg-pearl px-3 py-2 text-sm"
          placeholder="Чтобы я могла с вами связаться"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm text-ink/85">
          Коротко о запросе
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="w-full rounded-lg border border-stone bg-pearl px-3 py-2 text-sm"
          placeholder="Например: тревога, сложности в отношениях, выгорание"
        />
      </div>
      <button type="submit" className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-pearl transition hover:bg-ink/90">
        Записаться
      </button>
      <p className="text-xs text-ink/60">Нажимая кнопку, вы соглашаетесь на обработку персональных данных.</p>
    </form>
  );
}
