import { LucideIcon } from "lucide-react";

type UseCaseCardProps = {
  title: string;
  workflow: string;
  description: string;
  icon: LucideIcon;
};

export function UseCaseCard({ title, workflow, description, icon: Icon }: UseCaseCardProps) {
  return (
    <article className="glass rounded-2xl p-6">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-lg font-semibold">{title}</h3>
        <Icon className="h-6 w-6 text-cyan" />
      </div>
      <p className="mt-4 text-xs uppercase tracking-[0.16em] text-violet-300">Workflow</p>
      <p className="mt-2 text-sm text-slate-100">{workflow}</p>
      <div className="my-5 h-px bg-white/15" />
      <div className="rounded-xl border border-cyan/20 bg-cyan/5 p-3 text-xs text-cyan">
        Input → OpenClaw Agent → Toolchain → Actionable Output
      </div>
      <p className="mt-4 text-sm text-slate-300">{description}</p>
    </article>
  );
}
