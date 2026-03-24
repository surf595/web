import { ServiceItem } from "@/lib/types";
import { CTA } from "@/components/ui/cta";

type ServiceCardProps = {
  service: ServiceItem;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-stone/80 bg-white p-6 shadow-card">
      <h3 className="text-2xl">{service.title}</h3>
      <p className="mt-2 text-sm text-moss">{service.audience}</p>
      <dl className="mt-5 space-y-2 text-sm text-ink/80">
        <div>
          <dt className="inline font-medium">Формат: </dt>
          <dd className="inline">{service.format}</dd>
        </div>
        <div>
          <dt className="inline font-medium">Длительность: </dt>
          <dd className="inline">{service.duration}</dd>
        </div>
        <div>
          <dt className="inline font-medium">Очно/онлайн: </dt>
          <dd className="inline">{service.mode}</dd>
        </div>
        <div>
          <dt className="inline font-medium">Стоимость: </dt>
          <dd className="inline">{service.price}</dd>
        </div>
      </dl>
      <p className="mt-4 flex-1 text-ink/75">{service.expectation}</p>
      <CTA type="secondary" className="mt-6 w-fit" />
    </article>
  );
}
