import { Bot, Braces, ChartColumnBig, Cpu, FileTerminal, MessageCircle, MonitorCog, SearchCode, ShieldCheck, UsersRound, Workflow, Wrench } from "lucide-react";

export const features = [
  {
    title: "Task Automation",
    description: "Turn natural language goals into actionable plans and automatically execute each step.",
    icon: Workflow
  },
  {
    title: "Local AI Execution",
    description: "Run secure agent workflows directly on your own machine with full control and privacy.",
    icon: Cpu
  },
  {
    title: "Messaging Integration",
    description: "Connect with chat platforms so teams can command agents from familiar channels.",
    icon: MessageCircle
  },
  {
    title: "File System Access",
    description: "Read, write, and organize project files to automate engineering and operations tasks.",
    icon: FileTerminal
  },
  {
    title: "API Automation",
    description: "Orchestrate external services through APIs to monitor systems and trigger workflows.",
    icon: Wrench
  },
  {
    title: "Multi-Agent Collaboration",
    description: "Coordinate specialist agents that collaborate on complex goals with shared memory.",
    icon: UsersRound
  }
];

export const useCases = [
  {
    title: "AI Developer Assistant",
    workflow: "Issue triage → Code generation → Test run → Pull request summary",
    description: "OpenClaw writes code, validates it, and prepares clean updates for rapid engineering cycles.",
    icon: Braces
  },
  {
    title: "Automated Research Agent",
    workflow: "Fetch sources → Extract signals → Compare trends → Deliver report",
    description: "Research pipelines that gather web and API intelligence and output concise strategic insight.",
    icon: SearchCode
  },
  {
    title: "Personal Productivity AI",
    workflow: "Capture requests → Prioritize tasks → Schedule reminders → Send daily digest",
    description: "A persistent assistant that coordinates calendars, to-do systems, and comms.",
    icon: Bot
  },
  {
    title: "Website Monitoring Bot",
    workflow: "Check endpoints → Detect failures → Alert channels → Auto-create incident ticket",
    description: "Production uptime visibility with immediate alerting and automated incident response.",
    icon: MonitorCog
  },
  {
    title: "Data Analysis Agent",
    workflow: "Ingest data → Analyze anomalies → Generate charts → Share recommendations",
    description: "Transform raw metrics into business-ready narratives and dashboards.",
    icon: ChartColumnBig
  }
];

export const timeline = [
  "Interpret user objective and validate monitoring scope.",
  "Run http_check tool across configured endpoints.",
  "Aggregate status codes, response times, and anomalies.",
  "Correlate errors with logs and recent deployments.",
  "Deliver final summary and trigger telegram_notify if needed."
];

export const architectureComponents = [
  {
    title: "LLM Model",
    description: "Understands intent, plans steps, and reasons over context.",
    icon: Bot
  },
  {
    title: "Agent Controller",
    description: "Coordinates execution loops, retries, and guardrails.",
    icon: ShieldCheck
  },
  {
    title: "Tool System",
    description: "Standardized interfaces for shell, APIs, browser, and messaging tools.",
    icon: Wrench
  },
  {
    title: "Memory",
    description: "Stores history, decisions, and structured state between tasks.",
    icon: FileTerminal
  },
  {
    title: "API Layer",
    description: "Exposes secure endpoints for applications, events, and integrations.",
    icon: Cpu
  }
];
