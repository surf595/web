import Link from "next/link";
import { ctas } from "@/data/ctas";
import { CTAType } from "@/lib/types";

type CTAProps = {
  type: CTAType;
  className?: string;
};

export function CTA({ type, className = "" }: CTAProps) {
  const data = ctas[type];
  const styles =
    type === "primary"
      ? "bg-ink text-pearl hover:bg-ink/90"
      : "border border-stone bg-transparent text-ink hover:bg-sand";

  return (
    <Link
      href={data.href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition sm:text-base ${styles} ${className}`}
    >
      {data.label}
    </Link>
  );
}
