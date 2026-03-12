import { ReactNode } from "react";

type SectionShellProps = {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export function SectionShell({ id, title, subtitle, children }: SectionShellProps) {
  return (
    <section id={id} className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
      <h2 className="section-title">{title}</h2>
      {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
      <div className="mt-10">{children}</div>
    </section>
  );
}
