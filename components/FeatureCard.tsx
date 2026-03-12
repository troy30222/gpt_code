import { LucideIcon } from "lucide-react";

type FeatureCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export function FeatureCard({ title, description, icon: Icon }: FeatureCardProps) {
  return (
    <article className="glass rounded-2xl p-6 transition hover:-translate-y-1 hover:border-cyan/40">
      <Icon className="h-8 w-8 text-cyan" />
      <h3 className="mt-5 text-lg font-semibold">{title}</h3>
      <p className="mt-3 text-sm text-slate-300">{description}</p>
    </article>
  );
}
