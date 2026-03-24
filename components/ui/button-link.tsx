import Link from "next/link";

type ButtonLinkProps = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
};

export function ButtonLink({ href, label, variant = "primary" }: ButtonLinkProps) {
  const styles =
    variant === "primary"
      ? "bg-ink text-pearl hover:bg-ink/90"
      : "border border-stone bg-transparent text-ink hover:bg-sand";

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition sm:text-base ${styles}`}
    >
      {label}
    </Link>
  );
}
