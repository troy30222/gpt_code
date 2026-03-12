export function ArchitectureDiagram() {
  const blocks = ["Chat / API Input", "OpenClaw Agent", "Tool Runtime", "Memory Store", "Results & Actions"];

  return (
    <div className="glass rounded-2xl p-5 md:p-8">
      <div className="grid gap-4 md:grid-cols-5">
        {blocks.map((block, idx) => (
          <div key={block} className="relative rounded-xl border border-white/10 bg-slate-950/40 p-4 text-center text-sm">
            {block}
            {idx < blocks.length - 1 ? (
              <span className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 text-cyan">→</span>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
