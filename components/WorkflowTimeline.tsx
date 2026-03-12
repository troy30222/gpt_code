type WorkflowTimelineProps = {
  steps: string[];
};

export function WorkflowTimeline({ steps }: WorkflowTimelineProps) {
  return (
    <ol className="space-y-4">
      {steps.map((step, idx) => (
        <li key={step} className="glass flex items-start gap-4 rounded-xl p-4">
          <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cyan/15 text-sm font-semibold text-cyan">
            {idx + 1}
          </span>
          <p className="text-sm text-slate-200">{step}</p>
        </li>
      ))}
    </ol>
  );
}
