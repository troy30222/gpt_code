import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import { FeatureCard } from "@/components/FeatureCard";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { SectionShell } from "@/components/SectionShell";
import { UseCaseCard } from "@/components/UseCaseCard";
import { WorkflowTimeline } from "@/components/WorkflowTimeline";
import { architectureComponents, features, timeline, useCases } from "@/data/siteContent";

export default function HomePage() {
  return (
    <main>
      <Hero />

      <SectionShell
        id="what-is"
        title="What is OpenClaw?"
        subtitle="OpenClaw is an autonomous AI agent that runs locally, executes commands, integrates with chat apps, and connects to APIs and tools to complete real-world tasks."
      >
        <ArchitectureDiagram />
      </SectionShell>

      <SectionShell
        id="features"
        title="Key Features"
        subtitle="Built for teams that need dependable execution, not just conversational responses."
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </SectionShell>

      <SectionShell
        id="use-cases"
        title="Use Cases"
        subtitle="Practical scenarios where OpenClaw agents automate work across engineering, operations, and analytics."
      >
        <div className="grid gap-5 lg:grid-cols-2">
          {useCases.map((useCase) => (
            <UseCaseCard key={useCase.title} {...useCase} />
          ))}
        </div>
      </SectionShell>

      <SectionShell id="demo" title="Demo Workflow" subtitle="Prompt: \"Check website uptime and report errors.\"">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="glass rounded-2xl p-6">
            <h3 className="text-lg font-semibold">Agent Flow</h3>
            <div className="mt-5 rounded-xl border border-cyan/25 bg-cyan/5 p-4 text-sm text-cyan">
              User → AI Agent → Tools → Results
            </div>
            <p className="mt-4 text-sm text-slate-300">
              OpenClaw reasons through intent, selects monitoring tools, executes checks, and returns structured outcomes.
            </p>
          </div>
          <WorkflowTimeline steps={timeline} />
        </div>
      </SectionShell>

      <SectionShell
        id="code"
        title="Code Example"
        subtitle="Pseudo code showing agent reasoning and tool selection at runtime."
      >
        <div className="glass rounded-2xl p-6">
          <pre className="overflow-x-auto rounded-xl border border-white/15 bg-slate-950/60 p-4 text-sm text-slate-200">
{`openclaw.run({
  task: "monitor website",
  tools: ["http_check", "telegram_notify"],
  reasoning: "inspect uptime, collect errors, notify on threshold breach"
});`}
          </pre>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <p className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300">
              <span className="font-semibold text-white">Agent reasoning:</span> Understands intent, chooses the right checks, and adapts if a tool fails.
            </p>
            <p className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300">
              <span className="font-semibold text-white">Tool usage:</span> Safely orchestrates runtime tools and external APIs for deterministic execution.
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell
        id="architecture"
        title="Architecture"
        subtitle="Modular components that make OpenClaw secure, extensible, and production ready."
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {architectureComponents.map((component) => (
            <FeatureCard key={component.title} {...component} />
          ))}
        </div>
      </SectionShell>

      <SectionShell
        id="future"
        title="Future of AI Agents"
        subtitle='AI agents are replacing traditional apps by directly executing business workflows: autonomous coding, automated businesses, and always-on AI operations.'
      >
        <div className="grid gap-4 md:grid-cols-3">
          {[
            "Autonomous coding pipelines that move from ticket to merge with human oversight.",
            "Automated business workflows that handle support, reporting, and routine operations.",
            "AI operations centers that monitor systems 24/7 and respond to incidents in real time."
          ].map((item) => (
            <article key={item} className="glass rounded-2xl p-5 text-sm text-slate-300">
              {item}
            </article>
          ))}
        </div>
      </SectionShell>

      <Footer />
    </main>
  );
}
