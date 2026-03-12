export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 text-sm text-slate-300">
        <p>© {new Date().getFullYear()} OpenClaw Labs</p>
        <nav className="flex gap-5">
          <a href="#" className="hover:text-cyan">GitHub</a>
          <a href="#" className="hover:text-cyan">Documentation</a>
          <a href="#" className="hover:text-cyan">Community</a>
          <a href="#" className="hover:text-cyan">Credits</a>
        </nav>
      </div>
    </footer>
  );
}
