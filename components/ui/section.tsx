import { ReactNode } from "react";
import { Container } from "@/components/ui/container";

type SectionProps = {
  id?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, title, description, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`py-14 sm:py-20 ${className}`}>
      <Container>
        {(title || description) && (
          <header className="mb-8 max-w-3xl">
            {title ? <h2 className="text-3xl sm:text-4xl">{title}</h2> : null}
            {description ? <p className="mt-4 text-base text-ink/75 sm:text-lg">{description}</p> : null}
          </header>
        )}
        {children}
      </Container>
    </section>
  );
}
