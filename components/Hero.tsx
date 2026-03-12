export function Hero() {
  return (
    <header className="relative overflow-hidden border-b border-white/10">
      <div className="tech-gradient animate-gradient absolute inset-0 opacity-90" />
      <div className="absolute inset-0 bg-tech-grid bg-[length:24px_24px] opacity-20" />
      <div className="relative mx-auto flex min-h-[75vh] max-w-6xl flex-col justify-center px-6 py-28">
        <span className="glass w-fit rounded-full px-4 py-2 text-xs uppercase tracking-[0.18em] text-cyan">
          Autonomous Agent Platform
        </span>
        <h1 className="mt-8 text-4xl font-bold tracking-tight text-white md:text-6xl">
          OpenClaw AI Agent
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-200 md:text-2xl">
          The AI that doesn&apos;t just answer — it executes.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a href="#use-cases" className="rounded-xl bg-white px-6 py-3 font-medium text-slate-900 transition hover:bg-slate-200">
            Explore Use Cases
          </a>
          <a href="#architecture" className="glass rounded-xl px-6 py-3 font-medium text-white transition hover:border-cyan/40 hover:bg-white/10">
            View Architecture
          </a>
        </div>
      </div>
    </header>
  );
}
