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
          <header className="mb-8 max-w-3xl sm:mb-10">
            {title && <h2 className="text-3xl text-ink sm:text-4xl">{title}</h2>}
            {description && <p className="mt-4 text-base text-ink/75 sm:text-lg">{description}</p>}
          </header>
        )}
        {children}
      </Container>
    </section>
  );
}
